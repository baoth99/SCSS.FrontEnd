import React from 'react';
import DCFeedbackSearchForm from '../../components/Feedback/DCFeedback/DCFeedbackSearchForm';
import DCFeedbackList from '../../components/Feedback/DCFeedback/DCFeedbackList';
const DCFeedbackTab = () => {
    return (
        <>
            <DCFeedbackSearchForm/>
            <DCFeedbackList/>
        </>
    );
}

export default DCFeedbackTab;
