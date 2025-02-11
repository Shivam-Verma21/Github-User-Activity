const axios = require("axios");
const baseURL = "https://github.com/"
let username

const { log } = require('node:console')
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Enter github username : `, name => {
    username = name

    const fetchGithubEvents = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}/events`);
            const data = response.data;
            data.forEach(element => {
                console.log("Event type :", element.type)
                console.log("Repository :", element.repo.name.split('/')[1])
                console.log("Repository URL :", baseURL + element.repo.url.split("https://api.github.com/repos/")[1])
                console.log("Message :", element.payload.commits[0].message);
                console.log("---------------------------------------------------------------")
            });
        } catch (error) {
            console.log(error, "User not found");
        }
    }

    fetchGithubEvents(username)

    rl.close();
});
