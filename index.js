require('./config')
const { default: makeWASocket, PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const colors = require("colors")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
PhoneNumber = require('awesome-phonenumber'),
readline = require('readline')
const pino = require('pino'),
Pino = require('pino'),
CFonts = require('cfonts'),
{ say } = CFonts,
spin = require('spinnies')
const gradient = require('gradient-string')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')

const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
//=================================================//

const os = require('os')
const cfonts = require('cfonts');
var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
 
const banner = cfonts.render((global.nameC), {
font: 'slick', 
align: 'center', 
colors: [`${cor1}`,`${cor3}`,`${cor4}`,`${cor2}`],
background: 'transparent',
letterSpacing: 1, 
lineHeight: 1,
space: true, 
maxLength: '0',
gradrient: [`${cor4}`,`${cor2}`], 
independentGradient: false, 
transitionGradient: false, 
env: 'node'
});

var pasta = './lib/qrcode/';
var totalArquivosExcluidos = 0;
var removerArquivos = async () => {
try {
var files = await fs.promises.readdir(pasta);
var regex = /^(pre-key|session|sender|creds)/;
var promessasRemocao = files.map(async (file) => {
var caminhoArquivo = path.join(pasta, file);
if (regex.test(file)) {
await fs.promises.unlink(caminhoArquivo);
totalArquivosExcluidos++;
await sleep(1000);
}
});
await Promise.all(promessasRemocao);
console.log(`\nPronto! Foram excluídos ${totalArquivosExcluidos} arquivos em ${pasta}\n`);
} catch (e) {
console.log(e)
}
};

const thefonte2 = {}
thefonte2.font = 'console'
thefonte2.align = 'center'
thefonte2.gradient = ['red', 'white']


let phoneNumber = '5511999808355'
const { NodeCache } = require('./lib/node.js')
const msgRetryCounterCache = new NodeCache()
const pairingCode = !!phoneNumber || process.argv.includes('--pairing-code')
const useMobile = process.argv.includes('--mobile'),
interFace = {}
interFace.input = process.stdin
interFace.output = process.stdout
const rl = readline.createInterface(interFace),
question = (cpxex) =>
new Promise((promisses) => rl.question(cpxex, promisses))
async function connectToWhatsApp() {
let { version: isLatest } =
await fetchLatestBaileysVersion()
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName),
automessage = new NodeCache(),
conn = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: !pairingCode,
mobile: useMobile,
browser: ['Chrome (Linux)'],
 auth: {
 creds: state.creds,
 keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
browser: ['Chrome (Linux)', '', ''],
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (key) => {
let jid = jidNormalizedUser(key.remoteJid)
let msg = await store.loadMessage(jid, key.id)

return msg?.message || ""
},
msgRetryCounterCache,
defaultQueryTimeoutMs: undefined,
})

if (pairingCode && !conn.authState.creds.registered) {
let phoneNumber = await question(gradient('purple','cyan','purple','cyan')('\n</> Digite o número que você quer ativar o bot\n[+] Exemplo: +55 12 99767-5520\n[+] Digite o número aqui: '))
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

let code = await conn.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(gradient('purple','cyan','green')('\n\nSEU CÓDIGO DE ATIVAÇÃO É: ' + code))
rl.close();
}


//=================================================//
conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
conn.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(conn, mek, store)
require("./bruxin")(conn, m, chatUpdate, store)
} catch (err) {
console.log(err)
}

})
//=================================================//
conn.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await conn.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
if (anu.action == 'add') {
} else if (anu.action == 'remove') {}
}
} catch (err) {
console.log(err)
}
})
//=================================================//
conn.public = true
conn.ev.on('creds.update', saveCreds)
//=================================================
conn.ev.process(async (leitorChat) => {
if (leitorChat['group-participants.update']) {
}
if (leitorChat['connection.update']) {
const _0x34f78d = leitorChat['connection.update'],
{
connection: connecao,
lastDisconnect: _0x5197a2,
qr: _0x3a7425,
isNewLogin: _0x15adf9,
receivedPendingNotifications: _0x44ec0f,
} = _0x34f78d
_0x3a7425 && 
console.log(colors.green('< AGUARDANDO VOCÊ CONECTAR >')) 
const erroConetion = new Boom(_0x5197a2?.error)?.output.statusCode
}})

conn.serializeM = (m) => smsg(conn, m, store)
conn.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
} else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
} else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
} else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
} else if (reason === DisconnectReason.loggedOut) {
console.log(`Dispositivo desconectado, exclua a pasta qrcode e escaneie novamente.`);
removerArquivos();
await sleep(100)
process.exit();
} else if (reason === DisconnectReason.restartRequired) {
console.log("É necessário reiniciar, reiniciando...");
connectToWhatsApp();
} else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
} else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
}
} else if (connection === "open") {
console.clear()
console.log(banner.string)
say(global.perdoado,thefonte2)
console.log(gradient('white','red','white')(global.informations))
console.log(colors.green('\n\n<[ CONECTADO. ]>'))
} else if (connection === "connecting") {
}
});
return conn
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
console.clear()
delete require.cache[file]
require(file)
})
