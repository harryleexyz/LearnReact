/*// console.log("hello world +++");

import React from "react"
import ReactDOM from "react-dom"


// React 创建组件，创建DOM，管理生命周期
// 参数1：DOM名称
// 参数2：属性
// 参数3：子节点
const myH1 = React.createElement("h1", {
    title: '这是我的H1',
    id: "myH1"
}, "这是一个H1");


// ReactDOM 渲染DOM
// 参数1：DOM
// 参数2：容器
ReactDOM.render(myH1, document.getElementById("app"));*/

/*
// 装了babel后语法在.js文件中可以直接使用HTML的内容

import React from "react"
import ReactDOM from "react-dom"

const myH1 = <div>这是一个div<h1>这是一个H1</h1></div>;

ReactDOM.render(myH1, document.getElementById("app"));*/


/*
import React from "react"
import ReactDOM from "react-dom"


const arrStr = ["张三", "李四", "王五"];


// ReactDOM.render(<div>
//     {arrStr.map(item => <h1>{item}</h1>)}
// </div>, document.getElementById("app"));
// Warning: Each child in a list should have a unique "key" prop.
// 报错原因: 没有给循环控制的元素绑定唯一
// 导致会出现的错误: 会无法保存循环行的状态
// 解决办法: 给循环直接控制的元素，增加key，即最外层的元素增加key


ReactDOM.render(<div>
    {arrStr.map(item => <div key={item}><h1>{item}</h1></div>)}
</div>, document.getElementById("app"));*/


import React from "react"
import ReactDOM from "react-dom"
// import "@/class关键字"


/*
// 第一种方式：function 关键字
function Hello(pops) {
    return <h1>{pops.name} -- {pops.age}</h1>
}*/
/*
// function 关键字抽离到单独的文件
// import Hello from "./components/Hello"
import Hello from "@/components/Hello"


// 第二种方式：使用class关键字创建组件 并 extends React.Component
import SayHello from "@/components/SayHello"


// 2种方式的区别：
// class 关键字创建出来的组件有自己的私有数据（this.state）和生命周期
// 官方说法：function 创建的组件执行效率会略高
// 即 function 创建的组件叫【无状态组件】
// 即 class 创建的组件叫【有状态组件】
// 【无状态组件】和【有状态组件】的本质就是 是否有 私有数据（this.state）和生命周期

const arrStr = ["张三", "李四", "王五"];
const dog = {
    name: "小黄",
    age: 5
};

ReactDOM.render(<div>
    {arrStr.map(item => <div key={item}><h1>{item}</h1></div>)}
    <Hello {...dog}/>
    <SayHello {...dog}/>
</div>, document.getElementById("app")); */

/*
const path = require('path');
console.log(path.join(__dirname, './src')); // "/src"
console.log(__dirname); // "/"
*/

import Grid from "@/components/Grid"

ReactDOM.render(<div>
<Grid/>
</div>,document.getElementById("app"));


