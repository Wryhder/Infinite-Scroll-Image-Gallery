import axios from "axios"
import config from "../../config"

exports.handler = function(event, context,callback) {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = process.env.ACCESS_KEY || config.accessKey

    const scifiEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=10&collections='1284184,3805221,519270,1959977,3173660,8505610'`

    axios.get(scifiEndpoint).then(res => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                images: res.data,
            })
        })
    })
    .catch((err) => {
        console.log(err)
    })
}