# modern web 2016 e2e test

**checkout code**

```
git clone https://github.com/alincode/modern-web-2016-e2etest.git
```

### Step by Step

**init project**

```
npm init -y
npm i webdriverio -D
npm i selenium-standalone -D
```

**init config**

```
node_modules/webdriverio/bin/wdio
```

**setting up npm test**

`vi package.json`

**init test folder**

`mkdir -p ./test/specs/`

**write first test**

`vi ./test/specs/demo1.js`

**execute test**

```
npm run demo1
npm run demo2
npm run demo3
npm run demo4
npm run dev-test
```
