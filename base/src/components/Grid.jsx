import React from 'react'
// 使用 @ 符号可以避免路径问题
// import GridRow from "./GridRow"
import GridRow from "@/components/GridRow"
// 第三层封装：抽离为单独的css文件
import style from "@/css/styles.scss"
import "bootstrap/dist/css/bootstrap.css"

console.log(style); // {}
// 注意1：在没有配置样式的模块化时，样式是回应用到所有的文件这里打印的是 {}
// 在设置完css的模块化后打印：{title: "_1_SjtDCiFqhB0kvNkh5p4F", row: "_2l2aNIbX7fS85a_GqUoFqm"}

// 注意1：导入node_modules 模块时可以省略目录，因为会先去找
// 注意2：导入后回报错 无法处理字体，需要导入url-loader并配置
// ./node_modules/_bootstrap@3.3.7@bootstrap/dist/fonts/glyphicons-halflings-regular.ttf 1:0
// cnpm install url-loader file-loader -D
/*
项目中使用bootstrap
安装：cnpm install bootstrap@3.3.7 -S
问题1：这时 引入的其他的css 也会被模块话，使用很不方便，怎么处理
    答案：想办法不处理引入的css
解决方法1：直接排除 node_modules ？ 不行报错
解决方法2：既然引入的都是css文件，那么我就用一种新的文件 less or scss
安装：cnpm install sass-loader node-sass -D
1.更改自己的css文件名称为.scss
2.webpack.config.js增加处理器

*/

export default class Grid extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: "张三", remark: "这是张三"},
                {id: 2, name: "Jack", remark: "这是Jack"},
                {id: 3, name: "王五", remark: "这是王五"}
            ],
            txtVal: ""
        }
    }

    render() {
        return <div>
            <h1 className={style.title}>这是展示列表</h1>
            <div className="input-group" style={{ margin :'0 10px 0 10px'}}>
                <input type="text" className="form-control" ref="txt" value={this.state.txtVal} onChange={(e)=> this.txtChange(e)}/>
                    <span className="input-group-addon"  onClick={() => {this.print()}} >添加</span>
            </div>
            {this.state.data.map(item => <GridRow key={item.id} {...item} />)}
        </div>
    }

    print = () => {
        console.log("Hello 添加");
        // 注意1：在React中给this.state赋值，要使用this.setState({}); 不然页面不刷新
        // this.state.data.push( {id: 4, name: "赵六", remark: "这是赵六"});

        // 注意2：setState 只会修改传入的或者新增的state 不会删除
        // 注意3：setState 是异步的，要拿到最新的，可以使用第二个参数，回调this.setState({},callback)

        // 注意4：若想获取页面上的元素有2种办法，第一种 refs ,第二种 e.target
        // const newVal = this.refs.txt.value;
        // console.log(this.refs);

        const newVal = this.state.txtVal;
        this.setState({
            // data: this.state.data.concat({
            //     id: this.state.data.length + 1,
            //     name: "我是" + this.state.data.length,
            //     remark: "这是" + this.state.data.length
            // })
            data: [...this.state.data, {
                id: this.state.data.length + 1,
                name: "我是" + newVal,
                remark: "这是" + newVal
            }],
            txtVal: "" // 添加完成之后把文件框清空
        }, () => console.log(this.state.data))

    }

    txtChange = (e) => {
        this.setState({
            txtVal: e.target.value
        });
    }
}

//#region 测试代码块 用户自己的折叠代码块

//#endregion