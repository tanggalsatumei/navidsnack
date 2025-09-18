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
  { id:"p01", name:"Keripik Pisang", desc:"Keripik pisang renyah khas Navid Snack", img:"assets/keripikpisang.jpg", price:13000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:"01:00", jamPromoEnd:"23:00", stock:5, rating:5 },
  { id:"p02", name:"Keripik Telur Asin", desc:"Keripik telur asin khas Navid Snack", img:"assets/kerupuktelurasin.jpeg", price:15000, oldPrice:17000, promo:true, tglPromoStart:"2025-09-12", tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:5, rating:5 },
  { id:"p03", name:"Keripik Singkong", desc:"Keripik singkong khas Navid Snack", img:"assets/kerupuksingkong.jpeg", price:15000, oldPrice:17000, promo:true, tglPromoStart:"2025-09-12", tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:5, rating:5 },
  { id:"p04", name:"Corn Milk Drink", desc:"Minuman susu jagung khas Navid Snack", img:"assets/cornmilk.jpeg", price:12000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:100, rating:5 },
  { id:"p05", name:"Sari Kemangi Drink", desc:"Minuman sari kemangi khas Navid Snack", img:"assets/kemangidrink.jpeg", price:12000, oldPrice:15000, promo:true, tglPromoStart:null, tglPromoEnd:null, jamPromoStart:null, jamPromoEnd:null, stock:100, rating:4 }
];

// =======================
// GALERI
window.GALLERY = [
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.2885-15/485835690_18098521840525710_7764807581438392311_n.webp?efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QHiP_-RoiPHOJ-6i-2kQxlziounOSPMG9AGARrh39q7W62ZCnEqi2121jBA992CeyE&_nc_ohc=Qe1GxU0HKssQ7kNvwHiQ_OF&_nc_gid=Nm7rB7LnCDrC7KrhvTw6Jw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU5MzMxNjE4ODQ1MTIxNjI0MQ%3D%3D.3-ccb7-5&oh=00_AfaEpP0NdlXHRqA-edKNsfUaBENLFv_ETvVmqlJajG00MA&oe=68D11DF2&_nc_sid=22de04", alt: "Galeri 1" },
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.29350-15/449672323_791229049757588_5798024061392049333_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QEu-RJ7uJIKG46eurjqsxNQqeTz1qD6S6aIDUYrTj8ObSbhSk59_FWKdZV6HaWqPuI&_nc_ohc=t_wm8mKMSFMQ7kNvwFIFLRo&_nc_gid=CrBdzugnB25Pcba5j-yoUg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQwMjYyOTYwMDI1MjU1Mjk3OA%3D%3D.3-ccb7-5&oh=00_AfYz0vb6NSJA0fbkl1GjV1EQK-UjUfvXJ1SntyjVPapelg&oe=68D118BE&_nc_sid=22de04", alt: "Galeri 2" },
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.29350-15/375185430_151974967957822_3938713267427970591_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFacHw6ve-zfHowJVDwLOI6Y28eoSo79Dr7f2CuV59vQQ_za7HkhiV4RmYqmsLZhtU&_nc_ohc=YYOWsChYotkQ7kNvwE9FYfn&_nc_gid=AaBUmHl07ZNn1VyUL2AM4Q&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzE4NTg4MjEyODkyNDIwMTM1MA%3D%3D.3-ccb7-5&oh=00_AfYf_Zw_bCX-o1ZStXXQZh74E3zwoUs3MmsdCXHtqJMRcA&oe=68D145E6&_nc_sid=22de04", alt: "Galeri 3" },
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.29350-15/307053960_419521023427978_7459320777446562994_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjg5OXg4OTkuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFibFW25c18tfvY4H9McMAfKcgfjx0JislNo5ux0vHkinsbdtTymQBZzCy-Cdje1B8&_nc_ohc=lUnV2e1fuaYQ7kNvwELHdNk&_nc_gid=pVszLjl_yE9wnNWiqfuuLw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjkyOTI1MjQwMDY0OTExNTQzOQ%3D%3D.3-ccb7-5&oh=00_AfZ9XTD9XLg0y49bFHhjY5u3lwhRQ09XvO1XlRWpjdQzsQ&oe=68D14742&_nc_sid=22de04", alt: "Galeri 4" },
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.29350-15/167312996_437989784159157_2852224536395436210_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjk2MHg5NjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QFibFW25c18tfvY4H9McMAfKcgfjx0JislNo5ux0vHkinsbdtTymQBZzCy-Cdje1B8&_nc_ohc=EaHmira339gQ7kNvwHxb5tf&_nc_gid=pVszLjl_yE9wnNWiqfuuLw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjU0MTkwMDk1OTYwNzQxMzQ2Mw%3D%3D.3-ccb7-5&oh=00_AfZHUbB04-TU0IqiJ7NhXC6Uxv7YU3w8LxecjtXtXqi-JQ&oe=68D11467&_nc_sid=22de04", alt: "Galeri 5" },
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.29350-15/167312996_437989784159157_2852224536395436210_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjk2MHg5NjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QFibFW25c18tfvY4H9McMAfKcgfjx0JislNo5ux0vHkinsbdtTymQBZzCy-Cdje1B8&_nc_ohc=EaHmira339gQ7kNvwHxb5tf&_nc_gid=pVszLjl_yE9wnNWiqfuuLw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjU0MTkwMDk1OTYwNzQxMzQ2Mw%3D%3D.3-ccb7-5&oh=00_AfZHUbB04-TU0IqiJ7NhXC6Uxv7YU3w8LxecjtXtXqi-JQ&oe=68D11467&_nc_sid=22de04", alt: "Galeri 6" },
  { src: "https://instagram.fsub20-1.fna.fbcdn.net/v/t51.29350-15/358011011_308484668273549_8350650402567688003_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fsub20-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QFacHw6ve-zfHowJVDwLOI6Y28eoSo79Dr7f2CuV59vQQ_za7HkhiV4RmYqmsLZhtU&_nc_ohc=pMT0p2vAnMwQ7kNvwHDMjNK&_nc_gid=AaBUmHl07ZNn1VyUL2AM4Q&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzE0MDI1NTQ1MTcwMzkyMDE1MQ%3D%3D.3-ccb7-5&oh=00_AfaLU1oNgp6hQSNLRUgW2T9ezNg61efHyz-hBryZOo3Gmw&oe=68D1497D&_nc_sid=22de04", alt: "Galeri 7" }
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

