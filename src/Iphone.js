import React from 'react';
import ReactDOM from 'react-dom/client';



class Iphone extends React.Component{
constructor(){
    super()
    this.state={modelname :"apple",
color:"green",
year:"2023"
}
}
changecolor=()=>{this.setState({color:"yellow"})}

render(){
    return ( <div>
        
        <p>
          It is a {this.state.color}
          {this.state.modelname}
         
        </p>
        <button
          type="button"
          onClick={this.changecolor}
        >Change color</button>
      </div>
    )


   

    
    
        
}



}
export default Iphone;

