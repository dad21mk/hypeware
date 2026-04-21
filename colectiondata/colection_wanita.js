// File: colection_wanita.js
const dataWanita = [
  // baju
  { 
    id: "kaos-crew", 
    nama: "T-Shirt Crew Neck", 
    category: "bj", 
    harga: "Rp199.000", 
    priceNumeric: 199000, 
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000" 
  },
  { 
    id: "celana-linen", 
    nama: "Celana Linen Blend", 
    category: "bj", 
    harga: "Rp499.000", 
    priceNumeric: 499000, 
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000" 
  },

  // dress
  { 
    id: "Evening Gown", 
    nama: "Burgundy Off-Shoulder Lace Dress", 
    category: "dr",
    // Gaun mewah berbahan renda dengan potongan bahu terbuka (off-shoulder), memberikan kesan vintage sekaligus sensual. 
    harga: "Rp4.331.859", 
    priceNumeric: 4331859, 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9sEwB7Iw8XrEs8K87JqYy0phnvQNCLq9o87TmYOYqA7HwiAPuxjTxM0lWxim5JOD7yUpUmJcp5tikceRB9tFgkEb-6u2lxTP8B57xigSLfGMOepvUVbBw" 
    // https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR33tNO6ZibUekeMl0ImGs_c_mHsdV1cyg2ltjEsZvZbaj8wtaqNyayUo4gJ6CER0L7lLPzMIuupS6-FIx31AmXcDI4Jp_EucqI2Mg6dBHve6bDF92PL0RO3w
  },
  { 
    id: "Overall-Dress", 
    nama: "Gaun Overall Denim Pink", 
    category: "dr", 
    harga: "Rp170.000", 
    // Pilihan santai berupa overall denim berwarna merah muda, sangat pas untuk gaya casual remaja atau jalan-jalan siang hari
    priceNumeric: 170000, 
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbzxso20wSxP6H8BiPXkeoMLV66xXaCYJHsfLu8YSF6ZAUCUCBy9G97P08Q2tls-fvfmY6Va7z7WpGeO4YjJ2uJfrAQbbCjQ" 
    // https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQyV8QCq5g87CJkMMWmI9P-YW3j3gUVnNnun5m8yngG8-AC5ZbUSTtQtmf0ijWRz7mFmQFwiue3HaiEuDJzzdVyRgrnHbra
  },
  { 
    id: "Pleated Midi", 
    nama: "Ira Pleated Dress", 
    category: "dr",
    // Gaun midi dengan detail lipit (pleated) dan motif marmer yang elegan, memberikan siluet yang mengalir ringan. 
    harga: "Rp2.381.659", 
    priceNumeric: 2381659, 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1jNm2TvClrFmiX_1iNz6pHD7wR_8cljC6FnM7zaGMQAOWX29SsgfaqOnJAr1MhygLnyzuDnzYEyXfy_if2gnsXczkhg3U"
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFP4_3GF-AlUA4LwJz3dYlzJiQ_ZsRHu3Bb1Q8ITMEd_5TZzEtbbWZwyHBI48rZVUTPBWhj3PaFSAiA3lvGTETklE7vJIfuQ 
  },
  { 
    id: "Puff Sleeve Dress", 
    nama: "Pomelo Puffed Sleeve Mini Dress", 
    category: "dr", 
    // Gaun dengan potongan A-Line yang klasik, dirancang untuk kenyamanan maksimal dengan bahan yang breathable.
    harga: "Rp251.600", 
    priceNumeric: 251600, 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaWFzfC-JwWm19yxbok0lwdfYZa_sXu4EA-oiqG1sGFOiNdpGjy3CykVAUuHflIab1YHzTvSQO3VI9Rx40ISW0FpVo9ApwR_RRqJWZUzmkBAGk4ectbIP3sw" 
  },
  { 
    id: "A-Line Dress", 
    nama: "Willow A Line Dress", 
    category: "dr", 
    harga: "Rp730.986", 
    priceNumeric: 730986, 
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJRA3rZp4dAjgzNHhqbhN4ajdVVcE9od-9LnuPOl5UXK6iIvj1mK1_2vCKZ4hSrVsiitgsQf6BSeIIy6-b4YnHRUviKm1-K_8af6T6E1kInHfNzRLZqO-MXw"
    // https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1mvVaxv7At94ObKHnU6vJ_8xEG5jVne7Eut4QZTwXAuwA5oEipjw0b2IwMFnJaKrXOCHjFZPOuTsx_AxkBMjhnu0ayBMrCJIdkeDRZW0yHgqKS6qnJw_QGA 
  },
  { 
    id: "celana-linen", 
    nama: "Celana Linen Blend", 
    category: "bawahan", 
    harga: "Rp499.000", 
    priceNumeric: 499000, 
    img: "https://balticborn.com/cdn/shop/products/sierra-sweetheart-maxi-dress-navy-806826.jpg?v=1762199048&width=600"
    // https://balticborn.com/cdn/shop/products/sierra-sweetheart-maxi-dress-navy-381407.jpg?v=1680630186&width=600 
  },
  { 
    id: "jaket-parka", 
    nama: "Jaket Parka Ringan", 
    category: "outerwear", 
    harga: "Rp599.000", 
    priceNumeric: 599000, 
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000" 
  }
];