# 简洁

- order: 6

简单地翻页。

---

````jsx
var Pagination = require('uxcore-pagination');

function onChange(page) {
  console.log(page);
}

React.render(
  <Pagination simple onChange={onChange} total={50} />,
document.getElementById('components-pagination-demo-simple'));
````