import React from "react";

export default class Merchant extends React.Component{
  render(){
    const {name} = this.props;
    const {average_rating} = this.props;
    const {image} = this.props;
    const {recommendation} = this.props;
    return(
      <div class="col-md-12" >
        <h4 >{name}</h4>
        <span>Image: </span>
        <img src={image}/>
        <br/>
        <span>Recommendation: {recommendation}</span>
        <br/>
        <span>Rating: {average_rating}</span>
      </div>
    )
  }
}
