import React, { useRef, useState, useEffect } from 'react';

export default function Li (props){
    let {item,changeDone,DeleteTodo,EditTodo} = props;
    let [edit,setEdit] = useState(false);

    let [val,setVal] = useState(item.content);

    const ref = useRef(null)
    //监听编辑状态
    useEffect(()=>{
        ref.current.select();
    },[edit])
    return <li>
             <input
                type="checkbox" 
                checked={item.done}
                onChange={(e)=>{
                    changeDone(item.id,e.target.checked)
                }}
            />
            <p className={edit?"edit":''}
                onDoubleClick={()=>{
                    setEdit(true)
                }}
            >
                <span>{val}</span>
                <input 
                    type="text" 
                    value={val}
                    ref={ref}
                    onChange={(e)=>{
                        setVal(e.target.value)
                    }}
                    onBlur={()=>{
                        setEdit(false)
                        if(val.trim()) {
                            EditTodo(item.id,val)
                        }
                        else{
                            setVal(item.content)
                        }
                    }}
                />
            </p>
            <a onClick={()=>{
                DeleteTodo(item.id)
            }}>-</a>
    </li>
}