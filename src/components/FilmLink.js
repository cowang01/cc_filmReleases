import React, {Component} from 'react';


class FilmLink extends Component {

  render(){
    return(
      <div className="link">
      <a href="{this.props.links}">View more upcoming film releases > ></a>
      </div>
    )
  }

}
export default FilmLink;
