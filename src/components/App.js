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
        let paths = this.props.history.location.pathname.split('/');
        if (paths[2]) {
            this.slideIndex = SlidesAPI.slideIndex(paths[2]);
        }
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

    fsToggle() {
        let elem = document.getElementById("root");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
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
            case 70: // f
                this.fsToggle();
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
