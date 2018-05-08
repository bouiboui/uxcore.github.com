# 多选 - 单行展示

- order: 3

在少数情况下，可能不希望多选框展开，这时可以使用样式覆盖。  
我们不推荐这种交互形式，因为选择区域的收缩，可能会损失一些功能。

---


````jsx
import { Select } from 'uxcore';
const Option = Select.Option;
import classnames from 'classnames';;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['a10', 'c12'],
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (<Select multiple
      dropdownClassName="kuma-select2-selected-has-icon"
      className={classnames({
        'single-line': this.state.value.length > 6,
      })}
      style={{ width: 400 }}
      value={this.state.value} onChange={this.handleChange.bind(this)}
    >
      {children}
    </Select>);
  }
}
ReactDOM.render(
  <Demo />
, document.getElementById('components-select2-demo-multiple-singleline'));
````

````css
.single-line .kuma-select2-selection--multiple {
    position: relative;
    overflow: hidden;
}

.single-line .kuma-select2-selection--multiple .kuma-select2-selection__rendered {
    position: absolute;
    right: 20px;
    white-space: nowrap;
}

.single-line .kuma-select2-selection--multiple .kuma-select2-selection__rendered .kuma-select2-selection__choice {
    float: none;
    display: inline-block;
}
.single-line .kuma-select2-selection--multiple .kuma-select2-selection__rendered .kuma-select2-search--inline {
    float: none;
    display: inline-block;
    vertical-align: top
}
````
