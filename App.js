import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draggable, {DraggableCore} from 'react-draggable';
import Todo from './todo.jsx';




export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      value: <Todo/>,

      list :[],
    
       };

       

    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
      }


handleChange = event =>


{

this.setState({value:event.target.value});

}

deleteHandler(value)
{ 
 var r =this.state.list;

 r.splice(value,1)
console.log(value)
this.setState({list: r})
}




clickHandler(event)
{
this.setState(
  {
    list: this.state.list.concat(this.state.value)
  });
event.preventDefault();
}


  render() {
    return (
      <React.Fragment>

<div className="container.fluid">
<button className="btn btn-primary" onClick={this.clickHandler}><h3>New Task Manager</h3></button>
</div>


{this.state.list.map((item,index)=>
    <Draggable><div className="container" style={{maxWidth:"500px",backgroundColor:"whitesmoke" }}>
  
      
  <div className="row bg-primary">
            <div className="col-md-6 lef">
             
             
               <h3 className="">
                Task Manager
               </h3>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
                 <button className="btn btn-danger" value={index} onClick={()=>this.deleteHandler(index)}>X</button>
            </div>
          </div>
      {item}
     </div>
  </Draggable>
     
     )
           } 

          </React.Fragment>
    )
  }
}


export default App;