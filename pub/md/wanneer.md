## Wanneer spreken we van PWA?

* Service workers: methodes die JS draaien in de achtergrond en de requests en responses beheren

![alt text](/img/verdeling.png "Verdeling")

* Manifest.json

```
{
    "name": "Magento PWA info",
    "short_name": "PWA info",
    "start_url": "/#homescreen",
    "icons": [
        {
            "src": "/icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#dff9fb",
    "background_color": "#dff9fb",
    "display": "standalone",
    "scope": "/"
}
```

* JS-first logica. 3 frameworks: Angular, React, Vue