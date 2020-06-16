import React from 'react';
import '../../assets/scss/projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import Bg from '../../assets/images/welcome_screen.jpg';
// import Bg2 from '../../assets/images/result_screen.jpg';
// import brainy1 from '../../assets/images/img_2_list/brainy_1.png';
// import brainy2 from '../../assets/images/img_2_list/brainy_2.png';
// import brainy3 from '../../assets/images/img_2_list/brainy_3.png';
// import quran1 from '../../assets/images/img_1_list/quran_1.png';
// import quran2 from '../../assets/images/img_1_list/quran_2.png';
// import quran3 from '../../assets/images/img_1_list/quran_3.png';
// import flutterShop1 from '../../assets/images/img_3_list/flutter_shop1.png';
// import flutterShop2 from '../../assets/images/img_3_list/flutter_shop2.png';
// import flutterShop3 from '../../assets/images/img_3_list/flutter_shop3.png';
// import portfolio1 from '../../assets/images/img_4_list/portfolio_1.png';
// import portfolio2 from '../../assets/images/img_4_list/portfolio_2.png';
// import portfolio3 from '../../assets/images/img_4_list/portfolio_3.png';

//interface Props { }
interface ImageSliderState {
    img1UrlList: string[],
    img2UrlList: string[],
    img3UrlList: string[],
    img4UrlList: string[],
    img1Index: number,
    img2Index: number,
    img3Index: number,
    img4Index: number,
    colorIndex1: number,
    colorIndex2: number,
    colorIndex3: number,
    color: string[],
    colorStatus: boolean
};

export default class Projects extends React.Component<ImageSliderState> {
    //var imgList: string[];

    state: ImageSliderState = {
        img1UrlList: ["https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_1_list%2Fquran_1.png?alt=media&token=b34440b6-539a-41e2-abbc-60d6845f5228", 
                        "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_1_list%2Fquran_2.png?alt=media&token=27f70c44-423f-4923-8f76-875455c7cbcd", 
                        "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_1_list%2Fquran_3.png?alt=media&token=c1b5bf62-8d7f-40f7-b0d2-0d71a26d597d"],

        img2UrlList: ["https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_2_list%2Fbrainy_1.png?alt=media&token=08aded8f-02aa-4733-b252-3b68775d0004", 
                "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_2_list%2Fbrainy_2.png?alt=media&token=52be83fd-a9a5-4706-b928-7a38d061369f",
                 "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_2_list%2Fbrainy_3.png?alt=media&token=ee10d857-7a93-4228-b2af-e2ae738175c0"],

        img3UrlList: ["https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_3_list%2Fflutter_shop1.png?alt=media&token=c5e38161-1da1-4ff0-ae58-1ff5d1fd8478", 
                    "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_3_list%2Fflutter_shop2.png?alt=media&token=1fd8979a-44ce-4bf4-9df6-77c2b9bf85b4",
                     "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_3_list%2Fflutter_shop3.png?alt=media&token=e0efba21-b656-4abf-81eb-de4cf8f09970"],

        img4UrlList: ["https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_4_list%2Fportfolio_1.jpg?alt=media&token=c3e46b45-e5a3-4b1b-9f0d-9f4f39595add",
                     "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_4_list%2Fportfolio_2.jpg?alt=media&token=3308d43d-c61c-4013-8282-0434cbd0f9f8",
                     "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_4_list%2Fportfolio_3.jpg?alt=media&token=adabf361-9fc8-467b-a1bf-49168dd90f81"],
        //imgUrl: [Bg, Bg2, 'sd'],
        img1Index: 0,
        img2Index: 0,
        img3Index: 0,
        img4Index: 0,
        colorIndex1: 0,
        colorIndex2: 1,
        colorIndex3: 2,
        color: ["red", "white", "white"],
        colorStatus: false
    }

