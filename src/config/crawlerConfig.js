// 原CommonJS导出（错误）
// module.exports = { ... }

// 改为ES模块导出（正确）
export const staticTarget = {
    url: "https://www.baidu.com/s?wd=%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E5%9B%A2%E4%BD%93%E8%AF%B7%E6%B1%82%E8%AE%BF%E5%8D%8E&sa=fyb_n_homepage&rsv_dl=fyb_n_homepage&from=super&cl=3&tn=baidutop10&fr=top1000&rsv_idx=2&hisfilter=1",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
        Referer: "https://www.baidu.com/",
        origin:'https://www.baidu.com',
        host:'chat.baidu.com',
        contentType:'application/json'
    },
    parseRule: {
        contentSelector: ".toplist1-tr_1MWDu",
        sortSelector: ".c-index-single",
        titleSelector: ".c-font-medium",
        linkSelector: "a",
        hotSelector:'.c-text'
    },
};

export const dynamicTarget = {
    url: "https://example.com/dynamic-list",
    waitSelector: ".dynamic-item",
};

export const crawlConfig = {
    concurrency: 3,
    delay: 1000,
};