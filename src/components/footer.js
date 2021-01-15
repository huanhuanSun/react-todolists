import React from 'react';
import { useDispatch } from 'react-redux';


export default function Footer ({DeleteAll}) {
    const dispatch = useDispatch()
    return <footer>
        Copyright © 2014 todolist.cn
        <a className="clear" onClick={()=>{
            dispatch({
                type:'DELETEALL'
            })
        }}>&nbsp;clear</a>
    </footer>
}