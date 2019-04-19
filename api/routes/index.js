"use strict";

module.exports = function(app){

    var StartUpController = require("../controller/controller.js");

    app
        .route("/")
        .get(function(req,res){
            res.render('home');
        })
    app
        .route("/createAccount")
        .post(function(req,res){
            StartUpController.create_account(req,res);
        })
    app
        .route("/consultant/:id")
        .get(function(req,res){
            StartUpController.getConsultant(req,res);
        })
    app
        .route("/deleteConsultant/:id")
        .get(function(req,res){
            StartUpController.removeConsultant(req,res);
        })
    app
        .route("/consultant")
        .post(function(req,res){
            StartUpController.addConsultant(req,res);
        })
    app
        .route('/consultants')
        .get(function(req,res){
            StartUpController.getAllConsultant(req,res);
        })
    app
        .route("/updateConsultant")
        .post(function(req,res){
            StartUpController.updateConsultant(req,res);
        })
    app
        .route("/startup/:id")
        .get(function(req,res){
            StartUpController.getStartup(req,res);
        })
        .post(function(req,res){
            StartUpController.addStartup(req,res);
        })
        .delete(function(req,res){
            StartUpController.removeStartup(req,res);
        })
        .put(function(req,res){
            StartUpController.updateStartup(req,res);
        })
  
   
        
    app
        .route('/startups')
        .get(function(req,res){
            StartUpController.getAllStartup(req,res);
        })
    app
        .route('/login')
        .post(function(req,res){
            StartUpController.connect(req,res);
        })
}
