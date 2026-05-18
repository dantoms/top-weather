# webpack-base
A simple webpack config


## Setup

Run these commands in the terminal

```bash
npm init -y --init-type=module
npm install --save-dev webpack webpack-cli
```

## Handle HTML
```bash
npm install --save-dev html-webpack-plugin
```
The default location is `./src/template.html`

## Handle CSS
```bash
npm install --save-dev style-loader css-loader
```
> [!IMPORTANT]
> ### Loader order matters for CSS!
> Notice how we put css-loader at the end of the array. We must set this order and not the reverse.
>
> Webpack will run the loaders starting at the end, so we want it to read the CSS file into a string with css-loader first, then use style-loader to inject the JavaScript that applies the CSS in that string to the page. It wouldn’t work the same the other way round.

### Import css in JS file
```bash
import "./styles.css"
```

## Loading images
### url()
`css-loader` handles images loaded in css using `url()`

### \<img src="">
`html-loader` is required
```bash
npm install --save-dev html-loader
```

### Images used in JavaScript
Just uncomment re relevant section in `webpack.config.js`
The regex in the `test` property can be edited to remove extensions you don't need

Add this to your JS file:
```js
import myImage from "./image.png";
```
and use `myImage` as `src` value

## Webpack dev server
Install the server
```bash
npm install --save-dev webpack-dev-server
```
Helps with error messages:
```js
devtool: "eval-source-map"
```
Tell webpack to watch for changes in our html file
```js
watchFiles: ["./src/template.html"]
```

Run the server:
```bash
npx webpack serve
```
Our site will then be available via http://localhost:8080/ by default.

> [!TIP]
> Restart the dev server upon config changes
>
> Note that the webpack-dev-server only reads your webpack configuration when you start it. If you change the webpack config file while the dev server is running, it will not reflect those config changes. Use Ctrl + C in the terminal to kill it then rerun npx webpack serve to apply the new config.