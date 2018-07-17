//shows users what they are about to send in the survey form that they just filled out
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={onCancel}
			>
				Back
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className="green white-text btn-flat right"
			>
				Send Survey
				<i className="material-icons right">email</i>
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
export default connect(
	mapStateToProps,
	actions
)(withRouter(SurveyFormReview));
