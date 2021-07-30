'use strict';
var dbConn = require('./../../config/db.config');

var StokToko = function(stok){
	this.id_dorayaki = stok.id_dorayaki;
	this.id_toko = stok.id_toko;
	this.jumlah = stok.jumlah;
};

// create new stok
StokToko.create = async function(newStokToko, result){
	try{
		const res = await dbConn.query(
			"INSERT INTO stok_toko (id_dorayaki, id_toko, jumlah) VALUES (?,?,?)",
			[newStokToko.id_dorayaki, newStokToko.id_toko, newStokToko.jumlah]
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

// get stok
StokToko.get = async function(params, result){
	let query = "SELECT * FROM stok_toko";
	let first = true;
	if (!isEmpty(params)) query = query + " WHERE";
	if (params.hasOwnProperty("id_dorayaki")){
		query = query + " id_dorayaki = " + params.id_dorayaki;
		first = false;
	}
	if (params.hasOwnProperty("id_toko")){
		if (!first) query = query + " AND";
		query = query + " id_toko = " + params.id_toko;
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

// update stok
StokToko.update = async function(newStokToko, result){
	try{
		await dbConn.query(
			"DELETE FROM stok_toko WHERE id_dorayaki = ? AND id_toko = ?",
			[newStokToko.id_dorayaki, newStokToko.id_toko]
		);
		if (newStokToko.jumlah > 0){
			const res = await dbConn.query(
				"INSERT INTO stok_toko (id_dorayaki, id_toko, jumlah) VALUES (?,?,?)",
				[newStokToko.id_dorayaki, newStokToko.id_toko, newStokToko.jumlah]
			);
			result(null, res);
		}
		else result(null, null);
	}
	catch (e){
		result(e.text, null);
	}
}

// delete stok
StokToko.delete = async function(id_dorayaki, id_toko, result){
	try{
		const res = await dbConn.query("DELETE FROM stok_toko WHERE id_dorayaki = ? AND id_toko = ?", [id_dorayaki, id_toko]);
		result(null, res);
	}
	catch (e){
		result(e.text, null);
	}
};

module.exports = StokToko;
