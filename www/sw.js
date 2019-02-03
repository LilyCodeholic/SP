var CACHE_NAME = "cachesSP";
var urlsToCache =
[
    "/www/",
    "/www/index.html",
    "/www/js/Ack.js",
    "/www/js/AirReal.js",
    "/www/js/AsOne.js",
    "/www/js/NicePlay.js",
    "/www/js/Title.js",
    "/www/js/Weapon.js",
];

self.addEventListener("install", (event) =>
{
    // インストール処理
    event.waitUntil(caches.open(CACHE_NAME).then((cache) =>
    {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
    }));
});

self.addEventListener("fetch", (event) =>
{
    event.respondWith(caches.match(event.request).then((response) =>
    {
        // キャッシュがあったのでそのレスポンスを返す
        if(response)
        {
            return response;
        }
            return fetch(event.request);
    }));
});
