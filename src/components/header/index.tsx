import React from 'react'
import '../../assets/scss/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import myLogo from '../../assets/images/circle_jt_image.png'

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

    setActiveLink = () => {
        

        
    }

    closeLinks = () => {
        this.setState({isOpen: false, check: false})

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
                <div className="header_container ">
                    <div className="logo"><img src={ myLogo } alt="my logo" width="80px" height="80px" /></div>
                        <ul className={ this.state.isOpen ? 'nav_links_mobile' : 'nav_links' }>
                            <li><NavLink to="/" className="link" onClick={this.closeLinks} > Home </NavLink></li>
                            <li><NavLink to="/services" className="link " activeClassName="selectedLink" onClick={this.closeLinks}> Services </NavLink></li>
                            <li><NavLink to="/blog" className="link" activeClassName="selectedLink" onClick={this.closeLinks}> Blog </NavLink></li>
                            <li><NavLink to="/projects" className="link" activeClassName="selectedLink" onClick={this.closeLinks}> Portfolio </NavLink></li>
                            <li><NavLink to="/about" className="link" activeClassName="selectedLink" onClick={this.closeLinks} > About </NavLink></li> 
                        </ul>
                    
                        
                        {/* <!--<button><Link to="/shop" className="contact"> Contact </Link></button>--> */}
                        <div className="bar">  <FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} color="white" onClick={this.updateClass}/> </div>
                       
                </div>
            );

    }
}
