const express = require('express');
const bodyParser = require('body-parser');
const usersCtrl = require('./usersCtrl');
const app = express();

app.use(bodyParser.json());

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/users/:id', usersCtrl.getUser);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:type', usersCtrl.getUserType);
app.put('/api/users/:id', usersCtrl.updateUser);
app.post('/api/users', usersCtrl.addUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});