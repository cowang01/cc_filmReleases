import React, {Component} from 'react';


class Film extends Component {

  render(){
    return(
      <>
      <li>
      <a href="{this.props.url}"> {this.props.name}</a>
      <br></br>
      <br></br>
      </li>
      </>
    )
  }

}

export default Film;
