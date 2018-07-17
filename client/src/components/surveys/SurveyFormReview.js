//shows users what they are about to send in the survey form that they just filled out
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>

      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

//this function is where we declare what state vars we want
function mapStateToProps(state) {
  //console.log(state); //if you want to see what global state vars are available to you
  return { formValues: state.form.surveyForm.values };
}

//we use connect when we want state variables from the global redux store
//whatever we get from mapstatetoprops will be availble to us as a prop above
export default connect(mapStateToProps)(SurveyFormReview);
