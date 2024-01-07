A (mostly) blank node+express+ejs project that renders a simple page containing a p5js sketch.

Installation is simple!
*Navigate to desired directory, then:*
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
(or)
nodemon index.js
```

The app is available at `localhost:3000` by default.

Your p5js sketch will be nested under the html element with id `canvas-container` by default. To change this behaviour, simply change `parentElement` (at the top of the provided sketch.js) file to your preference.