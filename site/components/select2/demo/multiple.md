# 多选

- order: 2

多选，从已有条目中选择（scroll the menu）

---


````jsx
const Select = require('uxcore-select2');
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select multiple
    style={{ width: 400 }}
    dropdownClassName="kuma-select2-selected-has-icon"
    defaultValue={['a10', 'c12']} onChange={handleChange}
  >
    {children}
  </Select>
, document.getElementById('components-select2-demo-multiple'));
````
