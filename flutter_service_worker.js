'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e7bd28f3b28f5d0f2dad75f1a2b3929f",
"version.json": "8ed6ddcd1130d0a57da24afa04d4a7ac",
"index.html": "fefc321c4fbc30ce24fa402cf17b693f",
"/": "fefc321c4fbc30ce24fa402cf17b693f",
"main.dart.js": "ef8a0b9c90cc62f3ede6960932ba7e88",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ec0b2ae4f4cbc9412679c6c7c1d5aa5",
".git/ORIG_HEAD": "09823a1c110f3f7002fcafbee87790dc",
".git/config": "6f7ad5b2e7fe942363c0e4f948ffa55e",
".git/objects/0d/714b48ab1ce7926c564f66ae28b18c1db36ce5": "0937a1da7c2a49a2c661537d70f3efe2",
".git/objects/0c/0558f8fab935e95a5495947c27b2f1bdd6a360": "b906f3aab73920655132f7d2aa87a674",
".git/objects/50/6f382c1ee26d496dc442dac95d4c23cb1d02b5": "2f86fbb288c80c8c9eab0150cb563dc9",
".git/objects/50/855a7ef81d9cf4db8d09647f9cb889a072a964": "d1885dc67a1043c453fffc6b750218e8",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/03eb09260bace5696df36662c61d195a5de1a2": "7d48dbf53cf9d5d46f3f8f73024eabb3",
".git/objects/35/7ba5298e5af129286d314e5331e556db786aea": "c0a9a2af92958167e7e77f6c0ae7f0a1",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/d2b6186d8bb13f5cf98188426a1838c4c2357b": "60824195f265e01cf08dba59e1da9c5d",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/c056ba2debfd12de96001ebc8d4924b1fea75f": "dbab081d0a15749b46e1315f3f6805dc",
".git/objects/93/b40aa01ac92a29a3b98b5ba50c3a09d8ec4006": "d0ab65d93c52313b887dd880c6b94b19",
".git/objects/93/4f3284c9ab61eca0b4bffc3f93cc1f7b81c2b3": "ef007dcbf1bbe4e244eb4a7a66cb1604",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/ee9672c93bdf8e0bebc28b224725f0cffa354c": "85fe150228c0944de5c4266beddedb5d",
".git/objects/34/948b54d07ddf168e440d70c60b483b2286cb48": "dc9e6162f665a7b2e56cc8745ae07655",
".git/objects/5f/0bfa801bf9b72c54fa1d7163aa50a0a8067246": "9b6f165c8fc03efc2bbd8ae210ec8739",
".git/objects/33/4112201b82b957de87fad9b06f51edfe5ba7b4": "fbe1ff6444f29b5c0ecae7613e433808",
".git/objects/02/b915b85f9fb22b6e51491729131d93c18d906e": "9043fb6fc72b6a3ca5dcd185bb895ff0",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/b2/827f9d89d3c608544ab90b8a65432d1307de45": "707e7df31bac242f54a527011f8e3f08",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/71f559e986ec3208915897d1f88f29173c06ef": "9a0ac6bde8c39506b9ef8d9f6eaf5e05",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d0/9e0413df852204ea9a9f58edc9883fa2389370": "19cad063162cdc61feca9e83759182b4",
".git/objects/b3/1404417082f74f3142d6be4c03cae86534e2e7": "ef58efb1e7c0eb5fc87d039c22b2082d",
".git/objects/df/c97bdb579f53cf9aeb7e86f0890ae5b0f4b74c": "b3700f8ce74a71ab28f6039d48248305",
".git/objects/da/2948be08fe2829e5a553eb35e3f4a9b4736458": "b17318fe66ded737957d6102d12ff3d3",
".git/objects/d1/32d0c57684112e3902b94a0a091a31e1d3223f": "117c2c0e964c51376edefc064fe964b0",
".git/objects/d6/95a71c7a966bd298c6ce5dbd77125d3bf8cdad": "6cfb973e95ef405f7bf78313f0ede3e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/bc/6db9ee4ee851dfb26c45a0a4cf596d27342cc3": "85d939627e142f083f54364b142221dd",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/73ec6fa19b99f744b3604c428c97c0ec8278ce": "cc18eba95a243de6862b319ba1c9c739",
".git/objects/c7/eed705076e52698caf58208f24a1ec975e0eb7": "aea3e42320dc580dc719b73e0b425a44",
".git/objects/fd/5f4dc70eb756550ae635836e84e0707dc7ca73": "210d67a74773943fe60e0dcab57622f9",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/6967a0fbba5b435796f9f91e64372aa2c65b06": "171b141450ae1b91fc0329bfdcd00bc2",
".git/objects/f5/72067be46f2e1cf2b95a8e1136730a0cd72b07": "1ba5ab71545111b2f7230b2b02ae09c9",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/e3/30eadb1615cf7a0b0410bf9b728c92cf0d6138": "86e9e1f82a9c68998671186a1b98341a",
".git/objects/e3/59f2de0955e78c35f9a63ea96ed6be29aa78b4": "aedd0d3411e0e2080a96befde284a917",
".git/objects/e4/e082e6c90600db335b2028a7b4e72ae794793d": "50c95fcbdddaa4d8d93411de712ce4b5",
".git/objects/c8/569b65e796251358b7ae3ba00642e922f4e857": "49233837f4ff87892e296af61d12bdbc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/8790d58d4c309e212165c52c5ad950b3808790": "0693afd95cf978f0150078143ac8bc50",
".git/objects/fb/35ece39a785bbea2189deaa6d5137af790b417": "fafd5164829578f55f4b85db026ef70d",
".git/objects/ed/2facb8a78c5276ad253e53abca72908d02cce7": "b7293905b908df35d851a942bff456a2",
".git/objects/ed/a087f151d60213d0d854d512851e63d842ab6f": "c13907f540b2d29e6fb3d82485db1db5",
".git/objects/ed/b358f647432055cccc8048b42c4e46579b34ac": "5d9b58fb65f12f06dc888ae2876ee521",
".git/objects/c6/fcefa08f86e79d9d33c61963c4ec3b41ad5057": "b7a66b728f63704c755a4f6229471405",
".git/objects/ec/4bad1100395aeab70ad5a047721a7dd42c5bd1": "104b3eb3641f4a75a5635386a5f6eab0",
".git/objects/ec/0e629e08e1b2f46a0ec8a2e6a6646be95417f3": "3f1b93582a8ef961ad45c90a21c5dd9b",
".git/objects/4b/1a6a89b553c0a312636e2a494778f019e933a9": "4857eaf2288684ac253d0779913053cf",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/45/734c597fae412bdc00c4b38f38a6cec11670e4": "2dae496826ab4c30add0017767075971",
".git/objects/1f/11d1dccf97fc1309f1a2e6f70df7000df99215": "9a0482678620724951f31d67bec974e1",
".git/objects/1f/2ea11e7f0069b02b6f715f9735b8a31b234538": "9f407f0227e9088dc55d244fd862f113",
".git/objects/73/8613a97bcde50071471056bb87fa9ca8b2defb": "3370bb9c5f716b81fdaddafe44315351",
".git/objects/73/dd793df67cd1b420fcfa268f605d7cb58c5fa6": "fffde1569e3b06ceb50a6223e98b4059",
".git/objects/28/42de7acbf0c81daac6b856340ba0a5da3f3019": "afd4e4964d3523428bf1efe9a93781a1",
".git/objects/28/528b9431f6a8f0aea15cd1f9399896a03c0872": "cb924d6958cc04d5e4a2af5274a04739",
".git/objects/8f/dd1f6523577d9fa69a1acffb96e18cb1e9d40f": "b87c4c286448db7552d621b665a630f0",
".git/objects/8a/f8b39135e288c990633aa78d493bf1b753efff": "2f1fe5223081ef74f3a86bd296334a3a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/82532d8f619d07c3090d4b4f4e8063dad9c2df": "0f8ada9d64a080d1c4f607381bb0f4ab",
".git/objects/10/a12e5aaf064b33c862c2692bfc08853322e1d9": "bcccdc19257276ea11e3e35e97b00b9c",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/26/58d5025a35711feb6b8fb1d39e9749af9f3b88": "5fd3109e8d4a903e820792827fe9ccda",
".git/objects/21/8bfeee781864b7056fef7a583e79bd376c05cd": "1cc0a3f4f237ecf216ee890d80e31891",
".git/objects/4d/71899727dbf689720ff77476924b3871ad209e": "b9422027a58f61302cd034c03d3b5ea9",
".git/objects/44/e81cd3033d3ec216a429c41b15f5c436a3547c": "50420dccdb215b65611df3627b2f6637",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0486563462303fe06f883b81489150e1c60fcb": "40f5468f1fcda3a637d1dc8aba43aed5",
".git/objects/6b/5c3dd39df836f5b4478294351e58e95329e5e3": "a6701f4264c51e145aa94556aafb0061",
".git/objects/07/115cdf15dd408d3affb9240e112578e04abf68": "c15aec54da0a839227f480999db9321b",
".git/objects/07/f2cdbc5578d8b45eaf84f153dfb04ec78600e7": "4af96cf5f581106e8c3dd88c19e0a726",
".git/objects/38/3257b3d2b1fde627190a2dc592b77858449273": "823a93d98b7a4db7138e847ab34854c7",
".git/objects/36/45175c8e991c554bf52fce5f0bff07750154ff": "03da5f4380c1bed4097abb6376b42612",
".git/objects/36/352297005e518f7bf16aa96a8c3551207a11c0": "00d2ea63d3aa0d53a3f9f4294e6edc70",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/57c61a988e9ba2b187123ca91dcf3159fc072f": "8851b57ddb4875d80556857475df1a18",
".git/objects/98/7e4f79dfddec955568458977e6c18d70027db3": "1cbc25f49d1a9bc763d9c669b84f81c4",
".git/objects/98/c83040df62d207160dfbef7575aa96f3cb5b5d": "cbcde7a5b99db7e86744123abb56d5b9",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/52/1373d97e8eade355d84e39596a84cb4b7a0122": "437d0e59446503a0686ca4a79955856e",
".git/objects/52/2756641664140939c60c300eb1848d6f0f77dd": "4a64890be94058e9d9680e36203fb40d",
".git/objects/bf/1a60d98ad68c57538f169b1d9fc67c2b7aeeb8": "64856d3575903a97d1c19deebe1fdfdf",
".git/objects/bf/c4a7620c1b2c958a160eb1511e85df194decb5": "e2896fb6ae9f0fdb42ba32b9b37941d0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/98456e1bcfd2a8662aad56d64dd4540ab0e549": "b507543e8239745d36fe25f16fd218ed",
".git/objects/a0/e8ff1ea0ddb1abf4de6122a080e1b9e19407cd": "286ceaa00226af547e3f472579489fa7",
".git/objects/b1/6790854d34ce390cfc7fa35f11f5c6fea8fd36": "26152f6767b9ef7c06355654068abb2d",
".git/objects/b1/9b5bc7957b6b274c50ea0ecdc7cfd47938e7dd": "c7d237519e714dabe748e08baeecd868",
".git/objects/dd/1a41775f1b76b823dc3d23080f462d3575676b": "ecb5bb1ec5c1ff938e0bc983f7aa42ce",
".git/objects/dc/7884f2444ca2579cfbeaafd7cafb7851dae696": "f53d7562d8fdff9727bb59654b6da226",
".git/objects/a9/41e34b65756f803f849054a52f24339c6d8496": "31c718ee4a2bc5bbef42cd1d9c6eabf5",
".git/objects/aa/7009a43c038e45cc6284faac1a2f7dda4cef1e": "f29514d7458fadaa05f3f153cf6969f2",
".git/objects/af/970fbff0a2cefd6a334c06e1d214af4937c9be": "972e31204c1e94a900389220e739af41",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/552200afd5cac9014c32c420393b12c4df4bac": "2f507a0674ff745346a713056762d502",
".git/objects/a8/fd4503fd374d416579a384801a92e7cede40ef": "04506c1737f3a451f77acf0e9bb2b53a",
".git/objects/a6/323a9a7de81432686cca3178c10da2a4f48da5": "e5afd03b0a100d072f22638007ac7737",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9ac5d4cdf81c6f30e214664d5a54063189d949": "0c7e2ba129dd849f821ba8329c2cf234",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/8feae665cdbe266b852e95133487ad6dcfe158": "0a4e29f3c822e281610484fde74697b6",
".git/objects/ef/89d983ed9f9bdc8654cdeb2b4b193d89c87ad9": "c474ba440175240a959368e7341aa01c",
".git/objects/c4/cd09ac694e4e3cbcc8d77c933cdc1fa4a4b4c1": "146ae22dabd4cc2ed90b6eda751f4e3f",
".git/objects/cd/d817ce68b8fc7ef4a298bca70386191824e91e": "3199443abd0fd55a90d15482d4084c2e",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/c5/04799b392916ee656abbe861f81be561e820e3": "ea1edca5d53257685c4f608e4e8ac58a",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/cb/9622cd34b3f591ac8ce11877d6f3f3b8a24e0d": "8a6c164b80e8807ce6ffcab5542ad5f7",
".git/objects/f8/2f17e6b4b9eca9cf4ae1c77a917f9d89c90da4": "dc11280436d78053ba71f206eb97662b",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/79/859cd73620984eb4110e51c7cb64880afa2b53": "803cfc6ba7d9a79818480e2003006b1f",
".git/objects/77/0a23c0bdf8cf5397c32648f244833070fbc879": "decdddc019982d053d087de2cf2f0143",
".git/objects/48/20b0a077ed9191f062bebfdd1b716bed133128": "0d8cf496261466802c00aceeb55aae40",
".git/objects/48/b66d33a5e0f555029ab93b9e569c117ff80ace": "95fd8f6cc0b5b363a462c585e293e187",
".git/objects/1e/16b2fb84c65bbddd81b3a9f4e4bb3360d9c7dc": "4b8c54568101dedb489327a6c37040ca",
".git/objects/84/4d533ed9f9078c85ef39e7a07de3a1a002288a": "a1a2d4fa9f8e0147ad12e727553c5335",
".git/objects/24/8e4e812df638d0327c4e5788a9936513fd80b7": "e978f5f89dd7de145877449ff54bdc5e",
".git/objects/85/2931c3c87339c140e223368155dd10f6b9274c": "3ce4effff5b25a831e51855fac37f9bd",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/1d/599d4fa19cb73cdc49841baaa75a1608c29d2a": "1b40148b37df25f899929610439184bb",
".git/objects/82/a6b6880b6859ab1e5836dc70ee4959bdd41c7e": "3a10efb03f168f26d71e6d9109648a29",
".git/objects/82/377b19dbfd347247e6c9e277c3745f220149e6": "d1b80624b88f1a87e73b62e71a07c91f",
".git/objects/40/56b39a7cabec483f1f13a5a541b296305453e6": "f489cea46feca5e16aa85dc0188009eb",
".git/objects/2e/bc0f9b45a6ef3a464e414366a41a705ee8e034": "0ff267ec80253a5f59666dc23c2ebe4e",
".git/objects/78/e1cc087be8b9f98a5a6dfde80c8651d0d2fc8d": "dc41316c0f6f77f5cd33ead53b5da281",
".git/objects/8b/ba11a1f1c9acd800820e2a3294f4a6afeec39f": "e62e00294a3d920ee0430aa153907493",
".git/objects/7f/2a3785490f86c3f67d3f56384f6e8c74cdaafb": "7c40650ca152ecbefe830c152a758904",
".git/objects/14/f47c0bd37a1d201a8592c78366930356106acd": "e9e7e3105298ccb898bd6bb48f1d0bb1",
".git/objects/8e/b9ad59f65950c52785c8df139d662926143ef8": "fca0447e74bc8adf83c94afe66d46a82",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c21da4a5e1cd7c7a82bcfa6d0980f56",
".git/logs/refs/heads/main": "1c21da4a5e1cd7c7a82bcfa6d0980f56",
".git/logs/refs/remotes/origin/HEAD": "0846f578e2f7c8fe3374f512be1d4e84",
".git/logs/refs/remotes/origin/main": "f3bd215eb074396c7090575f8d7043f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b6e143563c4d8749a747fa33b42d1392",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b6e143563c4d8749a747fa33b42d1392",
".git/index": "81607ad0aeda3819373383966d9c2c0c",
".git/COMMIT_EDITMSG": "552dacb15f2019c8f3f74c55befa242c",
".git/FETCH_HEAD": "cbc7b65bbc09eba11e0881c941d76e25",
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
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
".idea/copilot.data.migration.ask2agent.xml": "09be1fe8cd99b47bcdaa6eb26ad4c54f",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "a114eb2430cb2bddf3ecdc2b44a53543",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "6475bc3ecdafbefdc5162891c95f59b7",
".idea/git_toolbox_prj.xml": "def11fd7d7f704db06dd41ae48b80720",
".idea/caches/deviceStreaming.xml": "20c306e194dee6d7b0f60424eb49ffe9"};
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
