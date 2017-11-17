# 带链接

- order: 3

---

````jsx

const Alert = require('uxcore-alert');
const Button = require('uxcore-button');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Alert message={<span> 这是一个 message <a>[不再提示]</a></span>} type="message" closable />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-link'));
````
