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
    const URL = "http://xx.xx.xx.xx/v2/android?app_version=1";
    var headers = new Headers();
    var request = new Request(URL, {headers: headers});
    Request
      .get(URL)
      .set('X-Desidime-Client', 'xxxxx')
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
        <div class="row">
          <div class="col-md-12" >
            <h4>{this.state.dealsTitle}</h4>
            <ul>
              {Deals}
            </ul>
            <h4>{this.state.couponsTitle}</h4>
            <ul>
              {Coupons}
            </ul>
            <h4>{this.state.topicsTitle}</h4>
            <ul>
              {Topics}
            </ul>
            <h4>{this.state.merchantsTitle}</h4>
            <ul>
              {Merchants}
            </ul>
            <h4>{this.state.channelsTitle}</h4>
            <ul>
              {Channels}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}