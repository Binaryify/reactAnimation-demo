import React from "react";
import ReactDOM from "react-dom";
import ReactCssTransitionGroup from "react-addons-css-transition-group"
import "./app.scss"
var style={
  position:"absolute",
  right:"100px",
  top:"20px"
}
class App extends React.Component{
  constructor(){
    super()
    this.state={
      "item":[{"haha":"1212"}]
    }
  }
  handleClick(){
      var arr= this.state.item
      arr=[...this.state.item,{"haha":"1212"}];
      console.log(arr)
      this.setState({
        item:arr
      })
  }
  render(){
    var it=this.state.item.map(function(item){
      return <div>{item.haha}</div>
    })
    console.log(it)
    return(
      <div>
          <ReactCssTransitionGroup transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {it}
            <button onClick={ev=>this.handleClick(ev)} style={style}>add</button>
          </ReactCssTransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>
,document.getElementById('app'))
