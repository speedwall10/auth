import React from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';
import main from './images/main.png'
import FacebookLogin from 'react-facebook-login';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Registration from './register.jsx';
import Welcome from './welcome';

// const handleSocialLogin = (user) => {
//   console.log("rrrr");
  
//   console.log(user);
//   return <Redirect to="/register" />
// }
 
// const handleSocialLoginFailure = (err) => {
//   console.log("Error");
//   console.error(err)
// }

class App extends React.Component
{
   constructor(props) {
      super(props);
      this.state = {
          isLogin :false,
          isRegistered:false,
          data:{},
      }
      this.responseFacebook = this.responseFacebook.bind(this);
   };
   responseFacebook(response){
    //console.log(response);
    // setData(response);
    // setPicture(response.picture.data.url);
    if (response.accessToken) {
      this.setState(
        {
          isLogin:true,
          data:response,
        }

      );
      //console.log(this.state.data);
    } else {
     // setLogin(false);
    }
  }
  render()
  {
    var holderStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    var width = (this.props.appViewport && this.props.appViewport.width) ?
        this.props.appViewport.width: 0;
      if (width < 600) {
        holderStyle = Object.assign({}, holderStyle, {width: 320});
      } else {
        holderStyle = Object.assign({}, holderStyle, {width: 600});
      }
      var headingParentStyle = {
        //backgroundColor: "#9DBB2C",
        color: "white",
        height:'297px',
       //background:'transparent'
      };
    
    return(
        
        <div >
          {!this.state.isLogin && <div className='main' style={holderStyle}>
          <div style={headingParentStyle} >
            <img src={main}  width="100%" ></img>
          </div>
          <div className='bottom' >
          {/* <button class="loginBtn loginBtn--facebook">
               Facebook
            </button> */}
            <FacebookLogin
              textButton = "&nbsp;&nbsp;&nbsp;&nbsp; Facebook"
              cssClass="btnFacebook"
              appId="2652323595096187"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={this.responseFacebook}
              icon="fa-facebook" 
              />
              <br></br>
              
            {/* <button className="loginBtn loginBtn--google">
            <i className="fa fa-google-plus-square" aria-hidden="true"></i>
            &nbsp;&nbsp;&nbsp;  Google
            </button> */}
            {/* <div id="gSignInWrapper">
    <span class="label">Sign in with:</span>
    <div id="customBtn" class="customGPlusSignIn">
      <span class="icon"></span>
      <span class="buttonText">Google</span>
    </div>
  </div>
            <div style={headingParentStyle}>
            <GoogleLogin
            clientId=''
            onSuccess={this.props.SocialSignUp}
            onFailure={this.props.SocialSignUp}
            className="btnGoogle"
            style={{color:'red'}}
        >                                                         
        </GoogleLogin>
            </div> */}
            

          </div>
      </div>}
            {
              this.state.isLogin && 
                <Registration data={this.state.data}/>
              
            }
        </div>
    );
  }
}

export default App;






