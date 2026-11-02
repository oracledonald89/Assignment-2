{
    let a = 10;
    let b = a;
    b = 20;
    console.log(a, b);

    let userOne = {
        name: "Amaka",
        age: 22,
        address: {
            city: "Lagos",
            country: "Nigeria"
        }
    };

    let userTwo = { ...userOne };

    userTwo.age = 40;

    console.log(userOne.age);
}