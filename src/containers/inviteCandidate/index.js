import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import InviteCandidate from '../../components/inviteCandidate';

const FORM_ID = 'InviteCandidateContainer';

const InviteCandidateFormContainer = reduxForm({
  form: FORM_ID
})(InviteCandidate);

const stateToProps = state => {
  return {
    initialValues: {
      candidateId: '119785',
      candidateEmail: 'rku165@sapient.com',
      candidateName: 'R. Kumar'
    }
  };
};

export default connect(stateToProps)(InviteCandidateFormContainer);
