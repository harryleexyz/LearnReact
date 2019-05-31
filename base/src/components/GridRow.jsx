import React from "react";
import style from "@/css/styles.scss"

// 第一层封装：样式为单独的变量
// const nameStyle = {color: "green", fontWeight: 300, fontSize: 18};
// const remarkStyle = {fontSize: 13};

// 第二层封装：整合到一个变量
const styles = {
    name: {color: "green", fontWeight: 300, fontSize: 18},
    remark: {fontSize: 13}
};


export default function GridRow(props) {
    return <div className={style.row}><h1 style={styles.name}>姓名：{props.name}</h1><p style={styles.remark} className={"all"}>备注：{props.remark}</p></div>
    // return <div><h1 style={nameStyle}>姓名：{props.name}</h1><p style={remarkStyle}>备注：{props.remark}</p></div>
}