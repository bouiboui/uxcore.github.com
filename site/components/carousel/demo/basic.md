# 基本使用

- order: 0

---

````css
.demo {
    width: 400px;
    height: 225px;
}

.code-box {
    width: 100%;
}

/* CSS END JS START*/

````


````jsx
import classnames from 'classnames';;

import { Carousel } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ width: 1000 }}>
        <Carousel className="demo" autoplay pauseOnHover>
          <div><img src="https://img.alicdn.com/tfs/TB1.kR0aTnI8KJjy0FfXXcdoVXa-400-225.jpg" style={{ width: '100%' }} /></div>
          <div><img src="https://img.alicdn.com/tfs/TB1HSBZaIrI8KJjy0FhXXbfnpXa-400-225.jpg" style={{ width: '100%' }} /></div>
          <div><img src="https://img.alicdn.com/tfs/TB1GmBZaIrI8KJjy0FhXXbfnpXa-400-225.jpg" style={{ width: '100%' }} /></div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-carousel-demo-basic'));

````

