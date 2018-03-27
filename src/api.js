const SlidesAPI = {
    slides: [
        { url: 'intro', name: "Intro", description: "" },
        { url: 'middle', name: "Middle", description: "" },
        { url: 'outro', name: "Outro", description: "" }
    ],
    all: function() { return this.slides},
    get: function(url) {
        const isSlide = s => s.url === url;
        return this.slides.find(isSlide);
    }
}

export default SlidesAPI
