# 带有描述性文字

- order: 4

---

````jsx

import { Alert } from 'uxcore';
import { Button } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Alert message={' 这是一个 message'} description="这里是描述" type="message" />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-message'));
````
