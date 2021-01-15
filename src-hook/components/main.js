import React, { useState } from 'react'
import Li from './li';

export default function Main (props){
    let {data,changeDone,DeleteTodo,EditTodo} = props;
    return <section>
        <h2>
            正在进行
            <span id="todocount">{data.filter(item=>!item.done).length}</span>
        </h2>
        <ol id="todo-list" className="demo-box">
            {data.filter(item=>!item.done).map(item=>{
                return <Li key={item.id} changeDone={changeDone} DeleteTodo={DeleteTodo} item={item} EditTodo={EditTodo}/>
            })}
            
        </ol>
        <h2>
            已经完成
            <span id="donecount">{data.filter(item=>item.done).length}</span>
        </h2>
        <ul id="done-list" >
            {data.filter(item=>item.done).map(item=>{
                return <Li key={item.id} changeDone={changeDone} DeleteTodo={DeleteTodo} item={item} EditTodo={EditTodo}/>
            })}
        </ul>
    </section>
}