import React from "react";

export default class Coupon extends React.Component{
  render(){
    const {user_name} = this.props;
    const {image} = this.props;
    const {title} = this.props;
    const {score} = this.props;
    const {front_page_suggestions_count} = this.props;
    return(
      <div class="col-md-12" >
        <h4 >{title}</h4>
        <span>UserName:{user_name} </span>
        <br/>
        <img src={image}/>
        <br/>
        <span>Score: {score}</span>
        <br/>
        <span>FPDcount: {front_page_suggestions_count}</span>
      </div>
    )
  }
}
