const data = {
  name: "John Doe",
  email: "user@gmail.com",
  welcomeUsers: function () {
    console.log(`My name is ${this.name} & email is ${this.email}`);
  },
};

data.welcomeUsers();

// this in function
function show() {
  console.log(this);
}

show();

const obj = {
  name: "Developer",
  heyUsers: function () {
    const data = () => {
      console.log(this.name);
    };
    data();
  },
};

obj.heyUsers();

function showCase() {
  console.log(this.name);
}

const user1 = {
  name: "Aadil",
  show: showCase,
};

const user2 = {
  name: "Rehman",
  show: showCase,
};

user1.show();
user2.show();
