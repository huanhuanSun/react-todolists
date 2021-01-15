import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Li from './li';

export default function Main (){
    let data = useSelector(state=>state)
    return <section>
        <h2>
            正在进行
            <span id="todocount">{data.filter(item=>!item.done).length}</span>
        </h2>
        <ol id="todo-list" className="demo-box">
            {data.filter(item=>!item.done).map(item=>{
                return <Li key={item.id} item={item}/>
            })}
            
        </ol>
        <h2>
            已经完成
            <span id="donecount">{data.filter(item=>item.done).length}</span>
        </h2>
        <ul id="done-list" >
            {data.filter(item=>item.done).map(item=>{
                return <Li key={item.id} item={item} />
            })}
        </ul>
    </section>
}