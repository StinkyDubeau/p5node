# p5node

A super simple express/ejs project that renders a p5js sketch in your page.

## Features

🌠 Add flair to your EJS-rendered sites

🖥️ Render a sketch as the background of your page

📦 Automatically scale your sketch to a `<div>`

💾 Pass data from your server to your sketch

## FAQ

How do I move my sketch?

> Your sketch will fit itself to any element with the id "canvas-container". If you can scale a `<div>`, you can scale your sketch!

Can I embed multiple sketches?

> Yes, just make new sketch files and link them in your index.ejs file. Ensure each sketch has a unique `canvas-container`, otherwise your sketches will occupy the same space.*

*Your p5js sketch will be nested under the html element with id "canvas-container". To change this behaviour, change `parentElement`. *(It's located at the top of the provided sketch.js file.)*

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

---

This project is maintained for my own use. I will update with features I find useful.
