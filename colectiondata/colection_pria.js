// File: collection_data.js
const dataPria = [
    // kaos
  {  
    id: "estar", 
    nama: "Kaos Pria Distro Lengan Pendek ESTAR", 
    category: "bjp",
    // sablon premium yang tidak mudah pecah. Menggunakan bahan campuran katun, kaos ini memberikan kesan modis ala gaya Korea yang sedang tren. 
    harga: "Rp19.000", 
    priceNumeric: 19000, 
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQFlPgfYWq0Rp6yhFdzfGVmveTH5ANyLqtBR-20NGvCT4r-5WjiDoawLL00s3D0AEWzFmwfUi_Qsqw0GkECKbt-VraD4g0mQ"
    // https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFB2EPTT4uwauTZDHsdIRB8BH_DTbAlJUGw-d3I8r_qZkyC2Kw1TSKFcjZ5_33x1X3jWMe09VWw4hOxnzPE98snzVCW0Ws 
  },
  { 
    id: "fuck", 
    nama: "Kaos Dewasa Distro Lengan Pendek", 
    category: "bjp", 
    // material yang sedikit lebih tebal dibandingkan kaos standar namun tetap menjaga sirkulasi udara dengan baik. Sangat cocok bagi Anda yang lebih menyukai tekstur kain yang kokoh.
    harga: "Rp28.000", 
    priceNumeric: 28000, 
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcPwDurNpouibZ_OF7-PVJwbNLDKYogO48cZx379pE3duFYQaiTUh2dWSaAbebLIpwlpgoC9XkSCApjqloXn_wUi5pzvqUC6eZMTtSGjNs93rP--L4O7s0" 
  },
  { 
    id: "polos", 
    nama: "Kaos Polos Pria Libra Original", 
    category: "bjp", 
    // pilihan premium dari brand lokal Bandung. Kaos ini memiliki kualitas bahan yang sangat baik dengan potongan slimfit yang presisi.
    harga: "Rp75.000", 
    priceNumeric:75000 , 
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVERioXO1e1USQcjPsYvNBrtP8ov3kKsUU4YQGU81D7Y0PdNTdcwPQVnlp4mYOxO-rGFssZllndfsMprczES9L9dQb24fe2Z_9DR6d8KT1"
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoV0-XfM1OyAqwtbxeDcxEm7MokAmK0d3vQgj1QP-tDFNFynJisSnWFL4cND9u1pSiqm1sLTB4RvFK8zKvW1eFgpNcXC6nDvmFTUUu7jM 
  },
  { 
    id: "distro", 
    nama: "Kaos Premium Pria Keren Bandung", 
    category: "bjp", 
    // kaos distro berbahan Cotton Combed 30s dengan sablon Plastisol Ink. Desainnya simpel namun menarik, dengan jahitan rantai standar distro yang kuat.
    harga: "Rp55.500", 
    priceNumeric:15500 , 
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLlVBj5vsdzSQImDwzn0XjflGTew-StxTNQH1_PkZuczHJ-gv57QA57TbEMbcBsvmiPbzCH9o0cG9TUgbS2kJ6rEYksPFg"
    // https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQN5E5c48QuiqqP3REc0m3j0h7hasur1gMoaUOc1TqQWHR4eIFZ_wcWI8eX9hXOlzk1Vt-fFDmUXma17wS9K7SxilnRMDCdqGqCAzW1aC4 
  },
  { 
    id: "oversize", 
    nama: "Kaos Oversize Distro Premium", 
    category: "bjp",
    // gaya santai dengan potongan oversize yang sedang populer. Terbuat dari bahan super soft, kaos ini memberikan kenyamanan ekstra untuk aktivitas harian. 
    harga: "Rp15.000", 
    priceNumeric:15000 , 
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkr5_rj3c1VGSHirJ6bywyh2hlJ9bXsGyoAsO4HtV6Q3w757vJDAMzP3OB54SXSX3rdB4bfLTrfxQ_DYORrnwcU16fLJcieTvra-9jMCS5"
    // https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPH9WPoJexW-8IKQE4CbrChOkKon3rVELnDhZTDbYU2f1GgMyfgib8usSO-gQ5NdTymDxJS7lXDojooNGFMqwt6CdRYPRo9cqHI8JuySiGbOKCiz5dOCLMEQ 
  },
  { 
    id: "polo", 
    nama: "Kaos Polo Rockcable Original", 
    category: "bjp", 
    // tampil eksklusif. Dengan model berkerah, kaos ini cocok digunakan untuk acara semi-formal atau kuliah.
    harga: "Rp131.750", 
    priceNumeric:131750 , 
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWsvJT9E9QrlqhHY_vnNieJYz0Gji9f9OvTN3KT5R3C2F4rut_xXKS3IpFc8BXHZ7nuY0NmwBlKq6s1Imd60ZRgnmw70UwZiZoFPRLDpQDM9DZzgLf1ynZ9hk"
    // https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcToS2bJJfGNSpOsdjSmGlR2qHf7lJhY2fpeQB19ageHApqkUYewzwB8QJFDY2an4keV18jUoZ3Ub5yKceVSmdGOAqMMtae5n-I4zMTfFpo5W-X0tBw6qikFSL8 
  },
  { 
    id: "polos_lengan_panjang", 
    nama: "Kaos Polos Lengan Panjang Forest Green", 
    category: "bjp", 
    // kesan tenang dengan warna hijau gelapnya. Sangat pas digunakan saat cuaca sedikit dingin atau untuk melengkapi gaya layering yang stylish.
    harga: "Rp89.000", 
    priceNumeric:1 , 
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQQS48ifqql4Rc7x2BHVJAiBRwurtUt6rXbuin6FNgBSf-EFP6c3p5L530ngRfyjN4jn1O6wp-G-pXRHcMEudowG6_9PObgg"
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQB6kUPUMw4DC2ObnuvP0i0v2OAebqDjvudBZlFc6vwR3HaQ-LjmuZwhOGf0IRKcZ9VEc6fEuXh8uFmyw4xWpsKF9-Aa8x6
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo8ukrXotUBOshRoJR75VSt4St3f-0Zfj3MAvueVuDUgNhdbg2wac4wOr6qVh0widnuPJNwrQR_nP4BikR5Cgj2eppPp_XyQ 
  },
//   kemeja
  { 
    id: "kemeja", 
    nama: "Kemeja Pria Lengan Pendek Short Shirt Katun", 
    category: "km", 
    // gaya vintage yang sedang tren. Bahannya dari katun sigaret premium yang halus dan lembut di kulit, sangat cocok untuk gaya kasual sehari-hari.
    harga: "Rp57.500", 
    priceNumeric:57500 , 
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4GvIANVzjUxrqNYaHPgB588inA3Pl9gsY9-j82C2BQWE3kGxJJdrqPWJuYlrwwJUwTaj1XWG1a7hMwKXUJ4e0FDx9KynJvw"
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAVW_7mYrMyoqoMk3IRy7n5ksOgQI21lc2q2kYJ1x1d99M9xTAiMjRbXiYDSAMBX4_phu0866vhC4AyZXcrnVXWrcLr4VT 
  },
  { 
    id: "Flanel", 
    nama: "Kemeja Flanel lengan panjang", 
    category: "km",
    // terbuat dari bahan Semi Woll Premium yang lembut dan bertekstur halus. Motif kotak-kotaknya memberikan kesan klasik yang tetap terlihat modern. 
    harga: "Rp59.900", 
    priceNumeric:59900 , 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlqJfi6gsV2wj1KRTgLJHl8G5JrpIXYVR884lo9Cz7gme0Z-GfonnVeNMaROTJgVkux8jDplFaVy4i8koZrmMhh_5lLKk-ww3VWk0NjnTnGZ7MAJXw6-92Uw"
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDIvPlH7llfvOz2tyR9UI_qGNPAw2n3XgF8l3qi8K2fLDscgey6K72zgO6O0inHqc5Hs4mF8mCZzcrrD-WuEF0MwhcPuobebJESsOO42SZMTuXxVR8WFKY 
  },
  { 
    id: "Gloaming", 
    nama: "Gloaming Kemeja Flanel Olive", 
    category: "km", 
    // warna hijau olive yang eksklusif. Menggunakan material katun flanel impor dengan serat kain yang padat dan halus.
    harga: "Rp123.200", 
    priceNumeric:123200 , 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnKxyTBCfh5V7BGZYOe5nptMLJhVTqblUyGHxGaZuCVGJ0yyhA_ahNIVlujfZf8TptV9rM5JoX3v1AP08AxbvKKBiLEJSp023kVZTjXv5Mnrt4fZJfbNMwWQ"
    // https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSn2ezvBBXRtWCSRqBOpD93Hf89jrxzg_foxKrRH2a0G8L4ZV6UMc7ZAzYcPOcBLY45h4LN8xXPGLnZygGEXJzZ6bF-BWjvbnBcj3_o8SBKoO-FGkziMxUyJw 
  },
  { 
    id: "Koko", 
    nama: "Kemeja Koko Cowok Modern", 
    category: "km", 
    // kesederhanaan dengan bahan 100% katun. Modelnya yang modern membuatnya tetap fleksibel untuk dipadukan dengan celana denim.
    harga: "Rp55.000", 
    priceNumeric:55000 , 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTObcC45sAvXdYeAZApxNwEdYDDlyM9h9BjR6gwIGv0lwRmelnVELk-FWBhGUS_AgS1CzAmhwc8pAzUbbN3Soui8LebvO-OPw"
    // https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMy5NzuJxH9Hufu7bPy6zilK3iHTESVzHLgc3o9dR4q76yi1mpfPGeVMpVDGy8_8dU8f54vtd1PQGY4_pIfd4AVaIqjwHjJ6IwERPU7J7U6ZTF_QdgKdkX 
  },
//   jaket
  { 
    id: "Jaket Parasut", 
    nama: "Jaket Parasut Windbreaker", 
    category: "op", 
    // pilihan tepat untuk olahraga atau berkendara motor karena sifatnya yang tahan angin. Bahannya ringan dan mudah dilipat.
    harga: "Rp45.000", 
    priceNumeric:45000 , 
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/107/MTA-155806189/brd-44261_verish-armous-jaket-parasut-pria-windbreakers-outdoor-waterproof-bahan-taslan-premium_full01-e2a2e2a2.jpg" 
  },
  { 
    id: "Hoodie Jumper", 
    nama: "Hoodie Jumper Polos Premium", 
    category: "op", 
    // menggunakan bahan Cotton Fleece yang tebal namun tetap adem. Dilengkapi dengan saku kanguru di bagian depan.
    harga: "Rp55.000", 
    priceNumeric:55000 , 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkUFAvcGKyWw8skJI88fCVcXhXnTEQT7N48W-UwHPsNZZ1e-EzSVW0zonoZuXba9La7POw1BprZIRyO45DDn_GqFa4kzz9_A" 
    // https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrNuqL5XK4yGuy_n1gA3XSQ9G9xWjhovHZmyjLxj6VH_Vy4DKCo2QbN-KIZX7sWAcJXRSj6cfYPLvoclOAkmGmsTgZTsJo
  },
  { 
    id: "Hoodie Distro Roughneck", 
    nama: "Hoodie Distro Roughneck", 
    category: "op", 
    // menawarkan desain sablon minimalis yang modern. Sangat pas untuk melengkapi gaya kasual Anda.
    harga: "Rp135.000", 
    priceNumeric:135000 , 
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSur52QD-lCZ1_NQwO1928aWThNFYp2Um_Bbm_AIRGhEfBCHOut7G8G-Ydm6Bq78h08GzNr0QXaDM5kuH-D53btcKgCkV_KcTnjsc62NoSN"

  },
  { 
    id: "Jaket Kulit", 
    nama: "jaket kulit", 
    category: "op", 
    // Keahlian tinggi dan kepekaan desain keren bertemu secara harmonis dalam koleksi jaket kulit
    harga: "Rp620.000", 
    priceNumeric:620000 , 
    img: "https://boogieapparel.co.id/wp-content/uploads/2024/03/DSC06244-scaled.webp" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  { 
    id: "", 
    nama: "Kemeja Hawai Katun Rayon", 
    category: "bjp", 
    harga: "Rp", 
    priceNumeric:1 , 
    img: "" 
  },
  
];