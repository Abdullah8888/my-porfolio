import React from 'react';
import '../../assets/scss/home.scss';
import myPic from '../../assets/images/me.png';

export default class Home extends React.Component {
 
    render() {

        return (
            <div className="home_container">
                <div className="content">
                    <img src={myPic} alt="MyPicture" width="300px" height="300px"></img>
                    <h1>Jimoh Babatunde Olalekan</h1>
                    <h3>Mobile App Developer ( Swift, Objective-C, Kolin, Flutter )</h3>
                    <p>Please click <span><a href="mailto:abdullahijimoh3.ja@gmail.com" className="styled-link">here</a></span> to have access to my CV</p>
                    <p>Get in touch with me via <span><a href="mailto:abdullahijimoh3.ja@gmail.com" className="styled-link">abdullahijimoh3.ja@gmail.com</a></span></p>
                </div>
                
            </div>

        );

    }
}