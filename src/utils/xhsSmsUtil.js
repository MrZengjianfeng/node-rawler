import axios from "axios";

/**
 * 发送小红书获取短信验证码请求
 * @param {string} phoneNumber - 手机号码
 * @returns {Promise<any>} 响应数据
 */
async function fetchXhsSmsCode(phoneNumber) {
  const url = 'https://e.xiaohongshu.com/api/mkt/auth/get_sms_code';
  
  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json;charset=UTF-8',
    'dnt': '1',
    'origin': 'https://e.xiaohongshu.com',
    'priority': 'u=1, i',
    'referer': 'https://e.xiaohongshu.com/home',
    'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
    'x-b3-traceid': '3a4ae023e6a9afa2'
  };

  const data = {
    phoneNumber: phoneNumber
  };

  try {
    const response = await axios.post(url, data, {
      headers: headers,
      timeout: 10000
    });
    return response.data;
  } catch (error) {
    console.error(`小红书短信验证码请求失败：`, error.message);
    return null;
  }
}

export { fetchXhsSmsCode };