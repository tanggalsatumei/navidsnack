window.DB = {
  Pengaturan: [
    { key: 'site title', value: 'Navid Snack' },
    { key: 'logo', value: '/assets/logo.png' },
    { key: 'icon', value: '/assets/favicon.png' },
    { key: 'warna', value: '#c59b58' },
    { key: 'textpromo', value: '🔥 Promo Spesial Setiap Hari! 🔥' },
    { key: 'wa', value: '6281234567890' },
    { key: 'wa message', value: 'Halo Navid Snack, saya mau pesan...' },
    { key: 'alamat', value: 'Jl. Raya Utama No.1, Lamongan' },
    { key: 'jam buka', value: '08.00 - 17.00' },
    { key: 'deskripsi', value: 'Produsen snack lokal berkualitas dari Lamongan' },
    { key: 'maps', value: 'https://maps.google.com/?q=Lamongan' },
    { key: 'video_embed', value: 'https://www.youtube.com/embed/B5njr5BoGo8' },
    { key: 'keywords', value: ['navid snack','keripik pisang','corn milk drink','sari kemangi','kerupuk telur asin','snack lamongan'] }
  ],

  Slider: [
    { bg: '/assets/hero1.jpg', img: '/assets/keripik.jpg', alt: 'Keripik Pisang', title: 'Keripik Pisang Renyah', ket_slider: 'Camilan renyah dari pisang pilihan', tombol: 'Pesan Sekarang', tombol_link:'#products' },
    { bg: '/assets/hero2.jpg', img: '/assets/cornmilk.jpg', alt: 'Corn Milk Drink', title: 'Corn Milk Drink', ket_slider: 'Minuman jagung susu segar', tombol: 'Pesan', tombol_link:'#products' }
  ],

  Produk: [
    { id:'p1', namaproduk:'Keripik Pisang', gbrproduk:'/assets/keripik.jpg', altproduk:'Keripik Pisang', hargaawal:15000, hargadiskon:12000, jampromostart:'08:00', jampromoend:'17:00', deskripsi:'Keripik pisang manis gurih khas Navid Snack', aktif: '1' },
    { id:'p2', namaproduk:'Corn Milk Drink', gbrproduk:'/assets/cornmilk.jpg', altproduk:'Corn Milk Drink', hargaawal:10000, hargadiskon:8000, deskripsi:'Minuman jagung susu segar', aktif: '1' },
    { id:'p3', namaproduk:'Sari Kemangi', gbrproduk:'/assets/sarikemangi.jpg', altproduk:'Sari Kemangi', hargaawal:8000, hargadiskon:6500, deskripsi:'Minuman sari kemangi menyehatkan', aktif: '1' },
    { id:'p4', namaproduk:'Kerupuk Telur Asin', gbrproduk:'/assets/kerupuk.jpg', altproduk:'Kerupuk Telur Asin', hargaawal:12000, hargadiskon:10000, deskripsi:'Kerupuk renyah dengan rasa telur asin khas', aktif: '1' }
  ],

  Galeri: [
    { gambar_url:'/assets/gallery1.jpg', altgaleri:'Produksi Keripik' },
    { gambar_url:'/assets/gallery2.jpg', altgaleri:'Produksi Minuman' }
  ],

  Testimoni: [
    { nama:'Andi', jabatan:'Pelanggan', gambar_url:'/assets/user1.jpg', alt:'Andi' },
    { nama:'Siti', jabatan:'Pelanggan', gambar_url:'/assets/user2.jpg', alt:'Siti' }
  ],

  Artikel: [],

  NotifikasiPembelian: [
    { nama:'Andi', produk:'Keripik Pisang' },
    { nama:'Sinta', produk:'Corn Milk Drink' },
    { nama:'Rudi', produk:'Kerupuk Telur Asin' },
    { nama:'Maya', produk:'Sari Kemangi' }
  ]
};
