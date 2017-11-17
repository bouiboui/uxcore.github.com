# 禁用

- order: 7

基本使用。

---

````jsx
const Select = require('uxcore-select2');
const Option = Select.Option;

ReactDOM.render(
  <Select defaultValue="lucy" style={{ width: 200 }} dropdownClassName="kuma-select2-selected-has-icon" disabled>
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="disabled" disabled>Disabled</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
, document.getElementById('components-select2-demo-disabled'));
````
