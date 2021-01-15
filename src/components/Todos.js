import React from 'react'
import Li from './Li';

export default function Todos(props){
    const {data,UpdateDataProperty,DeleteSIngleData,UpdateDataContent} = props;
    
    return <>
        <div id="todos">
            <ul id="todo-list">
            {
                data.map((item,index)=>{
                    return (
                        <Li 
                            key={item.id} 
                            item={item}  
                            UpdateDataProperty={UpdateDataProperty} 
                            DeleteSIngleData={DeleteSIngleData}
                            UpdateDataContent={UpdateDataContent}
                        />
                    )
                })
            }
            </ul>
        </div>
    </>
}
