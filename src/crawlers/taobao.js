import { limitedFetchPost } from "../utils/requestUtil.js";
import { generateTaobaoCookies } from "../utils/cookieUtil.js";

/**
 * 发送淘宝注册短信验证码请求
 * @param {string} mobile - 手机号码
 * @returns {Promise<any>} 响应数据
 */
async function sendTaobaoSms(mobile) {
  try {
    const url =
      "https://reg.taobao.com/havanaone/registerLegacy/sendSms.do?bizEntrance=person_pc&bizName=taobao&contextToken=sm2_mwkeu4ydz1spqziwuvmhxjzoyzcfttpw&_bx-v=2.5.31";

    const data = {
      country: "CN",
      showAgreementByArea: "true",
      bizEntrance: "person_pc",
      bizName: "taobao",
      showOverseaAgreement: "false",
      regBizSource: "tbtop",
      isPc: "true",
      lang: "zh_CN",
      device: "PC",
      isSkipValidateCode: "true",
      useBaxia: "true",
      mobileArea: "CN",
      mobile: mobile,
      "bx-ua":
        "231!d+D3CAmUDIE+j7KBfA3C7/+jUApQOuRPHnaHWdf8Ka7sHzYgE1joboEbGsSjKyH/hcHXYIUxCVeXYEdkIl3q8trcL3bHbHg+dd64YzFh0CJl+WMxWpL8iqGguXzb71HaAogzugIT0m6zPaifkdLsRdMAQGINZfa+UYvQ+9gx8e6VhS7YEuUu8v156aXeKTRVsfuyrAzLPKBrB02HytAgc8igqFKArgm5+jD+Eu8e+Zd++6WF1csF18VmHJBh+++j+ygU3+jOvNBDbGVoF4k3HNMxDFuc/AlKQlw3xAaXterzEXggunSuQVCHV7wOfV3aRvPI4v86tP2rQQXWZAZQXwlFy2IMjReIACx8YKd75an9E/4wdVy5UOeobfMsK4cH91XNJIWt2kGjsfBJ8aWgdQd5E7nLGPY/TjqxCnAUGPRB2Mk9aWDvEyw+qR3essL54/z7KrXjkZSnoz6qaKZUmijxVFIm/EDN33cKjJQL0LNANqLL23mD07Zz8qlScVCuZ3eeOa1q5r7Pjjpsqq6ZpB0uA8mr+gt6pQEbM2ItUfllRfDFWh2jg6vBPxyd6uG0Oyl66VDhELEFQxpSa159dC5aqR125JFG1zl9XfQUUz3d8RBogN9ZMRVA0yjKxFs/Tq/Y4MApYiLYiha5IovPNl5U8bGOpbZjwnnhaMpJ8D60AxHkhNoa1uhmCwcBIjM+CxRpD2bYj7HhAcd0y7CYRPWiu0FUkH5qNQTeetN/L+3vtZ9UdJ0i2Ed5v026DB4GDj0ZOwLajzCyfU7cxyOT44OBJ5XT+GE9DdovjGxkUFFVd0RYrkKV17e2tYEL10WrNOBp9OnW+nd59IM2JZTSpELTVqrFqrFGisagmdO8SRtFrp65z55WfO4Szcx5a9FECDLvAGfyj4n3JaOZj1Rnd/UUpkFDcmvAfH+9CdcDHGhompkcJ2q+Fsl0SWJrihGIv9SYmE7RxmZfWBbxXLnHxrpnDFP8NVQ+SkyRHEjBtkesXm3tvWcr4MvXiSPc5vr4mK6BKzF56L9slEbBv0iI0jHnehgjIg0itWYoAupWuHwPdHIGbK7H17GO6s14SD3P6o3KEj+j8gyis64OBrkhkjI9G/RdBJ1CXXxGlPF8p9tBj5K/Z/tGUfcvnnvootG/xgo2ZtoTdi+wvL9Ef+nAxVeSNsELsrpTe5JmaQGxK/ZnofjoQB7Ekm3JswVpKwa+yqyNFI/RzPbbt+3FbIOc29Q50nGvLJc6E3/q/QugwVEaoGW3WplCTjyzhwue0vOfw5cJXxpubQivnMXgRG+KflRywI9QH3WH7aItEBsDPwrlMQrcQDoLYZxn7ytZqmyE5NUvEAQ47kZcCWEsN349Omq/BK2pWbdnhTytmGm6JNA2FOICASTlNk4K73t2WPDdgyuG2SRB77X27+9wu9PRSYFTk1LLvio0EfKjYZWdgKdPuvo/8R1VUHquc2mc5V6eT4fm3BIgBHi1SgUs8V79a13cG7f4s7Vr9r0ROKcvCMmGcp01ykgQ80XWY2MLxQUCE0kMpj8qMkiHD+wWgQG3JGCDSkJqK5iG2afSajoyXh09NH28SxZH1fDFf4xW2NCq1cD6UYKCOvz59AzKy34nDUwVQ4sTnnkwrN2SlI35U+uCS5RK0S6vLvwmSGazZrdcLh6aAQ55PvoAdvFIiibkdlmvOkbVxVCQF1ndUJBoVl7zuySBj/K6",
    };

    const headers = {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "bx-v": "2.5.31",
      "content-type": "application/x-www-form-urlencoded",
      dnt: "1",
      origin: "https://reg.taobao.com",
      priority: "u=1, i",
      referer:
        "https://reg.taobao.com/havanaone/register/register.htm?bizEntrance=person_pc&bizName=taobao&regBizSource=tbtop",
      "sec-ch-ua":
        '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    };

    // 添加Cookie信息
    const cookies = generateTaobaoCookies();
    headers["cookie"] = cookies;

    // 使用带超时的Promise确保不会无限期阻塞
    const result = await Promise.race([
      limitedFetchPost(url, data, headers),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("请求超时")), 15000)
      ),
    ]);

    console.log("淘宝短信发送成功！");
    return result;
  } catch (error) {
    console.error("淘宝短信发送失败:", error.message);
    // 返回默认值而不是抛出异常，避免影响主服务
    return { success: false, error: error.message };
  }
}

export { sendTaobaoSms };
