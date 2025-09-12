// =======================
// KONTAK & KONFIGURASI
// =======================
window.SITE = {
  img: "assets/logo.png",
  brand: "Navid Snack",
  wa: "6281234567890",
  alamat: "Deket, Lamongan, Jawa Timur",
  sertifikat: [
    { src: "assets/halal.png", alt: "Sertifikat Halal" },
    { src: "assets/bpom.png", alt: "Sertifikat BPOM" }
  ],
};

// =======================
// SLIDER HERO
// =======================
window.SLIDES = [
  {
    bg:"assets/bg.jpg",
    img: "assets/logo.png",
    title: "Navid Snack — Camilan Sehat & Lezat",
    text: "Snack khas Lamongan, dibuat higienis dan rasa yang konsisten.",
    cta: { text: "Hubungi Sekarang", link: "https://wa.me/6281234567890" }
  },
  {
    bg:"assets/bg.jpg",
    img: "assets/logo.png",
    title: "Promo Spesial Mingguan",
    text: "Diskon paket & pengiriman cepat untuk area Deket, Lamongan.",
    cta: { text: "Lihat Produk", link: "#products" }
  }
];

// =======================
// PRODUK
// tglPromoStart & tglPromoEnd format: YYYY-MM-DD
// jamPromoStart & jamPromoEnd format: HH:mm (24 jam)
window.PRODUCTS = [
  {
    id: "p01",
    name: "Keripik Pisang",
    desc: "Keripik pisang renyah khas Navid Snack",
    img: "assets/bg.jpg",
    price: 15000,
    oldPrice: 20000,
    promo: true,
    tglPromoStart: "",
    tglPromoEnd: "",
    jamPromoStart: "01:00",
    jamPromoEnd: "23:00",
    stock: 5,
    rating: 5
  },
  {
    id: "p02",
    name: "Keripik Telur Asin",
    desc: "Keripik telur asin khas Navid Snack",
    img: "assets/logo.jpg",
    price: 15000,
    oldPrice: 20000,
    promo: true,
    tglPromoStart: "2025-09-12",
    tglPromoEnd: "",
    jamPromoStart: "",
    jamPromoEnd: "",
    stock: 5,
    rating: 5
  },
  {
    id: "p03",
    name: "Corn Milk Drink",
    desc: "Minuman susu jagung khas Navid Snack",
    img: "assets/bg.jpg",
    price: 15000,
    oldPrice: 20000,
    promo: true,
    tglPromoStart: "",
    tglPromoEnd: "",
    jamPromoStart: "",
    jamPromoEnd: "",
    stock: 5,
    rating: 5
  },
  {
    id: "p04",
    name: "Sari Kemangi",
    desc: "Minuman sari kemangi khas Navid Snack",
    img: "assets/logo.jpg",
    price: 15000,
    oldPrice: 20000,
    promo: true,
    tglPromoStart: "",
    tglPromoEnd: "",
    jamPromoStart: "",
    jamPromoEnd: "",
    stock: 5,
    rating: 5
  }
];

// =======================
// GALERI (Lightbox)
window.GALLERY = [
  { src: "assets/logo.jpg", alt: "Galeri 1" },
  { src: "assets/bg.jpg", alt: "Galeri 2" },
  { src: "assets/logo.jpg", alt: "Galeri 3" },
  { src: "assets/bg.jpg", alt: "Galeri 4" },
  { src: "assets/logo.jpg", alt: "Galeri 5" },
  { src: "assets/bg.jpg", alt: "Galeri 6" },
  { src: "assets/logo.jpg", alt: "Galeri 7" }
];

// =======================
// TESTIMONI
window.TESTIMONIALS = [
  { name: "Ani", kota: "Surabaya", text: "Rasanya enak, pengirimannya cepat!", img: "https://i.pravatar.cc/100?u=ani" },
  { name: "Budi", kota: "Gresik", text: "Camilan keluarga favorit, gurih dan renyah.", img: "https://i.pravatar.cc/100?u=budi" },
  { name: "Siti", kota: "Lamongan", text: "Pesan online mudah, respon WA cepat.", img: "https://i.pravatar.cc/100?u=siti" },
  { name: "Bambang", kota: "Sidorajo", text: "Rasanya enak, pengirimannya cepat!", img: "https://i.pravatar.cc/100?u=ani" },
  { name: "Arif", kota: "Malang", text: "Camilan keluarga favorit, gurih dan renyah.", img: "https://i.pravatar.cc/100?u=budi" },
  { name: "Muin", kota: "Bojonegoro", text: "Pesan online mudah, respon WA cepat.", img: "https://i.pravatar.cc/100?u=siti" }
];

// =======================
// NOTIFIKASI PEMBELIAN
window.NOTIFIKASI = [
  { nama: "Budi", kota: "Surabaya", produk: "Keripik Pisang" },
  { nama: "Ani", kota: "Gresik", produk: "Kacang Gurih" },
  { nama: "Rina", kota: "Sidoarjo", produk: "Corn Milk Drink" }
];
