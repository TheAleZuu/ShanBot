 /*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const axios = require("axios")
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
/*const imgbb = require('imgbb-uploader')*/
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { juegos } = require('./src/juegos')
const { shantera } = require('./src/shantera')
const { antimenu } = require('./src/antimenu')
const { welmenu } = require('./src/welmenu')
const { banmenu } = require('./src/banmenu')
const { otak } = require('./src/otak')
const { levelmenu } = require('./src/levelmenu')
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Shan\n' // Nombre
            + 'ORG:Shanduy;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=593967689722:+593 96 768 9722\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'

const vcard2 = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Alezuu\n' // Nombre
            + 'ORG:Rower Ancestral;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=542996557871:+54 299 655 7871\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = 'SHAN-'
blocked = []
banChats = false

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******ARCHIVOS ANTILINK POR SHANDUY******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antiface = JSON.parse(fs.readFileSync('./src/antiface.json'))
const antitik = JSON.parse(fs.readFileSync('./src/antitik.json'))
const antinsta = JSON.parse(fs.readFileSync('./src/antinsta.json'))
const antikwai = JSON.parse(fs.readFileSync('./src/antikwai.json'))
const antiwa = JSON.parse(fs.readFileSync('./src/antiwa.json'))
const antidiscord = JSON.parse(fs.readFileSync('./src/antidiscord.json'))

/******FIN DE ARCHIVOS ANTILINK POR SHANDUY******/


//LEVEL INICIO
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
//LEVEL FIN
	
