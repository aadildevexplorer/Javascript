// Object Methods
const userData = {
  id: "USR_987654321",
  name: {
    first: "Aadil",
    last: "Khan",
    fullName() {
      return `${this.first} ${this.last}`;
    },
  },
  account: {
    email: "aadil@example.com",
    isVerified: true,
    roles: ["user", "seller"],
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: {
          marketing: false,
          updates: true,
        },
      },
    },
  },
  orders: [
    {
      orderId: "ORD_001",
      date: "2025-12-01",
      amount: 499,
      items: [{ productId: "P100", name: "Earphones", qty: 1, price: 499 }],
      shipping: {
        address: {
          house: "12A",
          street: "Park Avenue",
          city: "Indore",
          pin: 452001,
        },
        status: "Delivered",
      },
    },
    {
      orderId: "ORD_002",
      date: "2025-11-28",
      amount: 1299,
      items: [{ productId: "P200", name: "Keyboard", qty: 1, price: 1299 }],
      shipping: {
        address: {
          house: "12A",
          street: "Park Avenue",
          city: "Indore",
          pin: 452001,
        },
        status: "Shipped",
      },
    },
  ],
  wallet: {
    balance: 250,
    transactions: [
      { id: "TX100", type: "credit", amount: 500, date: "2025-11-20" },
      { id: "TX101", type: "debit", amount: 250, date: "2025-11-22" },
    ],
  },
  activityLog: {
    lastLogin: "2025-11-30 14:23",
    device: {
      os: "Windows",
      browser: "Chrome",
      ip: "192.168.1.100",
    },
  },
};

const key = Object.keys(userData);
const val = Object.values(userData.account);
const frz = Object.freeze(userData);

// userData.others = {
//   name: "DEV",
// };

userData.orders.ID = {
  orderId: crypto.randomUUID(),
};

console.log(userData);
