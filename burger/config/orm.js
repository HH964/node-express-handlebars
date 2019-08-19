const connection = require("./connection");

const orm = {
    selectAll: (burgorm) => {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err,res) => {
            if (err){
                throw err;
            }
            burgorm(res)
        });
    },
    insertOne: (burger, burgorm) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], (err,res) => {
            if (err){
                throw err;
            }
            burgorm(res)
        });
    },
    updateOne: (id, burgorm) => {
        const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString,[id], (err,res) => {
            if (err){
                throw err;
            }
            burgorm(res)
        });
    }
};

module.exports = orm;