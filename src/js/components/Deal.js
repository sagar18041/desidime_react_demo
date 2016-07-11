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
      <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="deal-box shadow">
          <div class="gutter-bottom">
            <img src="../../../../images/product.jpg" class="deals-image" />
          </div>
          <div class="pad10">
            <h4>{title}</h4>
            <div class="gutter-bottom5">
              <span class="bg-dark-blue pad8 color-white border-radius3 gutter-right">
                <i class="ico ico-rupee"></i> {current_price}
              </span>
              <span class="regular-price gutter-right">
                <i class="ico ico-rupee"></i> {original_price}
              </span>
              <span class="gutter-right color-blue">
                Save {off_percentage} %
              </span>
            </div>
            <div class="gutter-bottom5 hide">score: {score}</div>
            <div class="gutter-bottom5 hide">comment_count: {comment_count}</div>

            <div class="gutter-bottom5 hide">vote_value: {vote_value}</div>

            <div class="gutter-bottom5 hide">share_url: {share_url}</div>

            <div class="gutter-bottom5 hide">deal_url: {deal_url}</div>
          </div>
        </div>
      </div>
    )
  }
}
