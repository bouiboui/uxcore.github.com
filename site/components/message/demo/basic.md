# 基本使用

- order: 0

默认的提醒样式。

---

````jsx

import { Message } from 'uxcore';
import { Button } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick(type) {
    Message[type](`这是一个 ${type}`);
  }

  render() {
    const me = this;
    return (
      <div className="demo1">
        <Button onClick={me.handleClick.bind(me, 'success')}>显示成功提示</Button>
        <Button onClick={me.handleClick.bind(me, 'info')}>显示普通提示</Button>
        <Button onClick={me.handleClick.bind(me, 'error')}>显示错误提示</Button>
        <Button onClick={me.handleClick.bind(me, 'loading')}>显示加载提示</Button>
      </div>
    );
  }
}
ReactDOM.render(
  <Demo />
, document.getElementById('components-message-demo-basic'));

/* JS END CSS START*/

````

````css
.demo1 .kuma-button + .kuma-button {
    margin-left: 20px
}
````