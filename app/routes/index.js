"use strict";

const api = require("./api");
const moment = require("moment");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Handlebars = require("handlebars");

/****************************************
 * RUTAS DE VISUALIZACIÓN DE LA APLICACIÓN
 * **************************************/

module.exports.register = async (server) => {
  //registra la ruta api
  await api.register(server);

  Handlebars.registerHelper("distanceFixed", function (distance) {
    return distance.toFixed(2);
  });

  /************************************
   * Rutas para el perfil Admin General
   * ***********************************/
  //Ruta de login del admin
  server.route({
    method: "GET",
    path: "/admin",
    handler: async (request, h) => {
      if (request.state.session) {
        if (request.state.session === "super") {
          return h.redirect("/admin/dashboard");
        } else if (request.state.session === "empresa") {
          return h.redirect("/admin/empresa");
        }
      }
      return h.view("index", null, {
        layout: "index",
      });
    },
  });

  //Ruta de logout del admin
  server.route({
    method: "GET",
    path: "/admin/logout",
    handler: async (request, h) => {
      return h.redirect("/admin").unstate("admin");
    },
  });
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

      return h.view("dashboard", {
        title: "Bienvenido",
        admin: request.state.session,
        usuarios: usuarios,
        empresas: empresas,
      });
    },
  });

  //Ruta para registrar administrador
  server.route({
    method: "GET",
    path: "/admin/registro",
    handler: async (request, h) => {
      const empresas = await request.mongo.db
        .collection("Empresa")
        .find({})
        .toArray();
      return h.view("registroAdmin", {
        title: "Registrar Administrador",
        empresas: empresas,
      });
    },
  });

  //Ruta para registrar empresa
  server.route({
    method: "GET",
    path: "/admin/registro/empresa",
    handler: async (request, h) => {
      return h.view("registroEmpresa", {
        title: "Registrar Empresa",
      });
    },
  });

  server.route({
    method: "POST",
    path: "/admin/usuarios/filtrados",
    handler: async (request, h) => {
      const datos = request.payload;

      let usuarios = [];
      if (datos.FechaInicio) {
        const datosConsulta = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
        datosConsulta.map((d) => {
          d.recorridos = d.recorridos.filter((c) =>
            moment(c.fecha).isBetween(
              moment(datos.FechaInicio),
              moment(datos.FechaFin)
            ) && c.vehicle == datos.vehicle
          );
        });
        usuarios = datosConsulta;
      }

      if (usuarios.length === 0) {
        usuarios = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
      }
      let tiempo_total, co2_total, cal_total, km_total;
      usuarios.map((usu, i) => {
        tiempo_total = 0;
        co2_total = 0;
        cal_total = 0;
        km_total = 0;
        usu.recorridos.map((rec) => {
          tiempo_total = tiempo_total + rec.minutos;
          co2_total = co2_total + rec.co2;
          cal_total = cal_total + rec.cal;
          km_total = km_total + rec.kms;
        });
        usu.Nrecorridos = usu.recorridos.length;
        usu.tiempo_total = parseInt(tiempo_total).toFixed(1);
        usu.co2_total = parseInt(co2_total).toFixed(1);
        usu.cal_total = parseInt(cal_total).toFixed(1);
        usu.km_total = parseInt(km_total).toFixed(1);
      });

      let Nusuarios = [];
      let usuariosTotales = await request.mongo.db
        .collection("Usuario")
        .find({})
        .toArray();
      let numeroDivididoTres = usuariosTotales.length / 3;
      let numeroDivididodos = parseInt(usuariosTotales.length / 2);
      let numeroTotales = usuariosTotales.length;
      Nusuarios.push(numeroDivididoTres);
      Nusuarios.push(numeroDivididodos);
      Nusuarios.push(numeroTotales);

      return h.view("usuarios", {
        title: "Usuarios Registrados",
        usuarios: usuarios,
        Nusuarios: Nusuarios,
      });
    },
  });

  server.route({
    method: "POST",
    path: "/admin/usuarios/filtros_vehicle",
    handler: async (request, h) => {
      const datos = request.payload;
      let usuarios = [];

      if (datos.vehicle) {
        const datosConsulta = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
        datosConsulta.map((d) => {
          d.recorridos = d.recorridos.filter((c) =>
            c.vehicle == datos.vehicle
          );
        });
        usuarios = datosConsulta;
      }

      if (usuarios.length === 0) {
        usuarios = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
      }
      let tiempo_total, co2_total, cal_total, km_total;
      usuarios.map((usu, i) => {
        tiempo_total = 0;
        co2_total = 0;
        cal_total = 0;
        km_total = 0;
        usu.recorridos.map((rec) => {
          tiempo_total = tiempo_total + rec.minutos;
          co2_total = co2_total + rec.co2;
          cal_total = cal_total + rec.cal;
          km_total = km_total + rec.kms;
        });
        usu.Nrecorridos = usu.recorridos.length;
        usu.tiempo_total = parseInt(tiempo_total).toFixed(1);
        usu.co2_total = parseInt(co2_total).toFixed(1);
        usu.cal_total = parseInt(cal_total).toFixed(1);
        usu.km_total = parseInt(km_total).toFixed(1);
      });

      let Nusuarios = [];
      let usuariosTotales = await request.mongo.db
        .collection("Usuario")
        .find({})
        .toArray();
      let numeroDivididoTres = usuariosTotales.length / 3;
      let numeroDivididodos = parseInt(usuariosTotales.length / 2);
      let numeroTotales = usuariosTotales.length;
      Nusuarios.push(numeroDivididoTres);
      Nusuarios.push(numeroDivididodos);
      Nusuarios.push(numeroTotales);
      return h.view("usuarios", {
        title: "Usuarios Registrados",
        usuarios: usuarios,
        Nusuarios: Nusuarios,
      });
    },
  });

  server.route({
    method: "POST",
    path: "/admin/usuarios/filtrados/empresa/{id}",
    handler: async (request, h) => {
      const datos = request.payload;
      const id = request.params.id;
      const ObjectID = request.mongo.ObjectID;

      let usuarios = [];
      
      if (datos.FechaInicio) {
        const datosConsulta = await request.mongo.db
          .collection("Usuario")
          .find({ "empresa.id": new ObjectID(id) })
          .toArray();
        datosConsulta.map((d) => {
          d.recorridos = d.recorridos.filter((c) =>
            moment(c.fecha).isBetween(
              moment(datos.FechaInicio),
              moment(datos.FechaFin)
            ) && c.vehicle == datos.vehicle
          );
        });
        usuarios = datosConsulta;
      }

      if (usuarios.length === 0) {
        usuarios = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
      }
      let tiempo_total, co2_total, cal_total, km_total;
      usuarios.map((usu, i) => {
        tiempo_total = 0;
        co2_total = 0;
        cal_total = 0;
        km_total = 0;
        usu.recorridos.map((rec) => {
          tiempo_total = tiempo_total + rec.minutos;
          co2_total = co2_total + rec.co2;
          cal_total = cal_total + rec.cal;
          km_total = km_total + rec.kms;
        });
        usu.Nrecorridos = usu.recorridos.length;
        usu.tiempo_total = parseInt(tiempo_total).toFixed(1);
        usu.co2_total = parseInt(co2_total);
        usu.cal_total = parseInt(cal_total);
        usu.km_total = parseInt(km_total);
      });

      let Nusuarios = [];
      let usuariosTotales = await request.mongo.db
        .collection("Usuario")
        .find({})
        .toArray();
      let numeroDivididoTres = usuariosTotales.length / 3;
      let numeroDivididodos = parseInt(usuariosTotales.length / 2);
      let numeroTotales = usuariosTotales.length;
      Nusuarios.push(numeroDivididoTres);
      Nusuarios.push(numeroDivididodos);
      Nusuarios.push(numeroTotales);
      const empresa = await request.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });

      return h.view(
        "usuariosEmpresa",
        {
          title: "Usuarios Registrados",
          empresa: empresa,
          usuarios: usuarios,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  server.route({
    method: "POST",
    path: "/admin/usuarios/filtros_vehicle/empresa/{id}",
    handler: async (request, h) => {
      const datos = request.payload;
      const id = request.params.id;
      const ObjectID = request.mongo.ObjectID;

      let usuarios = [];

      if (datos.vehicle) {
        const datosConsulta = await request.mongo.db
          .collection("Usuario")
          .find({ "empresa.id": new ObjectID(id) })
          .toArray();
        datosConsulta.map((d) => {
          d.recorridos = d.recorridos.filter((c) =>
            c.vehicle == datos.vehicle
          );
        });
        usuarios = datosConsulta;
      }

      if (usuarios.length === 0) {
        usuarios = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
      }
      let tiempo_total, co2_total, cal_total, km_total;
      usuarios.map((usu, i) => {
        tiempo_total = 0;
        co2_total = 0;
        cal_total = 0;
        km_total = 0;
        usu.recorridos.map((rec) => {
          tiempo_total = tiempo_total + rec.minutos;
          co2_total = co2_total + rec.co2;
          cal_total = cal_total + rec.cal;
          km_total = km_total + rec.kms;
        });
        usu.Nrecorridos = usu.recorridos.length;
        usu.tiempo_total = parseInt(tiempo_total).toFixed(1);
        usu.co2_total = parseInt(co2_total);
        usu.cal_total = parseInt(cal_total);
        usu.km_total = parseInt(km_total);
      });

      let Nusuarios = [];
      let usuariosTotales = await request.mongo.db
        .collection("Usuario")
        .find({})
        .toArray();
      let numeroDivididoTres = usuariosTotales.length / 3;
      let numeroDivididodos = parseInt(usuariosTotales.length / 2);
      let numeroTotales = usuariosTotales.length;
      Nusuarios.push(numeroDivididoTres);
      Nusuarios.push(numeroDivididodos);
      Nusuarios.push(numeroTotales);
      const empresa = await request.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });

      return h.view(
        "usuariosEmpresa",
        {
          title: "Usuarios Registrados",
          empresa: empresa,
          usuarios: usuarios,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta que muestra el home del administrador o dashboard
  server.route({
    method: "GET",
    path: "/admin/usuarios",
    handler: async (request, h) => {
      const usuarios = await request.mongo.db
        .collection("Usuario")
        .find({})
        .toArray();
      usuarios.map((usu, i) => {
        usu.Nrecorridos = usu.recorridos.length;
        usu.tiempo_total = usu.tiempo_total.toFixed(1);
        usu.co2_total = usu.co2_total.toFixed(1);
        usu.cal_total = usu.cal_total.toFixed(1);
        usu.km_total = usu.km_total.toFixed(1);
      });
      let Nusuarios = [];
      let numeroDivididoTres = usuarios.length / 3;
      let numeroDivididodos = parseInt(usuarios.length / 2);
      let numeroTotales = usuarios.length;
      Nusuarios.push(numeroDivididoTres);
      Nusuarios.push(numeroDivididodos);
      Nusuarios.push(numeroTotales);

      return h.view("usuarios", {
        title: "Usuarios Registrados",
        usuarios: usuarios,
        Nusuarios: Nusuarios,
      });
    },
  });

  //Ruta que muestra las empresas registradas
  server.route({
    method: "GET",
    path: "/admin/empresas",
    handler: async (request, h) => {
      try {
        const empresas = await request.mongo.db
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

  server.route({
    method: "GET",
    path: "/admin/RiesgoCovid",
    handler: async (request, h) => {
      try {
        const usuarios = await request.mongo.db
          .collection("Usuario")
          .find({})
          .toArray();
        return h.view("riesgo", {
          title: "Habitos de movilidad",
          valor: JSON.stringify(usuarios),
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  server.route({
    method: "POST",
    path: "/api/admin/filtrarRecorrido/{id}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      let datos = req.payload;
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const usuario = await req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) });
      const arrayRecorridos = Object.values(usuario.recorridos);
      let ultRecorrido = {};
      if (datos.FechaInicio) {
        let ususfiltred = [];
        usuario.recorridos.map((valor) => {
          if (
            moment(valor.fecha).isBetween(
              moment(datos.FechaInicio),
              moment(datos.FechaFin)
            )
          ) {
            ususfiltred.push(valor);
          }
        });
        var minutos = ususfiltred.reduce(
          (sum, value) => sum + value.minutos,
          0
        );
        var kms = ususfiltred.reduce((sum, value) => sum + value.kms, 0);
        var cal = ususfiltred.reduce((sum, value) => sum + value.cal, 0);
        var co2 = ususfiltred.reduce((sum, value) => sum + value.co2, 0);
        ultRecorrido = { minutos, kms, cal, co2 };
      }

      if (!ultRecorrido) {
        ultRecorrido = {
          minutos: 0,
          kms: 0,
          cal: 0,
          co2: 0,
        };
      } else {
        ultRecorrido.minutos = ultRecorrido.minutos.toFixed(1);
        ultRecorrido.kms = ultRecorrido.kms.toFixed(1);
        ultRecorrido.cal = ultRecorrido.cal.toFixed(1);
        ultRecorrido.co2 = ultRecorrido.co2.toFixed(1);
        usuario.tiempo_total = usuario.tiempo_total.toFixed(2);
        usuario.co2_total = usuario.co2_total.toFixed(2);
        usuario.cal_total = usuario.cal_total.toFixed(2);
        usuario.km_total = usuario.km_total.toFixed(2);
      }

      return h.view("usuario", {
        title: `Usuario: ${usuario.usuario}`,
        usuario: usuario,
        ultRecorrido: ultRecorrido,
        recorridos: arrayRecorridos,
        id: id,
      });
    },
  });

  server.route({
    method: "GET",
    path: "/api/admin/filtrarRecorrido/{id}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      let datos = req.payload;
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const usuario = await req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) });
      const arrayRecorridos = Object.values(usuario.recorridos);
      let ultRecorrido = {};

      if (datos !== null) {
        let ususfiltred = [];
        usuario.recorridos.map((valor) => {
          if (
            moment(valor.fecha).isBetween(
              moment(datos.FechaInicio),
              moment(datos.FechaFin)
            )
          ) {
            ususfiltred.push(valor);
          }
        });
        var minutos = ususfiltred.reduce(
          (sum, value) => sum + value.minutos,
          0
        );
        var kms = ususfiltred.reduce((sum, value) => sum + value.kms, 0);
        var cal = ususfiltred.reduce((sum, value) => sum + value.cal, 0);
        var co2 = ususfiltred.reduce((sum, value) => sum + value.co2, 0);
        ultRecorrido = { minutos, kms, cal, co2 };
      } else {
        ultRecorrido = arrayRecorridos[0];
      }

      if (Object.entries(ultRecorrido).length === 0) {
        ultRecorrido = {
          minutos: 0,
          kms: 0,
          cal: 0,
          co2: 0,
        };
      } else {
        ultRecorrido.minutos = ultRecorrido.minutos.toFixed(1);
        ultRecorrido.kms = ultRecorrido.kms.toFixed(1);
        ultRecorrido.cal = ultRecorrido.cal.toFixed(1);
        ultRecorrido.co2 = ultRecorrido.co2.toFixed(1);
        usuario.tiempo_total = usuario.tiempo_total.toFixed(2);
        usuario.co2_total = usuario.co2_total.toFixed(2);
        usuario.cal_total = usuario.cal_total.toFixed(2);
        usuario.km_total = usuario.km_total.toFixed(2);
      }

      return h.view("usuario", {
        title: `Usuario: ${usuario.usuario}`,
        usuario: usuario,
        ultRecorrido: ultRecorrido,
        recorridos: arrayRecorridos,
        id: id,
      });
    },
  });

  //Funcion que convierte segundos en tiempo
  function secsToTime(secs) {
    let d = (secs / 8.64e4) | 0;
    let H = ((secs % 8.64e4) / 3.6e3) | 0;
    let m = ((secs % 3.6e3) / 60) | 0;
    let s = secs % 60;
    let z = (n) => (n < 10 ? "0" : "") + n;
    return `${d}:${z(H)}:${z(m)}`;
  }

  //Ruta que muestra un usuario
  server.route({
    method: "GET",
    path: "/admin/usuario/{id}",
    handler: async (req, h) => {
      const usuario = await req.mongo.db.collection("Empresa").findOne({});
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const generos = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            //check if genero exists
            $match: {
              genero: { $exists: true },
            },
          },
          {
            $group: {
              _id: "$genero",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray();

      const empresa = await req.mongo.db
        .collection("Empresa")
        .find({
          $and: [
            { nombre: { $exists: true } },
            { _id: { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
          ],
        })
        .toArray();

      const graph = await req.mongo.db
        .collection("Empresa")
        .aggregate([
          {
            $match: {
              $and: [
                { nombre: { $exists: true } },
                { _id: { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
              ],
            },
          },
          { $unwind: "$datosHistoricos" },
          { $unwind: "$datosHistoricos.fechaCom" },
          {
            $group: {
              _id: { $substr: ["$datosHistoricos.fechaCom", 0, 7] },
              viajes: { $sum: 1 },
              co2: { $sum: "$datosHistoricos.co2" },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      const graphTypeOfTransport = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            $match: {
              $and: [
                { nombre: { $exists: true } },
                {
                  "empresa.id": {
                    $ne: new ObjectID("5fee064159aa4e5b64f9152b"),
                  },
                },
              ],
            },
          },
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "recorridos.vehicle": { $exists: true } },
                {
                  "recorridos.vehicle": {
                    $ne: null,
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: "$recorridos.vehicle",
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      let arr = graphTypeOfTransport.filter(
        (item) => item._id !== "Transporte público"
      );
      let totalNotPublicTransport = 0;
      arr.map((item) => {
        totalNotPublicTransport += item.viajes;
      });

      const graphHours = await req.mongo.db
        .collection("Empresa")
        .aggregate([
          {
            $match: {
              $and: [
                { nombre: { $exists: true } },
                { _id: { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
              ],
            },
          },
          { $unwind: "$datosHistoricos" },
          { $unwind: "$datosHistoricos.fechaCom" },
          {
            $group: {
              _id: {
                $toInt: {
                  $substr: [
                    {
                      $dateSubtract: {
                        startDate: {
                          $dateFromString: {
                            dateString: "$datosHistoricos.fechaCom",
                          },
                        },
                        unit: "hour",
                        amount: {
                          $toInt: {
                            $cond: {
                              if: { $gt: ["$datosHistoricos.min", 0] },
                              then: { $divide: ["$datosHistoricos.min", 60] },
                              else: 0,
                            },
                          },
                        },
                      },
                    },
                    11,
                    2,
                  ],
                },
              },
              min: { $sum: "$datosHistoricos.min" },
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      graphHours.map((item, index) => {
        if (parseInt(item._id) - 5 < 0) {
          graphHours[index]._id = 24 + parseInt(item._id) - 5;
        } else {
          graphHours[index]._id = parseInt(item._id) - 5;
        }
      });

      let result = graphHours.sort((a, b) => {
        return a._id - b._id;
      });

      let tempEmp = {
        tiempo: 0,
        co2: 0,
        cal: 0,
        km: 0,
        viajes: 0,
      };
      await empresa.map((emp) => {
        tempEmp.tiempo = tempEmp.tiempo + emp.tiempo;
        tempEmp.cal = tempEmp.cal + emp.cal;
        tempEmp.km = tempEmp.km + emp.km;
        tempEmp.co2 = tempEmp.co2 + emp.co2;
      });

      await graph.map((emp) => {
        tempEmp.viajes = tempEmp.viajes + emp.viajes;
      });

      let pesoConvert = Intl.NumberFormat("es-CO");

      empresa.tiempo = secsToTime(tempEmp.tiempo * 60);
      empresa.co2 = tempEmp.co2.toFixed(2);
      empresa.viajes = tempEmp.viajes;
      empresa.ahorroTrans =
        "$" + pesoConvert.format((totalNotPublicTransport * 2650).toFixed(2));
      empresa.ahorroSITP =
        "$" + pesoConvert.format((totalNotPublicTransport * 2450).toFixed(2));
      empresa.cal = tempEmp.cal.toFixed(2);
      empresa.km = tempEmp.km.toFixed(2);
      empresa.smartphones = ((tempEmp.co2 * 34) / 0.067).toFixed(2);
      empresa.numeroPlantulas = ((tempEmp.co2 * 0.001) / 0.067).toFixed(2);
      empresa.bolsasRecicladas = ((tempEmp.co2 * 0.003) / 0.067).toFixed(2);
      empresa.dataGraph = JSON.stringify(graph);
      empresa.hoursData = JSON.stringify(result);
      empresa.typeTransportData = JSON.stringify(graphTypeOfTransport);
      const token = jwt.sign(
        {
          _id: id,
        },
        process.env.COOKIE_ENCRYPT_PWD
      );
      return h.view("usuario", {
        // title: `Usuario: ${usuario.usuario}`,
        usuario: usuario,
        empresa: empresa,
        generos: JSON.stringify(generos),
        token: token,
        // id: id
      });
    },
  });

  //Ruta dashboard filtrado
  server.route({
    method: "POST",
    path: "/admin/usuario/filtros/{id}",
    handler: async (req, h) => {
      console.log("entro");
      const usuario = await req.mongo.db.collection("Empresa").findOne({});
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      let datos = req.payload;
      //agrupar los generos de los usuarios y contarlos
      try {
        const generos = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            {
              //check if genero exists
              $match: {
                $and: [
                  { genero: { $exists: true }, },
                  //check if recorrido vehicle is equal to the one selected
                  datos.vehicle && { "recorridos.vehicle": datos.vehicle, }
                ],
              },
            },
            {
              $group: {
                _id: "$genero",
                count: { $sum: 1 },
              },
            },
          ])
          .toArray();
        console.log("entro2")
        const empresa = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            { $unwind: "$recorridos" },
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  { "empresa.id": { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
                  datos.vehicle && { "recorridos.vehicle": datos.vehicle },
                ],
              },
            },
            { $project: { _id: 0, recorridos: 1 } },
            /* { $unwind: "$datosHistoricos" },
            { $unwind: "$datosHistoricos.fechaCom" },*/
            {
              $addFields: {
                convertedDate: { $toDate: "$recorridos.fecha" },
              },
            },

            {
              $match: {
                convertedDate: {
                  $gte: new Date(datos.FechaInicio),
                  $lt: new Date(datos.FechaFin),
                },
              },
            },
          ])
          .toArray();

        console.log(empresa)

        const graph = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            { $unwind: "$recorridos" },
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  { "empresa.id": { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
                  { "recorridos.vehicle": datos.vehicle },
                ],
              },
            },
            { $project: { _id: 0, recorridos: 1 } },
            /* { $unwind: "$datosHistoricos" },
              { $unwind: "$datosHistoricos.fechaCom" },*/
            {
              $addFields: {
                convertedDate: { $toDate: "$recorridos.fecha" },
              },
            },

            {
              $match: {
                convertedDate: {
                  $gte: new Date(datos.FechaInicio),
                  $lt: new Date(datos.FechaFin),
                },
              },
            },
            {
              $group: {
                _id: { $substr: ["$recorridos.fecha", 0, 7] },
                viajes: { $sum: 1 },
                co2: { $sum: "$recorridos.co2" },
              },
            },
            { $sort: { _id: 1 } },
          ])
          .toArray();

        let graphTypeOfTransport = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  {
                    "empresa.id": {
                      $ne: new ObjectID("5fee064159aa4e5b64f9152b"),
                    },
                  },
                ],
              },
            },
            { $unwind: "$recorridos" },
            {
              $addFields: {
                convertedDate: { $toDate: "$recorridos.fecha" },
              },
            },
            {
              $match: {
                $and: [
                  {
                    convertedDate: {
                      $gte: new Date(datos.FechaInicio),
                      $lt: new Date(datos.FechaFin),
                    },
                  },
                  { "recorridos.vehicle": { $exists: true } },
                  {
                    "recorridos.vehicle": {
                      $ne: null,
                    },
                  },
                ],
              },
            },
            {
              $group: {
                _id: "$recorridos.vehicle",
                viajes: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
          ])
          .toArray();


        const graphHours = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            { $unwind: "$recorridos" },
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  { "empresa.id": { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
                  { "recorridos.vehicle": datos.vehicle },
                ],
              },
            },
            { $project: { _id: 0, recorridos: 1 } },
            /* { $unwind: "$datosHistoricos" },
              { $unwind: "$datosHistoricos.fechaCom" },*/
            {
              $addFields: {
                convertedDate: { $toDate: "$recorridos.fecha" },
              },
            },

            {
              $match: {
                convertedDate: {
                  $gte: new Date(datos.FechaInicio),
                  $lt: new Date(datos.FechaFin),
                },
              },
            },
            {
              $group: {
                _id: {
                  $toInt: {
                    $substr: [
                      {
                        $dateSubtract: {
                          startDate: {
                            $dateFromString: {
                              dateString: "$recorridos.fecha",
                            },
                          },
                          unit: "hour",
                          amount: {
                            $toInt: {
                              $cond: {
                                if: { $gt: ["$recorridos.minutos", 0] },
                                then: { $divide: ["$recorridos.minutos", 60] },
                                else: 0,
                              },
                            },
                          },
                        },
                      },
                      11,
                      2,
                    ],
                  },
                },
                min: { $sum: "$recorridos.minutos" },
                viajes: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
          ])
          .toArray();

        let arr = graphTypeOfTransport.filter(
          (item) => datos.vehicle ? item._id == datos.vehicle : item._id !== "Transporte público"
        );
        let totalNotPublicTransport = 0;
        arr.map((item) => {
          totalNotPublicTransport += item.viajes;
        });

        graphTypeOfTransport = graphTypeOfTransport.filter(
          (item) => item._id === datos.vehicle
        );

        graphHours.map((item, index) => {
          if (parseInt(item._id) - 5 < 0) {
            graphHours[index]._id = 24 + parseInt(item._id) - 5;
          } else {
            graphHours[index]._id = parseInt(item._id) - 5;
          }
        });

        let result = graphHours.sort((a, b) => {
          return a._id - b._id;
        });

        let tempEmp = {
          tiempo: 0,
          co2: 0,
          cal: 0,
          km: 0,
          viajes: 0,
        };

        await empresa.map((emp) => {
          console.log(emp);
          tempEmp.tiempo = tempEmp.tiempo + emp.recorridos.minutos;
          tempEmp.cal = tempEmp.cal + emp.recorridos.kms;
          tempEmp.km = tempEmp.km + emp.recorridos.cal;
          tempEmp.co2 = tempEmp.co2 + emp.recorridos.co2;
        });

        await graph.map((emp) => {
          tempEmp.viajes = tempEmp.viajes + emp.viajes;
        });

        let pesoConvert = Intl.NumberFormat("es-CO");

        empresa.tiempo = secsToTime(tempEmp.tiempo * 60);
        empresa.co2 = tempEmp.co2.toFixed(2);
        empresa.viajes = tempEmp.viajes;
        if (datos.vehicle === "Transporte público") {
          empresa.ahorroTrans =
            "$" + pesoConvert.format(0);
          empresa.ahorroSITP =
            "$" + pesoConvert.format(0);
        } else {
          console.log("entro")
          empresa.ahorroTrans =
            "$" + pesoConvert.format((totalNotPublicTransport * 2650).toFixed(2));
          empresa.ahorroSITP =
            "$" + pesoConvert.format((totalNotPublicTransport * 2450).toFixed(2));
        }
        empresa.cal = tempEmp.cal.toFixed(2);
        empresa.km = tempEmp.km.toFixed(2);
        empresa.smartphones = ((tempEmp.co2 * 34) / 0.067).toFixed(2);
        empresa.numeroPlantulas = ((tempEmp.co2 * 0.001) / 0.067).toFixed(2);
        empresa.bolsasRecicladas = ((tempEmp.co2 * 0.003) / 0.067).toFixed(2);
        empresa.dataGraph = JSON.stringify(graph);
        empresa.hoursData = JSON.stringify(result);
        empresa.FechaInicio = datos.FechaInicio;
        empresa.FechaFin = datos.FechaFin;
        empresa.typeTransportData = JSON.stringify(graphTypeOfTransport);
        const token = jwt.sign(
          {
            _id: id,
          },
          process.env.COOKIE_ENCRYPT_PWD
        );

        return h.view("usuario", {
          // title: `Usuario: ${usuario.usuario}`,
          usuario: usuario,
          empresa: empresa,
          generos: JSON.stringify(generos),
          token: token,
          // id: id
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  //Ruta dashboard filtrado vehiculo
  server.route({
    method: "POST",
    path: "/admin/usuario/filtros_vehicle/{id}",
    handler: async (req, h) => {
      console.log("entro");
      const usuario = await req.mongo.db.collection("Empresa").findOne({});
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      let datos = req.payload;
      try {
        //agrupar los generos de los usuarios y contarlos
        const generos = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            {
              //check if genero exists
              $match: {
                $and: [
                  { genero: { $exists: true }, },
                  //check if recorrido vehicle is equal to the one selected
                  { "recorridos.vehicle": datos.vehicle, }
                ],
              },
            },
            {
              $group: {
                _id: "$genero",
                count: { $sum: 1 },
              },
            },
          ])
          .toArray();

        const empresa = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  { "empresa.id": { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
                  { "recorridos.vehicle": datos.vehicle },
                ],
              },
            },
          ])
          .toArray();

        const graph = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            {
              $unwind: "$recorridos",
            },
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  { "empresa.id": { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
                  { "recorridos.vehicle": datos.vehicle },
                ],
              },
            },
            { $unwind: "$recorridos.fecha" },
            {
              $group: {
                _id: { $substr: ["$recorridos.fecha", 0, 7] },
                viajes: { $sum: 1 },
                co2: { $sum: "$recorridos.co2" },
              },
            },
            { $sort: { _id: 1 } },
          ])
          .toArray();

        let graphTypeOfTransport = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  {
                    "empresa.id": {
                      $ne: new ObjectID("5fee064159aa4e5b64f9152b"),
                    },
                  },
                ],
              },
            },
            { $unwind: "$recorridos" },
            {
              $match: {
                $and: [
                  { "recorridos.vehicle": { $exists: true } },
                  {
                    "recorridos.vehicle": {
                      $ne: null,
                    },
                  },
                ],
              },
            },
            {
              $group: {
                _id: "$recorridos.vehicle",
                viajes: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
          ])
          .toArray();

        let arr = graphTypeOfTransport.filter(
          (item) => item._id === datos.vehicle
        );
        let totalNotPublicTransport = 0;
        arr.map((item) => {
          totalNotPublicTransport += item.viajes;
        });

        graphTypeOfTransport = graphTypeOfTransport.filter(
          (item) => item._id === datos.vehicle
        );

        const graphHours = await req.mongo.db
          .collection("Usuario")
          .aggregate([
            { $unwind: "$recorridos" },
            {
              $match: {
                $and: [
                  { nombre: { $exists: true } },
                  { "empresa.id": { $ne: new ObjectID("5fee064159aa4e5b64f9152b") } },
                  { "recorridos.vehicle": datos.vehicle },
                ],
              },
            },
            { $unwind: "$recorridos.fecha" },
            {
              $group: {
                _id: {
                  $toInt: {
                    $substr: [
                      {
                        $dateSubtract: {
                          startDate: {
                            $dateFromString: {
                              dateString: "$recorridos.fecha",
                            },
                          },
                          unit: "hour",
                          amount: {
                            $toInt: {
                              $cond: {
                                if: { $gt: ["$recorridos.minutos", 0] },
                                then: { $divide: ["$recorridos.minutos", 60] },
                                else: 0,
                              },
                            },
                          },
                        },
                      },
                      11,
                      2,
                    ],
                  },
                },
                min: { $sum: "$recorridos.minutos" },
                viajes: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
          ])
          .toArray();

        graphHours.map((item, index) => {
          if (parseInt(item._id) - 5 < 0) {
            graphHours[index]._id = 24 + parseInt(item._id) - 5;
          } else {
            graphHours[index]._id = parseInt(item._id) - 5;
          }
        });

        let result = graphHours.sort((a, b) => {
          return a._id - b._id;
        });

        let tempEmp = {
          tiempo: 0,
          co2: 0,
          cal: 0,
          km: 0,
          viajes: 0,
        };
        await empresa.map((emp) => {
          tempEmp.tiempo = tempEmp.tiempo + emp.tiempo_total;
          tempEmp.cal = tempEmp.cal + emp.cal_total;
          tempEmp.km = tempEmp.km + emp.km_total;
          tempEmp.co2 = tempEmp.co2 + emp.co2_total;
        });

        await graph.map((emp) => {
          tempEmp.viajes = tempEmp.viajes + emp.viajes;
        });

        let pesoConvert = Intl.NumberFormat("es-CO");

        empresa.tiempo = secsToTime(tempEmp.tiempo * 60);
        empresa.co2 = tempEmp.co2.toFixed(2);
        empresa.viajes = tempEmp.viajes;
        console.log("datos", datos.vehicle);
        if (datos.vehicle === "Transporte público") {
          empresa.ahorroTrans =
            "$" + pesoConvert.format(0);
          empresa.ahorroSITP =
            "$" + pesoConvert.format(0);
        } else {
          console.log("entro")
          empresa.ahorroTrans =
            "$" + pesoConvert.format((totalNotPublicTransport * 2650).toFixed(2));
          empresa.ahorroSITP =
            "$" + pesoConvert.format((totalNotPublicTransport * 2450).toFixed(2));
        }
        empresa.cal = tempEmp.cal.toFixed(2);
        empresa.km = tempEmp.km.toFixed(2);
        empresa.smartphones = ((tempEmp.co2 * 34) / 0.067).toFixed(2);
        empresa.numeroPlantulas = ((tempEmp.co2 * 0.001) / 0.067).toFixed(2);
        empresa.bolsasRecicladas = ((tempEmp.co2 * 0.003) / 0.067).toFixed(2);
        empresa.dataGraph = JSON.stringify(graph);
        empresa.hoursData = JSON.stringify(result);
        empresa.typeTransportData = JSON.stringify(graphTypeOfTransport);
        const token = jwt.sign(
          {
            _id: id,
          },
          process.env.COOKIE_ENCRYPT_PWD
        );
        return h.view("usuario", {
          // title: `Usuario: ${usuario.usuario}`,
          usuario: usuario,
          empresa: empresa,
          generos: JSON.stringify(generos),
          token: token,
          // id: id
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
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });
      const total = await req.mongo.db.collection("Empresa").aggregate([
        {
          $group: {
            _id: new ObjectID(id),
            km: { $sum: "usuarios.km" },
            cal: { $sum: "usuarios.cal" },
            co2: { $sum: "usuarios.co2" },
          },
        },
      ]);

      empresa.tiempo = empresa.tiempo.toFixed(2);
      empresa.co2 = empresa.co2.toFixed(2);
      empresa.cal = empresa.cal.toFixed(2);
      empresa.km = empresa.km.toFixed(2);
      return h.view("dashboardEmpresaSuper", {
        title: `Empresa: ${empresa.nombre}`,
        empresa: empresa,
      });
    },
  });

  /********************************************
   * Rutas para el perfil Admin de empresa
   ********************************************/

  //Ruta que muestra la empresa
  server.route({
    method: "GET",
    path: "/admin/empresa/{id}",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const generos = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            //check if genero exists
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { genero: { $exists: true } },
              ],
            },
          },
          {
            $group: {
              _id: "$genero",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray();

      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });
      const graph = await req.mongo.db
        .collection("Empresa")
        .aggregate([
          { $match: { _id: new ObjectID(id) } },
          { $unwind: "$datosHistoricos" },
          { $unwind: "$datosHistoricos.fechaCom" },
          {
            $group: {
              _id: { $substr: ["$datosHistoricos.fechaCom", 0, 7] },
              viajes: { $sum: 1 },
              co2: { $sum: "$datosHistoricos.co2" },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      const graphTypeOfTransport = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            $match: {
              $and: [
                { nombre: { $exists: true } },
                {
                  "empresa.id": new ObjectID(id),
                },
              ],
            },
          },
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "recorridos.vehicle": { $exists: true } },
                {
                  "recorridos.vehicle": {
                    $ne: null,
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: "$recorridos.vehicle",
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      let arr = graphTypeOfTransport.filter(
        (item) => item._id !== "Transporte público"
      );
      let totalNotPublicTransport = 0;
      arr.map((item) => {
        totalNotPublicTransport += item.viajes;
      });

      const graphHours = await req.mongo.db
        .collection("Empresa")
        .aggregate([
          { $match: { _id: new ObjectID(id) } },
          { $unwind: "$datosHistoricos" },
          { $unwind: "$datosHistoricos.fechaCom" },
          {
            $group: {
              _id: {
                $toInt: {
                  $substr: [
                    {
                      $dateSubtract: {
                        startDate: {
                          $dateFromString: {
                            dateString: "$datosHistoricos.fechaCom",
                          },
                        },
                        unit: "hour",
                        amount: {
                          $toInt: {
                            $cond: {
                              if: { $gt: ["$datosHistoricos.min", 0] },
                              then: { $divide: ["$datosHistoricos.min", 60] },
                              else: 0,
                            },
                          },
                        },
                      },
                    },
                    11,
                    2,
                  ],
                },
              },
              min: { $sum: "$datosHistoricos.min" },
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      graphHours.map((item, index) => {
        if (parseInt(item._id) - 5 < 0) {
          graphHours[index]._id = 24 + parseInt(item._id) - 5;
        } else {
          graphHours[index]._id = parseInt(item._id) - 5;
        }
      });

      let result = graphHours.sort((a, b) => {
        return a._id - b._id;
      });

      let tempEmp = {
        co2: 0,
        viajes: 0,
      };
      await graph.map((emp) => {
        tempEmp.viajes = tempEmp.viajes + emp.viajes;
      });

      let pesoConvert = Intl.NumberFormat("es-CO");

      empresa.tiempo = secsToTime(empresa.tiempo * 60);
      empresa.co2 = empresa.co2.toFixed(2);
      empresa.viajes = tempEmp.viajes;
      empresa.ahorroTrans =
        "$" + pesoConvert.format((totalNotPublicTransport * 2650).toFixed(2));
      empresa.ahorroSITP =
        "$" + pesoConvert.format((totalNotPublicTransport * 2450).toFixed(2));
      empresa.cal = empresa.cal.toFixed(2);
      empresa.km = empresa.km.toFixed(2);
      empresa.smartphones = ((empresa.co2 * 34) / 0.067).toFixed(2);
      empresa.numeroPlantulas = ((empresa.co2 * 0.001) / 0.067).toFixed(2);
      empresa.bolsasRecicladas = ((empresa.co2 * 0.003) / 0.067).toFixed(2);
      empresa.dataGraph = JSON.stringify(graph);
      empresa.hoursData = JSON.stringify(result);
      empresa.typeTransportData = JSON.stringify(graphTypeOfTransport);

      const token = jwt.sign(
        {
          _id: id,
        },
        process.env.COOKIE_ENCRYPT_PWD
      );

      return h.view(
        "dashboardEmpresa",
        {
          admin: req.state.admin,
          empresa: empresa,
          generos: JSON.stringify(generos),
          token: token,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta dashboard empresa filtro
  server.route({
    method: "POST",
    path: "/admin/empresa/filtro/{id}",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      let datos = req.payload;

      const generos = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            //check if genero exists
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { genero: { $exists: true } },
                datos.vehicle && { "recorridos.vehicle": datos.vehicle, }
              ],
            },
          },
          {
            $group: {
              _id: "$genero",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray();
      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });

      let graphTypeOfTransport = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            $match: {
              $and: [
                { nombre: { $exists: true } },
                {
                  "empresa.id": new ObjectID(id),
                },
              ],
            },
          },
          { $unwind: "$recorridos" },
          {
            $addFields: {
              convertedDate: { $toDate: "$recorridos.fecha" },
            },
          },
          {
            $match: {
              $and: [
                {
                  convertedDate: {
                    $gte: new Date(datos.FechaInicio),
                    $lt: new Date(datos.FechaFin),
                  },
                },
                { "recorridos.vehicle": { $exists: true } },
                {
                  "recorridos.vehicle": {
                    $ne: null,
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: "$recorridos.vehicle",
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      let arr = graphTypeOfTransport.filter(
        (item) => item._id === datos.vehicle
      );
      let totalNotPublicTransport = 0;
      arr.map((item) => {
        totalNotPublicTransport += item.viajes;
      });

      graphTypeOfTransport = graphTypeOfTransport.filter(
        (item) => item._id === datos.vehicle
      );

      const datosFiltrados = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id), },
                datos.vehicle && { "recorridos.vehicle": datos.vehicle },
              ]
            },
          },
          { $project: { _id: 0, recorridos: 1 } },
          /* { $unwind: "$datosHistoricos" },
          { $unwind: "$datosHistoricos.fechaCom" },*/
          {
            $addFields: {
              convertedDate: { $toDate: "$recorridos.fecha" },
            },
          },

          {
            $match: {
              convertedDate: {
                $gte: new Date(datos.FechaInicio),
                $lt: new Date(datos.FechaFin),
              },
            },
          },
        ])
        .toArray();

      const graph = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id), },
                datos.vehicle && { "recorridos.vehicle": datos.vehicle },
              ]
            },
          },
          { $project: { _id: 0, recorridos: 1 } },
          /* { $unwind: "$datosHistoricos" },
            { $unwind: "$datosHistoricos.fechaCom" },*/
          {
            $addFields: {
              convertedDate: { $toDate: "$recorridos.fecha" },
            },
          },

          {
            $match: {
              convertedDate: {
                $gte: new Date(datos.FechaInicio),
                $lt: new Date(datos.FechaFin),
              },
            },
          },
          {
            $group: {
              _id: { $substr: ["$recorridos.fecha", 0, 7] },
              viajes: { $sum: 1 },
              co2: { $sum: "$recorridos.co2" },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      const graphHours = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { "recorridos.vehicle": datos.vehicle },
              ]
            },
          },
          { $project: { _id: 0, recorridos: 1 } },
          /* { $unwind: "$datosHistoricos" },
            { $unwind: "$datosHistoricos.fechaCom" },*/
          {
            $addFields: {
              convertedDate: { $toDate: "$recorridos.fecha" },
            },
          },
          {
            $match: {
              convertedDate: {
                $gte: new Date(datos.FechaInicio),
                $lt: new Date(datos.FechaFin),
              },
            },
          },
          {
            $group: {
              _id: {
                $toInt: {
                  $substr: [
                    {
                      $dateSubtract: {
                        startDate: {
                          $dateFromString: {
                            dateString: "$recorridos.fecha",
                          },
                        },
                        unit: "hour",
                        amount: {
                          $toInt: {
                            $cond: {
                              if: { $gt: ["$recorridos.minutos", 0] },
                              then: { $divide: ["$recorridos.minutos", 60] },
                              else: 0,
                            },
                          },
                        },
                      },
                    },
                    11,
                    2,
                  ],
                },
              },
              min: { $sum: "$recorridos.minutos" },
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      graphHours.map((item, index) => {
        if (parseInt(item._id) - 5 < 0) {
          graphHours[index]._id = 24 + parseInt(item._id) - 5;
        } else {
          graphHours[index]._id = parseInt(item._id) - 5;
        }
      });

      let result = graphHours.sort((a, b) => {
        return a._id - b._id;
      });

      let tempEmp = {
        tiempo: 0,
        co2: 0,
        cal: 0,
        km: 0,
        viajes: 0,
      };

      await datosFiltrados.map((emp) => {
        tempEmp.tiempo = tempEmp.tiempo + emp.recorridos.minutos;
        tempEmp.cal = tempEmp.cal + emp.recorridos.cal;
        tempEmp.km = tempEmp.km + emp.recorridos.kms;
        tempEmp.co2 = tempEmp.co2 + emp.recorridos.co2;
      });

      await graph.map((emp) => {
        tempEmp.viajes = tempEmp.viajes + emp.viajes;
      });

      let pesoConvert = Intl.NumberFormat("es-CO");

      empresa.tiempo = secsToTime(tempEmp.tiempo * 60);
      empresa.co2 = tempEmp.co2.toFixed(2);
      empresa.viajes = tempEmp.viajes;
      if (datos.vehicle === "Transporte público") {
        empresa.ahorroTrans =
          "$" + pesoConvert.format(0);
        empresa.ahorroSITP =
          "$" + pesoConvert.format(0);
      } else {
        console.log("entro")
        empresa.ahorroTrans =
          "$" + pesoConvert.format((totalNotPublicTransport * 2650).toFixed(2));
        empresa.ahorroSITP =
          "$" + pesoConvert.format((totalNotPublicTransport * 2450).toFixed(2));
      }
      empresa.cal = tempEmp.cal.toFixed(2);
      empresa.km = tempEmp.km.toFixed(2);
      empresa.smartphones = ((tempEmp.co2 * 34) / 0.067).toFixed(2);
      empresa.numeroPlantulas = ((tempEmp.co2 * 0.001) / 0.067).toFixed(2);
      empresa.bolsasRecicladas = ((tempEmp.co2 * 0.003) / 0.067).toFixed(2);
      empresa.dataGraph = JSON.stringify(graph);
      empresa.FechaInicio = datos.FechaInicio;
      empresa.FechaFin = datos.FechaFin;
      empresa.hoursData = JSON.stringify(result);
      empresa.typeTransportData = JSON.stringify(graphTypeOfTransport);
      const token = jwt.sign(
        {
          _id: id,
        },
        process.env.COOKIE_ENCRYPT_PWD
      );

      return h.view(
        "dashboardEmpresa",
        {
          admin: req.state.admin,
          empresa: empresa,
          generos: JSON.stringify(generos),
          token: token,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta dashboard empresa filtro
  server.route({
    method: "POST",
    path: "/admin/empresa/filtros_vehicle/{id}",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      let datos = req.payload;

      const generos = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            //check if genero exists
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { genero: { $exists: true } },
                { "recorridos.vehicle": datos.vehicle, }
              ],
            },
          },
          {
            $group: {
              _id: "$genero",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray();

      let empresa = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { "recorridos.vehicle": datos.vehicle },
              ],
            },
          },
        ])
        .toArray();

      const graph = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            $unwind: "$recorridos",
          },
          {
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { "recorridos.vehicle": datos.vehicle },
              ],
            }
          },
          { $unwind: "$recorridos.fecha" },
          {
            $group: {
              _id: { $substr: ["$recorridos.fecha", 0, 7] },
              viajes: { $sum: 1 },
              co2: { $sum: "$recorridos.co2" },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      console.log(graph)

      let graphTypeOfTransport = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          {
            $match: {
              $and: [
                { nombre: { $exists: true } },
                {
                  "empresa.id": new ObjectID(id),
                },
              ],
            },
          },
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "recorridos.vehicle": { $exists: true } },
                {
                  "recorridos.vehicle": {
                    $ne: null,
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: "$recorridos.vehicle",
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      let arr = graphTypeOfTransport.filter(
        (item) => item._id === datos.vehicle
      );
      let totalNotPublicTransport = 0;
      arr.map((item) => {
        totalNotPublicTransport += item.viajes;
      });

      graphTypeOfTransport = graphTypeOfTransport.filter(
        (item) => item._id === datos.vehicle
      );

      const graphHours = await req.mongo.db
        .collection("Usuario")
        .aggregate([
          { $unwind: "$recorridos" },
          {
            $match: {
              $and: [
                { "empresa.id": new ObjectID(id) },
                { "recorridos.vehicle": datos.vehicle },
              ],
            }
          },
          { $unwind: "$recorridos.fecha" },
          {
            $group: {
              _id: {
                $toInt: {
                  $substr: [
                    {
                      $dateSubtract: {
                        startDate: {
                          $dateFromString: {
                            dateString: "$recorridos.fecha",
                          },
                        },
                        unit: "hour",
                        amount: {
                          $toInt: {
                            $cond: {
                              if: { $gt: ["$recorridos.minutos", 0] },
                              then: { $divide: ["$recorridos.minutos", 60] },
                              else: 0,
                            },
                          },
                        },
                      },
                    },
                    11,
                    2,
                  ],
                },
              },
              min: { $sum: "$recorridos.minutos" },
              viajes: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray();

      graphHours.map((item, index) => {
        if (parseInt(item._id) - 5 < 0) {
          graphHours[index]._id = 24 + parseInt(item._id) - 5;
        } else {
          graphHours[index]._id = parseInt(item._id) - 5;
        }
      });

      let result = graphHours.sort((a, b) => {
        return a._id - b._id;
      });

      let tempEmp = {
        tiempo: 0,
        co2: 0,
        cal: 0,
        km: 0,
        viajes: 0,
      };
      await empresa.map((emp) => {
        tempEmp.tiempo = tempEmp.tiempo + emp.tiempo_total;
        tempEmp.cal = tempEmp.cal + emp.cal_total;
        tempEmp.km = tempEmp.km + emp.km_total;
        tempEmp.co2 = tempEmp.co2 + emp.co2_total;
      });

      await graph.map((emp) => {
        tempEmp.viajes = tempEmp.viajes + emp.viajes;
      });
      empresa = {};
      let pesoConvert = Intl.NumberFormat("es-CO");

      empresa.tiempo = secsToTime(tempEmp.tiempo * 60);
      empresa.co2 = tempEmp.co2.toFixed(2);
      empresa.viajes = tempEmp.viajes;
      console.log("datos", datos.vehicle);
      if (datos.vehicle === "Transporte público") {
        empresa.ahorroTrans =
          "$" + pesoConvert.format(0);
        empresa.ahorroSITP =
          "$" + pesoConvert.format(0);
      } else {
        console.log("entro")
        empresa.ahorroTrans =
          "$" + pesoConvert.format((totalNotPublicTransport * 2650).toFixed(2));
        empresa.ahorroSITP =
          "$" + pesoConvert.format((totalNotPublicTransport * 2450).toFixed(2));
      }
      empresa.cal = tempEmp.cal.toFixed(2);
      empresa.km = tempEmp.km.toFixed(2);
      empresa.smartphones = ((tempEmp.co2 * 34) / 0.067).toFixed(2);
      empresa.numeroPlantulas = ((tempEmp.co2 * 0.001) / 0.067).toFixed(2);
      empresa.bolsasRecicladas = ((tempEmp.co2 * 0.003) / 0.067).toFixed(2);
      empresa.dataGraph = JSON.stringify(graph);
      empresa.hoursData = JSON.stringify(result);
      empresa.typeTransportData = JSON.stringify(graphTypeOfTransport);
      const empresaName = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });
      empresa._id = empresaName._id;
      empresa.nombre = empresaName.nombre;

      const token = jwt.sign(
        {
          _id: id,
        },
        process.env.COOKIE_ENCRYPT_PWD
      );

      return h.view(
        "dashboardEmpresa",
        {
          admin: req.state.admin,
          empresa: empresa,
          generos: JSON.stringify(generos),
          token: token,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta que muestra los usuarios de una empresa
  server.route({
    method: "GET",
    path: "/admin/empresa/{id}/usuarios",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });
      const usuarios = await req.mongo.db
        .collection("Usuario")
        .find({ "empresa.id": new ObjectID(id) })
        .toArray();

      return h.view(
        "usuariosEmpresa",
        {
          admin: req.state.admin,
          empresa: empresa,
          usuarios: usuarios,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta que permite ver el registro de usuarios
  server.route({
    method: "GET",
    path: "/admin/empresa/{id}/registro/usuarios",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });

      return h.view(
        "registroUsuarios",
        {
          admin: req.state.admin,
          empresa: empresa,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta que permite ver el registro de reconocimientos
  server.route({
    method: "GET",
    path: "/admin/empresa/{id}/registro/reconocimiento",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });

      return h.view(
        "registroReconocimiento",
        {
          admin: req.state.admin,
          empresa: empresa,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta que muestra un usuario
  server.route({
    method: "GET",
    path: "/admin/empresa/usuario/{id}",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const usuario = await req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) });

      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(usuario.empresa.id) });

      const arrayRecorridos = Object.values(usuario.recorridos);
      const tamRecorrido = arrayRecorridos.length;
      const ultRecorrido = arrayRecorridos[tamRecorrido - 1];

      return h.view(
        "usuario",
        {
          title: req.state.admin,
          usuario: usuario,
          empresa: empresa,
          ultRecorrido: ultRecorrido,
        },
        {
          layout: "layoutEmpresa",
        }
      );
    },
  });

  //Ruta que redirecciona al index
  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      return h.redirect("/admin");
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
        campana: campana,
      });
    },
  });

  server.route({
    method: "GET",
    path: "/admin/registro/campana",
    handler: async (req, h) => {
      const empresas = await req.mongo.db
        .collection("Empresa")
        .find({})
        .toArray();

      return h.view("registroCampana", {
        title: "Registrar Reto",
        empresas: empresas,
      });
    },
  });

  //Registro campaña empresa
  server.route({
    method: "GET",
    path: "/admin/registro/campana/empresa/{id}",
    handler: async (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const empresa = await req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });

      return h.view(
        "registroCampanaEmpresa",
        {
          title: "Registrar Reto",
          empresa: empresa,
        },
        {
          layout: "layoutEmpresa",
        }
      );
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
