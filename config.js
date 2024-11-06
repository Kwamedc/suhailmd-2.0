const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_49_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlRdVhkamRYUTMyQTdQRzVab016U1JULzhrL2YxcmJLdGdRTVhwYVJDV2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRMNTlLSi1lVFJPTV9kdjd6ZENIWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGMwM2NjNjUtYTFjNS00Yzg1LWI4ZmEtOWU5OWUxZTQ5NjVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMjgsXG4gICAgICAyMTMsXG4gICAgICA0NSxcbiAgICAgIDIzOCxcbiAgICAgIDIwNSxcbiAgICAgIDE0MixcbiAgICAgIDE4NixcbiAgICAgIDI1MyxcbiAgICAgIDE4NSxcbiAgICAgIDQ0LFxuICAgICAgMTUwLFxuICAgICAgMjAsXG4gICAgICAyMTUsXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICAxODgsXG4gICAgICAzMixcbiAgICAgIDIxNSxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxMzgsXG4gICAgICAxNjcsXG4gICAgICA2MCxcbiAgICAgIDEzOSxcbiAgICAgIDE1MCxcbiAgICAgIDM5LFxuICAgICAgODgsXG4gICAgICA4MSxcbiAgICAgIDUwLFxuICAgICAgMTk1LFxuICAgICAgMjUwLFxuICAgICAgMTA4LFxuICAgICAgMjM3LFxuICAgICAgMjgsXG4gICAgICAxMjksXG4gICAgICAxNDQsXG4gICAgICA5LFxuICAgICAgMjgsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjMxOVBDWjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzMTcyNTE2MDo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY0NjM1MDk5MDE0MDM6NThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJLbjZBRkVMaVdxN2tHR0JVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlWlhmVVh1Q0E1ejVSWDRWREh4MFBDY21ieWNraE5nNndRVWF4eEtWWEJBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlFeUp2Y1lwWXNUd2N6Z3RkZ0U3amJFSDlUK05MYW0xRDZwS3JBSHNwWVd2ZThXVDd1MjF3cll0ZVc2Smc2K2FHSjRNKzlCREpUeU4yVGlUZFY0dEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm96S2dQMDl5TjUvWHRoYnFNMU4ydHpMK25DWDU1YStVU0FWRDlFOW9MbTRwckp5RWJEcVdUVUtXWWVHWVRtWDBqdU9mYVphN3p0TVMrNmM1RjVKWUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzMTcyNTE2MDo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg1Nzc4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFJNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUk2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib0ZpcGhBaE9hbUFOdEhvQW45STh0MjdVcGIrVlY0elliNDFsMHZBNnpFUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA5Nzk1MzcwLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
