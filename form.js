const App = props => (
    <LoginForm />
  );
  
  
  class LoginForm extends React.Component{
    constructor(props){
    super(props)
    this.state ={
        username:"",
        password:"",
    }
}
handleOnChangeUsername=(event) =>{
    this.setState({username:event.target.value})
    console.log(event.target.value);
}
handleOnChangePassword=(event) =>{
    this.setState({password:event.target.value})
    console.log(event.target.value);
}
handleLogin=()=>{
    console.log("username: ",this.state.username, "password: ",this.state.password)
    console.log("all state", this.state)
}
    render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
  }
  
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
   <div>
     <FormInput description="Username" 
     placeholder="Enter your username"
      type="text" 
        value={this.state.username} 
        onChange={(event)=> this.handleOnChangeUsername(event)}/>
     <FormInput description="Password" 
     placeholder="Enter your password"
      type="password"
      value={this.state.password} 
        onChange={(event)=> this.handleOnChangePassword(event)}/>
     <FormButton title="Log in"/>
   </div>
  
  );
  
  const FormButton = props => (
  <div id="button" class="row">
    <button onClick={()=>{this.handleLogin()}}>{props.title}</button>
  </div>
  );
  
  const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>
  
  );
  
   
  
  ReactDOM.render(<App />, document.getElementById('container'));