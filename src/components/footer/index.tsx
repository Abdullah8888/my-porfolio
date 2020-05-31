import React from 'react';
import '../../assets/scss/footer.scss';

interface Props {} 
interface State {
};

export default class Footer extends React.Component<Props, State> {


    render(){
        return (
            <div className="footer">Copyright &copy; {new Date().getFullYear()} <a href="https://dev-tunde.firebaseapp.com/" className="footer-host-link">dev-tunde.firebaseapp.com</a></div>
        );
    }

}