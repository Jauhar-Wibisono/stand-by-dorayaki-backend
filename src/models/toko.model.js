'use strict';
var dbConn = require('./../../config/db.config');

var Toko = function(toko){
	this.id_toko = toko.id_toko
	this.nama = toko.nama;
	this.jalan = toko.jalan;
	this.kecamatan = toko.kecamatan;
	this.provinsi = toko.provinsi;
};

// create new toko
Toko.create = async function(newToko, result){
	try{
		const res = await dbConn.query(
			"INSERT INTO toko (nama, jalan, kecamatan, provinsi) VALUES (?,?,?,?)",
			[newToko.nama, newToko.jalan, newToko.kecamatan, newToko.provinsi]
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
Toko.get = async function(params, result){
	let query = "SELECT * FROM toko";
	let first = true;
	if (!isEmpty(params)) query = query + " WHERE";
	if (params.hasOwnProperty("id_toko")){
		query = query + " id_toko = " + params.id_toko;
		first = false;
	}
	if (params.hasOwnProperty("nama")){
		if (!first) query = query + " AND";
		query = query + " nama LIKE '%" + params.nama + "%'";
		first = false;
	}
	if (params.hasOwnProperty("jalan")){
		if (!first) query = query + " AND";
		query = query + " jalan LIKE '%" + params.jalan + "%'";
		first = false;
	}
	if (params.hasOwnProperty("kecamatan")){
		if (!first) query = query + " AND";
		query = query + " kecamatan LIKE '%" + params.kecamatan + "%'";
		first = false;
	}
	if (params.hasOwnProperty("provinsi")){
		if (!first) query = query + " AND";
		query = query + " provinsi LIKE '%" + params.provinsi + "%'";
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

// update toko
Toko.update = async function(newToko, result){
	try{
		const res = await dbConn.query(
			"UPDATE toko SET nama = ?, jalan = ?, kecamatan = ?, provinsi = ? WHERE id_toko = ?",
			[newToko.nama, newToko.jalan, newToko.kecamatan, newToko.provinsi, newToko.id_toko]
		);
		result(null, res);
	}
	catch (e){
		result(e.text, null);
	}
}

// delete toko
Toko.delete = async function(id, result){
	try{
		const res = await dbConn.query("DELETE FROM toko WHERE id_toko = ?", id);
		result(null, res);
	}
	catch (e){
		result(e.text, null);
	}
};

module.exports = Toko;
