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
      <div>  
        <div class="col-lg-4 col-md-6 col-sm-12 gb20">
          <div class="brd-gray shadow">
            <div class="pos-relative">
              <img src={category_image} class="coupons-image"/>
              <div class="transparent-overlay"></div>
              <div class="coupon-store-container">
                <div class="coupon-store">
                  <img src="http://cdn0.desidime.com/merchants/222/medium/snapdeal_logo.png"/>
                </div>
              </div>
              <div class="coupon-description z-index2">
                <div class="font25 color-blue">EID5FEST</div>
                <div class="color-white">
                  Get 5% Off on Amazon.in Email Gift Cards
                </div>
              </div>
            </div>
            <div class="bg-white pad10">
              Buy an Amazon.in Email Gift Card listed on this Gift Cards page worth Rs.1000 or more and get Rs.50 Off. + Upto 70% off on Clothing & Accessories.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
