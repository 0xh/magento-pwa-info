import React from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
import SlidesAPI from '../api'

const Slide = (props) => {

    const slide = SlidesAPI.get(props.match.params.url);
    if (!slide) {
        return <div>Sorry, but the slide was not found</div>
    }

    document.title = slide.name;

    let description = slide.description;
    fetch('/md/' + slide.url + '.md')
        .then(response => response.text())
        .then((result) => {
            description = result;
            ReactDOM.render(
                <ReactMarkdown source={description} />,
                document.getElementById('slide-description')
            )
        });

    return (
        <div>
            <div id="slide-description">{description}</div>
        </div>
    )
}

export default Slide
