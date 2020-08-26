import React from 'react';
import '../../assets/scss/home.scss';
import me from '../../assets/images/me-min.png';
import storage from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { remoteConfig } from 'firebase';


interface HomeSateFields {
    isLoading: boolean
    myImageUrl: string
}
export default class Home extends React.Component<HomeSateFields>{

    state: HomeSateFields = {
        isLoading: true,
        myImageUrl: ""

    }

    componentDidMount() {
        document.title = 'Tundev'
        storage.ref('images').child('tunde_circle.png').getDownloadURL()
        .then(url => {
            console.log('the url is ' + url)
            this.setState({
                isLoading: false,
                myImageUrl: url
            })
        })
        .catch((err) => {
            console.log(err + 'while trying to retrieve my image')
        });
    }

    render() {
        var sam: any
        if (this.state.isLoading) {
            sam = <p style={{marginTop: "70px"}}><FontAwesomeIcon icon={faSpinner} color="white" size={"2x"} pulse /></p>
        }
        else {
            sam = <img src={this.state.myImageUrl} alt="MyPicture" width="300px" height="300px"></img>
        }

        return (
            <div className="home_container">
                <div className="content">
                    <div className="hold_my_pics"> 
                        {sam}
                    </div>
                    <h1>Jimoh Babatunde Olalekan</h1>
                    <h3>Mobile App Developer ( Swift, Objective-C, Kotlin, Flutter )</h3>
                    <p>Please click <span><a href="https://drive.google.com/file/d/15CN1MI-tXY5Muxlso9XPUzen4eRXm3Ko/view?usp=sharing" className="styled-link" target="_blank">here</a></span> to have access to my resume</p>
                    <p>Get in touch with me via on  <span><a href="https://wa.link/yxv8as" className="mailme" target="_blank" rel="noopener noreferrer">whatsapp</a> or  </span><span><a href="mailto:abdullahijimoh3.ja@gmail.com" className="styled-link">abdullahijimoh3.ja@gmail.com</a></span></p>
                    
                </div>

            </div>

        );

    }
}

