/**
 * 格式化当前时间
 * @param {string} format - 时间格式，支持 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss.SSS' 等
 * @returns {string} 格式化后的时间字符串
 */
function getCurrentTime(format = 'YYYY-MM-DD HH:mm:ss') {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    switch (format) {
        case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`;
        case 'YYYY-MM-DD HH:mm:ss':
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        case 'YYYY-MM-DD HH:mm:ss.SSS':
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
        case 'YYYYMMDDHHmmssSSS':
            return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
        case 'YYYY/MM/DD':
            return `${year}/${month}/${day}`;
        case 'HH:mm:ss':
            return `${hours}:${minutes}:${seconds}`;
        case 'HH:mm:ss.SSS':
            return `${hours}:${minutes}:${seconds}.${milliseconds}`;
        default:
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}

/**
 * 获取时间戳
 * @returns {number} 当前时间戳（毫秒）
 */
function getTimestamp() {
    return Date.now();
}

export { getCurrentTime, getTimestamp };