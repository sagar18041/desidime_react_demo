import React from "react";
import Request from "superagent";
import _   from "lodash";
// import 'whatwg-fetch';
// import Fetch from "fetch";

import Deal from "../components/Deal";
import Coupon from "../components/Coupon";
import Topic from "../components/Topic";
import Merchant from "../components/Merchant";
import Channel from "../components/Channel";

export default class Home extends React.Component {
  constructor(){
    super();
    this.state={};
    this.getDeals();
  }
  getDeals(){
    const URL = "http://xxx.xxx.xxx/v2/android?app_version=1";
    var headers = new Headers();
    var request = new Request(URL, {headers: headers});
    Request
      .get(URL)
      .set('X-Desidime-Client', 'xxx')
      .set('Accept', 'application/json' )
      .then((response)=>{
        console.log(response.body);
        const {deals} = response.body;
        const {topics} = response.body;
        const {coupons} = response.body;
        const {channels} = response.body;
        const {merchants} = response.body;
        this.setState({
          deals: deals.data,
          dealsTitle: deals.title,
          coupons: coupons.data,
          couponsTitle: coupons.title,
          merchants: merchants.data,
          merchantsTitle: merchants.title,
          channels: channels.data,
          channelsTitle: channels.title,
          topics: topics.data,
          topicsTitle: topics.title,
        });
        
    });
  };

  render() {
    // this.getDeals();
    // console.log(this.state.deals);
    var Deals = _.map(this.state.deals,(deal,i)=>{
      return <Deal key={i} title={deal.title} score={deal.score} comment_count={deal.comment_count} vote_value={deal.vote_value} current_price={deal.current_price} original_price={deal.original_price} off_percentage={deal.off_percentage} share_url={deal.share_url} deal_url={deal.deal_url} />
    });
    var Coupons = _.map(this.state.coupons,(coupon,i)=>{
      return <Coupon key={i} title={coupon.title} category_image={coupon.category_image} merchant_image={coupon.merchant_image} />
    });
    var Topics = _.map(this.state.topics,(topic,i)=>{
      return <Topic key={i} user_name={topic.user_name} image={topic.image} title={topic.title} score={topic.score} front_page_suggestions_count={topic.front_page_suggestions_count}/>
    });
    var Merchants = _.map(this.state.merchants,(merchant,i)=>{
      return <Merchant key={i} name={merchant.name} image={merchant.image} recommendation={merchant.recommendation} average_rating={merchant.average_rating}/>
    });
    var Channels = _.map(this.state.channels,(channel,i)=>{
      return <Channel key={i} name={channel.name} description={channel.description} recommendationchannel_subscriptions_count={channel.recommendationchannel_subscriptions_count}/>
    });
    
    return (
      <div>
        <div class="row gutter-bottom">
          <div class="col-lg-12 col-md-12 col-sm-12 gutter-top" >
            <h1 class="margin0">{this.state.dealsTitle} </h1>
          </div>
          {Deals}
        </div>
        <div class="row gutter-bottom">
          <div class="col-lg-12 col-md-12 col-sm-12 gutter-top" >
            <h2>{this.state.couponsTitle}</h2>
          </div>
          {Coupons}
        </div>
        <div class="row gutter-bottom">
          <div class="col-lg-12 col-md-12 col-sm-12 gutter-top" >
            <h2>{this.state.merchantsTitle}</h2>
          </div>
          {Merchants}
        </div>
        <div class="row gutter-bottom">
          <div class="col-lg-12 col-md-12 col-sm-12 gutter-top" >
            <h2>{this.state.channelsTitle}</h2>
          </div>
          {Channels}
        </div>
      </div>
    );
  }
}