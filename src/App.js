import React from 'react';
import ShowProfile from './components/ShowProfile';
import './components/style.css';
import Counter from './components/Counter';

class App extends React.Component {
  state={
    Person : { fullName:"Saïda Youssef",
  bio: "Nothing to add yet",
  imgSrc:"/saida.png", 
  profession: "web developer" } ,
  disp:true};

    render() {
    return (
      <div class="profileContainer">
     
    <ShowProfile/>
    <Counter/>   
      
    </div>
       ) }
  
}
export default App;
