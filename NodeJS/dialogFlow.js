const axios = require('axios');

const accessToken = process.env.DIALO_ACCESS_TOKEN;

module.exports = {
    send(message) {
        const data = {
            query: message,
            lang: 'en',
            sessionId: ''
        }

        return axios.post(data, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
    }
}