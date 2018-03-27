import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer>
            <div className="content-wrapper">
                <div className="copyright">
                    <small>&copy; {year} Quinten Clause</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
