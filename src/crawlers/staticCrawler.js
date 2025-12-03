import * as cheerio from "cheerio"; // 整体导入cheerio模块
import { limitedFetch } from "../utils/requestUtil.js";
import { staticTarget } from "../config/crawlerConfig.js";
import { saveToJson } from "../utils/storageUtil.js";
import { getCurrentTime } from "../utils/timeUtil.js";

/**
 * 爬取静态页面数据
 */
async function crawlStaticPage() {
  console.log("开始爬取静态页面：", staticTarget.url);

  // 发送请求获取HTML
  const html = await limitedFetch(staticTarget.url, staticTarget.headers);
  if (!html) return;
  // 解析HTML（cheerio）
  const $ = cheerio.load(html);
  const result = [];

  $(staticTarget.parseRule.contentSelector).each((index, element) => {
    console.log("element:", element);
    const $elem = $(element);
    result.push({
      sort: $elem.find(staticTarget.parseRule.sortSelector).text().trim(),
      title: $elem.find(staticTarget.parseRule.titleSelector).text().trim(),
      linkUrl: $elem.find(staticTarget.parseRule.linkSelector).attr("href"),
      hotText:
        $elem.find(staticTarget.parseRule.hotSelector).text().trim() || "",
    });
  });

  // 使用合法的文件名格式（将冒号替换为连字符）
  let fileName = `静态-${getCurrentTime("YYYYMMDDHHmmssSSS")}.json`;

  // 保存数据
  await saveToJson(result, fileName);
  return result;
}

export { crawlStaticPage }; // ES模块导出
