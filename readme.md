# p5node

A super simple express/ejs project that renders a p5js sketch in your page.

## Features

🌠 Add flair to your EJS-rendered sites

🖥️ Render a sketch as the background of your page

📦 Automatically scales to a `<div>`

💾 Pass data from your server to your sketch


## Installation
1. Navigate to your desired install location and then clone:

```
git clone https://github.com/StinkyDubeau/p5node.git
cd p5node
```

2. Install dependencies:

```
npm i
```

3. Run using node

```
node .
```
4. Open your app 
The app is available at localhost:3000 by default.

Your p5js sketch will be nested under the html element with id "canvas-container". To change this behaviour, change `parentElement`. *(It's located at the top of the provided sketch.js file.)*

---

This project is maintained for my own use. I will update with features I find useful.
