# `PROMPT SHARE`

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Overview
**PromptShare** is a cutting-edge chat system powered by Gemini, designed to facilitate seamless interactions and advanced text processing. Whether it's summarizing text, performing sentiment analysis, extracting keywords, or engaging in real-time conversations with a chatbot, PromptShare has it all!

**Note:** This project is currently in progress. Features and functionalities will be added over time.

## Screenshot

![Prompt Screenshot](client/src/Assets/screenshots/prompt1.png)

## Features
- **Text Summarization**: Automatically condense lengthy texts into concise summaries.
- **Sentiment Analysis**: Gain insights into the emotional tone of your text.
- **Keyword Extraction**: Identify and extract significant keywords from documents.
- **Text Classification**: Classify text into predefined categories effortlessly.
- **Language Translation**: Translate text accurately between different languages.
- **Interactive Chatbot**: Engage with an intelligent chatbot for instant responses and assistance.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime for building scalable applications.
- **Express.js**: Fast web framework for Node.js to handle HTTP requests and routing.
- **MongoDB**: NoSQL database for storing chat messages and user data.
- **Gemini API**: Advanced AI capabilities for text processing and interactions.
- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ritahchanger/Promptshare.git
   cd Promptshare


## Starting the project

1. **Set up .env file in the root directory**

run `npm install`

`add the following `
```
PORT=choose_port (e.g., 8000)
MONGO_URI=mongodb_url
JWT_SECRET=jwt_secret
```

2. **Set up Config.js file in the root directory**

`add the following code`
```javascript
const geminiKey = {
    geminiKey: 'your_gemini_key'
};
module.exports = { geminiKey };
```
run `npm run dev` to start the server


3. **Inside client directory**

run `npm install`

run `npm run start` to start the client

`The project will automatically open on your default browser`










