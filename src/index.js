import { crawlStaticPage } from "./crawlers/staticCrawler.js";
import { crawlDynamicPage } from "./crawlers/dynamicCrawler.js";
import { crawlApiData } from "./crawlers/apiCrawler.js";

// 主函数
async function main() {
  console.log("爬虫启动...");

  // 爬取静态页面
  await crawlStaticPage();

  // 爬取动态页面（可选）
  await crawlDynamicPage();

  // 爬取API数据
  await crawlApiData();

  console.log("爬虫结束！");
}

// 执行主函数
main().catch((error) => console.error("爬虫异常：", error));