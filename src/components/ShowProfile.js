import React, {Component} from 'react';
export default class ShowProfile extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={Person : { fullName:"Saïda Youssef",
        bio: "Nothing to add yet",
        imgSrc:"/saida.png", 
        profession: "web developer" } ,
        disp:true};
      }
     
      
       
      
    
      render() {
        return (
     
          <div class="container">
          <header >
            <div>
                {this.state.disp? 
            <div>
                <div> <img class="avatar-flip" src={this.state.Person.imgSrc} alt="profile"/></div>
                <h1>{this.state.Person.fullName}</h1>
                   <h3 >I am a {this.state.Person.profession} </h3>
                       <br></br>
                      <h2>{this.state.Person.bio}</h2>
                   </div> : null}
                   
                   <label>
                    <input type="checkbox" onClick={()=>{this.setState({disp:!this.state.disp})}} defaultChecked/>
                     <span className={this.state.disp?"slider round classA":"slider round classB"} >{ this.state.show? 'Hide' : 'Disp'}</span>
                     </label>
                    
                
                </div>
          </header>
        </div>
        );
      }
    }
