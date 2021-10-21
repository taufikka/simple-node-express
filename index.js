const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('wow i am excited learn node and express, nodemon')
});

const users = [
    { id: 0, name: "taufik", email: "t11@gmail.com" },
    { id: 1, name: "nayeem", email: "t12@gmail.com" },
    { id: 2, name: "sakib", email: "t13@gmail.com" },
    { id: 3, name: "sumon", email: "t14@gmail.com" },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {

        res.send(users)
    }
});

// app Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)

    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
    // console.log(req.params.id)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy mangoes here')
})

app.listen(port, () => {
    console.log('listening to port', port);
})