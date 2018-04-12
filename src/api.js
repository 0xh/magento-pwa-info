const SlidesAPI = {
    slides: [
        { url: 'wat', name: "Wat is PWA?", description: "" },
        { url: 'support', name: "Browser support", description: "" },
        { url: 'features', name: "Welke features biedt PWA?", description: "" },
        { url: 'wanneer', name: "Wanneer spreken we van PWA? 1/2", description: "" },
        { url: 'wanneer2', name: "Wanneer spreken we van PWA? 2/2", description: "" },
        { url: 'toekomst', name: "Wat brengt de toekomst?", description: "" },
        { url: 'weetjes', name: "Magento weetjes", description: "" },
        { url: 'details', name: "Technische Details", description: "" },
        { url: 'oplossingen', name: "Bestaande oplossingen", description: "" },
        { url: 'vue-storefront', name: "Vue-storefront", description: "" },
        { url: 'deity', name: "Deity", description: "" },
        { url: 'frontcommerce', name: "Front Commerce", description: "" },
        { url: 'strategy', name: "Strategie", description: "" },
        { url: 'manifest', name: "Web app manifest file", description: "" },
        { url: 'tools', name: "Tools", description: "" },
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
