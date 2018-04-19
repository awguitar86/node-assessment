const data = require('./userData.json');

module.exports = {

    getUsers: (req, res, next) => {
        let result = [];
        let age = req.query.age;
        let lastname = req.query.lastname;
        let email = req.query.email;
        let favorites = req.query.favorites;

        if(age) {
            for(let i = 0; i < data.length; i++){
                if(data[i].age < age){
                    result.push(data[i]);
                }
            }
            res.status(200).send(result);
        }
        if(lastname) {
            for(let i = 0; i < data.length; i++){
                if(data[i].last_name === lastname){
                    result.push(data[i]);
                }
            }
            res.status(200).send(result);
        }
        if(email) {
            for(let i = 0; i < data.length; i++){
                if(data[i].email === email){
                    result.push(data[i]);
                }
            }
            res.status(200).send(result);
        }
        if(favorites) {
            for(let i = 0; i < data.length; i++){
                for(let x = 0; x < data[i].favorites.length; x++){
                    if(data[i].favorites[x] === favorites){
                        result.push(data[i]);
                    }
                }
            }
            res.status(200).send(result);
        }
        else{
            result = data;
        }
        res.status(200).send(result);
    },

    getUser: (req, res, next) => {
        let result = '';
        for(let i = 0; i < data.length; i++){
            if(data[i].id == req.params.id){
                result = {};
                result = data[i];
                res.status(200).send(result);
            }
        }
        if(!result){
            res.status(404).json(null);
        }
    },

    getAdmins: (req, res, next) => {
        let result = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].type == 'admin'){
                result.push(data[i]);
            }
        }
        res.status(200).send(result);
    },

    getNonAdmins: (req, res, next) => {
        let result = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].type != 'admin'){
                result.push(data[i]);
            }
        }
        res.status(200).send(result);
    },

    getUserType: (req, res, next) => {
        let result = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].type == req.params.type){
                result.push(data[i]);
            }
        }
        res.status(200).send(result);
    },

    updateUser: (req, res, next) => {
        for(let i = 0; i < data.length; i++){
            if(data[i].id == req.params.id){
                data[i] = req.body;
            }
        }
        res.status(200).send(data);
    },

    addUser: (req, res, next) => {
        let lastUser = data[data.length-1];
        let nextUser = lastUser.id + 1;

        req.body.id = nextUser;
        data.push(req.body);
        nextUser++

        res.status(200).send(data);
    },

    deleteUser: (req, res, next) => {
        for(let i = 0; i < data.length; i++){
            if(data[i].id == req.params.id){
                data.splice(i, 1);
            }
        }
        res.status(200).send(data);
    }
}