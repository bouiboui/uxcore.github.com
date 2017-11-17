触发事件
========

-	order: 3

触发事件

---

````jsx
const Dropdown = require('uxcore-dropdown');
const Menu = require('uxcore-menu');
const Button = require('uxcore-button');

const onClick = function ({ key }) {
  alert(`选中了菜单${key}`);
};

const menu = (<Menu onClick={onClick}>
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
  <Dropdown overlay={menu}>
    <Button>触发事件</Button>
  </Dropdown>,
    document.getElementById('components-dropdown-demo-events')
);
````
