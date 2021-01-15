import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Li (props){
    let {item} = props;
    const dispatch = useDispatch();
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
                    dispatch({
                        type:'EDITDONE',
                        checked:e.target.checked,
                        id:item.id
                    })
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
                            dispatch({
                                type:'EDITEDATA',
                                id:item.id,
                                content:val
                            })
                        }
                        else{
                            setVal(item.content)
                        }
                    }}
                />
            </p>
            <a onClick={()=>{
                dispatch({
                    type:'DELETE',
                    id:item.id
                })
            }}>-</a>
    </li>
}