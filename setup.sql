DROP DATABASE IF EXISTS stand_by_dorayaki_db;
CREATE DATABASE stand_by_dorayaki_db;
USE stand_by_dorayaki_db;

CREATE TABLE IF NOT EXISTS dorayaki(
	id_dorayaki BIGINT AUTO_INCREMENT,
	rasa VARCHAR(255) UNIQUE NOT NULL,
	deskripsi VARCHAR(255),
	gambar VARCHAR(255) NOT NULL, # karena mau nyimpen path
	PRIMARY KEY (id_dorayaki)
);

CREATE TABLE IF NOT EXISTS toko(
	id_toko BIGINT AUTO_INCREMENT,
	nama VARCHAR(255) NOT NULL,
	jalan VARCHAR(255),
	kecamatan VARCHAR(255),
	provinsi VARCHAR(255),
	PRIMARY KEY (id_toko)
);

CREATE TABLE IF NOT EXISTS stok_toko(
	id_dorayaki BIGINT NOT NULL,
	id_toko BIGINT NOT NULL,
	jumlah INT NOT NULL,
	FOREIGN KEY (id_dorayaki) REFERENCES dorayaki(id_dorayaki),
	FOREIGN KEY (id_toko) REFERENCES toko(id_toko),
	UNIQUE(id_dorayaki, id_toko)
);