
import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

let dataT = [
  {
    id:0,
    content:'aa',
    done:false
  },
  {
    id:1,
    content:'bb',
    done:true
  }
]
function App() {
  let [data,setData] = useState(dataT);

  //添加数据
  function AddTodo(val){
    data.push({
      id:Date.now(),
      content:val,
      done:false
    })
    setData([...data])
  }

  //编辑todo状态
  function changeDone(id,checked) {
    data = data.filter(item=>{
      if (item.id === id) {
        item.done = checked
      }
      return item
    })
    setData([...data])
  }

  //编辑数据
  function EditTodo(id,content){
    data = data.filter(item=>{
      if (item.id === id) {
        item.content = content
      }
      return item
    })
    setData([...data])
  }

  //删除数据
  function DeleteTodo(id){
    data = data.filter(item=>item.id != id)
    setData([...data])
  }

  //删除所有
  function DeleteAll(){
    setData([])
  }


  return (
    <div className="App">
      <Header AddTodo={AddTodo} />
      <Main data={data} changeDone={changeDone} DeleteTodo={DeleteTodo} EditTodo={EditTodo}/>
      <Footer DeleteAll={DeleteAll} />
    </div>
  );
}

export default App;
