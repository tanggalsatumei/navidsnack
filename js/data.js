const DB = {
  Pengaturan: {
    site_title: "Navid Snack",
    logo: "/assets/logo.png",
    icon: "/assets/logo.png",
    warna: "#c59b58",              // warna tema utama, bisa diganti
    textpromo: "🔥 Promo Spesial Setiap Hari! 🔥",
    wa: "6281234567890",
    wa_message: "Halo Navid Snack, saya mau pesan...",
    alamat: "Jl. Raya Utama No.1, Lamongan",
    "jam buka": "08.00 - 17.00",
    deskripsi: "Produsen snack lokal berkualitas dari Lamongan",
    maps: "https://maps.google.com/...",
    video_embed: "https://www.youtube.com/embed/xxxx",
    keywords: [
      "snack", "keripik pisang", "corn milk drink",
      "sari kemangi", "kerupuk telur asin", "navid snack"
    ]
  },

  Slider: [
    {
      bg: "/assets/bg.jpg",
      img: "/assets/logo.png",
      alt: "Keripik Pisang",
      title: "Keripik Pisang Premium",
      caption: "Gurih, manis, dan renyah setiap gigitan.",
      btn_text: "Pesan Sekarang",
      btn_link: "#products"
    },
    {
      bg: "/assets/bg.jpg",
      img: "/assets/logo.png",
      alt: "Corn Milk Drink",
      title: "Corn Milk Drink",
      caption: "Minuman jagung manis yang menyegarkan.",
      btn_text: "Coba Sekarang",
      btn_link: "#products"
    }
  ],

  Produk: [
    {
      id: "P1",
      nama: "Keripik Pisang",
      gbr: "/assets/bg.png",
      alt: "Keripik Pisang Renyah",
      hargaawal: 15000,
      hargadiskon: 12000,
      promostart: "08:00",
      promoend: "20:00",
      desc: "Keripik pisang manis dengan tekstur renyah. Cocok untuk camilan keluarga.",
      aktif: true,
      tags: ["keripik", "pisang", "camilan"]
    },
    {
      id: "P2",
      nama: "Corn Milk Drink",
      gbr: "/assets/logo.png",
      alt: "Minuman Jagung Susu",
      hargaawal: 10000,
      hargadiskon: "",
      promostart: "",
      promoend: "",
      desc: "Minuman sehat berbahan jagung manis dan susu segar.",
      aktif: true,
      tags: ["minuman", "jagung", "segar"]
    },
    {
      id: "P3",
      nama: "Sari Kemangi",
      gbr: "/assets/bg.png",
      alt: "Sari Kemangi",
      hargaawal: 8000,
      desc: "Minuman herbal alami yang menyegarkan dan menyehatkan.",
      aktif: true,
      tags: ["herbal", "kemangi", "minuman"]
    },
    {
      id: "P4",
      nama: "Kerupuk Telur Asin",
      gbr: "/assets/logo.png",
      alt: "Kerupuk Telur Asin",
      hargaawal: 12000,
      desc: "Kerupuk gurih dengan cita rasa telur asin yang khas.",
      aktif: true,
      tags: ["kerupuk", "telur asin", "camilan"]
    }
  ],

  Galeri: [
    { url: "/assets/bg.jpg", alt: "Proses produksi" },
    { url: "/assets/logo.jpg", alt: "Produk jadi" },
    { url: "/assets/bg.jpg", alt: "Kemasan produk" },
    { url: "/assets/logo.jpg", alt: "Produk jadi" },
    { url: "/assets/bg.jpg", alt: "Kemasan produk" },
    { url: "/assets/logo.jpg", alt: "Produk jadi" },
    { url: "/assets/bg.jpg", alt: "Kemasan produk" }
  ],

  Testimoni: [
    { nama: "Budi", jabatan: "Pelanggan", gambar: "/assets/bg.jpg", alt: "Budi puas" },
    { nama: "Sari", jabatan: "Pelanggan", gambar: "/assets/logo.jpg", alt: "Sari senang" },
    { nama: "Wawan", jabatan: "Pelanggan", gambar: "/assets/bg.jpg", alt: "Budi puas" },
    { nama: "Bari", jabatan: "Pelanggan", gambar: "/assets/logo.jpg", alt: "Sari senang" },
    { nama: "Muin", jabatan: "Pelanggan", gambar: "/assets/bg.jpg", alt: "Budi puas" },
    { nama: "Sardi", jabatan: "Pelanggan", gambar: "/assets/logo.jpg", alt: "Sari senang" }
  ],

  NotifikasiPembelian: [
    { nama: "Andi", produk: "Keripik Pisang" },
    { nama: "Dewi", produk: "Corn Milk Drink" },
    { nama: "Rudi", produk: "Kerupuk Telur Asin" },
    { nama: "Tina", produk: "Sari Kemangi" }
  ]
};
