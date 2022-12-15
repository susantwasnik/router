import React from 'react';
import ReactDOM from 'react-dom/client';



class Form extends React.Component{
  constructor(){
      super()
      this.state={ 
        username:'',
        comments:''
      }
  }

  handleUsernameChange=(event)=>{
    this.setState({
        username:event.target.value
    })
  }
handleCommentsChange=(event)=>{
this.setState({
    comments:event.target.value
})


}
  render(){
      return  (
        <div>
            <form>

            
            <label>Username:</label>
            <input type='text'
            value={this.state.username}
            onChange={this.handleUsernameChange}
            
            />
<label>about yourself</label>
<textarea 
value={this.state.comments}
onChange={this.handleCommentsChange}
/>
            

</form>
        </div>
      )
  }
  
  
    
  }
  export default Form;

