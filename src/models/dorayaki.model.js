'use strict';
var dbConn = require('./../../config/db.config');

var Dorayaki = function(dorayaki){
	this.id_dorayaki = dorayaki.id_dorayaki
	this.rasa = dorayaki.rasa;
	this.deskripsi = dorayaki.deskripsi;
	this.gambar = dorayaki.gambar;
};

// create new dorayaki
Dorayaki.create = async function(newDorayaki, result){
	try{
		const res = await dbConn.query(
			"INSERT INTO dorayaki (rasa, deskripsi, gambar) VALUES (?,?,?)",
			[newDorayaki.rasa, newDorayaki.deskripsi, newDorayaki.gambar]
		);
		result(null, res.insertId);
	}
	catch (e){
		result(e.text, null);
	}
};

function isEmpty(obj){
	return (obj && obj.constructor === Object && Object.keys(obj).length === 0);
}

// get dorayaki
Dorayaki.get = async function(params, result){
	let query = "SELECT * FROM dorayaki";
	let first = true;
	if (!isEmpty(params)) query = query + " WHERE";
	if (params.hasOwnProperty("id_dorayaki")){
		query = query + " id_dorayaki = " + params.id_dorayaki;
		first = false;
	}
	if (params.hasOwnProperty("rasa")){
		if (!first) query = query + " AND";
		query = query + " rasa LIKE '%" + params.rasa + "%'";
		first = false;
	}
	try{
		const res = await dbConn.query(query);
		result(null, res);
	}
	catch (e){
		result(e.text, null);
	}
}


// update dorayaki
Dorayaki.update = async function(newDorayaki, result){
	try{
		const res = await dbConn.query(
			"UPDATE dorayaki SET rasa = ?, deskripsi = ?, gambar = ? WHERE id_dorayaki = ?",
			[newDorayaki.rasa, newDorayaki.deskripsi, newDorayaki.gambar, newDorayaki.id_dorayaki]
		);
		result(null, res);
	}
	catch (e){
		result(e.text, null);
	}
}

// delete dorayaki
Dorayaki.delete = async function(id, result){
	try{
		const res = await dbConn.query("DELETE FROM dorayaki WHERE id_dorayaki = ?", id);
		result(null, res);
	}
	catch (e){
		result(e.text, null);
	}
};

module.exports = Dorayaki;