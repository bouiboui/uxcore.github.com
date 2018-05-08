# 尺寸

- order: 1

提供 large/middle/small 三种尺寸

---


````css
.demo-size {
  max-width: 652px;
}
````

````jsx
import { Button } from 'uxcore';
import { Form } from 'uxcore';
const {
    Constants,
    FormRowTitle,
    FormRow: Row,
    InputFormField: Input,
    SelectFormField: Select,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    ButtonGroupFormField,
    OtherFormField: Other,
} = Form;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        size: 'large',
      },
    };
  }

  handleSubmit() {
    console.log(this.form.getValues());
  }

  handleChange(values) {
    this.setState({
      values,
    });
  }

  render() {
    const me = this;
    return (
      <div className="demo-size">
        <Form
          ref={(c) => { this.form = c; }}
          className="demo-basic-form"
          jsxvalues={this.state.values}
          jsxonChange={(values) => { this.handleChange(values); }}
          size={this.state.values.size}
        >
          <Select
            jsxname="size"
            jsxlabel="尺寸"
            jsxdata={[
              { value: 'large', text: '大' },
              { value: 'middle', text: '中' },
              { value: 'small', text: '小' },
            ]}
          />
          <Input jsxname="location" jsxlabel="地点" jsxplaceholder="请输入地点" />
          <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
          <TextArea jsxname="content" jsxlabel="内容" />
          <Other>
            <Button style={{ marginLeft: '88px', marginTop: this.state.values.size === 'small' ? '12px' : '16px' }} onClick={me.handleSubmit.bind(me)}>确定</Button>
          </Other>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-size'));
````
