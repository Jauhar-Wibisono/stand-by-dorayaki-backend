'use strict';
const Toko = require('../models/toko.model');

exports.create = function(req, res) {
    const new_toko = new Toko(req.body);

    //handles null error 
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"Please provide all required field"});
    }
    else{
        Toko.create(new_toko, function(err, id){
            if (err) res.json({error:true, message:err});
            else res.json({error:false, message:"Toko added successfully!", insertId:id});
        });
    }
};

exports.get = function(req, res) {
    Toko.get(req.query, function(err, toko){
        if (err) res.send(err);
        else res.send(toko);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"Please provide all required field"});
    }else{
        Toko.update(new Toko(req.body), function(err, employee) {
            if (err) res.send(err);
            res.json({error:false, message:"Toko updated successfully!"});
        });
    }
};

exports.delete = function(req, res) {
    if (req.query.hasOwnProperty("id")){
        Toko.delete(req.query.id, function(err, delete_res){
            if (err) res.send(err);
            else if (delete_res.affectedRows === 0) res.json({error:true, message:"No toko with such id"});
            else res.json({error:false, message:"Toko deleted successfully!"});
        });
    }
    else{
        res.json({error:true, message:"Please provide toko id"});
    }
};