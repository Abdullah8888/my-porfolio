import React from 'react';
import '../../assets/scss/privacy_policy.scss';


class PrivacyPolicy extends React.PureComponent {
    componentDidMount() {
        document.title = 'Privacy Policy'
    }
    render() {
        return(
            <div className="privacy_policy_container">
                
                <div className="privacy_policy_header">
                    <h1 className="">Privacy Policy</h1>
                </div>
                <div className="privacy_policy_content">
                    <p> Reen is a mobile application that helps users load airtime via the camera of the device. </p>
                    <p>It doesn't request or collect user's personal information. </p>
                </div>
                
            </div>

        );
    }
}

export default PrivacyPolicy;