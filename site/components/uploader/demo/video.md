#  视频上传

- order: 3

视频上传。

---

````jsx
const Uploader = require('uxcore-uploader');

class Demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    handleChange(fileList) {
        this.setState({
            fileList: fileList
        })
    }
    render() {
        return <Uploader
                    accept="videos"
                    multiple={false} 
                    isOnlyImg={false}
                    fileList={this.state.fileList}
                    onChange={this.handleChange.bind(this)} 
                    name='file' 
                    url='http://eternalsky.me:8122/file/upload' 
                    locale="en" />
    }
}

ReactDOM.render(<Demo1 />, document.getElementById('components-uploader-demo-video'));
````
