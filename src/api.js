const SlidesAPI = {
    slides: [
        { url: 'intro', name: "Intro", description: "" },
        { url: 'middle', name: "Middle", description: "" },
        { url: 'links', name: "Handige links", description: "" },
        { url: 'outro', name: "Outro", description: "" }
    ],
    all: function() { return this.slides},
    get: function(url) {
        const isSlide = s => s.url === url;
        return this.slides.find(isSlide);
    },
    slideIndex: function(url) {
        for (let s = 0; s < this.slides.length; s++) {
            if (this.slides.url === url) {
                return s;
            }
        }
        return -1;
    }
}

export default SlidesAPI
