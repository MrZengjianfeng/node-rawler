import axios from "axios";
import { saveToJson } from "../utils/storageUtil.js";
import {getCurrentTime, getTimestamp} from "../utils/timeUtil.js";

/**
 * 爬取API数据
 */
async function crawlApiData() {
    const baseUrl = "https://scm.dianplus.cn/rs/scm/developplan/get_dto_page.do";
    const params = {
        entId: 10010,
        currentPage: 1,
        showCount: 20,
        billStatuses: "1,2,3"
    };
    
    console.log("开始爬取API数据：", baseUrl);
    console.log("请求参数：", params);

    try {
        const response = await axios.get(baseUrl, {
            params: params,
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Connection": "keep-alive",
                "Cookie": "JSESSIONID=MDZmMzhlMTktYmQ3NC00MWNjLTlhYWUtOTllMzIzMTNhZDU5; CURRENT_ROLERELATION_ID=770680583511609344; v_upstream=finance-web-finance_6.2.0-g2#1764728005842; ENT_ID=10010; mid_module=; SECKEY_ABVK=H6X5H2Y3XCR7r9Jr5uUDrfQNP9aMAVHXc2LGu5NCrj0%3D; BMAP_SECKEY=hw4mQ_j9qYnDCv5fS1xW7Nso99q-QEvUegVYoZ61HMbRiG3VXJPnGiWfHGVeeHdhyYiRQ9UKLg9qYipTYKhHgkDpAKlypSr_4qDCgeQsRblHMIrCtxpsRw_VO26GULDBAkTklPSNv9LhjJJwAS31xH8D0mf0OhtBD_Rm4w2MvlN_UlgcnB6o3T6JPfhwGTTX",
                "DNT": "1",
                "Referer": "https://scm.dianplus.cn/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Traceid": "116315-81d74203-cd28-40e2-a0a4-31514b739528-1764731258806",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
                "sec-ch-ua": '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"'
            },
            timeout: 10000
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        console.log('Response data:', response.data);
        
        // 检查响应数据是否为空或为错误信息
        if (!response.data) {
            console.warn('警告：返回的数据为空');
            return null;
        }
        
        // 检查是否返回了"Page Not Found"
        if (typeof response.data === 'string' && response.data.includes('Page Not Found')) {
            console.warn('警告：服务器返回"Page Not Found"，可能是URL路径不正确');
            return null;
        }
        let fileName = `SCM-${getCurrentTime("YYYYMMDDHHmmssSSS")}.json`;
        // 保存数据
        await saveToJson(response.data, fileName);
        return response.data;
    } catch (error) {
        console.error("API数据爬取失败：", error.response ? error.response.data : error.message);
        if (error.response) {
            console.error("错误状态码:", error.response.status);
            console.error("错误响应头:", error.response.headers);
        }
        return null;
    }
}

export { crawlApiData };