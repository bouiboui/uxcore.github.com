点击触发
========

-	order: 2

点击触发

---

````jsx
const Dropdown = require('uxcore-dropdown');
const Menu = require('uxcore-menu');
const Button = require('uxcore-button');

const menu = (<Menu>
  <Menu.Item>
    <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
  </Menu.Item>
</Menu>);

ReactDOM.render(
  <Dropdown overlay={menu} trigger={['click']}>
    <Button>点击触发</Button>
  </Dropdown>,
    document.getElementById('components-dropdown-demo-click')
);
````
