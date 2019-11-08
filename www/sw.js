var CACHE_NAME = "cachesSP";
var urlsToCache =
[
    "/www/",
    "/www/index.html",
    "/www/js/Ack.js",
    "/www/js/AirReal.js",
    "/www/js/AsOne.js",
    "/www/js/AsOneStory.js",
	"/www/js/Assemble.js",
    "/www/js/Customize.js",
    "/www/js/NicePlay.js",
    "/www/js/Stage.js",
    "/www/js/Task.js",
    "/www/js/Title.js",
    "/www/js/Weapon.js",
    "/www/json/AirReal.js",
    "/www/json/AsOne.js",
    "/www/json/AsOneStory.js",
    "/www/json/Customize.js",
    "/www/json/NicePlay.js",
    "/www/json/Stage.js",
    "/www/json/Task.js",
    "/www/json/Title.js",
    "/www/json/Weapon.js",
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
