import React, { useState } from 'react';
import {useDispatch} from 'react-redux'


export default function Header(props){
    const dispatch = useDispatch();
    let [val,setVal]=useState('')
    return <header>    
        <section>
            {/* <form id="form"> */}
                <label htmlFor="title">TODOList</label>
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
                                dispatch({
                                    type:'ADD',
                                    content:val
                                })
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