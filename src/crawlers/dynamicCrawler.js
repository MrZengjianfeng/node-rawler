import puppeteer from "puppeteer";
import { dynamicTarget, staticTarget } from "../config/crawlerConfig.js";
import { saveToJson } from "../utils/storageUtil.js";
import { getTimestamp } from "../utils/timeUtil.js";

/**
 * 爬取动态渲染页面
 */
async function crawlDynamicPage() {
  console.log("开始爬取动态页面：", dynamicTarget.url);

  // 启动无头浏览器
  const browser = await puppeteer.launch({
    headless: "new", // 新版无头模式（更高效）
    args: ["--no-sandbox"], // 解决Linux环境权限问题
  });

  try {
    const page = await browser.newPage();
    // 设置请求头（模拟浏览器）
    await page.setExtraHTTPHeaders({
      "User-Agent": staticTarget.headers["User-Agent"],
    });

    // 访问页面并等待渲染
    await page.goto(dynamicTarget.url, { waitUntil: "networkidle2" });
    await page.waitForSelector(dynamicTarget.waitSelector, { timeout: 15000 });

    // 在浏览器环境中提取数据（类似前端DOM操作）
    const result = await page.evaluate(() => {
      const items = document.querySelectorAll(".quote");
      return Array.from(items).map((item) => ({
        text: item.querySelector(".text").textContent.trim(),
        author: item.querySelector(".author").textContent.trim(),
        tags: Array.from(item.querySelectorAll(".tag"))
          .map((tag) => tag.textContent.trim())
          .join(", "),
      }));
    });

    let fileName = `products-${getTimestamp()}.json`;
    // 保存数据
    await saveToJson(result, fileName);
    return result;
  } catch (error) {
    console.error("动态页面爬取失败：", error);
    return null;
  } finally {
    // 关闭浏览器
    await browser.close();
  }
}

export { crawlDynamicPage };
