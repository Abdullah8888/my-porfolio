import React from 'react';
import '../../assets/scss/projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

//interface Props { }
interface ImageSliderState {
    img1UrlList: string[],
    img2UrlList: string[],
    img3UrlList: string[],
    img4UrlList: string[],
    img5UrlList: string[],
    img6UrlList: string[],
    img1Index: number,
    img2Index: number,
    img3Index: number,
    img4Index: number,
    img5Index: number,
    img6Index: number,
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
        
        img5UrlList: ["https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_5_list%2Fshop1.png?alt=media&token=fb739cd5-e006-4576-ae54-2569b80b3369", 
                    "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_5_list%2Fshop2.png?alt=media&token=be6160ba-f10d-4f69-8d10-6b54a481db41", 
                    "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_5_list%2Fshop3.png?alt=media&token=325ead1e-605e-4dc3-96a3-9c124a50c8c8"],
        
        img6UrlList: ["https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_6_list%2Fkongapay2.png?alt=media&token=07dde1cb-4f8b-4098-9d01-24ba688b4772",
                    "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_6_list%2Fkongapay1.png?alt=media&token=b4106340-99c5-4c76-9830-8842b70df84a",
                    "https://firebasestorage.googleapis.com/v0/b/dev-tunde.appspot.com/o/img_6_list%2Fkongapay3.png?alt=media&token=8d50fec5-8ccd-4592-af80-4787fb2a1a9e"],
                    
        img1Index: 0,
        img2Index: 0,
        img3Index: 0,
        img4Index: 0,
        img5Index: 0,
        img6Index: 0,
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
            case "img5": {
                this.setState({
                    img5Index: 0
                });
                break
            }
            case "img6": {
                this.setState({
                    img6Index: 0
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
            case "img5": {
                this.setState({
                    img5Index: 1
                });
                break
            }
            case "img6": {
                this.setState({
                    img6Index: 1
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
            case "img5": {
                this.setState({
                    img5Index: 2
                });
                break
            }
            case "img6": {
                this.setState({
                    img6Index: 2
                });
                break
            }
        }
       

    }

    componentDidMount() {
        document.title = 'Portfolio'
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
                            <img className="project_card_image" alt="MyPicture" width="250px" height="500px" src={this.state.img5UrlList[this.state.img5Index]}></img>
                            <div className="project_card_navigation">
                                <ul>
                                    <li className="img5" onClick={this.showfirstImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white" /></span></li>
                                    <li className="img5" onClick={this.showSecondImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white" /></span></li>
                                    <li className="img5" onClick={this.showThirdImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white"  /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="project_card_bottom">
                            <p>Responsible for maintaining and optimizing the performance of the app. I
                               integrated Smartech sdk to track number of user per event and for push notification,
                               online sales AI integration for product Ads in the app, added new relic to track
                               users' interaction with the app, implemented new homepage design,
                               fixed bug on network request seen as a malicious bot on the server and many more.
                                <br/><i className="tools_used">Tools used: Swift, Xcode</i> 
                            </p>
                        </div>

                    </div>

                    <div className="project_card">
                        <div className="project_img_and_navigation">
                            <img className="project_card_image" alt="MyPicture" width="250px" height="500px" src={this.state.img6UrlList[this.state.img6Index]}></img>
                            <div className="project_card_navigation">
                                <ul>
                                    <li className="img6" onClick={this.showfirstImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white" /></span></li>
                                    <li className="img6" onClick={this.showSecondImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white" /></span></li>
                                    <li className="img6" onClick={this.showThirdImage} ><span><FontAwesomeIcon icon={faCircle} 
                                    color="white"  /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="project_card_bottom">
                            <p>Updated DSTV/GOTV subscription endpoints,
                               I built a custom UIPickerView to replace 
                               a third party picker view in the app ,
                               added a pop up that shows up for every new wersion of the app,
                               fixed bugs and improve app performance.
                               <br/><i className="tools_used">Tools used: Objective C, Xcode</i> 
                            </p>
                        </div>

                    </div>

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
                            <p>Quran247 app is owned by Dawah Nigeria (A platform for the Ummah),
                                the app contain all Nigerian Hafiz (i.e Quran reciters), it allow 
                                users to stream or download any of the quran reciter's track 
                                and to visit some of their web platform from the app. 
                                <br/><i className="tools_used">Tools used: Swift, Xcode</i> 
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
                            <p>Brainy app was a task given to my team during the HNGi7
                                (An online internship programm). I made the UI of the app using figma, 
                                responsible for code optimization, prepare the documentation and screenshots 
                                needed for app submission in play store and app store.
                                <br/><i className="tools_used">Tools used: Figma, Xcode, Flutter, Dart, vscode</i>
                                <br/>click <span><a href="https://github.com/Abdullah8888/avengers-stage-2-mobile" className="tools_used">here</a></span> to have access to the repo 
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
                            <p>Shopping is a demo app. This was built to improve and perfect
                                my flutter skills.
                                <br/><i className="tools_used">Tools used: Flutter, Dart, vscode</i>
                                <br/>click <span><a href="https://github.com/Abdullah8888/flutter_shopping_app" className="tools_used">here</a></span> to have access to the repo 
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
                            <p>Portfolio is a demo app. This was built to improve and perfect
                                my kotlin skills. <br/><i className="tools_used">Tools used: Kotlin, Android Studio</i>
                                <br/>click <span><a href="https://github.com/Abdullah8888/PortfolioApp" className="tools_used">here</a></span> to have access to the repo 
                            </p>
                        </div>

                    </div>

                    



                </div>

            </div>

        );

    }
}