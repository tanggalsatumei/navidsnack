// js/data.js
window.NavidData = {
  products: [
    {
      id: "p1",
      name: "Keripik Pisang",
      desc: "Keripik pisang renyah khas Navid Snack",
      price: 15000,
      oldPrice: 20000,
      promo: true,
      stock: 3,
      endTime: "2025-09-15T11:00:00",
      img: "assets/logo.jpg"
    },
    {
      id: "p2",
      name: "Kacang Gurih",
      desc: "Kacang gurih renyah",
      price: 22000,
      promo: false,
      stock: 8,
      img: "assets/img/kacang.jpg"
    }
  ],
  gallery: [
    "assets/img/g1.jpg",
    "assets/img/g2.jpg",
    "assets/img/g3.jpg"
  ],
  testimonials: [
    { name: "Ani", city: "Surabaya", text: "Rasanya enak, pengiriman cepat!", avatar: "https://i.pravatar.cc/100?u=a" },
    { name: "Budi", city: "Gresik", text: "Camilan favorit keluarga!", avatar: "https://i.pravatar.cc/100?u=b" }
  ]
};