function addMetadata(packname, author) {	
	if (!packname) packname = 'ShanBot'; if (!author) author = 'shanduy';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2140, 12]
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el codigo QR rapido!!!'))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Estas desconectado')
	})
	client.on('open', () => {
		success('2', 'Conectado by shanduy')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = 
`	「 _*¡¡Ohayo @${num.split('@')[0]}!!*_ 」
  ═╡ *¡Bienvenido a ${mdata.subject}!* ╞═
× | Este es tu espacio! Comparte tus clips, memes, secretos, etc. Siéntete cómodo y libre!

  ➔ *IMPORTANTE*
× | Se aplican restricciones, recuerda leer el reglamento R.A para prevenir una infracción con el comando ${prefix}reglas. Es importante para mantener un espacio adecuado y cómodo.*
_~Ojito pa, si rompes las reglas te vas re contra mil baneado, solo aviso.~_

ㅤ➔ *Nuestro objetivo*
× | Buscamos ser una comunidad peculiar basándonos en el gaming, la programación, los bots, el anime, y toda cultura en general. Podemos ofrecernos para ayuda.

  ➔ *Sobre ShanBot*
» | Faltaría presentarme... como habrás notado, soy el botsito de la comunidad pero, eso significa que Alezuu o algún administrador del grupo me haya programado? NO. Fui programado por _Shanduy_ (exacto, él es mi amo), a continuación estaré dejando sus créditos, si quieres instalar un bot para tu grupo y tienes conocimientos sobre terminales, se te hará muy útil.
Ya que me presenté, es hora de conocer mis utilidades, prueba ${prefix}help para más!

*_${mdata.subject}_*
*_© - Shanduy_*`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `*Un minuto de silencio por la despedida de @${num.split('@')[0]}...* 👋😕
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error: %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const apikey = setting.apikey
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '*Traaannquiii brooodaa*\n\nTómese un té mientras proceso, no puedo hacer todo a la vez :)...',
				success: '*❬✔️❭ Listo*',
                		levelon: '*❬✔️❭ Los niveles de XP están habilitados en este grupo*',
				leveloff: '*❬✔️❭ Los niveles de XP están deshabilitados en este grupo*',
				levelnoton: '*❬❌❭ Sorry bro, los niveles de XP están deshabilitados!*',
				levelnol: '*Nivel* > 0 ',
				error: {
				stick: '*❬❌❭ Se produjo un error al convertir la imagen en una pegatina!*',
				Iv: '*❬❌❭ Link inválido!*'
				},
				only: {
					group: '*❬❌❭ Este comando es solo para grupos!*',
					ownerG: '*❬❌❭ Este comando solo puede ser utilizado por un admins del grupo"',
					ownerB: '*❬❌❭ Este comando solo lo usa el owner!*',
					admin: '*❬❌❭ Este comando solo puede ser utilizado por administradores del grupo!*',
					Badmin: '*❬❌❭ Asígname admin para poder ejecutar este comando!*',
                    			pegatina: 'Creando sticker...',
					attp: 'Creando sticker...',
					imgs: 'Convirtiendo...',
					mpcancion: 'Convirtiendo...',
					mpa: 'Descargando...',
                   			xn: 'Descargando',
					mpv: 'Descargando...',
					insta: 'Descargando...',
					musica: 'Descargando...',
					musica2: 'Descargando...',
					daftarB: '*❬❌❭ No estás registrado en mi base de datos!*\nRegístrate con SHAN-daftar (nombre)',
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["593997889284@s.whatsapp.net","5492996557871@s.whatsapp.net","5491128730493@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const isBanned = ban.includes(sender)
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiDiscord = isGroup ? antidiscord.includes(from) : false
			const isAntInsta = isGroup ? antinsta.includes(from) : false
			const isAntiTik = isGroup ? antitik.includes(from) : false
			const isAntiFace = isGroup ? antiface.includes(from) : false
			const isAntiKwai = isGroup ? antikwai.includes(from) : false
			const isAntiWa = isGroup ? antiwa.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = ['593997889284@s.whatsapp.net','5492996557871@s.whatsapp.net','5491128730493@s.whatsapp.net']
                        const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                        const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			
			//......................
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           
//LINKS DE WHATSAPP	
		
	if (budy.includes("chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ GRUPO DE WHATSAPP DETECTADO*\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		}, 0)
	}
			
			
//FIN DE LINKS DE WHATSAPP	
			
			
//ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES
			
if (budy.includes("facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
        if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ LINK DE FACEBOOK DETECTADO*\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                                                
		}, 0)
	}
			
			
//FIN ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES			
			
//FUNCION ANTILINK
	     	
	if (budy.includes("discord.com/", "discord.gg/")){
		if (!isGroup) return
		if (!isAntiDiscord) return
        if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ LINK DE DISCORD DETECTADO*\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		}, 0)
	}
			
	if (budy.includes("kwai.app/", "kwai.com/")){
		if (!isGroup) return
		if (!isAntiKwai) return
        if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ LINK DE KWAI (aplicación de mieeerda) DETECTADO*\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		}, 0)
	}

	if (budy.includes("youtu.be/", "youtube.com/")){
		if (!isGroup) return
		if (!isAntiTube) return
	   	if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ LINK DE YOUTUBE DETECTADO*\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		}, 0)
	}
	
	if (budy.includes("instagram.com/")){
		if (!isGroup) return
		if (!isAntInsta) return
	    if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ LINK DE INSTAGRAM DETECTADO\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		}, 0)
	}		
	
	if (budy.includes("tiktok.com/")){
		if (!isGroup) return
		if (!isAntiTik) return
        if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*❬📢❭ LINK DE TIKTOK DETECTADO*\nHermano, prometiste cumplir las reglas, qué acabas de hacer? Nos desepcionaste, por ello serás baneado durante el tiempo que los administradores decidan.\nBueno, parece que no valió mucho la pena haber compartido tu asqueroso link al grupo. *Suerte con tu ban!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			const baneado = fs.readFileSync('./mp3/baneado.mp3');
		        client.sendMessage(from, baneado, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		}, 0)
	}

//FIN DE ANTI LINKS 
		

//FUNCION DE LEVEL
            
     if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n¡Felicidades, subiste de nivel sigue así! 👏\n\n*NOMBRE: ${pushname}*\n*XP: ${getLevelingXp(sender)}*\n*NIVEL: ${getLevel} ⟿ ${getLevelingLevel(sender)}*\n\n_*Para ver tu XP en tiempo real coloca el comando ${prefix}level*_`)
                }
            } catch (err) {
                console.error(err)
            }
        }

