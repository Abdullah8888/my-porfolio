import React from 'react';
import '../../assets/scss/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

interface Props {} 
interface State {
    isOpen: boolean,
    check: boolean
};
export default class HeaderLayout extends React.Component<Props, State> {
    
    state: State = {
        isOpen: false,
        check: false
    }
    
    updateClass = () => {
        if (this.state.check === false) {
            this.setState({isOpen: true, check: true})
            //console.log("the width is 1 " + window.innerWidth)
        }
        else {
            this.setState({isOpen: false, check: false})
            //console.log("the width is 2 " + window.innerWidth)
        }
        
    }
    componentDidMount () {
        
    }

    toggleBox = () => {
        this.setState({isOpen: true});
      };

    shoot() {
        alert("Great Shot!");
      }
    render(){
            return(
                <div className="container ">
                    <div className="logo">Logo</div>
                        <ul className={ this.state.isOpen ? 'nav_links_mobile' : 'nav_links' }>
                            <li><Link to="/" className="link"> Home </Link></li>
                            <li><Link to="/about" className="link "> Services </Link></li>
                            <li><Link to="/shop" className="link"> Blog </Link></li>
                            <li><Link to="/shop" className="link"> Projects </Link></li>
                            <li><Link to="/about" className="link"> About </Link></li> 
                            <li><Link to="/shop" className='link'> Contact </Link></li>                   
                        </ul>
                    
                        
                        {/* <!--<button><Link to="/shop" className="contact"> Contact </Link></button>--> */}
                        <div className="bar">  <FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} color="white" onClick={this.updateClass}/> </div>
                       
                </div>
            );

    }
}
