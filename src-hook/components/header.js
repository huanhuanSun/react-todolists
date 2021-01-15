import React, { useState } from 'react'


export default function Header(props){
    let {AddTodo} = props;
    let [val,setVal]=useState('')


    return <header>    
        <section>
            {/* <form id="form"> */}
                <label htmlFor="title">React-hook-TODOList</label>
                <input 
                    type="text" 
                    placeholder="添加todo" 
                    required="required" 
                    autoComplete="off"
                    value={val}
                    onChange={(e)=>{
                        setVal(e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        if (e.keyCode === 13 ) {
                            if(e.target.value.trim()) {
                                AddTodo(e.target.value)
                                setVal('')
                            }
                            else{
                                alert('输点东西吧....')
                            }
                        }
                    }}
                />
            {/* </form> */}
        </section>
    </header>
}