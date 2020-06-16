import React from 'react';
import '../../assets/scss/services.scss';


class Services extends React.PureComponent {
    render() {
        return (
            <div className="services_container">
                <h1 className="services_header">Services</h1>
                <div className="content">
                    <div className="inner_content">
                        <div>
                            <h3>Hire as Mobile Dev</h3>
                            <div className="skills">
                                <p>Proficiency at </p>
                                <li>Swift</li>
                                <li>Objective C</li>
                                <li>Kotlin</li>
                                <li>Flutter</li>
                            </div>

                        </div>

                        <div>
                            <h3>Mentor</h3>
                            <div className="skills">
                                <p>Available online courses are </p>
                                <li>Mobile Development (Swift, Objectice C, Flutter, Kotlin)</li>
                                <li>Frontend Development (React, HTML, CSS, SASS, Javascript)</li>
                                <p>Learn online, you can reach me at <span><a href="mailto:abdullahijimoh3.ja@gmail.com" className="mailme">abdullahijimoh3.ja@gmail.com</a></span></p>
                            </div>

                        </div>
                    </div>

                    {/* <div className="inner_content">
                        <div>
                            <h3>Mobile Dev</h3>
                            <div className="skills">
                                <p>Proficiency at </p>
                                <li>Swift</li>
                                <li>Objective C</li>
                                <li>Kotlin</li>
                                <li>Flutter</li>
                            </div>

                        </div>

                        <div>
                            <h3>Mobile Dev</h3>
                            <div className="skills">
                                <p>Proficiency at </p>
                                <li>Swift</li>
                                <li>Objective C</li>
                                <li>Kotlin</li>
                                <li>Flutter</li>
                            </div>

                        </div>
                    </div> */}

                </div>
            </div>
        );
    }
}

export default Services;