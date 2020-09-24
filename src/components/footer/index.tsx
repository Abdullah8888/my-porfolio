import React from 'react';
import '../../assets/scss/footer.scss';
import twitter from '../../assets/images/social_network_images/twitter.png';
import linkedin from '../../assets/images/social_network_images/linkedin.png';
import github from '../../assets/images/social_network_images/github.png';
import medium from '../../assets/images/social_network_images/medium.png';
import youtube from '../../assets/images/social_network_images/youtube.png';
interface Props { }
interface State {
};

export default class Footer extends React.Component<Props, State> {


    render() {
        return (
            <div className="footer_container">
                <div className="social_network_logo">
                    <ul>
                        <li>
                            <a href="https://twitter.com/JIMOHAbdullahB2/" target="_blank">
                                <img src={twitter} alt="twitter" width="30px" height="30px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jimoh-babatunde-a5929484/" target="_blank">
                                <img src={linkedin} alt="linkedin" width="30px" height="30px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Abdullah8888/" target="_blank">
                                <img src={github} alt="github" width="30px" height="30px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jimoh.abdullah/" target="_blank">
                                <img src={medium} alt="medium" width="25px" height="27px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC1zxWw2dL9btUTLgHQVJtOw/" target="_blank">
                                <img src={youtube} alt="youtube" width="27px" height="27px" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    Copyright &copy; {new Date().getFullYear()}
                    <a href="https://dev-tunde.firebaseapp.com/" className="footer-host-link">dev-tunde.firebaseapp.com</a>

                </div>

            </div>
            //<div className="copyright">Copyright &copy; {new Date().getFullYear()} <a href="https://dev-tunde.firebaseapp.com/" className="footer-host-link">dev-tunde.firebaseapp.com</a></div>
        );
    }

}