A (mostly) blank node/express/ejs project that renders a simple page containing a p5js sketch.

This project is currently maintained only for my own use. I will update with features I find useful.

Installation is easy. Navigate to your desired directory, then:
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
