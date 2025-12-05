import crypto from "crypto";

/**
 * 生成随机十六进制字符串
 * @param {number} length - 字符串长度
 * @returns {string} 随机十六进制字符串
 */
function generateHex(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

/**
 * 生成随机数字字符串
 * @param {number} length - 字符串长度
 * @returns {string} 随机数字字符串
 */
function generateNumbers(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * 生成随机字母数字字符串
 * @param {number} length - 字符串长度
 * @returns {string} 随机字母数字字符串
 */
function generateAlphanumeric(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * 生成类似UUID格式的字符串
 * @returns {string} UUID格式字符串
 */
function generateUUID() {
  return `${generateHex(8)}-${generateHex(4)}-${generateHex(4)}-${generateHex(
    4
  )}-${generateHex(12)}`;
}

/**
 * 生成淘宝格式的cookies
 * @returns {string} 符合淘宝格式的cookies字符串
 */
function generateTaobaoCookies() {
  const cookies = {
    "XSRF-TOKEN": generateUUID(),
    cookie2: generateHex(32),
    t: generateHex(32),
    _tb_token_: generateAlphanumeric(13),
    thw: "cn",
    "3PcFlag": Date.now(),
    wk_cookie2: generateHex(32),
    wk_unb: `${generateAlphanumeric(10)}%3D%3D`,
    lid: "%E9%A3%9E%E9%9B%AA%E7%89%87%E7%89%87%E5%87%9D%E7%91%9E", // 这是UTF-8编码的中文
    aui: generateNumbers(10),
    mtop_partitioned_detect: "1",
    _m_h5_tk: `${generateHex(32)}_${Date.now()}`,
    _m_h5_tk_enc: generateHex(32),
    _samesite_flag_: "true",
    sdkSilent: Date.now(),
    havana_sdkSilent: Date.now(),
    xlly_s: "1",
    fastSlient: Date.now(),
    sgcookie: `${generateAlphanumeric(3)}${generateNumbers(
      2
    )}${generateAlphanumeric(200)}`,
    x5sec: generateHex(150),
    sca: generateHex(8),
    mt: "ci=0_0",
    tracknick: "",
    cna: `${generateAlphanumeric(3)}${generateNumbers(2)}${generateAlphanumeric(
      10
    )}`,
    regsid: generateHex(40),
    regsc: generateHex(64),
    isg: `${generateAlphanumeric(1)}${generateAlphanumeric(50)}`,
    _bl_uid: `${generateAlphanumeric(20)}`,
    arms_uid: generateUUID(),
    tfstk: `${generateAlphanumeric(50)}-${generateAlphanumeric(
      50
    )}-${generateAlphanumeric(50)}`,
  };

  // 将对象转换为cookie字符串
  return Object.entries(cookies)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
}

export { generateTaobaoCookies };
