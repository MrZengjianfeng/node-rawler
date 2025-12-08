import { crawlStaticPage } from "./crawlers/staticCrawler.js";
import { crawlDynamicPage } from "./crawlers/dynamicCrawler.js";
import { crawlApiData } from "./crawlers/apiCrawler.js";
import { crawlXhsSmsCode } from "./crawlers/xhsSmsCrawler.js";

// 主函数
async function main() {
  console.log("爬虫启动...");

  // 爬取静态页面
  // await crawlStaticPage();

  // 爬取动态页面（可选）
  // await crawlDynamicPage();

  // 爬取API数据
  // await crawlApiData();

  // 调用小红书短信验证码函数
  await crawlXhsSmsCode("13479481634");

  console.log("爬虫结束！");
}

// 存储定时器引用
let timeoutId;

// 定时执行函数
function scheduleMain() {
  main()
    .catch((error) => console.error("爬虫异常：", error))
    .finally(() => {
      // 只有在没有计划退出的情况下才继续安排下一次执行
      if (!shuttingDown) {
        console.log("等待下次执行...");
        timeoutId = setTimeout(scheduleMain, 5 * 60 * 1000); // 5分钟后再次执行
      }
    });
}

// 控制是否应该关闭
let shuttingDown = false;

// 优雅关闭函数
function gracefulShutdown() {
  if (shuttingDown) return;

  shuttingDown = true;
  console.log("正在准备关闭定时爬虫...");
  // 清除定时器
  if (timeoutId) {
    clearTimeout(timeoutId);
    console.log("已取消下次执行计划");
  }
  console.log("定时爬虫已关闭");
  process.exit(0);
}

// 监听退出信号
process.on("SIGINT", gracefulShutdown); // Ctrl+C
process.on("SIGTERM", gracefulShutdown); // kill命令

// 检查是否以定时模式运行
if (process.argv.includes("--schedule")) {
  console.log("启动定时爬虫模式，每5分钟执行一次");
  console.log("按 Ctrl+C 可以停止服务");
  scheduleMain();
} else {
  // 执行主函数（单次执行模式）
  main().catch((error) => console.error("爬虫异常：", error));
}