export const productsDrivenData = [
  {
    type: "productList",
    props: {
      heading: "Our Products",
      products: [
        {
          id: 1,
          name: "Laptop",
          price: 800,
          image: "assets/images/laptop.jpg",
          description: "High performance laptop for developers",
          badge: "Best Seller",
        },
        {
          id: 2,
          name: "Phone",
          price: 500,
          image: "assets/images/phone.jpg",
          description: "Latest smartphone with AMOLED display",
          badge: "New",
        },
        {
          id: 3,
          name: "Headphones",
          price: 150,
          image: "assets/images/head-phone.jpg",
          description: "Noise cancelling over-ear headphones",
          badge: "Top Rated",
        },
        {
          id: 4,
          name: "Smart Watch",
          price: 220,
          image: "assets/images/smart-watch.jpg",
          description: "Fitness tracking smart watch",
          badge: "Popular",
        },
        {
          id: 5,
          name: "Keyboard",
          price: 90,
          image: "/assets/images/keyboard.jpg",
          description: "Mechanical keyboard with RGB lighting",
          badge: "Editor’s Choice",
        },
      ],
      styles: {
        grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6",
        card: "p-4 border rounded-xl shadow hover:shadow-lg transition",
        image: "w-full h-48 object-cover mb-4",
        title: "text-lg font-semibold",
        description: "text-sm text-gray-600 mb-2",
        price: "text-blue-600 font-bold",
        badge:
          "inline-block text-xs px-2 py-1 bg-green-100 text-green-700 rounded mb-2",
      },
    },
  },
];
