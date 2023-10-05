/*
Attaching multiple handlers:---
    We can attach multiple handlers to one promise.They donot pass the result to each other; instead they process it independently. */
let p1 = new Promise((resolve, reject) => {
    alert("Hey I am not resolved")
    setTimeout(() => {
            resolve(1);
    }, 2000)
})

p1.then(() => {
    console.log(1)
    console.log("Hurray")
})

p1.then(() => {
    console.log("Congratulations this promise is now resolved")
})