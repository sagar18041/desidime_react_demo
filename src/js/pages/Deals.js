import React from "react";
import Request from "superagent";
import _   from "lodash";
// import 'whatwg-fetch';
// import Fetch from "fetch";

import Deal from "../components/Deal";
import Channel from "../components/Channel";

export default class Deals extends React.Component {
  constructor(){
    super();
    this.state={};
    this.getDeals();
  }
  getDeals(){
    const URL = "http://xx.xx.xx.xx/v2/android?app_version=1";
    var headers = new Headers();
    Request
      .get(URL)
      .set('X-Desidime-Client', 'xxxx')
      .set('Accept', 'application/json' )
      .then((response)=>{
        console.log(response.body);
        const {deals} = response.body;
        this.setState({
          deals: deals.data,
          dealsTitle: deals.title
        });
        
    });
  };
  render() {
    // this.getDeals();
    // console.log(this.state.deals);
    var Deals = _.map(this.state.deals,(deal,i)=>{
      return <Deal key={i} title={deal.title} score={deal.score} comment_count={deal.comment_count} vote_value={deal.vote_value} current_price={deal.current_price} original_price={deal.original_price} off_percentage={deal.off_percentage} share_url={deal.share_url} deal_url={deal.deal_url} />
    }); 
    return (
      <div>
        <div class="row">
          <div class="col-md-12" >
            <h4>{this.state.dealsTitle}</h4>
            <ul>
              {Deals}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// const Articles = [
//       "Some Article",
//       "Some Other Article",
//       "Yet Another Article",
//       "Still More",
//       "Fake Article",
//       "Partial Article",
//       "American Article",
//       "Mexican Article",
//     ].map((title, i) => <Article key={i} title={title}/> );