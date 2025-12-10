// const data = [
//   {
//     user_name: "Dev",
//     last_name: "loper",
//     my_age: 32,
//   },
// ];

// // convert data to dataMapping
// const dataMapping = data.map((item) => ({
//   fullName: item.user_name + item.last_name,
//   age: item.my_age,
// }));
// console.log(dataMapping);

// 2
const users = [
  {
    user_id: crypto.randomUUID(),
    first_name: "Aadil",
    last_name: "Khan",
    contact_info: {
      email_id: "aadil@example.com",
      phone_no: "9876543210",
    },
    address_info: {
      city_name: "Mumbai",
      pin_code: 400001,
    },
    is_active_user: true,
  },
  {
    user_id: crypto.randomUUID(),
    first_name: "Rahul",
    last_name: "Sharma",
    contact_info: {
      email_id: "rahul@example.com",
      phone_no: "9988776655",
    },
    address_info: {
      city_name: "Delhi",
      pin_code: 110001,
    },
    is_active_user: false,
  },
  {
    user_id: crypto.randomUUID(),
    first_name: "Sneha",
    last_name: "Patil",
    contact_info: {
      email_id: "sneha@example.com",
      phone_no: "9004003002",
    },
    address_info: {
      city_name: "Pune",
      pin_code: 411001,
    },
    is_active_user: true,
  },
];

const userMapping = users.map((data) => ({
  id: data.user_id,
    fullName: `${data.first_name} ${data.last_name}`,
  // fullName: data.first_name + " " + data.last_name,
  email: data.contact_info.email_id,
  phone: data.contact_info.phone_no,
  city: data.address_info.city_name,
  pincode: data.address_info.pin_code,
  active: data.is_active_user,
}));

console.log(userMapping);
