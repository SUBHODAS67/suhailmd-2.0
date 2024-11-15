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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VamwTvzBvvsmvIihYD1W";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VamwTvzBvvsmvIihYD1W" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/gl2uzl.jpeg" || "https://files.catbox.moe/gl2uzl.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "\n*𝑰 𝑨𝑴༒𝑺𝑼𝑩𝑯𝑶༒*\nhttps://whatsapp.com/channel/0029VamwTvzBvvsmvIihYD1W" 


global.devs = "918391937667" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "918391937667";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918391937667";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/e6TVzEU.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "918391937667,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_11_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrcFpSbTNwMWR4M1M1U3RuK0l4eGdBaUU2ajhMSGlpbExjQ1JpdHRNZjFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODM5MTkzNzY2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTk2MDg5MTcwM0UxMjkwQTg1RDdCM0JBRkNFOENBQzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMjk4MzE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MzkxOTM3NjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQTg5NzdEODhDOENDNURBMjlBNThGQkI2NENFMjU1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEyOTgzMTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGZEVVFjRThUdE9hbmpVMURTUTFMUVwiLFxuICBcInBob25lSWRcIjogXCI4NWI0MTc3Yi0wMjBlLTRhNzQtOTBkNi1mZWZmMGU5OThkMmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAyNTEsXG4gICAgICA1MSxcbiAgICAgIDU0LFxuICAgICAgMjI3LFxuICAgICAgMjEzLFxuICAgICAgMTY0LFxuICAgICAgMjQ3LFxuICAgICAgMTIxLFxuICAgICAgMTMsXG4gICAgICAxODgsXG4gICAgICAxNjEsXG4gICAgICA0NCxcbiAgICAgIDI0OSxcbiAgICAgIDEzNCxcbiAgICAgIDIxOCxcbiAgICAgIDE4MyxcbiAgICAgIDI1MCxcbiAgICAgIDIxOSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICA0MixcbiAgICAgIDEzOSxcbiAgICAgIDE0MyxcbiAgICAgIDE5NixcbiAgICAgIDE0NSxcbiAgICAgIDE1MixcbiAgICAgIDI0OSxcbiAgICAgIDE1MSxcbiAgICAgIDEyOSxcbiAgICAgIDE0OSxcbiAgICAgIDIyMixcbiAgICAgIDY3LFxuICAgICAgODgsXG4gICAgICAxMDIsXG4gICAgICAxMTQsXG4gICAgICAyNSxcbiAgICAgIDEzNixcbiAgICAgIDE2OCxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIVlNKWVhMWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MzkxOTM3NjY3OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Kaw4Ka+4Kak4Kaq4KeN4Kaw4KeH4Kau4KeALeCmj+CmsCBCT1RcIixcbiAgICBcImxpZFwiOiBcIjcxMzUyMzkyMzU2MDA3OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LQTErTUVFSUtJeHJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibm9XWEJYbVZJMUN2cjhuM3ZPUldtaVNIb3dFU1piNGJvMG5EbWR5RHFHdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQZU9YTDFSZ3UyeVRvR3JSQzBWTHg3VGlld29TS3RYUUtZSGVVRnNRaVVSOTEwZHVVaE1QbThjRnI2aUt0SEg3czUzZER3bHp1ZUpkYmUyYVJSbk9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1NU5oRDlOVW9SYytFRG5CcXpCZEllREc0dHdiRW8wanlJaWxuUlFZbWhxaUw1Nzd5WTUrTkEwNlJVdDVEMG1LUzZqbjMvL3VoMWtEeHlYOUMya2JEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgzOTE5Mzc2Njc6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjk4MzA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXBIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcEguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1TG03SVl1R3QyQ1lRVERpWjAva3hGTENmc0NlMWRsVGJvYUtlSnhqRW1FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODI3ODUzNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTI5ODMxMjY4NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "+918391937667",
  packname: process.env.PACK_NAME || "রাতপ্রেমী",
  botname : process.env.BOT_NAME  || "রাতপ্রেমী-এর BOT",
  ownername:process.env.OWNER_NAME|| "*●┼🤍⃝⃪⃕ 𝑆𝑈𝐵𝐻𝑂⎯⃝🎻🌏‍♡*",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
