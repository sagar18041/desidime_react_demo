import React from "react";
import Request from "superagent";
import _   from "lodash";
// import 'whatwg-fetch';
// import Fetch from "fetch";

import Deal from "../components/Deal";

export default class Deals extends React.Component {
  constructor(){
    super();
    this.state={};
    this.getDeals();
  }
  getDeals(){
    const URL = "http://xxx.xxx.xxx/v2/android?app_version=1";
    var headers = new Headers();
    Request
      .get(URL)
      .set('X-Desidime-Client', 'xxx')
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
      {Deals}
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