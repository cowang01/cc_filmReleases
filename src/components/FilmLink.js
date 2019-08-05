import React, {Component} from 'react';


class FilmLink extends Component {

  render(){
    return(
      <a href="{this.props.links}">View more upcoming film releases > ></a>
    )
  }

}
export default FilmLink;
