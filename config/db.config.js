'use strict';
const mariadb = require("mariadb");

//local mysql db connection
const pool = mariadb.createPool({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'stand_by_dorayaki_db'
});

pool.getConnection(function(err) {
	if (err) throw err;
	console.log("Database Connected!");
});

module.exports = pool;