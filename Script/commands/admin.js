const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝙁𝘼𝙃𝙄𝙈 𝘼𝙃𝙈𝙀𝘿 ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝙈𝘼𝙇𝙀
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝙎𝙄𝙉𝙂𝙇𝙀 𝙋𝙍𝙊 𝙈𝘼𝙓
┃ 🎂 𝐀𝐠𝐞       : 17
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝙄𝙎𝙇𝘼𝙈
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝘿𝙄𝙋𝙇𝙊𝙈𝘼 𝙄𝙉 𝘼𝙂𝙍𝙄𝘾𝙐𝙇𝙏𝙐𝙍
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝘿𝙃𝘼𝙆𝘼, 𝙈𝙄𝙍𝙋𝙐𝙍
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : 𝙁𝘼𝙃𝙄𝙈 𝙄𝙎 𝘽𝘼𝘾𝙆
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : 𝙎𝙊𝙍𝙍𝙔 😩
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/profile.php?id=100070294402719
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100000478146113/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
