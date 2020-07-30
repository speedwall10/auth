import React from 'react';
import './welcome.css';
import {Redirect} from 'react-router-dom';
import Papa from 'papaparse';


class Read extends React.Component{

    constructor(props)
    {
      super(props);
      //console.log(props.file[0].name);
      this.state ={
        data:props.file
      }
    }
    render()
    { 
      var arr = this.state.data;
      var elements=[];
        for(var i=0;i<arr.length;i++){
             // push the component to elements!
            elements.push(<div style={{height:'44px'}}>
            <p style={{fontFamily:"Montserrat",fontSize:'14px',fontWeight:'Bold',textAlign:'left',paddingTop:'20px'}}>{this.state.data[i].name} <i className="fa fa-location-arrow" aria-hidden="true" style={{fontSize:'12px',textAlign:'right',paddingLeft:'100px'}}>{this.state.data[i].location}</i>
              </p>
        </div>);
        }
      return(
        <div>

        {elements}        
        
    </div>
      );
    }
}
export default Read;
