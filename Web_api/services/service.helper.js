const User = require('../models/Users');
const mongoose = require('mongoose');



function addDocument(data, callback) {
    data.save(function (err, modelObj) {
        if (err) {
            callback(err, null);

        } else {
            let result = {
                data: modelObj
            }
            callback(null, result)
        }
    })
}

module.exports = {
    addDocument: addDocument,
}
