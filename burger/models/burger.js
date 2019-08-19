const orm = require("../config/orm");

const burger = {
    selectAll: (burgorm) => {
        orm.selectAll((res) => {
            burgorm(res)
        });
    },
    insertOne: (burger,burgorm) => {
        orm.insertOne(burger,(res) => {
            burgorm(res)
        });
    },
    updateOne: (id, burgorm) => {
        orm.updateOne([id],(res) => {
            burgorm(res)
        });
    }
}

module.exports = burger;