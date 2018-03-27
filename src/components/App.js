import React from 'react'
import { withRouter } from 'react-router-dom'
import Main from './Main'
import Footer from './Footer'
import SlidesAPI from '../api'

class App extends React.Component {

    constructor() {
        super();
        this.bodyClick = this.bodyClick.bind(this);
        this.keyStroke = this.keyStroke.bind(this);
    }

    showSlide() {
        if (this.slideIndex === -1) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/slides/' + this.slides[this.slideIndex].url);
        }
    }

    nextSlide() {
        this.slideIndex++;
        if (this.slideIndex >= this.slides.length) {
            this.slideIndex = -1;
        }
        this.showSlide();
    }

    prevSlide() {
        this.slideIndex--;
        if (this.slideIndex < -1) {
            this.slideIndex = this.slides.length - 1;
        }
        this.showSlide();
    }

    componentDidMount() {
        this.slides = SlidesAPI.all();
        this.slideIndex = -1;
        document.body.addEventListener("click", this.bodyClick);
        window.addEventListener("keyup", this.keyStroke);
    }

    componentWillUnmount () {
        document.body.removeEventListener('click', this.bodyClick);
        window.removeEventListener("keyup", this.keyStroke);
    }

    bodyClick() {
        this.nextSlide();
    }

    keyStroke(e) {
        switch (e.keyCode) {
            case 37:
            case 40:
                this.prevSlide();
                break;
            case 13:
            case 32:
            case 38:
            case 39:
                this.nextSlide();
                break;
        }
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
