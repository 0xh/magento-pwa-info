import React from 'react'
import { withRouter } from 'react-router-dom'
import Main from './Main'
import Footer from './Footer'
import SlidesAPI from '../api'

class App extends React.Component {

    constructor() {
        super();
        this.bodyClick = this.bodyClick.bind(this);
    }

    nextSlide() {
        this.slideIndex++;
        if (this.slideIndex >= this.slides.length) {
            this.slideIndex = -1;
        }
        if (this.slideIndex === -1) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/slides/' + this.slides[this.slideIndex].url);
        }
    }

    componentDidMount() {
        this.slides = SlidesAPI.all();
        this.slideIndex = -1;
        document.body.addEventListener("click", this.bodyClick);
    }

    componentWillUnmount () {
        document.body.removeEventListener('click', this.bodyClick);
    }

    bodyClick() {
        console.log('body click');
        this.nextSlide();
    }

    render() {
        return (
            <div className="page-wrapper">
                <Main />
                <Footer />
            </div>
        )
    }
}

export default withRouter(App)
