"use strict";

const api = require("./api");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.register = async (server) => {
  //registra la ruta api
  await api.register(server);

  /************************************
   * Rutas para el perfil Admin
   * ***********************************/

  /**Rutas de Acceso al portal */
  //Ruta de login del admin
  server.route({
    method: "GET",
    path: "/admin",
    handler: (request, h) => {
      // if (request.state.session) {
      //     if (request.state.session == 'super') {
      //         return h.redirect('admin/dashboard')
      //     } else if (request.state.session === 'empresa') {
      //         return h.redirect('admin/empresa')
      //     }
      // }
      return h.view("index", null, {
        layout: "index",
      });
    },
  });

  //Ruta de logout del admin
  server.route({
    method: "GET",
    path: "/admin/logout",
    handler: (request, h) => {
      return h.redirect("/admin").unstate("admin");
    },
  });

  /**Rutas de vistas*/

  //Ruta que muestra el home del administrador o dashboard
  server.route({
    method: "GET",
    path: "/admin/dashboard",
    handler: async (request, h) => {
      const usuarios = await request.mongo.db
        .collection("Usuario")
        .find({})
        .toArray();
      const empresas = await request.mongo.db
        .collection("Empresa")
        .find({})
        .toArray();
      const campanas = await request.mongo.db
        .collection("Campañas")
        .find({})
        .toArray();
      const token = jwt.sign(
        {
          _id: "6030963eed8ee20acd629322",
        },
        process.env.COOKIE_ENCRYPT_PWD
      );

      return h.view("dashboard", {
        title: "Bienvenido",
        admin: request.state.session,
        usuarios: usuarios,
        empresas: empresas,
        campanas: campanas,
        token: token,
      });
    },
  });

  //Ruta que muestra el home del administrador o dashboard
  server.route({
    method: "GET",
    path: "/admin/usuarios",
    handler: async (request, h) => {
      try {
        const usuarios = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();

        return h.view("usuarios", {
          title: "Usuarios Registrados",
          usuarios: usuarios,
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  //Ruta que muestra un usuario
  server.route({
    method: "GET",
    path: "/admin/usuario/{id}",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      console.log(id);
      const usuario = await req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) });
      // console.log(usuario)
      const arrayCampanas = Object.values(usuario.campanas);
      // console.log(arrayCampanas)
      const tamCampanas = arrayCampanas.length;
      const ultCampana = arrayCampanas[tamCampanas - 1];
      usuario.tiempo_total = usuario.tiempo_total.toFixed(2);
      usuario.co2_total = usuario.co2_total.toFixed(2);
      usuario.cal_total = usuario.cal_total.toFixed(2);
      usuario.km_total = usuario.km_total.toFixed(2);
      return h.view("usuario", {
        title: `Usuario: ${usuario.usuario}`,
        usuario: usuario,
        ultCampana: ultCampana,
      });
    },
  });

  //Ruta que muestra las empresas registradas
  server.route({
    method: "GET",
    path: "/admin/empresas",
    handler: async (req, h) => {
      try {
        const empresas = await req.mongo.db
          .collection("Empresa")
          .find({})
          .toArray();

        return h.view("empresas", {
          title: "Empresas Registradas",
          empresa: empresas,
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  //Ruta que muestra un usuario
  server.route({
    method: "GET",
    path: "/admin/empresadetalle/{id}",
    // options:{
    //     parse: true
    // },
    handler: async (req, h) => {
      try {
        const id = req.params.id;
        const ObjectID = req.mongo.ObjectID;
        const empresa = await req.mongo.db
          .collection("Empresa")
          .findOne({ _id: new ObjectID(id) });
        // const total = await req.mongo.db.collection('Empresa').aggregate([{ $group: { _id: new ObjectID(id), km: { $sum: "usuarios.km" }, cal: { $sum: "usuarios.cal" }, co2: { $sum: "usuarios.co2" } } }]);
        // console.log(total)
        return h.view("empresa", {
          title: `Empresa: ${empresa.nombre}`,
          empresa: empresa,
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  //Ruta que muestra las empresas registradas
  server.route({
    method: "GET",
    path: "/admin/campanas",
    handler: async (req, h) => {
      const campana = await req.mongo.db
        .collection("Campaña")
        .findOne({ _id: new ObjectID(id) });

      return h.view("campanas", {
        title: "Campañas Registradas",
        campana: camapana,
      });
    },
  });

  /**Rutas de registros */

  //Ruta para registrar administrador
  server.route({
    method: "GET",
    path: "/admin/registro",
    handler: (request, h) => {
      return h.view("registroAdmin", {
        title: "Registrar Administrador",
      });
    },
  });

  //Ruta para registrar empresa
  server.route({
    method: "GET",
    path: "/admin/registro/empresa",
    handler: (request, h) => {
      return h.view("registroEmpresa", {
        title: "Registrar Empresa",
      });
    },
  });

  //Ruta para registrar campaña
  server.route({
    method: "GET",
    path: "/admin/registro/campana",
    handler: async (req, h) => {
      const empresas = await req.mongo.db
        .collection("Empresa")
        .find({})
        .toArray();

      return h.view("registroCampana", {
        title: "Registrar Camapaña",
        empresas: empresas,
      });
    },
  });

  //Ruta que redirecciona al index
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return h.redirect("/admin");
    },
  });
  //Ruta que permite cargar los diferentes assets de las vistas
  server.route({
    method: "GET",
    path: "/assets/{param*}",
    handler: {
      directory: {
        path: ".",
        index: ["index.html"],
      },
    },
  });
};
