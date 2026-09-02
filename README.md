# text-to-speech

## Project Overview

A project to learn how to build a text-to-speech.

## Project Architecture

MVC Architecture

```text
.
├── README.md
├── index.html
├── public
│   ├── robots.txt
│   └── sitemap.xml
├── src
│   ├── assets
│   ├── controller
│   │   └── main.js
│   ├── model
│   │   ├── clear.js
│   │   ├── speech.js
│   │   └── theme.js
│   └── style.css
└── vite.config.ts
```

## How to clone text-to-speech project

1. Clone repo
   ```
   git clone git@github.com:STEPHEN-EMMAHI/text-to-speech.git
   ```
2. cd into the project
   ```
   cd text-to-speech
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Run development environment
   ```
   npm run dev
   ```
5. Copy local host and send to browser
   Exampple: http://localhost:123

## Tech Stack

[![Tech Skills](https://skillicons.dev/icons?i=html,css,js,tailwind,vite,git)](https://skillicons.dev)

## Lessons learnt

1. new SpeechSynthesisUtterance() - returns a speech object.
2. properties of SpeechSynthesis() - lang, volume, pictch
3. methods of window.speechSynthesis - speak, resume, cancel, speaking, paused.

## Constraints

1. Accent doesn't change on mobile view due to mobile webViews and OS Voice Restrictions - Limited mobile voices.
