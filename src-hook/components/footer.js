import React from 'react';


export default function Footer ({DeleteAll}) {
    return <footer>
        Copyright © 2014 todolist.cn
        <a className="clear" onClick={()=>{
            DeleteAll()
        }}>&nbsp;clear</a>
    </footer>
}