    showfirstImage = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log("the target is" + event.currentTarget.className)
        var nameOfClass = event.currentTarget.className;
        switch (nameOfClass) {
            case "img1": {
                this.setState({
                    img1Index: 0
                });
                break
            }
            case "img2": {
                this.setState({
                    img2Index: 0
                });
                break
            }
            case "img3": {
                this.setState({
                    img3Index: 0
                });
                break
            }
            case "img4": {
                this.setState({
                    img4Index: 0
                });
                break
            }
        }

    }

    showSecondImage = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log("the target is" + event.currentTarget.className)
        var nameOfClass = event.currentTarget.className;
        switch (nameOfClass) {
            case "img1": {
                this.setState({
                    img1Index: 1
                });
                break
            }
            case "img2": {
                this.setState({
                    img2Index: 1
                });
                break
            }
            case "img3": {
                this.setState({
                    img3Index: 1
                });
                break
            }
            case "img4": {
                this.setState({
                    img4Index: 1
                });
                break
            }
        }

    }

    showThirdImage = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log("the target is" + event.currentTarget.className)
        var nameOfClass = event.currentTarget.className;

        switch (nameOfClass) {
            case "img1": {
                this.setState({
                    img1Index: 2
                });
                break
            }
            case "img2": {
                this.setState({
                    img2Index: 2
                });
                break
            }
            case "img3": {
                this.setState({
                    img3Index: 2
                });
                break
            }
            case "img4": {
                this.setState({
                    img4Index: 2
                });
                break
            }
        }
       

    }

    // componentDidMount () {
    //     setInterval(() => {
    //         var index = this.state.imageIndex + 1
    //         if (index === 3) {
    //             index = 0;
    //         }
    //         this.setState({
    //             imageIndex: index
    //         });
    //     }, 
    //     3000);

    // }

    render() {
        return (
            <div className="project_container">
                <h1 className="project_header">Projects</h1>
                <div className="content">
                    <div className="project_card">
                        <div className="project_img_and_navigation">
                            <img className="project_card_image" alt="MyPicture" width="250px" height="500px" src={this.state.img1UrlList[this.state.img1Index]}></img>
                            <div className="project_card_navigation">
                                <ul>
                                    <li className="img1" onClick={this.showfirstImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white" /></span></li>
                                    <li className="img1" onClick={this.showSecondImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white" /></span></li>
                                    <li className="img1" onClick={this.showThirdImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white"  /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="project_card_bottom">
                            <p>Quran247 app is owned by Dawah Nigeria (A platform for the Ummah)
                                <br/>the app contain all Nigerian Hafiz (i.e Quran reciters), 
                                <br/>which users can stream or download any of the quran reciter's track. 
                                <br/>The app also connects to some wep app of the platform, 
                                <br/>which are embeded in this app.
                                <br/><i className="tools_used">Tools used: Swift, Xcode</i> 
                                <br/>click to <span><a href="https://github.com/Abdullah8888/Quran247" className="tools_used">here</a></span> to have access to the repo    
                            </p>
                        </div>

                    </div>

                    <div className="project_card">
                        <div className="project_img_and_navigation">
                            <img className="project_card_image" alt="MyPicture" width="250px" height="500px" src={this.state.img2UrlList[this.state.img2Index]}></img>
                            <div className="project_card_navigation">
                                <ul>
                                    <li className="img2" onClick={this.showfirstImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                    <li className="img2" onClick={this.showSecondImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                    <li className="img2" onClick={this.showThirdImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="project_card_bottom">
                            <p>Brainy app was a task given my team during the HNGi7
                                <br/>(An online intership programm). I built the UI 
                                <br/>of the app using figma, debug some part of the code
                                <br/>preapre the documentation and screenshots needed for 
                                <br/>app submission in play store and app store.
                                <br/><i className="tools_used">Tools used: Figma, Xcode, Flutter, Dart, vscode</i>
                                <br/>click to <span><a href="https://github.com/Abdullah8888/avengers-stage-2-mobile" className="tools_used">here</a></span> to have access to the repo 
                            </p>
                        </div>

                    </div>


                    <div className="project_card">
                        <div className="project_img_and_navigation">
                            <img className="project_card_image" alt="MyPicture" width="250px" height="500px" src={this.state.img3UrlList[this.state.img3Index]}></img>
                            <div className="project_card_navigation">
                                <ul>
                                    <li className="img3" onClick={this.showfirstImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                    <li className="img3" onClick={this.showSecondImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                    <li className="img3" onClick={this.showThirdImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="project_card_bottom">
                            <p>Shopping is a demo app. This was used to improve and perfect
                                <br/>my flutter and dart skills. A sample of this was also done in kotlin.
                                <br/><i className="tools_used">Tools used: Flutter, Dart, vscode</i>
                                <br/>click to <span><a href="https://github.com/Abdullah8888/flutter_shopping_app" className="tools_used">here</a></span> to have access to the repo 
                            </p>
                        </div>

                    </div>

                    <div className="project_card">
                        <div className="project_img_and_navigation">
                            <img className="project_card_image" alt="MyPicture" width="250px" height="500px" src={this.state.img4UrlList[this.state.img4Index]}></img>
                            <div className="project_card_navigation">
                                <ul>
                                    <li className="img4" onClick={this.showfirstImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                    <li className="img4" onClick={this.showSecondImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                    <li className="img4" onClick={this.showThirdImage} ><span><FontAwesomeIcon icon={faCircle} color="white" /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="project_card_bottom">
                            <p>Portfolio is a demo app. This was used to improve and perfect
                                <br/>my kotlin skills. <i className="tools_used">Tools used: Kolin, Android Studio</i>
                                <br/>click to <span><a href="https://github.com/Abdullah8888/PortfolioApp" className="tools_used">here</a></span> to have access to the repo 
                            </p>
                        </div>

                    </div>

                    



                </div>

            </div>

        );

    }
}