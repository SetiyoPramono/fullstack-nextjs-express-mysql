const express = require("express");
const routerMahasiswa = express.Router()
const controllerMahasiswa = require('../controllers/mahasiswa')

routerMahasiswa.route('/mahasiswa')
    .get(controllerMahasiswa.getMahasiswa)
    .post(controllerMahasiswa.insert)

routerMahasiswa.route('/mahasiswa/:nim')
    .put(controllerMahasiswa.update)
    .delete(controllerMahasiswa.delete)
    .get(controllerMahasiswa.getMahasiswaByNim)
routerMahasiswa.route('/mahasiswa/nilai/:nim')
    .get(controllerMahasiswa.getNilaiByNim)

    
module.exports = routerMahasiswa