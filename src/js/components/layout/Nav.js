import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const dealClass = location.pathname === "/" ? "active" : "";
    const couponClass = location.pathname.match(/^\/coupon/) ? "active" : "";
    const topicClass = location.pathname.match(/^\/topic/) ? "active" : "";
    const merchantClass = location.pathname.match(/^\/merchant/) ? "active" : "";
    const channelClass = location.pathname.match(/^\/channel/) ? "active" : "";

    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={dealClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Deals</IndexLink>
              </li>
              <li class={couponClass}>
                <Link to="coupons" onClick={this.toggleCollapse.bind(this)}>Coupons</Link>
              </li>
              <li class={topicClass}>
                <Link to="topics" onClick={this.toggleCollapse.bind(this)}>Topics</Link>
              </li>
              <li class={merchantClass}>
                <Link to="merchants" onClick={this.toggleCollapse.bind(this)}>Merchants</Link>
              </li>
              <li class={channelClass}>
                <Link to="channels" onClick={this.toggleCollapse.bind(this)}>Channels</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}