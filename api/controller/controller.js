'use strict';

var mongoose = require("mongoose");

var Consultant = mongoose.model('Consultant');
var StartUp = mongoose.model('StartUp');
var User = mongoose.model('User');
var self = module.exports =  {

    getStartup(req,res){
        StartUp.findById(req.params.id,function(err,StartUp){
            res.json(StartUp);
        });

    },
    addStartup(req,res){
        let startup = new StartUp(req.body);
        startup.save(function(err,startup){
            if(err){
                res.json(err);
            }
            res.json(startup);
        })
    },
    updateStartup(req,res){
        StartUp.findByIdAndUpdate(req.params.id, req.body,{upsert : true},function(err,startup){
            if(err){
                res.json(err)
            }
            res.json(startup);
        });
    },
    
    getAllStartup(req,res){
        StartUp.find({},function(err,Startup){
            res.json(Startup);
        })
    },
    getConsultant(req,res){
        Consultant.findById(req.params.id,function(err,Consultant){
            res.json(Consultant);
        })
    },
    addConsultant(req,res){
        let consultant = new Consultant(req.body);
        consultant.save(function(err,consultant){
            if(err){
                res.json(err);
            }
            res.json(consultant);
        })
    },
    updateConsultant(req,res){
        //consultant
        Consultant.findByIdAndUpdate(req.params.id, function(err,consultant){
            res.json(consultant);
        });
    },
    removeConsultant(req,res){
        //id
        Consultant.findByIdAndRemove(req.params.id, function(err,Consultant){
            res.json(Consultant);
        });
    },
    removeStartup(req,res){
        console.log('removing' + req.params.id);    
        StartUp.findByIdAndRemove(req.params.id, function(err,StartUp){
            if(err){
                res.json(err)
            }else{
                res.json(StartUp);
            }
          
        });
    },
    getAllConsultant(req,res){
        console.log("Getting consultants");
        //return all consultants
        Consultant.find({}, function(err,consultant){
            res.json(consultant)
        })
    },
    
    connect:function(req, res) {
        var algorithm = 'aes192';
        var crypto = require ('crypto');
        var password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';

        var cipher = crypto.createCipher(algorithm, password);
        var crypted = cipher.update(req.body.password, 'utf8', 'hex');
        var encrypted = cipher.final('hex');
        var login = req.body.login;
        User.findOne( {name:login, password:encrypted}, function(err, user) {
            if (user != null) {        
                res.json(user.login);
            }else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                var array = {"authentification" : false, message : "Wrong password"};
                res.end(JSON.stringify(array));

            }

        });
    },

    create_account:function(req, res) {
        var algorithm = 'aes192';
        var crypto = require ('crypto');
        // Notre clé de chiffrement, elle est souvent générée aléatoirement mais elle doit être la même pour le décryptage
        var password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';

        console.log("creating account");
        var cipher = crypto.createCipher(algorithm, password);
        var crypted = cipher.update(req.body.password, 'utf8', 'hex');
        var encrypted = cipher.final('hex');
        var user = new User( {nom:req.body.login, password:encrypted});
        user.save(function (err, startup) {
            if (err)
                res.json(err);
            res.json(startup);
        })
    }
}