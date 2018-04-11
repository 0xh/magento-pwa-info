const SlidesAPI = {
    slides: [
        { url: 'wat', name: "Wat is PWA?", description: "" },
        { url: 'support', name: "Browser support", description: "" },
        { url: 'features', name: "Welke features biedt PWA?", description: "" },
        { url: 'wanneer', name: "Wanneer spreken we van PWA?", description: "" },
        { url: 'toekomst', name: "Wat brengt de toekomst?", description: "" },
        { url: 'weetjes', name: "Weetjes", description: "" },
        { url: 'details', name: "Technische Details", description: "" },
        { url: 'oplossingen', name: "Bestaande oplossingen", description: "" },
        { url: 'vue-storefront', name: "Vue-storefront", description: "" },
        { url: 'deity', name: "Deity", description: "" },
        { url: 'manifest', name: "Web app manifest file", description: "" },
        { url: 'links', name: "Handige links", description: "" }
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
