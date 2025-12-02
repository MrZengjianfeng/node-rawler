import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 存储到JSON文件
async function saveToJson(data, filename = "result.json") {
    const filePath = path.resolve(__dirname, "../data", filename);
    try {
        // 确保data目录存在
        await fs.ensureDir(path.dirname(filePath));
        // 写入文件（格式化JSON）
        await fs.writeJson(filePath, data, { spaces: 2 });
        console.log(`数据已保存到：${filePath}`);
    } catch (error) {
        console.error("保存文件失败：", error);
    }
}

// 若使用MongoDB，可添加mongoose连接逻辑
// const mongoose = require("mongoose");
// async function saveToMongo(data, model) { ... }

export { saveToJson }