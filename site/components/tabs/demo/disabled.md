# 禁用

- order: 5

禁用某一项。

---

````jsx
const Tabs = require('uxcore-tabs');
const TabPane = Tabs.TabPane;

function callback(key) {}

ReactDOM.render(
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="tab 1" key="1">选项卡一</TabPane>
    <TabPane tab="tab 2" disabled key="2">选项卡二</TabPane>
    <TabPane tab="tab 3" key="3">选项卡三</TabPane>
  </Tabs>
, document.getElementById('components-tabs-demo-disabled'));
````
