'use strict';
const Dorayaki = require('../models/dorayaki.model');

exports.create = function(req, res) {
    const new_dorayaki = new Dorayaki(req.body);

    //handles null error 
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"Please provide all required field"});
    }
    else{
        Dorayaki.create(new_dorayaki, function(err, id){
            if (err) res.json({error:true, message:err});
            else res.json({error:false, message:"Dorayaki added successfully!", insertId:id});
        });
    }
};

exports.get = function(req, res) {
    // console.log(req.query);
    Dorayaki.get(req.query, function(err, dorayaki){
        if (err) res.send(err);
        else res.send(dorayaki);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"Please provide all required field"});
    }else{
        Dorayaki.update(new Dorayaki(req.body), function(err, employee) {
            if (err) res.send(err);
            res.json({error:false, message:"Dorayaki updated successfully!"});
        });
    }
};

exports.delete = function(req, res) {
    if (req.query.hasOwnProperty("id")){
        Dorayaki.delete(req.query.id, function(err, delete_res){
            if (err) res.send(err);
            else if (delete_res.affectedRows === 0) res.json({error:true, message:"No dorayaki with such id"});
            else res.json({error:false, message:"Dorayaki deleted successfully!"});
        });
    }
    else{
        res.json({error:true, message:"Please provide dorayaki id"});
    }
};