
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  : "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURHc0ptSzJhN21oclQ2VFJYVVl2Y2NiN0JQMURRemRwbzhvdWM4VXEwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTG1YUXlFK3lTRmNlZ2ROMUJqZlFYc01yTUhJSWd3YXhEWU9tRnJublQyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSXcvZTRIVzNLL3ZRNEpvNk1zVHIrVi9Ga0Q0NHRERXYyNEVDQlpNUm5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SUx0TTVud1FpdERua0wzazQvVDNFZUlRUWwvZU5wT2tjakIxYkVVaGlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEbUJ3Nzltamc3VmpEYi85NmdPdXQzMXNOeFFwOCs3MCtYaUkzbVFaMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNtbFo4eHNPMnJySGZuZ1o3N3NzdUFLNi93WXNLRHFSWXBteUhNRGJuazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtGQlFnZjIrcUowdTVqREVZeEUyanhnOWtlcUFwSkNGM0RNTUt5WDBVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVptLzBqeTk0QUN5eDZUNnBsZ2hWSEdlTE4xYjZ4djg2eGhwNjBpb1kxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMVVdGbzcycVRFUmx6dVVoMU03b0tZS3dyaXNaQmRnMHlGQmErNzk5Y1RTQk1mVTQ1WmdqVWpIekhUWTF4VFhkUnJ2WmllQjZmS2dNNzBQUHRzMkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiI3WnliUmFuTWZIYzZEVFpKazhZVnArSEhETjZEZFArd0VrZEZVRGF4dmRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENkNCRjAzODM0MzREQzBGNjIyNDI1NjVDMjE1MzhEMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MTc1OTU5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODdFQ0ZEQUYwRjU0QUQ5RDQzMDk1MDRBMEU5ODNDRjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDE3NTk1OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWWI1cFpvRjFRTm1yV01uT0NEMXdKZyIsInBob25lSWQiOiI2NjI5ZDczYy1mMjdkLTRhMTYtODQ3OC03OGE5ZGEyMzM1ZDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzd1S2djV050bDZLL2I0NFoyY2xnc09tK3VZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpDMGRwOFNuUlB3WGt0RHFBOXE4UHN4bzk0Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHOEgxVkYxUSIsIm1lIjp7ImlkIjoiOTIzMDcyMzgwMzgwOjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOFpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjNEMkp3SEVNYlo5Ym9HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidXRoS3RGY1JkTUdVUFlySnl4VjJXYUJmTm91bHl0R0JoQnVra1pOYzRCRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibU4ybmxQNkVDbWt6N0RLU3ZBUVFhcWozNHprRWR4SVViOHN3V1lmekZ4SFk1cyt3U3dFVnpkV2w5ZUlqWE9MR3M0ekI3YnBZY243MlFOYW8xdVhVQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im5oNjhINzZaTlA2OHp3Z2hidk84UE1kYi9mZTdwMUJibStYRGFiYmx0Sy80NzR0VTdETTZvQzE2ODdUMHVmWTBHRHlhZDZXNGUvalJLNHlxSWdMZ0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDcyMzgwMzgwOjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJyWVNyUlhFWFRCbEQyS3ljc1ZkbG1nWHphTHBjclJnWVFicEpHVFhPQVIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQxNzU5NTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2E0In0=",
  "ALIVE_IMG": "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": ".",
  "AUTO_READ_STATUS": true,
  "MODE": "public",
  "OWNER_NUMBER": "923072380380",
  "OWNER_NAME": "Hamza",
  "ALWAYS_ONLINE": true,
  "PRESENCE": "online",
  "OMDB_API_KEY": "76cb7f39",
  "READ_CMD": false,
  "AUTO_VOICE": false,
  "AUTO_STICKER": false,
  "AUTO_REPLY": false,
  "AUTO_REACT": false,
  "WELCOME": false,
  "ANTI_BAD": false,
  "ANTI_LINK": false,
  "ANTI_GROUP_LINK": false,
  "ANTI_DELETE": false,
  "ANTI_VIEW_ONCE": false,
  "ANTI_BOT": false,
  "PREMIUM_USERS": "",
  "COUNTRY_BLOCK": true,
  "COUNTRY_BLOCK_CODE": "972",
  "EMOJI": "🙄",
  "AUTO_TYPING": true
};
