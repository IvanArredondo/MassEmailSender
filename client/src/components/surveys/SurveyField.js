//conatains logic to render one text input of a survey
import React from 'react';

//{ input, label } this automatically gets the props.input and props.label property
export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			{/* this ...input means take all of the props on input and pass it to the input html component*/}
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			{/*this means if touched is true keep going and render error, if its false just bail and dont even evaluate error */}
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
