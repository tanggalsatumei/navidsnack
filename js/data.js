// js/data.js
// =======================
// INFO WEBSITE & SEO + KONFIG
// =======================
window.SITE = {
  img: "assets/logo.png",
  brand: "Navid Snack",
  wa: "085856481915",
  alamat: "Deket, Lamongan, Jawa Timur",
  keywords: "navid snack, camilan lamongan, keripik pisang, kacang gurih, snack sehat, snack lamongan, oleh-oleh lamongan",
  description: "Navid Snack — Camilan sehat & lezat khas Lamongan, higienis dan bergizi. Pesan cepat via WhatsApp.",
  url: "https://navidsnack.vercel.app",
  sertifikat: [
    { src: "assets/logohalal.png", alt: "Sertifikat Halal" },
    { src: "assets/logobpom.png", alt: "Sertifikat BPOM" },
    { src: "assets/100indoensia.jpeg", alt: "100% Indonesia" }
  ]
};

// teks promo (dari data.js)
window.PROMO_TEXT = "🔥 FLASH SALE Hari ini — Tersisa 3 item lagi! 🔥";

// =======================
// SLIDER HERO
// =======================
window.SLIDES = [
  { bg:"assets/bg.jpg", img: "assets/logo.png", title: "Navid Snack — Camilan Sehat & Lezat", text: "Snack khas Lamongan, dibuat higienis dan rasa yang konsisten.", cta: { text: "Hubungi Sekarang", link: "https://wa.me/6281234567890" } },
  { bg:"assets/bg.jpg", img: "assets/logo.png", title: "Promo Spesial Mingguan", text: "Diskon paket & pengiriman cepat untuk area Deket, Lamongan.", cta: { text: "Lihat Produk", link: "#products" } }
];

// =======================
// PRODUK
// Dates: YYYY-MM-DD ; Times HH:mm (24h). Use null if not set.
window.PRODUCTS = [
  { id:"p01", name:"Keripik Pisang", desc:"Keripik pisang renyah khas Navid Snack", img:"assets/bg.jpg", price:15000, oldPrice:20000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:5, rating:5 },
  { id:"p02", name:"Keripik Telur Asin", desc:"Keripik telur asin khas Navid Snack", img:"assets/logo.jpg", price:15000, oldPrice:20000, promo:true, tglPromoStart:"2025-09-12", tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:5, rating:5 },
  { id:"p03", name:"Corn Milk Drink", desc:"Minuman susu jagung khas Navid Snack", img:"assets/bg.jpg", price:12000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:100, rating:5 },
  { id:"p04", name:"Sari Kemangi Drink", desc:"Minuman sari kemangi khas Navid Snack", img:"assets/logo.jpg", price:12000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:100, rating:4 }
];

// =======================
// GALERI
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
  { name:"Ani", kota:"Surabaya", text:"Rasanya enak, pengirimannya cepat!", img:"https://i.pravatar.cc/100?u=ani" },
  { name:"Budi", kota:"Gresik", text:"Camilan keluarga favorit, gurih dan renyah.", img:"https://i.pravatar.cc/100?u=budi" },
  { name:"Siti", kota:"Lamongan", text:"Pesan online mudah, respon WA cepat.", img:"https://i.pravatar.cc/100?u=siti" }
];

// =======================
// NOTIFIKASI PEMBELIAN
window.NOTIFIKASI = [
  { nama:"Budi", kota:"Surabaya", produk:"Keripik Pisang" },
  { nama:"Ani", kota:"Gresik", produk:"Kacang Gurih" },
  { nama:"Rina", kota:"Sidoarjo", produk:"Corn Milk Drink" }
];

window.PACKAGES = [
  { name:'Paket Hemat (5 item)', price: 45000 },
  { name:'Paket Keluarga (10 item)', price: 80000 }
];