//FIN DE FUNCION DE LEVEL
			
         		
                        colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
        return console.log(color('「 USUARIO BANEADO 」 Ignorando Comando...', 'blue'), color(moment.tz('America/Guayaquil').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

/******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'ShanBot'; if (!author) author = 'Shanduy';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'help':
		case 'menu':
	        client.sendMessage(from, help(prefix, sender), text, {quoted: mek})
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'levelmenu':
		client.sendMessage(from, levelmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'banmenu':
		client.sendMessage(from, banmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
					
		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break*/
                            


//FUNCIONES DE BAN Y DESBAN			
			
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `「 BAN 🚫 」\n\n*CASO Nº*\n*USUARIO: @${mentioned[0].split('@')[0]}*\n\n*¡Malas noticias @${mentioned[0].split('@')[0]}! Se te ha restringido el uso del bot :( ¿qué cagada te mandaste weon?*`
mentions(`${susp}`, mentioned, true)   
break

case 'desban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `「 DESBAN ✅ 」\n\n*CASO Nº*\n*USUARIO: @${mentioned[0].split('@')[0]}*\n\n*¡Buenas noticias @${mentioned[0].split('@')[0]}! Se te han retirado las restricciones con el bot, ya puedes usar el bot tranquilamente! :D*`
mentions(`${susp}`, mentioned, true)   
break		
			
//FIN DE FUNCIONES BAN Y DESBAN					
					
					
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
					
case 'gay':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay = 1 ) {ga = 'excelente mi bro, no eres gay 🧐🍸'} else if (gay < 10) {ga = 'tienes... algo de gay en tu ser 😧'} else if (gay < 30 ) {ga = 'qu-qué?!!??!'} else if (gay < 40 ) {ga = 'tengo mis dudas...'} else if (gay < 50) {ga = 'oh no...'} else if (gay == 50 ) {ga = 'mitad gay mitad normal'} else if (gay < 60) {ga = 'usted es un porquito gay :o'} else if (gay < 80) {ga = 'n-no... j-jugador de free fire no me chupes la polla 😣'} else if (gay < 100) {ga = '............'} else if (gay == 100) {ga = fs.readFileSync('./mp4/trollface sus.mp4')}
hasil = `${rate} usted es ${random}% gay XD`
ga = `${ga}`
reply(hasil)
reply(ga)
break
				  
case 'topgay':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'SEÑORAS Y SEÑORES, LES PRESENTAMOS AL GAY Nº1 DEL GRUPO...\n\n'
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `ESA PERSONA ES..........\n\n➔ @${groupMembers[r].jid.split('@')[0]}\n¡FELICIDADES! ¡SOS EL MÁS GAY DEL GRUPO! Tomá tu premio: 🏆`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break
											
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
	
	case 'creator-shan':
                client.sendMessage(from, {displayname: "Shan", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'Ahí puedes consultar tus preguntas :)\n\nÉl es Shanduy, el desarrollador de ShanBot. Recuerda comunicarte solo para consultas, NO MOLESTES POR FAVOR.',MessageType.text, { quoted: mek} )
                const none = fs.readFileSync('./mp3/shan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break

	case '@everyone':
                client.updatePresence(from, Presence.composing) 
                if (!isGroupAdmins) return reply(mess.only.Badmin)
		if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
                               case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo weon')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                                case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `*「 Administradores del grupo 」*\n\n${groupMetadata.subject}*\nTotal: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Responde a la foto con la que me quieres ewe`)
                     if (!isUser) return reply(mess.only.daftarB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil uwu')
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Sube fotos con subtítulos ${prefix}Ok`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 _*by shanduy*_ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     
				
		
                                       
				
			//ANTILINKS DE REDES SOCIALES FLACO ACEPTALO SOLO LO ESTAS EDITANDO REALMENTE SHANDUY TE HIZO TODO ESTO	
				
				case 'anti-discord':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntiDiscord) return reply('El antilink de Discord ya está habilitado!')
						antidiscord.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ El antilink de Discord está habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antidiscord.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ El antilink de Discord está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break
				
				case 'anti-kwai':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntiKwai) return reply('El antilink de Kwai ya está habilitado!')
						antikwai.push(from)
						fs.writeFileSync('./src/antikwai.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ El antilink de Kwai esta habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antikwai.splice(from)
						fs.writeFileSync('./src/antikwai.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ El antilink de Kwai está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break
				
				case 'anti-insta':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntInsta) return reply('El antilink de Instagram ya está habilitado!')
						antinsta.push(from)
						fs.writeFileSync('./src/antiinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ El antilink de Instagram está habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antinsta.splice(from)
						fs.writeFileSync('./src/antiinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ El antilink de Instagram está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break
				
				  case 'anti-tik':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntiTik) return reply('El antilink de TikTok ya está habilitado!')
						antitik.push(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ El antilink de TikTok está habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antitik.splice(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ El antilink de TikTok está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break 
				
				case 'anti-tube':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntiTube) return reply('El antilink de YouTube ya está habilitado!')
						antitube.push(from)
						fs.writeFileSync('./src/antitube.json', JSON.stringify(antitube))
						reply('❬ ✅ ❭ El antilink de YouTube está habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antitube.splice(from)
						fs.writeFileSync('./src/antitube.json', JSON.stringify(antitube))
						reply('❬ ✅ ❭ El antilink de YouTube está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break
				
				case 'anti-face':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntiFace) return reply('El antilink de Facebook ya está habilitado!')
						antiface.push(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ El antilink de Facebook está habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antiface.splice(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ El antilink de Facebook está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break
				        
			       case 'anti-wa':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('El antilink de grupos de WhatsApp ya está habilitado!')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ El antilink de grupos de WhatsApp está habilitado')
						client.sendMessage(from, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ El antilink de grupos de WhatsApp está deshabilitado')
					} else {
						reply(`Coloque *${prefix}antimenu* para ver todos los antilinks disponibles!`)
					}
					break
			        
				
				//FIN DE ANTILINK HECHO POR SHANDUY
				
//ADMINISTRACION DE GRUPOS
		                
case 'exe':
	              client.updatePresence(from, Presence.composing) 
	             if (!isGroup) return reply(mess.only.group)
                     if (!isUser) return reply(mess.only.daftarB)
		     if (!isGroupAdmins) return reply(mess.only.admin)
	         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		      const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "todas putas loco.", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
       
case 'grupocr':
client.updatePresence(from, Presence.composing) 
options = {
text: `El creador de este grupo es @${from.split("-")[0]}`, 
contextInfo: { mentionedJid: [from] }
}
client.sendMessage(from, options, text, { quoted: mek } )
break
                                      
case 'kick':
case 'pafuera':
client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length == 1) {
						teks = 'Pedido recibido, chao paaa '
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
				        const none = fs.readFileSync('./mp3/baneado.mp3');
		                        client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                                                }
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido, chao paaa @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao puta gorda', text)
					const none = fs.readFileSync('./mp3/a tu casa gorda puta.mp3');
		                        client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					}
					break

case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Flaco te falto agregar a la persona que voy a quitar el admin')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break

case 'promote':
client.updatePresence(from, Presence.composing) 
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A quien voy a dar admin??\n\n*Ejemplo:* ${prefix}promote @xxxxxxx')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Agregando cargo de administrador a '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupMakeAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break				
				
case 'linkgc':
client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `*${groupName}*\n\n· https://chat.whatsapp.com/${linkgc}`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break

case 'closegc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
					text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}.`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
                
case 'opengc':                
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
					text: `Grupo abierto por el administrador @${sender.split("@")[0]}.`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {quoted: mek})
break
				                
case 'unir':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Falta el número telefónico! Recueda escribirlo sin el signo "+".')
if (args[0].startsWith('+')) return reply(mess.unire)
try {0
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error:', e)
reply('No se pudo agregar el destino, tal vez porque es privado...')
}
break
				
case 'fgc': 
reply(mess.foto)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
reply('*❬ ✅ ❭ Se cambió la foto del grupo correctamente*')
break						
				
case 'ngc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateSubject(from, `${body.slice(5)}`)
      client.sendMessage(from, '*❬ ✅ ❭ Se cambió el título del grupo correctamente*', text, {quoted: mek})
      break

case 'dgc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateDescription(from, `${body.slice(5)}`)
      client.sendMessage(from, '*❬ ✅ ❭ Se cambió la descripción del grupo correctamente*', text, {quoted: mek})
      break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Para activar está funcion coloca ${prefix}welcome 1`)
if (Number(args[0]) === 1) {
if (isWelkom) return reply('La bienvenida al grupo ya está habilitado!')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La bienvenida esta habilitada')
} else if (Number(args[0]) === 0) {
welkom.splice(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La bienvenida esta deshabilitada')
} else {
reply('¿Lo habilitas o deshabilitas? 🤔')
}
break					
					
					
//FIN DE ADMINISTRACION DE GRUPOS				
				
				
				
//CREACION DE STICKERS Y VARIOS				
				
				case 's':
                                case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
				if (!isUser) return reply(mess.only.daftarB)
                               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {    
										         fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir la imagen a sticker`)
							})
							.on('end', function () {
								console.log('Finish')
							        exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
					
					case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto? XD`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
					
			          case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break  
				
				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ Solo videos')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
//CREACION DE STICKERS Y VARIOS	            
		
	//SERVICIO DE MUSICA Y VIDEO 			
				
				
	        case 'play':   
	        if (args.length < 1) return reply('¿Donde esta el nombre de la canción? XD')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=22hamilton`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n*_`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
		
		case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play2 Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.daftarB)
	        reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=22shanduy`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por shanduy*_`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                                
		case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la url del video?\n\nEjemplo: *ytmp4 www.youtube.com/xxxxxxxxx')
		if (!isUser) return reply(mess.only.daftarB)
		reply(mess.only.mpv)
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error.yt)
		teks = `*⌜Video Encontrado ✅⌟*\n◉ *Título:* ${anu.result.title} \n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*\n\n_*Servicio proveido por shanduy*_`
		lagu = await getBuffer(anu.result.thumbnail)
                client.sendMessage(from, lagu, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result.url_video)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
		break
					
														
	//FIN DE SERVICIO DE MUSICA Y VIDEO			
				
//REGISTRO				

case 'daftar':
client.updatePresence(from, Presence.composing)
if (isUser) return reply('Ya estas registrado 🧐')
if (args.length < 1) return reply(`Incorrecto ❎\nComando: ${prefix}daftar Nombre\n\nEjemplo: ${prefix}daftar shanduy`)
var reg = body.slice(8)
var nombre = reg.split("|")[0];
user.push(sender)
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: BUENAGNO 🥸\`\`\`\n\n\`\`\`Hora EC: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários: ${user.length}\`\`\``, text, {quoted: mek})
break
                                
//FIN DE REGISTRO  
				
				case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
				case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
		sem = sender.replace('@s.whatsapp.net','')
		if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                resul = `『 *TUS ESTADISTICAS 🆙* 』\n\nTus estadisticas en tiempo real 🕐\n\n├─ ❏ *NOMBRE:* ${sem}\n├─ ❏ *XP 🆙:* ${userXp}\n└─ ❏ *NIVEL:* ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita *leveling 1 para activar este recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
                               
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					
				
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
				
						
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nRed: *2G*\nEstado: *Bateria Baja*`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                default:
                
		if (budy.includes(`Todo bien`)) {
                  reply(`Si amigo todo bien, vite`)
                  }

		if (budy.includes(`Buenos dias`)) {
                  reply(`Buenos Dias trolos de mierda`)
                  }

		if (budy.includes(`Bot gay`)) {
                  reply(`Miren a este boludito`)
                  }

		if (budy.includes(`Gracias`)) {
                  reply(`De nada padre`)
                  }

		if (budy.includes(`Bien gracias y tu?`)) {
                  reply(`Opa yazmin te extrañe :(`)
                  }
					
		if (budy.includes(`Opa`)) {
                  reply(`opaaaaa`)
                  }
                 
		if (budy.includes(`Fua`)) {
                  reply(`el diegote pa`)
                  }
	
					
	if (budy.startsWith(`VAMOOO`)) {
        const none = fs.readFileSync('./mp3/vamo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Hora del sexito`)) {
        const none = fs.readFileSync('./mp3/maau1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Cuentate un chiste`)) {
        const none = fs.readFileSync('./mp3/dylan2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Admin party`)) {
        const none = fs.readFileSync('./mp3/fiesta.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Fiesta del admin`)) {
        const none = fs.readFileSync('./mp3/admin.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Viernes`)) {
        const none = fs.readFileSync('./mp3/viernes.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`:v`)) {
        const none = fs.readFileSync('./mp3/viejo1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`La toca 7w7`)) {
        const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Quien es tu sempai botsito`)) {
        const none = fs.readFileSync('./anishan/anime4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me gimes 7u7`)) {
        const none = fs.readFileSync('./anishan/anime3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Te amo botsito uwu`)) {
        const none = fs.readFileSync('./anishan/anime2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Onichan`)) {
        const none = fs.readFileSync('./anishan/anime1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pasen sexo`)) {
        const none = fs.readFileSync('./mp3/fernan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Paraguayo`)) {
        const none = fs.readFileSync('./mp3/gaspi11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Venezolano`)) {
        const none = fs.readFileSync('./mp3/gaspi10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi corte`)) {
        const none = fs.readFileSync('./mp3/gaspi12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi buenos dias`)) {
        const none = fs.readFileSync('./mp3/gaspi13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Enano`)) {
        const none = fs.readFileSync('./mp3/gaspi14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Buenas noches`)) {
        const none = fs.readFileSync('./mp3/gaspi15.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Peruano`)) {
        const none = fs.readFileSync('./mp3/gaspi16.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Alto temazo`)) {
        const none = fs.readFileSync('./mp3/sombare14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`GOOOOD`)) {
        const none = fs.readFileSync('./mp3/sombare13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Ya me voy a dormir`)) {
        const none = fs.readFileSync('./mp3/sombare12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Calefon`)) {
        const none = fs.readFileSync('./mp3/sombare11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Bot de mierda`)) {
        const none = fs.readFileSync('./mp3/sombare10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        const none = fs.readFileSync('./mp3/sombare9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Un chino`)) {
        const none = fs.readFileSync('./mp3/sombare7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }				
        if (budy.startsWith(`No funciona`)) {
        const none = fs.readFileSync('./mp3/sombare8.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Boliviano`)) {
        const none = fs.readFileSync('./mp3/gaspi3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Corte`)) {
        const none = fs.readFileSync('./mp3/gaspi2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi me saludas`)) {
        const none = fs.readFileSync('./mp3/gaspi4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi y las minitas`)) {
        const none = fs.readFileSync('./mp3/gaspi6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi todo bien`)) {
        const none = fs.readFileSync('./mp3/gaspi7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me quiero suicidar`)) {
        const none = fs.readFileSync('./mp3/gaspi81.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi ya no aguanto`)) {
        const none = fs.readFileSync('./mp3/gaspi9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Contate algo bot`)) {
        const none = fs.readFileSync('./mp3/gaspi5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
               if (budy.startsWith(`Sexo`)) { 
        const none = fs.readFileSync('./mp3/sexo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pongan cuties`)) { 
        const none = fs.readFileSync('./mp3/neymar1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Momento epico`)) {
        const none = fs.readFileSync('./mp3/sombare1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`El bot del orto no funciona`)) {
        const none = fs.readFileSync('./mp3/sombare2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Epicardo`)) {
        const none = fs.readFileSync('./mp3/sombare3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Insta de la minita`)) {
        const none = fs.readFileSync('./mp3/sombare4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Una mierda de bot`)) {
        const none = fs.readFileSync('./mp3/sombare5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		 if (budy.startsWith(`Ultimo momento`)) {
        const none = fs.readFileSync('./mp3/sombare6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
		if (budy.startsWith(`Nefasto`)) {
        const none = fs.readFileSync('./mp3/gaspi1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
