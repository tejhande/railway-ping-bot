const axios = require('axios');

const TARGET_URL = "https://bajarangi.onrender.com/api/food/list";

async function ping() {
    try {
        const res = await axios.get(TARGET_URL);
        console.log(`✅ Pinged successfully at ${new Date().toLocaleString()}`);
    } catch (error) {
        console.error(`❌ Error pinging at ${new Date().toLocaleString()}:`, error.message);
    }
}

setInterval(ping, 1000 * 60 * 1); // every 3 minutes

ping(); // first immediate ping
