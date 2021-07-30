# stand-by-dorayaki-backend
> a backend for dorayaki company 'Stand by Dorayaki'

## Table of contents
* [Dependencies](#dependencies)
* [Setup](#setup)
* [Endpoints](#endpoints)

## Dependencies
* Node js
* MariaDB
* Express

## Setup
* Jalankan <code>run.bat</code> atau <code>run.sh</code> yang ada di folder bin.
* Buka local website yang dihasilkan di web browser.

## Endpoints
### Dorayaki
* <code>POST/dorayaki</code>
  * creates dorayaki
  * send dorayaki attributes as json in request body
* <code>GET/dorayaki</code>
  * reads dorayakis
  * you can filter dorayaki by specifying attributes in query params i.e. <code>GET/dorayaki?id_dorayaki=1&rasa=pempek</code>
* <code>PATCH/dorayaki</code>
  * updates existing dorayaki by id_dorayaki
  * send dorayaki attributes as json in request body
* <code>DELETE/dorayaki</code>
  * deletes dorayaki
  * put attributes in query params to specify deleted dorayaki i.e. <code>DELETE/dorayaki?id_dorayaki=1</code>
### Toko
* <code>POST/toko</code>
  * creates toko
  * send toko attributes as json in request body
* <code>GET/toko</code>
  * reads tokos
  * you can filter toko by specifying attributes in query params i.e. <code>GET/toko?id_toko=1&provinsi=DIY</code>
* <code>PATCH/toko</code>
  * updates existing toko by id_toko
  * send toko attributes as json in request body
* <code>DELETE/toko</code>
  * deletes toko
  * put attributes in query params to specify deleted toko i.e. <code>DELETE/toko?id_toko=1</code>
### Stok Toko
* <code>POST/stok_toko</code>
  * creates stok toko
  * send stok toko attributes as json in request body
* <code>GET/stok_toko</code>
  * reads stok toko
  * you can filter stok toko by specifying attributes in query params i.e. <code>GET/stok_toko?id_dorayaki=1&id_toko=2</code>
* <code>PATCH/toko</code>
  * updates existing stok toko by id_dorayaki and id_toko 
  * send stok toko attributes as json in request body
* <code>DELETE/dorayaki</code>
  * deletes stok toko
  * put attributes in query params to specify deleted stok toko i.e. <code>DELETE/stok_toko?id_dorayaki=1&id_toko=2</code>
