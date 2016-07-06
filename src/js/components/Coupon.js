import React from "react";

export default class Coupon extends React.Component{
  render(){
    const {title} = this.props;
    const {category_image} = this.props;
    const {merchant_image} = this.props;
    const {code} = this.props;
    const {coupon_url} = this.props;
    const {redemption_count} = this.props;
    return(
      <div class="col-md-12" >
        <h4 >{title}</h4>
        <span>CategoryImage: </span>
        <img src={category_image}/>
        <br/>
        <span>MerchantImage: </span>
        <img src={merchant_image}/>
        <span>{code}</span>
        <br/>
        <span>{coupon_url}</span>
        <br/>
        <span>{redemption_count}</span>

      </div>
    )
  }
}
