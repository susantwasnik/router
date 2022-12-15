import React from 'react';
import ReactDOM from 'react-dom/client';



class Head extends React.Component{
constructor(props){
    super(props);
    this.state={favouritecolor:"red"}
   

}
 static getDerivedStateFromProps(props, state) {
    return {favouritecolor: props.favcol };
  }



render(){
    return ( <div>
        
       <h1>my fovourite color is {this.state.favouritecolor}</h1>
      </div>
    )


   

    
    
}
}




export default Head;

