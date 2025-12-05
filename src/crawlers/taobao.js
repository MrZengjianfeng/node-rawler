import { limitedFetchPost } from "../utils/requestUtil.js";

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
    const cookies =
      "XSRF-TOKEN=d41f7d04-c649-4469-986d-09f270b4935b; cookie2=1df01dd33692badbafea23cbc347b713; t=5cfc7aafda3b9fafcd26a854ce8dd9f8; _tb_token_=f07383d98b78b; thw=cn; 3PcFlag=1764559855772; wk_cookie2=15aed05bc2b31885b32d9c6ad52956d0; wk_unb=UUjTSzAVnZKbvw%3D%3D; lid=%E9%A3%9E%E9%9B%AA%E7%89%87%E7%89%87%E5%87%9D%E7%91%9E; wk_cookie2=15aed05bc2b31885b32d9c6ad52956d0; wk_unb=UUjTSzAVnZKbvw%3D%3D; aui=2021950341; mtop_partitioned_detect=1; _m_h5_tk=0e908033bc5c753bb21da5e8dcc480cf_1764935772559; _m_h5_tk_enc=673b30385172880fdbfd5b6db1b21f7d; _samesite_flag_=true; sdkSilent=1764954133810; havana_sdkSilent=1764954133810; xlly_s=1; fastSlient=1764925336667; sgcookie=E100mtbsp8iSR%2FKsBR61t1QB7vLc4E8UFgJl16xAxqSs4%2F7%2Frg4raksKq1XIKT7d23%2Bgowv81WbyBy4q66y45xfzBwPNf7zuV26cBzHIOmh%2B6qlPHS2ZyuSDqzeW1mwhSKZq; x5sec=7b2274223a313736343932353531312c22733b32223a2231396632306662343733633133343036222c22617365727665723b33223a22307c434d504179736b47454e4c56772f5146476777794d4449784f5455774d7a51784f7a4577753632516f2f2f2f2f2f2f2f41513d3d227d; sca=cc7e6401; mt=ci=0_0; tracknick=; cna=7fmzIWZ5EV4CAXARVHca2F7T; regsid=bcc7f5a4fee0aeddd390dd14e83fa7ca2ce5da5a; regsc=3d827e7481cd052718dd788a1a7e5a1015fd415e0b1dcbdb0604362515117236; isg=BObmSD8ss0OODmf4CxGqI3ZeN1xoxyqBBTA2YdCPUInkU4dtOFfakdkgr09ffSKZ; _bl_uid=L1mO5i0Csjsn5LejFv05b7m1nwL8; arms_uid=fe2b0866-00db-441f-abfb-4308832b3fa2; tfstk=gmMj5EM3SZbbUIhLGR-PO0RH7M2_h3JUXGZtxcBVX-eY6OgLzO-03C2s5zgguSyxQR1t74-0uc-mP53E-mW47nVtPcgIumz47ONTPqBagAiGClntSn4wmQommR298ek6Lmm0zIvvUx1Yegnub1E9aSCfCzay8eJeLII8CETE05LWg8EgyoETXRK7woqLB1FtWzF8vk7YBR39VzE4vOUOBtpRwk48WRetW0K7bzEYBR3t23ZiB0T7qIaxcH45-6WW2UiaPOBtFuLgrmTfhkkYcSaKDYXOBhqbGynYPEOcrYF-j5MGjONZDX0gvqQv5PDS2xhKJU54kXZsYfgpbsqz1x27WxphAzHjfYNmaZCYA-ab9xFpCHiL6bM73xLGt0o7kWwraQY4_-gjtyVvZU0sVruth7QXzPlE4xFSJUWSS5Gt38HvypsyZ9zIPZf1VWX_Vy-WV1fG5JhB701Gy-FYqukeV3_fsSEuVy-WV1fgMuqza3t5l1f.";
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
