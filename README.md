# GitHub User Events Fetcher

This is a simple Node.js script that fetches and displays recent GitHub activity events for a given username.

## Project URL - https://roadmap.sh/projects/github-user-activity

## Features

- Fetches recent events from the GitHub API.
- Displays event type, repository name, repository URL, and commit message.
- Uses `axios` for HTTP requests and `readline` for user input.

## Requirements

- Node.js (v14 or later)
- Internet connection

## Installation

1. Clone this repository or download the script.
2. Open a terminal and navigate to the project folder.
3. Install dependencies:

   ```sh
   npm install axios
   ```

## Usage

1. Run the script:

   ```sh
   node index.js
   ```

2. Enter the GitHub username when prompted.
3. The script will fetch and display recent events.

## Example Output

```
Enter GitHub username: octocat
Event type: PushEvent
Repository: Hello-World
Repository URL: https://github.com/octocat/Hello-World
Message: Initial commit
---------------------------------------------------------------
```

## Error Handling

- If the username is invalid or does not exist, the script will log an error message.

