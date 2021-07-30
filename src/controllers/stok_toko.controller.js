'use strict';
const StokToko = require('../models/stok_toko.model');

exports.create = function(req, res) {
    const new_stok_toko = new StokToko(req.body);

    //handles null error 
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"Please provide all required field"});
    }
    else{
        StokToko.create(new_stok_toko, function(err, id){
            if (err) res.json({error:true, message:err});
            else res.json({error:false, message:"Stok added successfully!", insertId:id});
        });
    }
};

exports.get = function(req, res) {
    // console.log(req.query);
    StokToko.get(req.query, function(err, toko){
        if (err) res.send(err);
        else res.send(toko);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"Please provide all required field"});
    }else{
        StokToko.update(new StokToko(req.body), function(err, employee) {
            if (err) res.send(err);
            res.json({error:false, message:"Stok updated successfully!"});
        });
    }
};

exports.delete = function(req, res) {
    if (req.query.hasOwnProperty("id_dorayaki") && req.query.hasOwnProperty("id_toko")){
        StokToko.delete(req.query.id_dorayaki, req.query.id_toko, function(err, delete_res){
            if (err) res.send(err);
            else if (delete_res.affectedRows === 0) res.json({error:true, message:"No stok with such id"});
            else res.json({error:false, message:"Stok deleted successfully!"});
        });
    }
    else if (req.query.hasOwnProperty("id_toko")){
        res.json({error:true, message:"Please provide dorayaki id"});
    }
    else if (req.query.hasOwnProperty("id_dorayaki")){
        res.json({error:true, message:"Please provide toko id"});
    }
    else{
        res.json({error:true, message:"Please provide dorayaki id and toko id"});
    }
};