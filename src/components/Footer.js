import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <footer>
            <div className="content-wrapper">
                <div className="copyright">
                    <span>{props.slideIndex + 1} / {props.nSlides}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
