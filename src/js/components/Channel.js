import React from "react";

export default class Channel extends React.Component{
  render(){
    const {name} = this.props;
    const {description} = this.props;
    const {channel_subscriptions_count} = this.props;
    return(
      <div class="col-md-12" >
        <h4 >{name}</h4>
        <br/>
        <span>channel_subscriptions_count: {channel_subscriptions_count}</span>
        <br/>
        <span>description: {description}</span>
      </div>
    )
  }
}
