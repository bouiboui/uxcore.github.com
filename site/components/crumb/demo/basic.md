# 基本

- order: 0

---

````jsx
const classnames = require('classnames');

const Crumb = require('uxcore-crumb');

class Demo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Crumb className="crumb-style crumb-root">
        <Crumb.Item href="#" className="crumb-item-style">首页</Crumb.Item>
        <Crumb.Item href="#">管理平台</Crumb.Item>
        <Crumb.Item href="#">流程管理</Crumb.Item>
        <Crumb.Item className="crumb-item-style">编辑流程信息</Crumb.Item>
      </Crumb>
    );
  }
}

ReactDOM.render(
  <Demo />,
 document.getElementById('components-crumb-demo-basic'));
````