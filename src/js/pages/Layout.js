import React, {PropTypes} from "react";
import { connect } from 'react-redux'
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
// import Login from "../components/layout/Login";
// import ReactFetch from "react-fetch";


export default class Layout extends React.Component {
  render() {
    const { location, dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav 
          location={location} 
          isAuthenticated={isAuthenticated} 
          errorMessage={errorMessage} 
          dispatch={dispatch}
        />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Desidime</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  
  const { auth } = state
  const { authenticated } = state
  const { isAuthenticated, errorMessage } = auth
  
  return {
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(Layout)