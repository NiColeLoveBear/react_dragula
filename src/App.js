/*eslint-disable no-unused-vars*/
import React, {Component} from 'react';
import Dragular from './component/dragula';
/*eslint-enable no-unused-vars*/

class App extends Component{
  constructor(...args){
    super(...args);

    this.state={
      src: ''
    };

    // this.state={
    //   users: []
    // };
  }

  async componentDidMount(){
    let res=await fetch('/public/logo.png');
    let data=await res.blob();

    //临时
    this.setState({
      src: URL.createObjectURL(data)
    });
  }

  render(){
    return (
      <div>
        <Dragular/>
      </div>
    );
  }

  //json
  // async componentDidMount(){
  //   let res=await fetch('/public/users.txt');
  //   let data=await res.json();
  //
  //   this.setState({
  //     users: data
  //   });
  // }
  //
  // render(){
  //   return (
  //     <div>
  //       <ul>
  //         {this.state.users.map((user,index)=>(
  //           <li key={index}>
  //             <div>姓名：{user.name}</div>
  //             <div>年龄：{user.age}</div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
}

export default App;
