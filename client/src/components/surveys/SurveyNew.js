//Survey new shows surveyForm and surveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	// constructor(props) {
	//   super(props);
	//   this.state = { showFormReview: false };
	// }

	state = { showFormReview: false }; //this is the same as above, its a new way of making the constructor, but fast

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<SurveyFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

//we add this here because if we navigate away from this component, like we log out
//we want the form values to get dumped, this is default but we unset the default in SurveyForm
export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
