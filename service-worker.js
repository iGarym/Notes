/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e015b30ceed9cc43f632b782219b1b0d"
  },
  {
    "url": "assets/css/0.styles.f636ec37.css",
    "revision": "07c8b61aa0f57632f53936b74f30f7ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6e77b3f1.js",
    "revision": "1d1b543a7f75f418da6203dbd67ca388"
  },
  {
    "url": "assets/js/2.96b6ee69.js",
    "revision": "7a736fe95fb1bb795e02645ebb5fc87c"
  },
  {
    "url": "assets/js/3.5ccc1eae.js",
    "revision": "7e395181b2a3d435ba685155b9b5097e"
  },
  {
    "url": "assets/js/4.69305b7a.js",
    "revision": "e3a231f87a4193ee669182f559cfde8d"
  },
  {
    "url": "assets/js/app.69fa837c.js",
    "revision": "3e9885af0ab0b985ad8e7ada273addd2"
  },
  {
    "url": "hero.png",
    "revision": "c335fbfc485a7814df8eb7b281c13b2e"
  },
  {
    "url": "index.html",
    "revision": "463539324412549d3fa7244b9a14dc9c"
  },
  {
    "url": "introduction/index.html",
    "revision": "48771ea49f03e84dfe4422a7470b9dd5"
  },
  {
    "url": "logo-192.png",
    "revision": "d63dbe5dc6533da6999b3a6f616c6089"
  },
  {
    "url": "logo-512.png",
    "revision": "ce2ec7230b056c1efe94c99672205b94"
  },
  {
    "url": "logo.png",
    "revision": "e5d0cdf2f27c837c9a2757ef6055cc5b"
  },
  {
    "url": "php/index.html",
    "revision": "955150d0291be0160d81ad8f7ad881b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
