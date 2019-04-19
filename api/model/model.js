'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _id : {
        type:Schema.ObjectId,
        auto:true
    },
    nom : String,
    password : String,
});

var StartupSchema = new Schema ({
    _id : {
        type:Schema.ObjectId,
        auto:true
    },
    nom : String,
    secteur : String,
    representantLegal : String,
    description : String,
    mail : String,
    consultant  : Number

})

var ConsultantSchema = new Schema ({
    _id : {
        type:Schema.ObjectId,
        auto:true
    },
    nom: String,
    prenom: String,
    description: String
})

module.exports = mongoose.model('Consultant', ConsultantSchema);
module.exports = mongoose.model('StartUp', StartupSchema);
module.exports = mongoose.model('User', UserSchema);