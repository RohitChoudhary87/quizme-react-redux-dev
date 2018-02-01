import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from './duck';
import { InviteList } from '../../components';

class InviteListContainer extends React.Component {
  componentDidMount() {
    this.props.requestInviteList();
  }

  render() {
    return <InviteList entries={this.props.items} />;
  }
}

const stateToProps = state => {
  return {
    items: selectors.getItems(state)
  };
};

const dispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(stateToProps, dispatchToProps)(InviteListContainer);
