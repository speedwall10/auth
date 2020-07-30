import React from 'react';
import './welcome.css';
import {Redirect} from 'react-router-dom';
import Papa from 'papaparse';
import read from './read';
import * as d3 from 'd3';
// import data from './data.csv';
import Read from './read';

class Welcome extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            file:{},
            isEmpty:false,
        };
        
      //    this.updateData = this.updateData.bind(this);
      //  // this.getData = this.getData.bind(this);
      //  var csvFilePath = require("./data.csv");
      //  var Papa = require("papaparse/papaparse.min.js");
      //  Papa.parse(csvFilePath, {
      //  header: true,
      //  download: true,
      //  skipEmptyLines: true,
      //  complete: this.updateData
      //  });
   }

   updateData(result) {
       const data = result.data;
       console.log(data);
       this.setState({
               file:data,
               isEmpty:true,
       });
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
        backgroundColor: "#7DA74B",
        color: "white",
        height:'330px',
        //background:'transparent'
      };
      var headingStyle = {
        //lineHeight: "20px",
        paddingTop:'42px',
        textAlign: "center",
        color:'#FEFEFF',
        fontFamily:'Montserrat',
        fontSize:'17px',
        fontWeight:'bold',
        
        
      };
      var welcomeBlock ={
          margin: '10px 22px 22px 22px',
          backgroundColor:'#9DBB52',
         // backgroundColor:'#FFFFFF',
          opacity:'1',
          heigth:'304px',
          position:'relative',
          textAlign:'left',
          paddingLeft: '25px',
          paddingBottom:'10px',
      }
      var paraHeader={
          paddingTop:'20px',
        fontWeight:'semibold',
        fontFamily:'Montserrat',
        fontSize:'15px',
      }
      var partiBar ={
            lineHeight:'35px',
            paddingLeft:'20px',
          height:'40px',
          backgroundColor:'#FFFFFF',
          width:'100%',
          textAlign:'center'
      }
      var bottomBar ={
          marginTop:'10px',
          backgroundColor:'white',
          width:'100%',
          height:'100%',
          paddingLeft:'10px',
          paddingBottom:'20px'

      }
    
    return(
           <div className='main' style={holderStyle}>
          <div style={headingParentStyle} >
              <p style={headingStyle}>Welcome</p>
              <div style={welcomeBlock}>
                    <p style={paraHeader}>Mahamarathon</p>
                    <p style={{fontFamily:"Montserrat",fontSize:'12px',fontWeight:'regular'}}>
                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. 
                    Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen.
                    </p>
                    <p style={{fontFamily:"Montserrat",fontSize:'12px',fontWeight:'regular'}}>
                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. 
                    Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen.
                    </p>
                    <button className='parti'>Participate</button>
              </div>
          </div>
              <div style={partiBar}>
                        <p style={{fontFamily:"Montserrat",fontSize:'14px',fontWeight:'bold',textAlign:'left',}}>Participants
                        <label style={{paddingLeft:'100px'}}>200</label>
                        </p>
          </div>
          <div style={bottomBar}>
            {this.state.isEmpty && <Read file={this.state.file} />}
            
          </div>
      </div>
    );
  }
}

export default Welcome;






