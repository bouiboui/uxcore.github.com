# 基本使用

- order: 0

---

````jsx
import classnames from 'classnames';;

import { Rate } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 5,
      value: 3,
    };
    this.scoreTips = [
      '不给力啊',
      '还成吧',
      '哎呦，不错哦',
      '嗯，很给力',
      '哇，超出期望啊',
    ];
  }

  onChange(val) {
    console.log(val);
    this.setState({
      value: val,
    });
  }

  render() {
    return (
      <div className="rate-demo-wrp">
        <Rate className="rate-demo" total={this.state.total} value={this.state.value} scoreTips={this.scoreTips} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-rate-demo-basic'));
````
