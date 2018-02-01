import React from 'react';
import { Redirect } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { actions, selectors } from './duck';

const withAuthorizationHOC = WrappedComponent => {
  let loggedin = true;
  class WithAuthorization extends React.Component {
    render() {
      if (loggedin) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to={{ pathname: '/login' }} />;
      }
    }
  }

  const stateToProps = state => {
    return {
      isUserLoggedIn: () => {
        return loggedin;
      }
    };
  };

  /*const dispatchToProps = dispatch => {
        return bindActionCreators(actions, dispatch);
    };*/

  return connect(stateToProps)(WithAuthorization);
};

export default withAuthorizationHOC;
