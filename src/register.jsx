import React from 'react'
import './register.css'
import female from "./images/woman.png"
import male from "./images/man.png"
import Select from "react-dropdown-select";
import Welcome from './welcome.jsx';


//let appChoice = ['Strava', 'Garmin', 'Fitbit', 'Map my Ride','others'];
class Registration extends React.Component {
    constructor(props) {
      super(props);
      console.log(props.data.name);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRadio = this.handleRadio.bind(this);
      this.setValues = this.setValues.bind(this);
        this.state={
            name:props.data.name,
            email:props.data.email,
            flag:false,
            data:[],
            app:'',
            appChoice:{},
            multichoice:[],
            isRegistered : false,
        }
    }
    componentDidMount()
    {
      this.setState({
        appChoice:[{value:'Strava',label:'Strava'}, {value:'Garmin',label:'Garmin'}, {value:'Fitbit',label:'Fitbit'},
         {value:'Map my Ride',label:'Map my Ride'},{value:'others',label:'others'}]
      });
    }
    
    handleSubmit(e) {
      const radios = document.forms.form1.elements.gender;
      const checked = Array.from(radios).find(radio=>radio.checked)
        //alert('The value is: ' + checked.value);
     this.setState(
       {data :this.state.data.push({
        
        'name' : document.getElementById('name').value,
        'email':document.getElementById('email').value,
        'age': document.getElementById('age').value,
        'gender':checked.value,
        'phoneNumber' : document.getElementById('telephone').value,
        'location':document.getElementById('location').value,
        'appChoice':this.state.app,
       })}
     ); 
       let header = ['name','email','age','gender','phoneNumber','location','appChoice'].join(',') + '\n';
       let csv = header;

       this.state.data.forEach(obj=>{
         let row = [];
          for( var i in obj)
          {
              row.push(obj[i]);
          }
          csv += row.join(',')+"\n";
       });
       let csvData = new Blob([csv], { type: 'text/csv' });  
            let csvUrl = URL.createObjectURL(csvData);

            let hiddenElement = document.createElement('a');
            hiddenElement.href = csvUrl;
            hiddenElement.target = '_blank';
            hiddenElement.download = 'fileName' + '.csv';
            hiddenElement.click();
       console.log(csv);
       this.setState({
         isRegistered:true,
       })
      e.preventDefault();
    }
    handleRadio (s)
    {
        if(!this.state.flag)
        {
         var ss = document.getElementById(s).style.color='#4CAF50';
         console.log(ss);
          //document.getElementById(s)[0].style.color = '#4CAF50';
          this.setState(()=>this.state.flag=true);
        }
        else
        {
          document.getElementById(s).style.color = 'white';
          this.setState(()=>this.state.flag=false);
        }
    }
    setValues(value)
    {
      this.setState({
        app:value,
      });
      console.log(value);
    }
    handleMultiChange(option) {
      this.setState(state => {
          return {
              multiValue: option
          };
      });
  }
    render() {
      var headingStyle={
        height:100,
      }
      var doneBlock = {
        backgroundColor:'#008000',
      }
      var doneBtn ={
        backgroundColor: '#4CAF50',
        border:'none',
        borderRadius:'25px',
        color: 'white',
        padding: '16px 32px',
        textDecoration: 'none',
        margin: '4px 12px',
        cursor: 'pointer',
        width:'90%'
      }

      var rowStyle = {
        //height: 40,
        padding:'10px',
        textAlign:'center'
      };
      var boxStyle ={
        padding:'10px',
          border:'0',
        //boxShadow:'0 0 15px 4px rgba(0,0,0,0.06)',
        borderRadius:'25px',
        backgroundColor: '#EFEFEF',
        width:'90%',
        height:30,
        font:'italic',
      }
      var headingStyle = {
        lineHeight: "20px",
        textAlign: "center",
        color:'#000000'
      };
      var headingParentStyle = {
        backgroundColor: "#F8A531",
        color: "white",
        height: 0,
        // display: "none"
      };
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
      var childrenContainerStyle = {
        backgroundColor: "#fff",
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        // paddingTop: 6,
      };
      var innerChildrenContainerStyle = {
        border:"1px solid #4CAF50",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom:40,
        color: "#F8A531"
      };
      var headingStyle = {
       // lineHeight: "56px",
        textAlign: "center",
        color:'black',
        fontFamily:'Montserrat',
        fontSize:'18px'
      };
      return (
        <div>
          {!this.state.isRegistered && 
        
        <div style={holderStyle}>
      <div style={headingParentStyle}>
      </div>
      <div style={childrenContainerStyle}>
        <div style={innerChildrenContainerStyle}>
        <form onSubmit={this.handleSubmit} name="form1">
              <div >
                <h3 style={headingStyle}>Lets Get to know you</h3>
              </div>
              <div style={rowStyle}>
              <label>
             <input style={boxStyle} id='name' type="text"  defaultValue={this.state.name}  placeholder=" Name"/><br></br>
          </label>
              </div>
          <div style={rowStyle}>
                  <input id="email" style={boxStyle} type="email" defaultValue={this.state.email} placeholder=" E-Mail" /><br></br>
          </div>
          <div style={rowStyle}>
                  <input style={boxStyle} id='telephone' type="telephone" placeholder=" Phone No." required /><br></br>
          </div>
          <div>
            <label>
              <p style={{color:'black',textAlign:'left',fontFamily:'Montserrat',fontWeight:'bold',marginLeft:'14px'}} >Gender</p>
            </label>
            <label>
                <input type="radio" name="gender" value="male" onClick={()=>this.handleRadio('male')}></input>
                <img src={male} height='50' width='50' style={{position:'relative',margin:"10px 20px 10px 40px",}}></img>
                </label>
                <label>
                <input type="radio" name="gender" value="female" onClick={()=>this.handleRadio('female')} />
                <img src={female} height='50' width='50'style={{position:'absolute',margin:"10px 90px 10px 85px"}}></img>
                </label>
          <div>
            
                  <label id='male' style={{marginLeft:'55px',fontFamily:'Montserrat',fontWeight:'bold',color:'white',fontSize:'12px'}}>Male</label>
                  <label id='female' style={{marginLeft:'125px',fontFamily:'Montserrat',fontWeight:'bold',color:'white',fontSize:'12px'}}>Female</label>
          </div>
          </div> 
          <div>
                    <p style={{color:'black',textAlign:'left',fontFamily:'Montserrat',fontWeight:'bold',marginLeft:'14px'}} >Age</p>
          </div>    
              <div style={rowStyle}>
              <input style={boxStyle} id="age" type="number" placeholder=" Age" required /><br></br>
              </div>   
              <div>
                  <p style={{color:'black',textAlign:'left',fontFamily:'Montserrat',fontWeight:'bold',marginLeft:'14px'}}>Select Your City</p>
          </div> 
          <div style={rowStyle}>
                  <input style={boxStyle} id='location' type="text" placeholder=" Location" required /><br></br>
          </div>
          <div>
                  <p style={{color:'black',textAlign:'left',fontFamily:'Montserrat',fontWeight:'bold',marginLeft:'14px'}}>App You Prefer</p>
          </div>
          <div style={rowStyle}>
          <Select style={{color:'grey',backgroundColor:'#F5F5F5', paddingLeft:'10px', textAlign:'left',fontFamily:'Montserrat',fontWeight:'9px',borderRadius:'25px'}}  options={this.state.appChoice} onChange={(values) => this.setValues(values)} required
           />
          </div>
          {/* <div>
                  <p style={{color:'black',textAlign:'left',fontFamily:'Montserrat',fontWeight:'bold',marginLeft:'14px'}}>Select Blood Group</p>
          </div>  */}
          {/* <div >
              
              <label id='l1'>
               <input type='radio' value='A+' name='blood' ></input>
              <p id='grp' className='A+' onClick={()=>this.handleRadio('A+')}>A+</p>
              </label>
              <label>
               <input type='radio' value='A-' name='blood'></input>
               <p id='grp' className='A-' onClick={()=>this.handleRadio('A-')}>A-</p> 
              </label>
              <label>
               <input type='radio' value='B+' name='blood'></input>
               <p id='grp' className='B+' onClick={()=>this.handleRadio('B+')}>B+</p>
              </label>
              <label>
               <input type='radio' value='B-' name='blood'></input>
               <p id='grp' className='B-' onClick={()=>this.handleRadio('B-')}>B-</p>
              </label>
              <label>
               <input type='radio' value='O+' name='blood'></input>
               <p id='grp' className='O+' onClick={()=>this.handleRadio('O+')}>O+</p>
              </label>
              <label>
               <input type='radio' value='O-' name='blood'></input>
               <p id='grp' className='O-' onClick={()=>this.handleRadio('O-')}>O-</p>
              </label>
              <label>
               <input type='radio' value='AB+' name='blood'></input>
               <p id='grp' className='AB+' onClick={()=>this.handleRadio('AB+')}>AB+</p>
              </label>
              <label>
               <input type='radio' value='AB-' name='blood'></input>
               <p id='grp' className='AB-' onClick={()=>this.handleRadio('AB-')}>AB-</p>
              </label>
            </div>      */}
          <div>
                  <input style={doneBtn} type="submit" value="DONE" />
          </div>
        </form>
        </div>
      </div>
      </div>}
      {
        this.state.isRegistered && 
        <Welcome />
      }
    </div>

      );
    }
  }

  export default Registration;


  
  