'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "59ba99b7ba6d332e8fc1c5f8d1514ec8",
".git/config": "41df9db06f6675a46b4a10be50b76e65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "26f3ec3f76235163b96b5546eded4796",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3e4e62a38b218689443e356b52fe0c15",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6876bdf817258b573f4505d1ec77501",
".git/logs/refs/heads/main": "1c0533aa29169f4b1fb92e25e30f83be",
".git/logs/refs/remotes/origin/devlop": "55ef71b4d3654657ec6402ff61e4e8b5",
".git/logs/refs/remotes/origin/main": "f85f856d9f652614e0026165ebaf4419",
".git/logs/refs/remotes/origin/web_deployment": "191d52f65da5df4928aacea28cf01234",
".git/objects/02/255b4b5d8e676fb83ca8cae177d2dbb62e79a6": "6c364f8db4bbd5e96ca4709e74818815",
".git/objects/02/c707c574b5b9dd911152e6a1f48b584315b14f": "c1d18264a5290d241d1dc94673ed7f5e",
".git/objects/03/9f09fbb68e5e93cf965c32e1f5392fc0f07707": "6b8aff15663b61b256845f4d80170635",
".git/objects/06/9cefb15804ff9eafc44599cd9f052ed3767e79": "368710b152405e1c0bd08b7403d64224",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0c/627e4ec921478f97986d748b0d1438215686ca": "c946b7c84138b76ae5ae7b5fabf7c753",
".git/objects/0c/bd1aa78f90a464c12622e91fcb43c9c1fc842c": "8b0434bf4a882418181341d4b1b5a0bc",
".git/objects/0c/db7e393b4430b344e4f712b712c2776b5e1de4": "23ee10caddead9383a57cbf341e155a8",
".git/objects/0d/6324b4f46e36a66bdd3a12325eee04d02e427d": "a83c5c68f53dc886e065dfc6d88db8cb",
".git/objects/10/780e0c10ee7d8bfd1f7971b4be5b923c9793f1": "df9165a98c48f9a10790907e428997bb",
".git/objects/17/f908850391f43268c9fa1bac7d65b65f538dc2": "c517a9510b35be2bb8404751ebf5be95",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/47ef2790dfbb0452b705a7772729123bd3d76c": "f4ae51776bad7ab8c0f3fcddc9a83fff",
".git/objects/1e/8b7b909b43b0fdfba40b10c6244c7f000d054d": "6ad17b61b99291a9a3f18fcd2bc710a5",
".git/objects/22/dd50e8ed6ac3811a24b5ec90c4d92386070e26": "9c432f6aade2f41c5af25d11aa8bda42",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/f48b6ce6a9c8f502e9236d31f716007ec4d0c9": "b64644d5bf0e4809ae61750bbecce27a",
".git/objects/26/8d24e7ab671e211f27b56d96dc2c9fdcb7882b": "0b18163ec48276913b1b4f6ee35cb71c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/537af63cc07c7c4ab5cb9ea47242efc6d96d28": "b5811ac6a294ed76df609d0fdafbdc8c",
".git/objects/38/4fef3c0ef15f95dd8ffb084db10f04d8261bf7": "23510f1acb59d11f05ab3aa296582a1c",
".git/objects/3c/d832200e0ca278c7899c9eb798f498384ada1a": "033501d04e2961edcb89abca4acbc241",
".git/objects/3c/f6c127f0c4f94afe3ffd833bc29099e026550e": "fc993fa0286a97a285531fa2bd60ffb6",
".git/objects/3d/47e9965658ed9eda5c676540abaf069ba23b38": "a7d5d3d8750ae52dc882d4e955e7a8e3",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/a12cab344ab8af7b0f589b9918866f20240546": "c44d2a6b6d1c3c045856ce59bee0b984",
".git/objects/48/74d774b6c7870d54d20991b0deb8ea8c2af634": "2a43687cc1957d95307f8a3739533723",
".git/objects/4a/851234baf536a0b40798641d47720694bf04d0": "31066c0c1937d595f8741a798b9fbb15",
".git/objects/4e/3f9bf5f01403d1088c93f67206ec4b09eda9ff": "a57359a61637c989dc1be55f8fe207d1",
".git/objects/4f/777ec743e2148bb740c251d1f5c7b57aa103fa": "ede00927ac90ceb853e8b50f010da41c",
".git/objects/53/8e1d4e11f247be44cc050545e72e1dfcd7e54c": "e5ebd3391600d45157a75e82fde19b76",
".git/objects/55/20f80058899330375e491a338f3a2fcb4b25fd": "97a1f29f92c89d1e19cf82b539b67ea4",
".git/objects/5a/b4fcd5d25f586deb36b262ccb1b0216cf1bd60": "2cfc9c46fddec1224f837e9b904096ca",
".git/objects/5d/097406a5e0677996bc86c35f8daff7404f148c": "0c47740f070c83bb398c192ae35008d7",
".git/objects/5e/063262a87ba169fb4fe7d46ff82a59a455f39a": "df225ae198317fe89216f9c9cc457b7a",
".git/objects/66/587a422962407e3815f639fbc9fea952594ed0": "97d7dd40c606827cf153dd9196bfc39d",
".git/objects/6b/504a4e4857e53df834c8c5b9f2b752ae9bebae": "19e33a392af105ea70bc774ddbeae286",
".git/objects/6c/6c5b12ba25b6996d9f8a11ff41684db2e169cc": "75d7b2a934b98e8cc2966ccb4a8a1b08",
".git/objects/6e/395bb56cb2a45f3dbb9bf5fc08b8536082cc23": "e4e77a66ede9df73b4444d7397b20ae8",
".git/objects/70/aa32ac06cea43e214e3ff24d3e42c995c66f23": "83b38f1ad6ef5ae1c89abaf72ba91b38",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/57601656554d1eb7a1f93462c83126b7d92ac6": "78f33aa4ec3297c3a5ebe82aeb19261e",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/f1e2409e0f9802e98b9841e5879688ca9bd200": "3a38910b6b0f81bcdb0bf944d90a9ab8",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/e76a36b3f4ba63d28486b13526eb53833c732a": "4b6b1a785fc60c1790930276bb73969e",
".git/objects/82/39297eb2310218be7c1b865e56bc1b32c7025d": "5e39340280b3fa33c7b7f51027273c70",
".git/objects/84/1ebfa0d0fc43fc67d90ef91d010342d9c6d222": "1d959d40181a00b6c8d92f1e788c699f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/52d5798bf4c310909586daf14c182259a2f361": "6c031f1b39b6a55fe8b3e5a6a52159c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/13d261e4719d4f5e6813db50e9db07ccd06f2b": "a6dcd7c8798a42e2e69839774f8961ae",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/0511694b8425edd4274810184cda2c2c12cd62": "414e39ed4f4ab6ec6b535984b5c38157",
".git/objects/99/3383e8558fa6fb6d19b63c544bd4318ccdc854": "e63bf651b6f0e31b1cbf919320b37433",
".git/objects/9e/a3ec498fe34c1a7ab054cfff501bd15c49b443": "a9ccbc3c0db71305ff492887c370e2f1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/d9a4c0bceee8afdfaa1904994519a061e62dad": "f2327212cf0be2981436fe9ced00b4ce",
".git/objects/a6/24df04c1132b99f2c2cb1b9c0f6f0d4796fa50": "06f9d88bc598ea74c27f5a8f8d40bf85",
".git/objects/a7/2fef68b7f67eddce597023f182f9725c4bc284": "d4558de5664c8486e5311817df1459f2",
".git/objects/ac/536a6342c51424a92bca2b653b00a077bfc07f": "52e54d1d6b9ee377a7c39c1ef05d1a20",
".git/objects/ae/0d12c9634087bc372a70843637185d7274f6b0": "75a4198b35de446bf5a36d1478c13867",
".git/objects/af/79f8a728f42a0c4ba5cc9f7296baa40d293ee8": "546bbec8f75e410e14448e8b2fe8b2a1",
".git/objects/b1/0790f8fcac4d095f0ceba968deee5ab9f4c7a5": "b1ffb6d3f2fc011f3da7bcfcdbf937ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/50c88e5a31da7b67bdb0c439dd784bdb27b29f": "c66a0ed286e45791104b5f204f29c721",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/11ba21cc5a079595911a68cabbad90f4dfc0a1": "f584a4f97d0a1c1da03fd153130b2d80",
".git/objects/bc/2a553e6e6d4c1653566181669846927f8000cf": "561ae2682f171eb91ddaa06e97bf24bb",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c1/631335c472a42738930af59784ca66aad69cb6": "e70cdfb1c374050e3b7619a4390c4b40",
".git/objects/c4/4bf90800f436e9082f71d3b49f93ad895284f2": "d1443ee29649e40436bf69d4ccc2e9ce",
".git/objects/c5/936bde5481638c79134b71ec79b0dc001661cd": "11583a3ed3bcfac86e7efd33dac87439",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/cd105f7abda064552f7382aa6a404e8af0f407": "65b7002cbb57f768fc0fef9d4e8abd62",
".git/objects/da/3903eb780efaec6de852cf4b17c82f0460e9ca": "38489bf449a61cf59e5280a1d088f0ef",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/9463e2c5ef8ce9f8e97c2d2124794e43a3c18a": "54bc8353c54a67fd03a068bd78da0b47",
".git/objects/e2/ae6f5113efa031fc85f60bcf31dbaac033b184": "507dff010d68cb4f9ed23c433ebec795",
".git/objects/e3/04b225d94b034a64ca4c9e6c24d153bfa699de": "7e173607ce1e5f6fdb63bd5a4b02f71b",
".git/objects/e3/c4c59ef5cb1ad06551e5fb6b8eec67d81d3425": "54e83cb075ca4388e9b5d546b22ea78d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5d3594d428c200c3e59cdecfb1730a4b57c98b": "0bb2ce5b29eedafc3faf5315d6fc92f9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/fc7b07bbdcf26537727089a6b9341ce11af60e": "1a2e975a920bdc5216a711d3e797c1db",
".git/objects/f2/00ec2b6a10e4c35f7b3d2acf62e4f21ac0e646": "6dad0d3dbcc1821dc08d994d4f921cdb",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/cfb9f0684af2d380e3aa52dcc5dad5df81c87a": "42e56cdcf43d30b127f26b6d869719cf",
".git/refs/heads/main": "3fe3aa95a508dfc68f56c63d7b43cb12",
".git/refs/remotes/origin/devlop": "86798dfdaf54aab2fb17e35ee37c6007",
".git/refs/remotes/origin/main": "3fe3aa95a508dfc68f56c63d7b43cb12",
".git/refs/remotes/origin/web_deployment": "fbabd01bdbdeb4f17c7cfb12d16071db",
"assets/AssetManifest.json": "b572e72b363417cddf190d694e5595c5",
"assets/assets/images/background.png": "aa9763f277f20ec5fd92477c43bc2c66",
"assets/assets/images/certificate/android_development_infosys.png": "94faa94aea731ca57934a98e3db39b2d",
"assets/assets/images/certificate/core_java_infosys.png": "f2565f60f94cd36b5ad386a1bdca11b0",
"assets/assets/images/certificate/css_intermediat_certificate_greatleaning.png": "73854837cc232aa6311f9665a39c928a",
"assets/assets/images/certificate/css_intro_certificate_greatleaning.png": "2209350c87cc5b51ca046c358ca45253",
"assets/assets/images/certificate/css_perpoties_certificate_greatleaning.png": "8d5c48ad65b6455877fecfae0ae26b9b",
"assets/assets/images/certificate/cyber_security.png": "442bde7807ac1b215d827557a9f7d5b4",
"assets/assets/images/certificate/energy_swaraj.png": "37d2cadac3293500619a59a2bcc7b601",
"assets/assets/images/certificate/html_frontenddev_greatLeaning.png": "a8b9187ff2a46d38630f62b3bdad1772",
"assets/assets/images/certificate/isea_digital_certificate.png": "c257d626768ae751214a4c30868eab94",
"assets/assets/images/certificate/javasript_intro_certificate_greatLearning.png": "77f9ba62378c05d45c4d5e3a61a99c5d",
"assets/assets/images/certificate/oops_greatlearning.png": "dfe75377437b9e00cadd413f41562642",
"assets/assets/images/certificate/oops_intro_certificate_greatlearnig.png": "dfe75377437b9e00cadd413f41562642",
"assets/assets/images/certificate/overview_of_infosys_springboard.png": "815d4761d47c5812f37eb9cac2fc28d2",
"assets/assets/images/certificate/time_management_harvard.png": "88e1c6427f41c6f8583e5fe610db2bee",
"assets/assets/images/mrx_profile.jpg": "c8d9d30bce95e78e454c2689c5a94fd8",
"assets/assets/images/profile.png": "a286e7848b355e652a3bee08183ab51e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ece0de7003b5d79db4b77a0583c22322",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "ed2a3f977729b114976619616a6176af",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5879f7d8d4a80d35d98cda84766a4ade",
"/": "5879f7d8d4a80d35d98cda84766a4ade",
"main.dart.js": "d446ff6406d1e840e210fb516c9043f8",
"manifest.json": "7b21ef3452a731d926d1ffc055fd1c4b",
"version.json": "d33c7c72cecc9209fe3d96fa9fca6824"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
