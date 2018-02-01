import React from 'react';
import { Field } from 'redux-form';
import { Labelled, TextEditable } from '../formElement';
import { Button } from 'react-bootstrap';

const CandidateDetails = props => {
  const { handleSubmit, submitting } = props;
  return (
    <section className="invite-details panel panel-default">
      <header className="panel-heading">
        <h5>Candidate Details</h5>
      </header>
      <section className="panel-body" id="collapseExample">
        <Labelled label="ID">
          <Field
            name="candidateId"
            component={TextEditable}
            type="text"
            placeholder="Candidate ID"
          />
        </Labelled>
        <Labelled label="Email">
          <Field
            name="candidateEmail"
            component={TextEditable}
            type="text"
            placeholder="Candidate Email"
          />
        </Labelled>
        <Labelled label="Name">
          <Field
            name="candidateName"
            component={TextEditable}
            type="text"
            placeholder="Candidate Name"
          />
        </Labelled>
        <button
          onClick={handleSubmit(e => console.info(420, e))}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Add Candidate
        </button>
      </section>
    </section>
  );
};

export default CandidateDetails;
