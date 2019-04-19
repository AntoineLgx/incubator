"use strict";

module.exports = function(app){

    var StartUpController = require("../controller/controller.js");

    app
        .route("/")
        .get(function(req,res){
            
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
        .put(function(req,res){
            StartUpController.updateConsultant(req,res);
        })
        .delete(function(req,res){
            StartUpController.removeConsultant(req,res);
        })
        
    app
        .route("/consultant")
        .post(function(req,res){
            console.log("adding consultant");
            StartUpController.addConsultant(req,res);
        })
       
    app
        .route('/consultants')
        .get(function(req,res){
            StartUpController.getAllConsultant(req,res);
        })
   
    app
        .route("/startup") 
        .post(function(req,res){
            console.log("creating startup");
            StartUpController.addStartup(req,res);
        })
    app
        .route("/startup/:id")
        .get(function(req,res){
            StartUpController.getStartup(req,res);
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
