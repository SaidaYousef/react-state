import React from 'react'
export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), timerID:0};
    }
  
    componentDidMount() {
      this.setState({timerID : setInterval(
        () => this.tick(),
        1000
      )
    }); 
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      
      this.setState({
        timerID: this.state.timerID+1 
      });       
    }
  
    render() {
      return (
        <div class="container">
          
          <h2>It has been { this.state.timerID } seconds since the mounting of this component.</h2> 
        </div>
      );
    }
    
  }
