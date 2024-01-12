
<h1>p5node</h1>
A (mostly) blank node/express/ejs project that renders a simple page containing a p5js sketch. This project is maintained only for my own use. I will update it with features I find useful.

<h2>Installation</h2>
1. Clone
```
git clone https://github.com/StinkyDubeau/p5node.git
cd p5node
```
2. Install packages
```
npm i
```
3. Run using node
```
node .
```

The app is available at localhost:3000 by default.

Your p5js sketch will be nested under the html element with id "canvas-container". To change this behaviour, change `parentElement` (located at the top of the provided sketch.js file) to your preference.
