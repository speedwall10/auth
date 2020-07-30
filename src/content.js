import React from 'react';
class ContentHolder extends React.Component {
  constructor(props) {
    super(props);
    // this.Facebook = null;
    // This binding is necessary to make `this` work in the callback
  }
  render() {
    var headingParentStyle = {
      backgroundColor: "#F8A531",
      color: "white",
      height: 56,
      // display: "none"
    };
    var holderStyle = {
      marginLeft: 'auto',
      marginRight: 'auto'
    };
    var width = (this.props.appViewport && this.props.appViewport.width) ?
      this.props.appViewport.width: 0;
    if (width < 600) {
      holderStyle = Object.assign({}, holderStyle, {width: 320});
    } else {
      holderStyle = Object.assign({}, holderStyle, {width: 600});
    }
    var childrenContainerStyle = {
      backgroundColor: "#fff",
      paddingLeft: 6,
      paddingRight: 6,
      paddingBottom: 6,
      // paddingTop: 6,
    };
    var innerChildrenContainerStyle = {
      borderLeft: "1px solid #F8A531",
      borderRight: "1px solid #F8A531",
      borderBottom: "1px solid #F8A531",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
      color: "#F8A531"
    };
    var headingStyle = {
      lineHeight: "56px",
      textAlign: "center"
    };
    
    return (
    <div style={holderStyle}>
      <div style={headingParentStyle}>
        <div>
          <h3 style={headingStyle}>{this.props.eventTitle}</h3>
        </div>
      </div>
      <div style={childrenContainerStyle}>
        <div style={innerChildrenContainerStyle}>
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}
export default ContentHolder;
