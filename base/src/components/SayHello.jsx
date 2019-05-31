import React from 'react'

export default class SayHello extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "小黄是黄色毛发"
        };
    }

    render() {
        // 注意1: 继承React.Component 组件必须要有render 函数
        // 注意2: 继承render 函数必须要有返回值，如果是空组件也要返回null
        // return null;
        // 注意3: 继承React.Component 组件 使用参数用 this.props 就可以直接获取
        // 注意4: this.props里的元素是只读的
        // this.props.name = "小黑"; //Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
        // 注意5: 继承React.Component 组件 有自己的状态
        // 注意6: this.state 里面的值是可读可写的
        this.state.color = "小黑是黑色毛发";
        return <h1>{this.props.name} -- {this.props.age} -- {this.state.color}</h1>
    }
}

// export default SayHello;