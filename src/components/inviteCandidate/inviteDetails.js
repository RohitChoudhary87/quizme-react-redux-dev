import React from 'react';
import { Field } from 'redux-form';

const InviteDetails = props => {
  const { handleSubmit, submitting } = props;
  return (
    <section className="invite-details panel panel-default">
      <header className="panel-heading">
        <h5>Invite Details</h5>
      </header>
      <section className="panel-body" />
    </section>
  );
};

export default InviteDetails;
