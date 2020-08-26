import React from 'react';
import '../../assets/scss/blog.scss';

class Blog extends React.PureComponent {
    componentDidMount() {
        document.title = 'Blog'
    }
    render() {
        return(
            <div className="blog_container">
                <h1>Check back later.</h1>
            </div>

        );
    }
}

export default Blog;