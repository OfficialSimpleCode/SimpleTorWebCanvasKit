'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "42b7cf7c3384be76d5ab54c0c8dc2abd",
"assets/AssetManifest.smcbin": "d1cb8f73a32fb6c4f5cc7dfda242fb72",
"assets/assets/animations/attention.json.zip": "cb2e40b4fdd9aa4262084b002b6e3eab",
"assets/assets/animations/changing_images.json.zip": "b2f460f705f26e0e8f2c41e60bcfc3b8",
"assets/assets/animations/clock_animation.json.zip": "e968799bf859f06ade72c8be842db97b",
"assets/assets/animations/createBusinessAnimation.json.zip": "55a46f7799cf5fd8a95296887f25d4d5",
"assets/assets/animations/credit_card_animation.json.zip": "927e8b35b97a63784201096f4f93930d",
"assets/assets/animations/cuntact_us_animation.json.zip": "fb8a50758df73214ece1c1e29bef4632",
"assets/assets/animations/delete_animation.json.zip": "725e9a7a5beb09e8f60c51361382c40c",
"assets/assets/animations/empty_animation.json.zip": "c9f01da447366593072eeccc6b15dbdb",
"assets/assets/animations/landing_page_animation.json.zip": "a96bbbf3d99b6a73952db7f30aa13943",
"assets/assets/animations/loading_animation.json.zip": "967b6d8eec52c050586c9736dfea862b",
"assets/assets/animations/maintenance_animation.json.zip": "41371535939f053ddb21d55a2b106049",
"assets/assets/animations/money_animation.json.zip": "2f7d932709f00e100a735d282115c499",
"assets/assets/animations/money_saving.json.zip": "8cb588fa25f2cc670f6cafc84d755ed7",
"assets/assets/animations/most_popular_animation.json.zip": "7bccbc4a05480746cd6873541f744264",
"assets/assets/animations/network_issue_animation.json.zip": "e7f70b39bbc3939dff4cbf97d7336b43",
"assets/assets/animations/notification.json.zip": "534dc861e639203c1ccca4d14f3b5e95",
"assets/assets/animations/no_access.json.zip": "e6eca92b89021b06c8e2f0bcab45e019",
"assets/assets/animations/no_terminal_animation.json.zip": "95d84ed7d19be69f37d1726930c03698",
"assets/assets/animations/payments_path_animation.json.zip": "26651a046d74b6d7b4659a79851cbf79",
"assets/assets/animations/pos_animation.json.zip": "798752c3a01b10d1a04735859ed7035b",
"assets/assets/animations/products.json.zip": "411673da7177610584c5fdfbad05767b",
"assets/assets/animations/rest_animation.json.zip": "8d2b4d8246658a8f8b9c40255fd0a6a6",
"assets/assets/animations/rocket.json.zip": "b62abf6b3ceb1747521abbe0bb60969d",
"assets/assets/animations/securityAnimation.json.zip": "1cd6e379fb959de3b240a1333fb4cf3d",
"assets/assets/animations/send_sms_animation.json.zip": "8845e44f8a539413db9574de706f6126",
"assets/assets/animations/share.json.zip": "59848e58f5e03adf7bfdbebd2f81fbe8",
"assets/assets/animations/story.json.zip": "34c7badf727340a903e8d158eb4b9c2f",
"assets/assets/animations/subscription_animation.json.zip": "ef6661a6b34325175c74b14c2b33398a",
"assets/assets/animations/success_animation.json.zip": "b2f20b7de38c629a0a14cc293011593b",
"assets/assets/animations/support_animation.json.zip": "2bb2fdaa77f42c44c97bd1de0a3087d5",
"assets/assets/animations/times_issue_animation.json.zip": "3d4fc9f3396983d4d5082b32ba9d1009",
"assets/assets/animations/time_order.json.zip": "1187039d0e865e656c4b157ce639410c",
"assets/assets/animations/time_red.json.zip": "7f276d7568d06bf25392195c35885070",
"assets/assets/animations/unknown_issue_animation.json.zip": "f9feb11d5d763606fc978b626cf75ccb",
"assets/assets/animations/vacationAnimation.json.zip": "07356096bed97d64ee5c4660a457ab0f",
"assets/assets/animations/watch_web_animation.json.zip": "e76c4d73004dcba4d3aa9cc367d64f09",
"assets/assets/animations/workers_animation.json.zip": "534d96bd0ca3e808ca96584b87fe27ba",
"assets/assets/app_icon.png": "dbeed262e5f09265f47c7121c9fd829d",
"assets/assets/attention_image.webp": "1d48019e6ece0d50b938d6026d6e4392",
"assets/assets/booking_image.webp": "092e81fce05e3350163757b6e85b54b5",
"assets/assets/box.webp": "72e38c4591ea3d014491d7b15a1cb08d",
"assets/assets/break_image.webp": "e820e6cd1f6d6a2aafaf5b046a13278e",
"assets/assets/card.webp": "f11834eca69d4f2af9dbe6e11b3ec427",
"assets/assets/card_light.webp": "d9cc76c82703ccb157859873e8d3fe8f",
"assets/assets/clock_image.webp": "4aa22e14be00c8000d6a93a73da16885",
"assets/assets/day.webp": "71366fd275a13cca4008cea23edcd69c",
"assets/assets/default_icon_dark.webp": "228b79a4b8fccea0fdb306dccc10687d",
"assets/assets/default_icon_light.webp": "6cf42d0419930e9f16ba4f11349e6cc8",
"assets/assets/default_photo.webp": "54af21a70b89ee81bdadc5ac5286557b",
"assets/assets/default_photo_light.webp": "c8f2f9faaa9713a2cbb6124486b8bb9e",
"assets/assets/icons/barber.webp": "11e9a1f95ad8019d21ae26afeae26743",
"assets/assets/icons/book.webp": "50dc5a3aa7779808a70887c982aac7b5",
"assets/assets/icons/bueaty-salon.webp": "ea36f01a61e0d48a1274f42856025f97",
"assets/assets/icons/car-wash.webp": "ae53cfedc39c331664db2928ab386706",
"assets/assets/icons/chef.webp": "d22709934cbce301faba77cffecb61cd",
"assets/assets/icons/clown.webp": "9d0f695d38219b7e0ee7fc6a52895a45",
"assets/assets/icons/coach.webp": "e27ce688ede41fa10c913f0566d0003f",
"assets/assets/icons/cobbler.webp": "24d4e4980946d283fe10e80c007b1dd4",
"assets/assets/icons/communication.webp": "59df4c5e2467509d553653422a4e31dc",
"assets/assets/icons/dancing.webp": "e770b5440b58068726263e97a09f623c",
"assets/assets/icons/delete.webp": "e21e2d96d4f307d8a444d3c52d7cf4e4",
"assets/assets/icons/diet.webp": "d71fbd5bbdfe3f33d18a946fe5cda092",
"assets/assets/icons/discussion.webp": "3aa2db75a7272d332f49fd1ed6b21fb8",
"assets/assets/icons/dj.webp": "92839f56cff9f54ea6db12789e9658c5",
"assets/assets/icons/eye.webp": "e05658f3416c21eb72bd4be2b1338b4a",
"assets/assets/icons/financial-profit.webp": "d71acd3be4ef23f491697dd7151dc2c9",
"assets/assets/icons/finger-with-nail.webp": "36c95b656f49d712b61f8e6a13ed31fe",
"assets/assets/icons/fitness.webp": "2cc1c1b019c5f687b0f0d801ce48d889",
"assets/assets/icons/groomer.webp": "5da1cc6757c9faed0f28656b247988f8",
"assets/assets/icons/hair-removal.webp": "d65b4eebb61bd41536cf04ec67b50313",
"assets/assets/icons/hairdresser.webp": "a6f94902cd3e2657f84d2b2089be69d1",
"assets/assets/icons/hat.webp": "a47db7e84fea9307cb607eceb77c7ec0",
"assets/assets/icons/knee.webp": "27cb57c0265ee27a4080e55c93ce50f4",
"assets/assets/icons/lawyer.webp": "ae6ac8801d145a910793b6bccc2316e5",
"assets/assets/icons/leadership.webp": "86541cc562a88522961544b8395330ff",
"assets/assets/icons/liner.webp": "c3c7a5c7d7710ecff495a3b416dedcd7",
"assets/assets/icons/make-up.webp": "70ffaa3c35cd7092919669fde9207f23",
"assets/assets/icons/masseur.webp": "cd9705d95622932e236e65d41df4f523",
"assets/assets/icons/more-information.webp": "4fd7a500e4951393d6f725e415227e9d",
"assets/assets/icons/mother.webp": "73680753028883a05548c4ba4b3e5d11",
"assets/assets/icons/nail-dryer.webp": "0ab7ad604e3688be6436d32af4460690",
"assets/assets/icons/nail-polish.webp": "be38cb7f1183274dc3db6cb90b1fcefc",
"assets/assets/icons/photographer.webp": "8ba1721a2c62cb98f280f84210380a52",
"assets/assets/icons/physical-therapy.webp": "6a192f12817ad9bcbddb4babd124afc1",
"assets/assets/icons/psychologist.webp": "ac7c12a94b4884e461c28d8762f51091",
"assets/assets/icons/real-estate.webp": "95cf8422b4a00ccc4a1b55644a957599",
"assets/assets/icons/restaurant.webp": "6929c084d18b908ce11490521a0bbf43",
"assets/assets/icons/sales.webp": "2d87f22439992a1f79f606ba7006baf9",
"assets/assets/icons/social-care.webp": "ffa1073110703e2bd8f27b6599774806",
"assets/assets/icons/steering-wheel.webp": "826bbbb51336a503b4d81675cd1f1d47",
"assets/assets/icons/stethoscope.webp": "46b810fa9d6086285a4cc4f8ae158d9a",
"assets/assets/icons/suit.webp": "3cd717049b6a9b51a4ed89b4f12633cc",
"assets/assets/icons/swimming.webp": "f8b636cf433db401d799eb6d26d85288",
"assets/assets/icons/tattoo.webp": "2bc206d492a2a88a3e9dc2d393b2f4f0",
"assets/assets/icons/teacher.webp": "ba2bce02d137fa76c1801d3bf4d5d992",
"assets/assets/icons/tooth.webp": "5b330254272ae0b51a8755b8842a8599",
"assets/assets/icons/veterinarian.webp": "afa2218359e3c16bf3a93f9158d9c820",
"assets/assets/icons/washer.webp": "cfcbe13c90e5ddc58d242393d9cf9b79",
"assets/assets/icons/wedding-dress.webp": "f43322797bc6045c190b5b5d4d7458c0",
"assets/assets/icons/wig.webp": "ff46101b9a6063e807eaed36d0bbefeb",
"assets/assets/israel.webp": "1e127091d362c8b021c83a004d01fca8",
"assets/assets/launch_icon.webp": "0bc0812966cc9c6cf137a1d891b3f0ba",
"assets/assets/logoDark.webp": "579bd610845d1cd746f73809f80e9dd1",
"assets/assets/man_profile.webp": "6ac1cdf5d05a8138b284c2b8ebbcedde",
"assets/assets/meditation.webp": "f60d2315f51e7ffb811f8ae509458392",
"assets/assets/message.webp": "2adbb5d27159be76c028d902afa31376",
"assets/assets/month.webp": "6b5f3836e57e4f3f13bdafcde45f2888",
"assets/assets/multiple.webp": "d99dd3c7e94d706f007edc63a3de8969",
"assets/assets/people.webp": "11fc326fd8f9de6f0808d80f8ae37539",
"assets/assets/shifts_image.webp": "59a59d1e1aa25f550701ca33d796ff1e",
"assets/assets/store_icon.webp": "acc2c9631c4cb014fb4b3fa18f2f5c56",
"assets/assets/success_image.webp": "39038129dd4f7b5c417a5acae4762f30",
"assets/assets/sunset.webp": "aa88c56c62e978a5d18a45deb111d0af",
"assets/assets/usa.webp": "6cb3971d59103b6a253fbc977ce2e482",
"assets/assets/vacation_image.webp": "5abd47df5d9c5f14dd6bd9ce89281b08",
"assets/assets/week.webp": "4429084c6e869ae29390e2e20d37729d",
"assets/assets/woman_profile.webp": "87037456ea14492670c995d5a3daf60c",
"assets/assets/workers.webp": "8c2707cb240e1c6008479acf5c64afb5",
"assets/FontManifest.json": "0899d45f07a484fe08d00885370e76bb",
"assets/fonts/MaterialIcons-Regular.otf": "6d5a102f8f3d7a6fd31af4b89398095b",
"assets/NOTICES": "98d69064603fe03287253cc33d6293b3",
"assets/packages/currency_picker/lib/src/res/no_flag.png": "3f454777dfe9b6aae5e9d8544f4fa6f6",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d8d4306237845212974af924b1ab33d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8e0542a7d7eec9dbada78c8605db3ccd",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/intl_phone_field/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/packages/intl_phone_field/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/packages/intl_phone_field/assets/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/packages/intl_phone_field/assets/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/packages/intl_phone_field/assets/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/packages/intl_phone_field/assets/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/packages/intl_phone_field/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/packages/intl_phone_field/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/packages/intl_phone_field/assets/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/packages/intl_phone_field/assets/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/packages/intl_phone_field/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/packages/intl_phone_field/assets/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/packages/intl_phone_field/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/packages/intl_phone_field/assets/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/packages/intl_phone_field/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/packages/intl_phone_field/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/packages/intl_phone_field/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/packages/intl_phone_field/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/packages/intl_phone_field/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/packages/intl_phone_field/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/packages/intl_phone_field/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/packages/intl_phone_field/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/packages/intl_phone_field/assets/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/packages/intl_phone_field/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/packages/intl_phone_field/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/packages/intl_phone_field/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/packages/intl_phone_field/assets/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/packages/intl_phone_field/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/packages/intl_phone_field/assets/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/packages/intl_phone_field/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/packages/intl_phone_field/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/packages/intl_phone_field/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/packages/intl_phone_field/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/packages/intl_phone_field/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/packages/intl_phone_field/assets/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/packages/intl_phone_field/assets/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/packages/intl_phone_field/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/packages/intl_phone_field/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/packages/intl_phone_field/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/packages/intl_phone_field/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/packages/intl_phone_field/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/packages/intl_phone_field/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/packages/intl_phone_field/assets/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/packages/intl_phone_field/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/intl_phone_field/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/packages/intl_phone_field/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/packages/intl_phone_field/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/packages/intl_phone_field/assets/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/packages/intl_phone_field/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/packages/intl_phone_field/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/packages/intl_phone_field/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/packages/intl_phone_field/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/packages/intl_phone_field/assets/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/packages/intl_phone_field/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/packages/intl_phone_field/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/packages/intl_phone_field/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/packages/intl_phone_field/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/packages/intl_phone_field/assets/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/packages/intl_phone_field/assets/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/packages/intl_phone_field/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/packages/intl_phone_field/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/packages/intl_phone_field/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/packages/intl_phone_field/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/packages/intl_phone_field/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/packages/intl_phone_field/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/packages/intl_phone_field/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/packages/intl_phone_field/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/packages/intl_phone_field/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/packages/intl_phone_field/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/intl_phone_field/assets/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/packages/intl_phone_field/assets/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/packages/intl_phone_field/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/packages/intl_phone_field/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/packages/intl_phone_field/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/packages/intl_phone_field/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/intl_phone_field/assets/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/packages/intl_phone_field/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/packages/intl_phone_field/assets/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/packages/intl_phone_field/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/packages/intl_phone_field/assets/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/packages/intl_phone_field/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/intl_phone_field/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/packages/intl_phone_field/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/packages/intl_phone_field/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/packages/intl_phone_field/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/packages/intl_phone_field/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/packages/intl_phone_field/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/packages/intl_phone_field/assets/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/packages/intl_phone_field/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/packages/intl_phone_field/assets/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/packages/intl_phone_field/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/packages/intl_phone_field/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/packages/intl_phone_field/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/packages/intl_phone_field/assets/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/packages/intl_phone_field/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/packages/intl_phone_field/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/packages/intl_phone_field/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/packages/intl_phone_field/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/intl_phone_field/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/intl_phone_field/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/packages/intl_phone_field/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/packages/intl_phone_field/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/packages/intl_phone_field/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/packages/intl_phone_field/assets/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/packages/intl_phone_field/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/packages/intl_phone_field/assets/flags/is.png": "907840430252c431518005b562707831",
"assets/packages/intl_phone_field/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/packages/intl_phone_field/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/packages/intl_phone_field/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/packages/intl_phone_field/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/packages/intl_phone_field/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/packages/intl_phone_field/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/packages/intl_phone_field/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/packages/intl_phone_field/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/packages/intl_phone_field/assets/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/packages/intl_phone_field/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/packages/intl_phone_field/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/packages/intl_phone_field/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/packages/intl_phone_field/assets/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/packages/intl_phone_field/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/packages/intl_phone_field/assets/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/packages/intl_phone_field/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/packages/intl_phone_field/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/packages/intl_phone_field/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/packages/intl_phone_field/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/packages/intl_phone_field/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/packages/intl_phone_field/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/packages/intl_phone_field/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/packages/intl_phone_field/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/intl_phone_field/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/packages/intl_phone_field/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/packages/intl_phone_field/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/packages/intl_phone_field/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/packages/intl_phone_field/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/packages/intl_phone_field/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/packages/intl_phone_field/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/packages/intl_phone_field/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/packages/intl_phone_field/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/intl_phone_field/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/packages/intl_phone_field/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/packages/intl_phone_field/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/packages/intl_phone_field/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/packages/intl_phone_field/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/packages/intl_phone_field/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/packages/intl_phone_field/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/packages/intl_phone_field/assets/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/packages/intl_phone_field/assets/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/packages/intl_phone_field/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/packages/intl_phone_field/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/packages/intl_phone_field/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/packages/intl_phone_field/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/packages/intl_phone_field/assets/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/packages/intl_phone_field/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/packages/intl_phone_field/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/packages/intl_phone_field/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/packages/intl_phone_field/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/packages/intl_phone_field/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/packages/intl_phone_field/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/packages/intl_phone_field/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/packages/intl_phone_field/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/packages/intl_phone_field/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/packages/intl_phone_field/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/packages/intl_phone_field/assets/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/packages/intl_phone_field/assets/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/packages/intl_phone_field/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/packages/intl_phone_field/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/packages/intl_phone_field/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/packages/intl_phone_field/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/packages/intl_phone_field/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/packages/intl_phone_field/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/packages/intl_phone_field/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/packages/intl_phone_field/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/packages/intl_phone_field/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/packages/intl_phone_field/assets/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/packages/intl_phone_field/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/packages/intl_phone_field/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/packages/intl_phone_field/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/packages/intl_phone_field/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/packages/intl_phone_field/assets/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/packages/intl_phone_field/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/packages/intl_phone_field/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/packages/intl_phone_field/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/intl_phone_field/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/packages/intl_phone_field/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/packages/intl_phone_field/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/packages/intl_phone_field/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/packages/intl_phone_field/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/packages/intl_phone_field/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/packages/intl_phone_field/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/packages/intl_phone_field/assets/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/packages/intl_phone_field/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/packages/intl_phone_field/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/intl_phone_field/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/packages/intl_phone_field/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/packages/intl_phone_field/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/packages/intl_phone_field/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/packages/intl_phone_field/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/packages/intl_phone_field/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/packages/intl_phone_field/assets/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/packages/intl_phone_field/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/packages/intl_phone_field/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/packages/intl_phone_field/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/packages/intl_phone_field/assets/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/packages/intl_phone_field/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/packages/intl_phone_field/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/packages/intl_phone_field/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/packages/intl_phone_field/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/packages/intl_phone_field/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/packages/intl_phone_field/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/packages/intl_phone_field/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/packages/intl_phone_field/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/packages/intl_phone_field/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/packages/intl_phone_field/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/intl_phone_field/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/packages/intl_phone_field/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/packages/intl_phone_field/assets/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/packages/intl_phone_field/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/packages/intl_phone_field/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/packages/intl_phone_field/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/intl_phone_field/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/packages/intl_phone_field/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/packages/intl_phone_field/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/packages/intl_phone_field/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/packages/intl_phone_field/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/packages/intl_phone_field/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/packages/intl_phone_field/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/packages/intl_phone_field/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/packages/intl_phone_field/assets/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/packages/intl_phone_field/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/packages/intl_phone_field/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/intl_phone_field/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/packages/intl_phone_field/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/packages/intl_phone_field/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/packages/intl_phone_field/assets/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/packages/intl_phone_field/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/intl_phone_field/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/packages/intl_phone_field/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/packages/intl_phone_field/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/resources/language/en.json": "dcdb92171ee8e5be61eb36753ae73a02",
"assets/resources/language/he.json": "45c0d5c9d416914da10fe251e6747a97",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "92af355f3f7ff3c5c09c95c33a056542",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "e56e4fac8c4984b4a9de89fbba01af80",
"icons/Icon-192.webp": "2903e48f404010339ee9afff2afb8200",
"icons/Icon-512.png": "4a6f37067c30d7e9ac57e3630f8a0208",
"icons/Icon-512.webp": "220996b0f9ce272d15f07ca970db4252",
"icons/Icon-maskable-192.png": "e56e4fac8c4984b4a9de89fbba01af80",
"icons/Icon-maskable-192.webp": "2903e48f404010339ee9afff2afb8200",
"icons/Icon-maskable-512.png": "4a6f37067c30d7e9ac57e3630f8a0208",
"icons/Icon-maskable-512.webp": "220996b0f9ce272d15f07ca970db4252",
"index.html": "a962efed13b4ee40dfbfa5e0e3a2276b",
"/": "a962efed13b4ee40dfbfa5e0e3a2276b",
"main.dart.js": "619d920e1c5f868edf8e7b482d26b031",
"main.dart.js_1.part.js": "219bd13861eb6fd7b13bfde483042314",
"main.dart.js_10.part.js": "abefc94379b5d159a8d7d36808b35a08",
"main.dart.js_103.part.js": "9d56bdae852621c632fef38ce9b36f6e",
"main.dart.js_105.part.js": "2cc0d6676def45074971d98524c75256",
"main.dart.js_106.part.js": "7b07d8c3f12cec0e8c70e5a51aa738d2",
"main.dart.js_108.part.js": "bda8632cbf01e5d47562df0571ae9246",
"main.dart.js_109.part.js": "a43821ee6aeace5fcb6853ce88329ab6",
"main.dart.js_11.part.js": "c9ecbebbac6af26cee3cdecf0b08f8c6",
"main.dart.js_111.part.js": "757befb7e8c0bfe6cc85b5f97228749d",
"main.dart.js_112.part.js": "d309ed2eb3c4823d37db3cd0c7dbabcf",
"main.dart.js_117.part.js": "2e991bcf02a2cec7cd9509f8f10feffb",
"main.dart.js_118.part.js": "84775959c40283ff09efb1bdd1bb3dbb",
"main.dart.js_119.part.js": "46c7060fe510e0724292733050482df7",
"main.dart.js_12.part.js": "67f5be46c814c516da2bab802842c0f3",
"main.dart.js_120.part.js": "20ec8f7e2652f8204f2e68d099a843b6",
"main.dart.js_121.part.js": "c2e91fd7938c99308a2a907827d5ed1e",
"main.dart.js_122.part.js": "ae83aa558c7d0c7127b25900a8ff4c2a",
"main.dart.js_123.part.js": "ffe5de7b48822fc0e52017deb8633c3e",
"main.dart.js_124.part.js": "4c595130aa40c6999407fcb313529176",
"main.dart.js_125.part.js": "b6eddbf600ffd032528651fd47bcff04",
"main.dart.js_126.part.js": "78821bb59b874bb64efd20119f905463",
"main.dart.js_127.part.js": "3d1865a2b738dc8982bfd3261a1053c8",
"main.dart.js_128.part.js": "96cf4d500f80ff502c4e735b4f741829",
"main.dart.js_129.part.js": "ac83466735910f5938b1c0d417d42ab1",
"main.dart.js_130.part.js": "835e3e76e9ba098fbf264a5a25c2584d",
"main.dart.js_132.part.js": "9dc6266b1ba21e11ee68e66485b32872",
"main.dart.js_133.part.js": "add6e0202a12ac04c1b81e28a5ae9e90",
"main.dart.js_134.part.js": "cf373324ac837e3eaac021a74707aceb",
"main.dart.js_138.part.js": "d98cbadad80201b6c3aa1022b2f13c71",
"main.dart.js_139.part.js": "dc2ba9e7aa181ca19a94ea667a8a0247",
"main.dart.js_141.part.js": "27006f80014de16913c737f89d964133",
"main.dart.js_143.part.js": "35e58b7fa85ddef44f79f66f26262147",
"main.dart.js_144.part.js": "44c9bb277c7945ce8e663079a3506ba5",
"main.dart.js_145.part.js": "411494e93b94babacd46228ba61649e3",
"main.dart.js_146.part.js": "0451b665a5b5a8416ca50a3aa1ee0cb0",
"main.dart.js_147.part.js": "ce57be13adb6200c421f97dc07231c6a",
"main.dart.js_148.part.js": "4895ad46b20baf23769fa50d4f8e6a8b",
"main.dart.js_150.part.js": "04542c64c6fe2ebe9e02c7ebd503d817",
"main.dart.js_151.part.js": "51bd7093a174f4577fe437e22ebfd50c",
"main.dart.js_152.part.js": "d648b61e7fae0d7eb0d9e667e06c8577",
"main.dart.js_153.part.js": "63ad9763a2891f72ef1d7003e3dc0b73",
"main.dart.js_155.part.js": "34450e598bad8f431b5adce770a760bf",
"main.dart.js_156.part.js": "146374239a024f305e3e619e9bda4c7c",
"main.dart.js_159.part.js": "6a1b226285c8d9d8bf3e7a6b15d34d13",
"main.dart.js_16.part.js": "6ab9c92c6ad61421aefc8802a730bae9",
"main.dart.js_160.part.js": "751c2b436635783e752918757cca43ce",
"main.dart.js_161.part.js": "e7a895b76e6b052c049a79583ec8e0bf",
"main.dart.js_162.part.js": "9dd0f9f775887c6d619975c8434c8487",
"main.dart.js_163.part.js": "4d8c587901214404bba59abebb534e4a",
"main.dart.js_164.part.js": "4bac99e50a57b1d6e605952d4089ea65",
"main.dart.js_165.part.js": "b897383bcab01a9013be36bc133c400e",
"main.dart.js_166.part.js": "ea7fcffefc3ade582a5adfa9181fe6a6",
"main.dart.js_167.part.js": "a91b1914ad2a6968b9a2d6ea9563c9d9",
"main.dart.js_168.part.js": "f2d8a7eb098db6e6617ed27a6c05b841",
"main.dart.js_169.part.js": "1933f8c1ee400032797b264e361e4121",
"main.dart.js_17.part.js": "a158d39501765665692cadcfa75a1755",
"main.dart.js_171.part.js": "e3dedd586f837e44865752275af7228e",
"main.dart.js_173.part.js": "dc9fbfdbc03999081e1535100583decc",
"main.dart.js_174.part.js": "4fbdb15446828799bb75de4b326c5ef7",
"main.dart.js_176.part.js": "77f9b5a58de22ef3f1a91307fcc7bce8",
"main.dart.js_177.part.js": "37d555b2efc6d74605844c0637ddba91",
"main.dart.js_178.part.js": "89dc176f395996bffaca6165be7a5e94",
"main.dart.js_179.part.js": "499de93ea3838be4f24c92f820f37ccb",
"main.dart.js_181.part.js": "58536db3ac56209013d6e3a8a6ab4756",
"main.dart.js_183.part.js": "0a7f57eed7d0723132b2b6ee12b94b9a",
"main.dart.js_184.part.js": "c4caa8c74eac8c656a5f1a7970d55d4e",
"main.dart.js_185.part.js": "0412ad7258fd91d163f1874939eb2515",
"main.dart.js_186.part.js": "386579e3117d71a56230f2cd225bfc15",
"main.dart.js_187.part.js": "c563480f4f04aa3bce1fafbd6d3866de",
"main.dart.js_189.part.js": "a989d993191bece8a91fa2af6a88324b",
"main.dart.js_191.part.js": "894751af24a29334a11fc0d2b2a189f0",
"main.dart.js_192.part.js": "e31e3feb5009184c34edebe8d7c05ae4",
"main.dart.js_194.part.js": "317b5c51eb2bd26a7e3997d6fb2191d7",
"main.dart.js_195.part.js": "a37b763a40cfe29a93dea6ceef77b088",
"main.dart.js_196.part.js": "2adcfab44de02a4fd2b85d4a3263e887",
"main.dart.js_197.part.js": "9830d3b8f19ae26fe96f215dd085582e",
"main.dart.js_198.part.js": "40194ec6e21eb3f41b7ac89142f79bc2",
"main.dart.js_199.part.js": "c34c892676d168681aba6723155877a3",
"main.dart.js_200.part.js": "007e66dadbf2838f277e5fb319757222",
"main.dart.js_201.part.js": "ed27196ecb0f9e0516f6b37e28ca683b",
"main.dart.js_202.part.js": "190db92798efb227523ad6c9de9e76dc",
"main.dart.js_203.part.js": "3cf2af5d9d67a28b104c264e59c723d4",
"main.dart.js_204.part.js": "f90d3e212b8e6a1a8756d6c4a399c2c1",
"main.dart.js_205.part.js": "274633072cce56466b7ed9250ea74dfe",
"main.dart.js_206.part.js": "97ba2e83b0e820e2e5f568456ac7fca3",
"main.dart.js_207.part.js": "527f9dda5aed13e457c1dccbe5f509f2",
"main.dart.js_208.part.js": "090a745c392504ad1ab89bd2efb4eb77",
"main.dart.js_209.part.js": "612e800bfd85574f525e66cf970c93fc",
"main.dart.js_21.part.js": "9ee8362fd1ff914ce0877508e5c14c06",
"main.dart.js_211.part.js": "df3e44357cef2bfab639271d2abff61a",
"main.dart.js_212.part.js": "39f0d1104a762b9c5abf6309038c7a77",
"main.dart.js_213.part.js": "a43af772d555d93e4859f2a0ed50b378",
"main.dart.js_214.part.js": "b6313ae07e990c67fcef654650aa48a6",
"main.dart.js_215.part.js": "056f7dcd6f2d0a308bbaaebeac8fa332",
"main.dart.js_216.part.js": "6407164ab89be6cefc0f7fa2562bd837",
"main.dart.js_219.part.js": "cfa915ce5e1206f4f1e10fbca56dbcab",
"main.dart.js_221.part.js": "1dd2c4afea41dd098d89cdec3b6b3d59",
"main.dart.js_222.part.js": "1bcd5fc8d660c68455040f0ab7bf10c0",
"main.dart.js_224.part.js": "a5ca1d8faf4e672fa9b190187bebffd2",
"main.dart.js_229.part.js": "94a5c6e22264b30fe95c692dfa532d5b",
"main.dart.js_23.part.js": "8221f08883f81072638359618b4f8eb3",
"main.dart.js_233.part.js": "fafe285614caf31451e0a117ca66bc97",
"main.dart.js_234.part.js": "4a598e7bf3e2252e0e9cc31e30774090",
"main.dart.js_235.part.js": "e582728be9bf1fdbf76e9f43e52a63d8",
"main.dart.js_236.part.js": "ea898f1a27d477429d147881573b9246",
"main.dart.js_237.part.js": "479c3e3d508d5ca7c23ed6f7e2d1408c",
"main.dart.js_238.part.js": "1d3d6618601e2abf7de2ecdbce3db168",
"main.dart.js_239.part.js": "2707a28de5a31b2ef6f51e820f087760",
"main.dart.js_24.part.js": "885eebc57c4e8b77734b4d2577a02389",
"main.dart.js_240.part.js": "48ba7f429bb30a0349811a521666f389",
"main.dart.js_241.part.js": "ccb33d96293240b8eb4a75dd7c60ffec",
"main.dart.js_246.part.js": "550bb27dc81223902f575e1530104034",
"main.dart.js_248.part.js": "3974c70108e11dda969efb67c373d7f5",
"main.dart.js_249.part.js": "bbe810d0052155f0da68f03d138deda4",
"main.dart.js_25.part.js": "e75ac46fa95d6115a47b9c37daa46110",
"main.dart.js_250.part.js": "a9a341014bc8ade6c92d1d9f02bcf595",
"main.dart.js_251.part.js": "2ee9bf0ab171ffcc7c3cf7db97a32c5a",
"main.dart.js_253.part.js": "c2359acec497145ba8771bf312ebf05a",
"main.dart.js_254.part.js": "dfaf88a68a7af07e3e2160019cb2aa3d",
"main.dart.js_256.part.js": "3d238736f10af33fb89b3416260039b4",
"main.dart.js_257.part.js": "96625168274167f9ab1234256132f0d7",
"main.dart.js_258.part.js": "588d47abc5447c8f77c8b59bfd756550",
"main.dart.js_26.part.js": "0ce5c675a686c80b8f34f570b67392b2",
"main.dart.js_260.part.js": "122c029f6eb94078344372a5245a29f6",
"main.dart.js_261.part.js": "3e84ade4f2e8e8093a3156132b88a9ac",
"main.dart.js_262.part.js": "5698d4884cbc27d8185add34bd2b7b9e",
"main.dart.js_263.part.js": "c4c6f2152ed86b8a7691be6fff2482de",
"main.dart.js_264.part.js": "e163bae7b1311894be20ab57d5f85e21",
"main.dart.js_266.part.js": "87b012f36a543b2341ea815784c0ba6a",
"main.dart.js_267.part.js": "a105d77fbcfbb9ee934ca6b3681dcae5",
"main.dart.js_268.part.js": "0f76a8ab13a3d61a52cebd4507bf6c42",
"main.dart.js_269.part.js": "64875a513e44030fdab0596b4cca38ec",
"main.dart.js_27.part.js": "55b588c1fa621603d26c02532a06ce8b",
"main.dart.js_271.part.js": "4bce3d8288c8ba3cf2ff2cc970c180d1",
"main.dart.js_272.part.js": "bc87cfc85fec32dbbf759e39dd2921f5",
"main.dart.js_273.part.js": "1dea509e9ab031f510bdfbc82043c835",
"main.dart.js_274.part.js": "4c966f0bc6face47822ec511338be90f",
"main.dart.js_275.part.js": "3609ff384db3f269a359f410de503391",
"main.dart.js_278.part.js": "7377170c230b7a0691480240d5a8d4b4",
"main.dart.js_279.part.js": "5eb5cc0afcf19efc5882c36c5855a0a8",
"main.dart.js_28.part.js": "64bf6d1a9923874a4cbf04d848548dbb",
"main.dart.js_280.part.js": "a415c1043af06ce9faeb2314d1839ddd",
"main.dart.js_281.part.js": "479127e5207b18fae9e03951ea70f3e0",
"main.dart.js_282.part.js": "fd6bf4a58368a17d608a00cc0e2b0ff0",
"main.dart.js_283.part.js": "28e2b963163db1bf3db6d22ea0583be7",
"main.dart.js_284.part.js": "4bb712f65f054531982e2436dd8a2386",
"main.dart.js_285.part.js": "970b4196413401f5f5a7ec5efc30c93c",
"main.dart.js_286.part.js": "342bc6cc74f1a3217e3c7ff2c49763cd",
"main.dart.js_287.part.js": "296d6f7940ffe26728378603626e2c06",
"main.dart.js_288.part.js": "3962c5c453c7f25ba4e7e5575f163e28",
"main.dart.js_289.part.js": "6702c70bef81e564c5f88604f1edf4b0",
"main.dart.js_29.part.js": "b8c544d0ae72777834972bdf22e36ff3",
"main.dart.js_291.part.js": "fc13d2c81b4a752a4563917700fa38e8",
"main.dart.js_292.part.js": "82d09103f13ba216918b05c5d36fde7b",
"main.dart.js_293.part.js": "b376be121f9ceb388d49e900d12281dd",
"main.dart.js_294.part.js": "5e646cd4501a3e1e64ece9c6569fbc46",
"main.dart.js_295.part.js": "4d75f685467b964dc564baf08a64360f",
"main.dart.js_296.part.js": "8bc51493089cd7a03200174999a29c4b",
"main.dart.js_297.part.js": "8ae8bb85d42122499a9b8862f6fa9fa5",
"main.dart.js_299.part.js": "fc9933f31c1f2ac58a48cb01d2e25b39",
"main.dart.js_3.part.js": "fb4d772602387664249919cade160aba",
"main.dart.js_301.part.js": "83e803c557f3dbbdbfd3f742150f863f",
"main.dart.js_302.part.js": "3131c463bf66f57de36bdfd763017215",
"main.dart.js_303.part.js": "515ee13964b340e907495ef01549394e",
"main.dart.js_304.part.js": "32367889ddb61306ee571e5e7f75f8cc",
"main.dart.js_305.part.js": "2c88ed03ea101cd174c591a6c6b7fd44",
"main.dart.js_306.part.js": "42efc7af19ab5327b7bb7ee1e2d98fbb",
"main.dart.js_307.part.js": "4e84f4bc3056c25a2511ee8b1816807c",
"main.dart.js_32.part.js": "710b733cb834a65571dd6361bcd9adb1",
"main.dart.js_33.part.js": "6c63f1365ffe2c0370df5bbb25e9faa8",
"main.dart.js_34.part.js": "75d4431ec8db54f8958516062c92999a",
"main.dart.js_37.part.js": "f8563a6a0321b640616eb677abb58733",
"main.dart.js_38.part.js": "69ca6c8d34c0c2c74baaaa3cac2201f3",
"main.dart.js_4.part.js": "e5d6174b4a208e4f2144dc4ead3b325e",
"main.dart.js_40.part.js": "f4eb45740275863e3f6ae1106f1d81fc",
"main.dart.js_41.part.js": "d49c1199fb868ddedb6012df72e08ae4",
"main.dart.js_44.part.js": "b470924e3765e9234aacffd58e5f7364",
"main.dart.js_45.part.js": "26b40123da3e389a9d60253a3fa218a1",
"main.dart.js_46.part.js": "4b8784da76cb317a177248356ca4233c",
"main.dart.js_47.part.js": "6bd17ded62cabb9bea9ed0be34b426ff",
"main.dart.js_48.part.js": "54fee0eeaa54ac86470f840e066acfe8",
"main.dart.js_5.part.js": "888db9eaf4aafd93b0b86483aa1cba3e",
"main.dart.js_50.part.js": "08d16aa04481d9acbf3a1abad59c37e2",
"main.dart.js_51.part.js": "8b6299d61b2842c9a81ef55c167a82b1",
"main.dart.js_55.part.js": "bfb317af9d73bc8297d187ecf4e0bbc8",
"main.dart.js_56.part.js": "e0d0b91de23612a0549b0c957d670489",
"main.dart.js_57.part.js": "69e2d66e1da185dbb8cad4d186beab83",
"main.dart.js_58.part.js": "0e498e88891a5bfd3f8fbef606faac59",
"main.dart.js_59.part.js": "4625481c42464d9cd039258c857b19d6",
"main.dart.js_6.part.js": "71ebd5bba3e786401517252c489eb0e1",
"main.dart.js_60.part.js": "8a8b252054a3aabc4edf3b30614020c5",
"main.dart.js_61.part.js": "99a2537894d416733dfb63b4c82d08f2",
"main.dart.js_62.part.js": "b56e97de6948dcf6b13e7b2aeb5d04db",
"main.dart.js_63.part.js": "c18746933d7cbc92c00e83654f41f71f",
"main.dart.js_64.part.js": "37936fc86c0fa2a206fba77a4d4a0b2d",
"main.dart.js_66.part.js": "66e1fac4723a8e2b61d344193cf70b73",
"main.dart.js_67.part.js": "4cb39265f93eaf62ec309f496f4c5414",
"main.dart.js_69.part.js": "4a9ef3028fbb6acc3d1094ef3b8bb6ec",
"main.dart.js_70.part.js": "b4c5b63c48c92c285d0f5cfe1e5fabdc",
"main.dart.js_71.part.js": "13b3a76ad15536ade8d5e567e2d1a3c8",
"main.dart.js_79.part.js": "54f43756bceebeb6714cda09afb67aa0",
"main.dart.js_80.part.js": "a2170cafd7bd2e8ef12c4e6fc51b7015",
"main.dart.js_83.part.js": "6294883e7cd71fb06d43be27c77fda42",
"main.dart.js_85.part.js": "d703b8d96c67edf818e66a7b1d1cf3f8",
"main.dart.js_86.part.js": "60481fdaeaf7a00165109705ff8713ae",
"main.dart.js_87.part.js": "ff763694c42dc697674b5857968dca60",
"main.dart.js_88.part.js": "4d5473d8baf98ce40b266dd6e01ebe71",
"main.dart.js_9.part.js": "bd6e879efb3478d1367f9d09d19628f6",
"main.dart.js_92.part.js": "0fa7fc17110ff43429a35827a4d4e4b1",
"main.dart.js_93.part.js": "2a6eff88b38a9d44559042e9f712561d",
"main.dart.js_94.part.js": "ebde4262ec191dc4eefe19dc6853cf97",
"main.dart.js_95.part.js": "202afed3ab907a321d95c0b6d67fa719",
"main.dart.js_96.part.js": "64e7f6da3635996f110211e150cf5715",
"main.dart.js_97.part.js": "81e0e9d522207f7fc6539e41a32eeaa6",
"main.dart.js_98.part.js": "8cf3b6303562cbf0feb1819d34e70d02",
"main.dart.js_99.part.js": "ecaa5034be549c9d7b29678582fec994",
"manifest.json": "625682af20e159dadaf8f9d3382b1a02",
"splash/img/dark-1x.png": "fafdf59391c62ccb851ad0cc14c52b7d",
"splash/img/dark-2x.png": "c40e64b7d0468461d40b0fac9f9c2725",
"splash/img/dark-3x.png": "bfa3c90e2bf998c890b56dc06e04c297",
"splash/img/dark-4x.png": "59d5cbf1e82a2157f6cc089c272d1a62",
"splash/img/light-1x.png": "fafdf59391c62ccb851ad0cc14c52b7d",
"splash/img/light-2x.png": "c40e64b7d0468461d40b0fac9f9c2725",
"splash/img/light-3x.png": "bfa3c90e2bf998c890b56dc06e04c297",
"splash/img/light-4x.png": "59d5cbf1e82a2157f6cc089c272d1a62",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "b3a49d816f57c7ee9049c9adb35bc80b",
"version.json": "ddc663358020bd943dd59c3a661132b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
