import React, { useState } from "react"




function Todo(){

  
  const [input,setInput]=useState(" ")
  const [data,setData]=useState([])



  function submitForm(e){
  e.preventDefault()
  // console.log(input)
  }
  
  const items=(e)=>{
  setInput(e.target.value)
  }

  const addItems=()=>{

    setData((addingItems)=>{
      return(
        [...addingItems,input]
      )
    })
    setInput(" ")
  }

  const deleteItem=()=>{
setData(data.filter(t =>t.id!==id))
  }
const edit=()=>{

}

  return(
      <div className="parent">
        <h1>Todo List !!!</h1>

        <div>
          <form onSubmit={submitForm}> 
            {/* <input type="text" placeholder="type your text ..." id="input" 
           onChange={(e)=>setInput(e.target.value)} value={input} ></input> */}
            <input type="text" id="input"
             value={input}
           onChange={items}></input>

            <button type="submit" id="btn" onClick={addItems}>add</button>
            
          </form>
        </div>
         
         <div className="itemlist">
            <ul>
             {
              data.map((item)=>{
               return  <li>{item}</li>
              })
             }
            </ul>
         </div>

      </div>

  )
}

export default Todo

