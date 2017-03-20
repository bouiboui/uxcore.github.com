- order: 0
- category: START
- chinese: 开始使用

---

# [UXCore](http://uxco.re/)

[![npm version](https://img.shields.io/npm/v/uxcore.svg?style=flat-square)](https://www.npmjs.com/package/uxcore) [![Dependency Status](https://img.shields.io/david/uxcore/uxcore.svg?label=deps&style=flat-square)](https://david-dm.org/uxcore/uxcore) [![devDependency Status](https://img.shields.io/david/dev/uxcore/uxcore.svg?label=devDeps&style=flat-square)](https://david-dm.org/uxcore/uxcore#info=devDependencies)

UXCore is a set of [React](http://facebook.github.io/react/) Components that is designed for enterprise-class pc backend application.

* **Rich library:** more than 35 React Components available with high quality design.

* **Focus on backend App:** Powerful but easy-to-use Form and Table.

* **Customizable theme:** theme can be customized easily.

Before posting an issue, please read the [CHANGELOG](https://github.com/uxcore/uxcore/releases) and the README and the documentation to check the recently updated.

## For inner staff

please see http://groups.alidemo.cn/uxcore/doc/ for details.  
集团内部请查看 http://groups.alidemo.cn/uxcore/doc/ 了解详情。

## CodePen

The easiest way to start hacking on UXCore is using the following CodePen Demo:

* **[UXCore Demo](http://codepen.io/eternalsky/pen/qZwNVL)**

## [Starter kit](https://github.com/uxcore/starter-kit)

If you're just getting started, you can download the starter kit. The starter kit is initialized by [NOWA](http://nowa-webpack.github.io/web/index.html?en) which is our project-level development and production solution collections.

<a style="height: 48px;line-height: 48px;font-size:24px;text-align:center;width: 300px;background: #2599f2;color: white;display:block;border-radius: 5px;margin: 20px auto;text-decoration:none;" href="https://github.com/uxcore/starter-kit/archive/master.zip" target="_blank">Download Starter Kit</a>

## Installation

The fastest way to get started is to serve JavaScript and CSS from the CDN

```html
<link rel="stylesheet" type="text/css" href="//g.alicdn.com/??platform/common/s/1.1/global/global.css,uxcore/uxcore-kuma/2.0.31/orange.min.css">
<script src="//g.alicdn.com/uxcore/uxcore/0.1.17/uxcore.min.js">
```

if you'd like to use [npm](npmjs.com)

```sh
npm install uxcore
```

## Usage

### For cdn

```jsx
const {Button} = Uxcore;
ReactDOM.render(<Button />, mountNode);
```

### For npm
```jsx
import {Button} from 'uxcore';
ReactDOM.render(<Button />, mountNode);
```

And import style mannally

```jsx
import 'uxcore/assets/iconfont.css';
import 'uxcore/assets/orange.css';
```

## Browser Support

Mainstream browsers and Internet Explorer 8+. For IE 8, see [react-ie8](https://github.com/xcatliu/react-ie8) to get support.  

## Customization

We have implemented two default themes(orange/blue) to render UXCore Components. Theme customization is simple using our online [design tools](http://uxco.re/theme/builder).

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## License

This project is licensed under the terms of the [MIT license](This project is licensed under the terms of the MIT license)

