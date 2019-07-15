import React, { Component } from 'react';
import propTypes from 'prop-types';
class Context15 extends Component {
  // static 
  state = { 
    theme: 'red'
   }
  // 后代组件可以从这里去信息
   getChildContext() {
      return {
        theme: this.state.theme
      }
   }
  //  1------------------------------- data-theme="purple"
  //  handleToggleTheme = (e) => {
  //   const theme = e.target.dataset.theme;
  //   this.setState({
  //     theme
  //   })
  //  }

  //  2---------------------------------this.handleToggleTheme("purple")
      // handleToggleTheme = (theme) => () => {
      //   this.setState({
      //     theme
      //   })
      // }

  // 3------------------------------
      handleToggleTheme = (theme) => {
        this.setState({
              theme
          })
      }

  render() { 
    const message = ['str1', 'str2', 'str3'];
    return ( 
      <div>
        {
          message.map((item, i)=>{
            return (
              <Message key={i} text={item}></Message>
            )
          })
        }
        <button onClick={()=>{
          this.handleToggleTheme("purple")
        }} data-theme="purple">purple</button>
        <button onClick={()=>{
          this.handleToggleTheme("yellowGreen")
        }} data-theme="yellowGreen">yellowGreen</button>
      </div>
     );
  }
}
 
Context15.childContextTypes = {
  theme: propTypes.string
}

class Message extends Component {
  shouldComponentUpdate(){
    return false
  }
  render() {
    const { text } = this.props;
    return (
      <li>
        { text }
        <Mybutton></Mybutton>
      </li>
    )
  }
}

class Mybutton extends Component {
  static contextTypes = {
    theme: propTypes.string
  }
  render () { 
    const { theme } = this.context;
    return (
      <button style={{color:theme}}>delete</button>
    )
  }
}

export default Context15;