'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5273d3828d044a2494deb1b0f0ea7b2e",
"version.json": "8ed6ddcd1130d0a57da24afa04d4a7ac",
"index.html": "6d8c6f75990be780766f45600d481c9c",
"/": "6d8c6f75990be780766f45600d481c9c",
"main.dart.js": "fdb19ac31197bd93e5f7b4707e3ae5dc",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ec0b2ae4f4cbc9412679c6c7c1d5aa5",
"assets/NOTICES": "57bddf942715effe06c760a68a4ac68a",
"assets/FontManifest.json": "1fbecece38ee1bf70813059b2625a134",
"assets/AssetManifest.bin.json": "44f46a0240271ed1d701d4e404633d09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e86dd21e2585eb631e361d4ded129d8b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "82ebfb40a3b86526836952e5eebe3c74",
"assets/fonts/MaterialIcons-Regular.otf": "e6de452afcd6b9c2365755584d068d94",
"assets/assets/lms/lms.jpg": "b19fe7905efc8a57e5b5f4e3764c3d26",
"assets/assets/lms/lms5.png": "1eba5a1594c7652796299c3b78d200ae",
"assets/assets/lms/lms4.png": "63914732a483830868fb2842e8d0c4de",
"assets/assets/lms/lms6.png": "cccf50b63aa3a33a46f8d3d673eca9d0",
"assets/assets/lms/lms3.png": "a8e4d097bbc2927319a0a3f436734011",
"assets/assets/lms/lms2.png": "a596fcc9170923e7c6b2566048d8f646",
"assets/assets/lms/lms1.png": "fc058456b6387665e62f1cc5bcafba32",
"assets/assets/company_attendance/10.jpeg": "91a06dd3270e12af89e8246ebea5e1a0",
"assets/assets/company_attendance/1.jpeg": "3755d9b27b5a678a7d88c2e40f405bb5",
"assets/assets/company_attendance/11.jpeg": "22d3b034598fb2f0c13a849a5d10e3de",
"assets/assets/company_attendance/20.jpeg": "e50d19145618425b6a8d54589f5e080e",
"assets/assets/company_attendance/16.jpeg": "10557512ef655d6f72b2cb08e7d09d9c",
"assets/assets/company_attendance/6.jpeg": "ec7df51617c80db570327acee01a54ef",
"assets/assets/company_attendance/7.jpeg": "b43acb7d5af59eee08da7e3c63fbc859",
"assets/assets/company_attendance/17.jpeg": "79316a15e2de9b6e1af4c306b32a3dc1",
"assets/assets/company_attendance/21.jpeg": "c2cbe26758daa6fd81fc169aa324b651",
"assets/assets/company_attendance/8.jpeg": "43ba1ac9c564f95756aa6fd5e69d52fe",
"assets/assets/company_attendance/22.jpeg": "daa6be7b97f94719cdd18809688952eb",
"assets/assets/company_attendance/18.jpeg": "f79f953322a81b228f5fc717a0f4a4a4",
"assets/assets/company_attendance/4.jpeg": "3cb9ff8cfca18986e8f1e97cfa16a6fe",
"assets/assets/company_attendance/14.jpeg": "f94034855f008df3fedef68b9337ae1b",
"assets/assets/company_attendance/15.jpeg": "915825016a527746d5d488e393cd60b5",
"assets/assets/company_attendance/5.jpeg": "09e2f34d6bdf8fcf3076a25f367774a9",
"assets/assets/company_attendance/19.jpeg": "93f750385c5e3c3406fc2ee0f8750493",
"assets/assets/company_attendance/9.jpeg": "4506b8ade94f7864f1da242fee9a6814",
"assets/assets/company_attendance/2.jpeg": "0bb6c5e40fe63f9c628b4906ab117f4c",
"assets/assets/company_attendance/12.jpeg": "d5a7a921ac2d6a029bea5fd1956b8626",
"assets/assets/company_attendance/13.jpeg": "48e7ff263f06fe3cb369cae12508c2e3",
"assets/assets/company_attendance/3.jpeg": "df1065c91a96dc8e956e0968a29b0654",
"assets/assets/Mostafa-Esmail-Elshrbeeny-CV-Resume-.pdf": "0a6b93fa7f2f05436e62616f82948a33",
"assets/assets/e-commerce/2.png": "4e4f2ab8c0e53ed0a5d95c49c850a1a7",
"assets/assets/e-commerce/3.png": "79ce7cf2d1d8d4a0a074fb2323e1c261",
"assets/assets/e-commerce/1.png": "a4544018bf5cd2ef2680109bf7103e1b",
"assets/assets/profile.jpeg": "c243006d9ac71f5214c8b6e38cf7da7a",
"assets/assets/mwri/mwri1.png": "4b7812119cf35aa12a91b587560d9dd2",
"assets/assets/mwri/mwri2.png": "31a21a7da888b5b6f28bd469eef11523",
"assets/assets/mwri/mwri3.png": "1a778c025d5f72c6d2fa412353991f51",
"assets/assets/mwri/mwri4.png": "52a911bb772ef3085e5cad31d366e66e",
"assets/assets/mwri/mwri5.png": "f8da1d3c2e228aa112eec72eb787dbef",
"assets/assets/mwri/mwri.jpg": "623276c0fa319ea4063a8991c6ea86d9",
"assets/assets/300barber/8.png": "9d4515f01eec1a84f70771ed3fa164a1",
"assets/assets/300barber/4.png": "406da96e5da6bade57c68c36b581a006",
"assets/assets/300barber/5.png": "96d28d1f823e43e57c40a55b41cd4890",
"assets/assets/300barber/7.png": "369ff202b0495aee654d12e19673e891",
"assets/assets/300barber/6.png": "8a5d8bc67a19600889642bc508fb2255",
"assets/assets/300barber/2.png": "e8512128b2072da2e2dd4ec2fd83db06",
"assets/assets/300barber/3.png": "dc2fcab3765e20e8c506f83773177caf",
"assets/assets/300barber/1.png": "030e8e1e98b3e15a9896a2a14162c324",
"assets/assets/fonts/FiraCode-Regular.ttf": "ca1d504fb625f26b482d1a245c085f49",
"assets/assets/fonts/FiraCode-Bold.ttf": "f0c2fb07ff25335e0ea695eced8ff173",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
