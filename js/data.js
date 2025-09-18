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
  jamOperasional: "08.00 - 17.00 WIB",
  hariOperasional: "Senin - Sabtu",
  mapFrame: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3350.744872691265!2d112.442892!3d-7.1220645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f9138f5d5981%3A0x508c66cab23884d6!2sNavid%20Snack!5e1!3m2!1sen!2sid!4v1758083702298!5m2!1sen!2sid",
  instagramEmbed: [
    "https://www.instagram.com/p/CQavdSMNUje/embed",
    "https://www.instagram.com/p/CGxXMP_lDIh/?hl=en",
    "https://www.instagram.com/p/CxsfPbPyvW0/?hl=en&img_index=1"
  ],
  youtubeFrame: "https://www.youtube.com/embed/WAt5cQiMlpE",
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
  { id:"p01", name:"Keripik Pisang", desc:"Keripik pisang renyah khas Navid Snack", img:"assets/keripikpisang.jpg", price:13000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:100, rating:5 },
  { id:"p02", name:"Keripik Telur Asin", desc:"Keripik telur asin khas Navid Snack", img:"assets/kerupuktelurasin.jpeg", price:15000, oldPrice:17000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:100, rating:5 },
  { id:"p03", name:"Keripik Singkong", desc:"Keripik singkong khas Navid Snack", img:"assets/kerupuksingkong.jpeg", price:15000, oldPrice:17000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:100, rating:5 },
  { id:"p04", name:"Corn Milk Drink", desc:"Minuman susu jagung khas Navid Snack", img:"assets/cornmilk.jpeg", price:12000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:100, rating:5 },
  { id:"p05", name:"Sari Kemangi Drink", desc:"Minuman sari kemangi khas Navid Snack", img:"assets/kemangidrink.jpeg", price:12000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:100, rating:4 }
];

// =======================
// GALERI
window.GALLERY = [
  { src: "assets/keripikpisang.jpg", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" },
  { src: "assets/pameran.webp", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" },
  { src: "assets/pameran.jpg", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" },
  { src: "assets/visitasi.jpg", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" },
  { src: "assets/minimarket.jpg", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" },
  { src: "assets/alfamart.jpg", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" },
  { src: "assets/pesanan.jpg", alt: "Keripik Pisang Kepok Navid Snack Khas Lamongan" }
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

