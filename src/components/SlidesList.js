import React from 'react'
import SlidesAPI from '../api'
import { Link } from 'react-router-dom'

const SlidesList = () => {
    document.title = 'Slides overview';
    return (
        <div>
            <h1 className="ta-center"><span>Slides overview</span></h1>
            <ul className="slides-list">
                {
                    SlidesAPI.all().map(s => (
                        <li key={s.url}>
                            <Link to={`/slides/${s.url}`}>
                                <span>{s.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SlidesList
