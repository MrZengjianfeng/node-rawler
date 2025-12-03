import axios from "axios";
import pLimit from "p-limit";
import { crawlConfig } from "../config/crawlerConfig.js";

// 限制并发请求
const limit = pLimit(crawlConfig.concurrency);

/**
 * 发送GET请求（封装axios）
 * @param {string} url - 请求地址
 * @param {object} headers - 请求头
 * @returns {Promise<any>} 响应数据
 */
async function fetchGet(url, headers = {}) {
  try {
    // 延迟请求（反反爬）
    await new Promise((resolve) => setTimeout(resolve, crawlConfig.delay));

    const response = await axios.get(url, {
      headers: { ...crawlConfig.defaultHeaders, ...headers },
      timeout: 10000, // 超时时间
    });
    return response.data;
  } catch (error) {
    console.error(`请求失败：${url}`, error.message);
    // 简单重试逻辑（可选）
    if (error.code === "ECONNRESET") {
      return fetchGet(url, headers);
    }
    return null;
  }
}

// 改用ES模块命名导出
export const limitedFetch = (url, headers) =>
  limit(() => fetchGet(url, headers));
