const axios = require("axios");

async function main() {
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/1b37fa22-a179-4c4e-84eb-d121fb402749",
            method: "POST",
            headers: {
                Authorization: "Bearer 123"
            },
            data: {
                username: "mayank"
            }
        },
    )
    console.log(response.data);
}

main();