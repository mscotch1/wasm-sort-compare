# wasm-sort-compare
A comparison between sorting an array via JavaScript and via Wasm

## Requirements
- cargo
- wasm-pack
- npm

## Building and running the software
```bash
git clone git@github.com:mscotch1/wasm-sort-compare.git
cd wasm-sort-compare
wasm-pack build --release
cd web
npm install
npm run serve
```
Then just open a browser to `localhost:8080`.