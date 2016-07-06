import React from "react";

export default class Deal extends React.Component{
  render(){
    const {title} = this.props;
    const {score} = this.props;
    const {comment_count} = this.props;
    const {vote_value} = this.props;
    const {current_price} = this.props;
    const {original_price} = this.props;
    const {off_percentage} = this.props;
    const {share_url} = this.props;
    const {deal_url} = this.props;
    return(
      <div class="col-md-12" >
        <li>
        <h4 >{title}</h4>
        <span>score: {score}</span>
        <br/>
        <span>comment_count: {comment_count}</span>
        <br/>
        <span>vote_value: {vote_value}</span>
        <br/>
        <span>current_price: {current_price}</span>
        <br/>
        <span>original_price: {original_price}</span>
        <br/>
        <span>off_percentage: {off_percentage}</span>
        <br/>
        <span>share_url: {share_url}</span>
        <br/>
        <span>deal_url: {deal_url}</span>
        </li>
      </div>
    )
  }
}
