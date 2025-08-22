const axios = require("axios");

const TARGET_URLS = [
  "https://bajarangi.onrender.com/api/food/list",
  "https://feel-alive.onrender.com/listings",
  "https://perumall.onrender.com/api/food/list"
];

async function ping(url) {
  try {
    const res = await axios.get(url);
    console.log(`✅ Pinged ${url} successfully at ${new Date().toLocaleString()}`);
  } catch (error) {
    console.error(`❌ Error pinging ${url} at ${new Date().toLocaleString()}:`, error.message);
  }
}

function pingAll() {
  TARGET_URLS.forEach((url) => ping(url));
}

// Ping every 1 minute
setInterval(pingAll, 1000 * 60 * 1);

// Initial immediate ping
pingAll();
