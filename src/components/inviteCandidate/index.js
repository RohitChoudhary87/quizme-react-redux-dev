import React from 'react';
import { Field } from 'redux-form';
import CandidateDetails from './candidateDetails';
import InviteDetails from './inviteDetails';

const InviteCandidate = props => {
  return (
    <section className="invite-candidate">
      <CandidateDetails {...props} />
      <InviteDetails {...props} />
    </section>
  );
};

export default InviteCandidate;
