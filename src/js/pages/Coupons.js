import React from "react";
import Request from "superagent";
import _   from "lodash";
// import 'whatwg-fetch';
// import Fetch from "fetch";

import Coupon from "../components/Coupon";

export default class Coupons extends React.Component {
  constructor(){
    super();
    this.state={};
    this.getCoupons();
  }
  getCoupons(){
    const URL = "http://139.162.46.29/v2/coupons.json";
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append("X-Desidime-Client", "68045fd226ab32029c98bf4533bfa98b3c50423094d292d70ca2702e61a9679b");
    var request = new Request(URL, {headers: headers});
    Request
      .get(URL)
      .set('X-Desidime-Client', '68045fd226ab32029c98bf4533bfa98b3c50423094d292d70ca2702e61a9679b')
      .set('Accept', 'application/json' )
      .then((response)=>{
        console.log(response.body);
        const {coupons} = response.body;
        this.setState({
          coupons_count: coupons.total_count,
          coupons: coupons.data
        });
        
    });
  };
  render() {
    // this.getCoupons();
    // console.log(this.state.coupons);
    var Coupons = _.map(this.state.coupons,(coupon,i)=>{
      return <Coupon key={i} title={coupon.coupon_detail} merchant_image={coupon.merchant.image} code={coupon.code}  coupon_url={coupon.coupon_url}  redemption_count={coupon.redemption_count}  category_image={coupon.image} />
    }); 
    return (
      <div>
        <div class="row">
          <div class="col-md-12" >
            <h4>{this.state.couponsTitle}</h4>
            <ul>
              {Coupons}
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