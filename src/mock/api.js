import Mock from "mockjs";

// Mock.mock("/api/user/login", {
//   status: 0,
//   data: {
//     "id|10000-10100": 0,
//     username: "@cname",
//     email: "admin@gmail.com",
//     phone: null,
//     role: 0,
//     createTime: 1479048325000,
//     updateTime: 1479048325000,
//   },
// });
Mock.mock("/api/cart", {
  status: 0,
  data: {
    "id|10000-10100": 0,
    username: "@cname",
    email: "admin@gmail.com",
    phone: null,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000,
    productInfo: [
      { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
      { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
      { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
    ],
  },
});
