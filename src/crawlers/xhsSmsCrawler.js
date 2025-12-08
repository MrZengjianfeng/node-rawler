import { fetchXhsSmsCode } from "../utils/xhsSmsUtil.js";

/**
 * 小红书获取短信验证码爬虫
 * @param {string} phoneNumber - 手机号码
 */
async function crawlXhsSmsCode(phoneNumber) {
  console.log(`开始获取小红书短信验证码，手机号: ${phoneNumber}`);
  try {
    const result = await fetchXhsSmsCode(phoneNumber);
    if (result) {
      console.log('短信验证码请求成功:', result);
      return result;
    } else {
      console.error('短信验证码请求失败');
      return null;
    }
  } catch (error) {
    console.error('获取短信验证码时发生错误:', error.message);
    return null;
  }
}

export { crawlXhsSmsCode };