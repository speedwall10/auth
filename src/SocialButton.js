import React from 'react'
import SocialLogin from 'react-social-login'
 
class SocialButton extends React.Component {
 
    render() {
        return (
            <button style={{width:'237px',height:'44px'}} onClick={this.props.triggerLogin} {...this.props}>
              { this.props.children }
              {console.log(this.props.children)}
            </button>
        );
    }
}
 
export default SocialLogin(SocialButton);