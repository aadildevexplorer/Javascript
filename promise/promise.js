// Promise JavaScript ka ek object hai jo future me kisi asynchronous operation ke result ko represent karta hai.
// Promise.all() => Multiple promises ko parallel me run karta hai aur sabke complete hone ka wait karta hai.

// const p1 = Promise.resolve("User");
// const p2 = Promise.resolve("Order");
// const p3 = Promise.resolve("Post");

// Promise.all([p1, p2, p3]).then((result) => {
//   console.log(result);
// });

// one more
// app.get("/dashboard", async (req, res) => {
//   const [users, orders, notifications] = await Promise.all([
//     User.findById(req.user.id),
//     Order.findById(req.user.id),
//     Notification.findById(req.user.id),
//   ]);

//   res.json({ users, orders, notifications });
// });

// main diff promise.all ke sath teno ek sath start honge 
// without Agar User query ko 10 minute lag rahe hain:

// User          ██████████  10 min
// Order                    █████ → ab start hoga
// Notification                   ███ → uske baad

// Order start hi nahi hoga jab tak User complete nahi hota.

// Promise.settled => Ye sabhi promises ka result aane tak wait karta hai, chahe koi resolve ho ya reject.
// const p1 = Promise.resolve('User')
// const p2 = Promise.reject('Order')
// const p3 = Promise.resolve('Comment')

// Promise.allSettled([p1 , p2 , p3]).then((result) => {
//     console.log(result)
// })

// Promise.race() => Jo Promise sabse pehle settle hota hai, uska result deta hai.
// const p1 = new Promise(resolve => {

//        setTimeout(() => 
//         resolve('First Promise'),1000
//        )

// })

// const p2 = new Promise(resolve => {

//        setTimeout(() => 
//         resolve('First Promise'),2000
//        )

// })

// Promise.race([p1 , p2]).then(console.log)

// Promise.all()
// Runs multiple promises at the same time and waits for all of them to complete.

// 2. Promise.allSettled()
// Waits for all promises to complete and gives the result of each, whether successful or failed.

// 3. Promise.race()
// Returns the result of the first promise that completes, whether successful or failed.