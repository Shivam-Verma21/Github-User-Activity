const axios = require("axios");
const baseURL = "https://github.com/"
let username

const { log } = require('node:console')
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Enter github username : `, async (name) => {
    username = name

    const fetchGithubEvents = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}/events`);
            const data = response.data;

            if (!data || data.length === 0) {
                console.log("No events found for this user.");
                return;
            }

            data.forEach(element => {
                const repoUrl = `https://github.com/${element.repo.name}`;
                let message = "No message available";

                if (element.type === "PushEvent" && element.payload.commits && element.payload.commits.length > 0) {
                    message = element.payload.commits[0].message;
                } else if (element.payload.pull_request && element.payload.pull_request.title) {
                    message = element.payload.pull_request.title;
                }

                console.log("Event type :", element.type);
                console.log("Repository :", element.repo.name);
                console.log("Repository URL :", repoUrl);
                console.log("Message :", message);
                console.log("---------------------------------------------------------------")
            });
        } catch (error) {
            console.error("Error fetching data:", error.response?.status === 404 ? "User not found" : error.message);
        }
    }

    await fetchGithubEvents(username)

    rl.close();
});
