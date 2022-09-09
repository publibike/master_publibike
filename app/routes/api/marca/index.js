"use strict";

const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const { writeFile } = require("fs");
const { promisify } = require("util");
const { join } = require("path");
const { v1: uuidv1 } = require("uuid");
const write = promisify(writeFile);
const admin = require("../../../model/index").admin;
const user = require("../../../model/index").user;
const company = require("../../../model/index").company;
const campaing = require("../../../model/index").campaing;
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
const { Console } = require("console");
const jwt = require("jsonwebtoken");
const mail = require("../../../services/mail.service");
const bcrypt = require('bcrypt');

require("dotenv").config();

module.exports.register = async (server) => {
  /**
   * RUTAS DE ADMINISTRACION DE LA APP
   */

  //Permite el acceso al administrador
  server.route({
    method: "POST",
    path: "/api/admin/login",
    options: {
      // cors: true,
      // validate:{
      //     payload:{
      //         usuario: Joi.string().required(),
      //         password: Joi.string().required()
      //     }
      // }
    },
    handler: async (req, h) => {
      let result;
      try {
        let admini = req.payload;
        if (req.payload.token) {
          let decoded = jwt.verify(
            req.payload.token,
            process.env.COOKIE_ENCRYPT_PWD
          );
          let cookie = req.state.admin;
          if (decoded) {
            return h.redirect("/admin/dashboard").state("session", cookie);
          }
        }
        let usuario = parseInt(admini.usuario);

        const data = await req.mongo.db
          .collection("Administrador")
          .findOne({ usuario: usuario });

        result = await admin.validateAdmin(data, admini.password);

        //Si no existe registro envia mensaje
        if (!result) {
          // return h.response("Usuario y/o contraseña incorrecta").code(401)
          return h.view(
            "index",
            {
              error: "Usuario y/o contraseña incorrecta",
            },
            {
              layout: "index",
            }
          );
        }
      } catch (error) {
        console.log(error);
        // return h.response('Problemas validando el usuario').code(500)
        return h.view(
          "index",
          {
            error: "Problemas validando el usuario",
          },
          {
            layout: "index",
          }
        );
      }

      //Se configura la redireccion y se crea la cookie
      let cookie = req.state.admin;
      console.log("cookie", cookie);
      // if (!cookie) {
      //     cookie = {
      //       usuario: result.usuario,
      //       tipo: result.tipo,
      //       firstVisit: false
      //     }
      //   }

      //   cookie.lastVisit = Date.now()

      // console.log('cookie',cookie)
      return h.redirect("/admin/dashboard").state("session", cookie);
    },
  });
  //Agrega un administrador
  server.route({
    method: "POST",
    path: "/api/admin/createadmin",
    handler: async (req, h) => {
      let result = {};
      try {
        let ad = req.payload;
        ad = JSON.parse(ad);
        //crea el administrador con el password cifrado
        ad = await admin.create(ad);
        console.log(ad);

        result = await req.mongo.db.collection("Administrador").insertOne(ad);
        // console.log(result)
      } catch (error) {
        if (error.code == 11000) {
          return h
            .response(
              `Administrador ${error.keyValue.usuario} ya se encuentra registrado`
            )
            .code(500);
        }
        console.log(error);
        return h.response("Problemas creando el administrador").code(500);
      }

      return h.response(`Administrador creado con ID: ${result.ops[0]._id}`);
    },
  });

  //Obtiene todos los datos para el admin
  server.route({
    method: "GET",
    path: "/api/admin/{id}",
    handler: async (req, h) => {
      const id = request.params.id;
      const ObjectID = req.mongo.ObjectID;

      const admin = req.mongo.db
        .collection("Administrador")
        .find({ _id: new ObjectID(id) });
      console.log(admin);
      return admin;
    },
  });

  //Obtiene todos los usuarios registrados
  server.route({
    method: "GET",
    path: "/api/admin/usuarios",
    handler: (req, h) => {
      const usuarios = req.mongo.db.collection("Usuario").find().toArray();
      return usuarios;
    },
  });

  //Obtiene datos por usuario
  server.route({
    method: "GET",
    path: "/api/admin/usuario/{id}",
    handler: (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const usuario = req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) });

      return usuario;
    },
  });

  //Obtiene los datos de todas las empresas
  server.route({
    method: "GET",
    path: "/api/admin/empresas",
    handler: (req, h) => {
      const empresas = req.mongo.db.collection("Empresa").find().toArray();
      return empresas;
    },
  });

  //Obtiene datos por empresa
  server.route({
    method: "GET",
    path: "/api/admin/empresa/{id}",
    handler: (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const empresa = req.mongo.db
        .collection("Empresa")
        .findOne({ _id: new ObjectID(id) });
      return empresa;
    },
  });

  //Agrega un administrador
  // server.route({
  //     method: 'POST',
  //     path: '/api/admin/createadmin',
  //     options: {
  //         cors: true
  //     },
  //     handler: async (req, h) => {
  //         let result = {};
  //         try {
  //             let ad = req.payload
  //             // ad = JSON.parse(ad)
  //             const ObjectID = req.mongo.ObjectID;
  //             console.log(ad)
  //             //crea el administrador con el password cifrado
  //             ad = await admin.create(ad);
  //             console.log(ad)

  //             result = await req.mongo.db.collection('Administrador').insertOne(ad);
  //             // console.log(result)

  //         } catch (error) {

  //             if (error.code == 11000) {
  //                 // return h.response(`Administrador ${error.keyValue.usuario} ya se encuentra registrado`).code(500)
  //                 return h.view('registroAdmin', {
  //                     error: `Administrador ${error.keyValue.usuario} ya se encuentra registrado`
  //                 })
  //             }
  //             console.log(error)
  //             // return h.response('Problemas creando el administrador').code(500)

  //         }

  //         // return h.response(`Administrador creado con ID: ${result.ops[0]._id}`).redirect('/admin/registro')
  //         return h.view('registroAdmin', {
  //             success: `Administrador ${result.ops[0].usuario} Registrado`
  //         });
  //     }
  // });
  //Agrega un nuevo usuario
  server.route({
    method: "POST",
    path: "/api/admin/usuarios",
    handler: async (req, h) => {
      const payload = req.payload;

      const status = await req.mongo.db
        .collection("Usuario")
        .insertOne(payload);

      return status;
    },
  });

  //Agrega una nueva empresa
  server.route({
    method: "POST",
    path: "/api/admin/createcompany",
    handler: async (req, h) => {
      let result = {};
      try {
        let comp = req.payload;

        comp = await company.create(comp);

        const status = await req.mongo.db.collection("Empresa").insertOne(comp);

        return h.view("registroEmpresa", {
          success: `Empresa ${status.ops[0].nombre} Registrada`,
        });
      } catch (error) {
        if (error.code == 11000) {
          // return h.response(`Empresa ${error.keyValue.nombre} ya se encuentra registrada`).code(500)
          return h.view("registroEmpresa", {
            error: `Empresa ${error.keyValue.nombre} ya se encuentra registrada`,
          });
        }
        return h.view("registroEmpresa", {
          error: `Problemas registrando la Empresa, error: ${error} `,
        });
      }
    },
  });

  //Agrega un nueva campaña
  server.route({
    method: "POST",
    path: "/api/admin/createcampaign",
    options: {
      payload: {
        parse: true,
        //   multipart: true,
      },
    },
    handler: async (req, h) => {
      let result, filename, empresas;
      try {
        const ObjectID = req.mongo.ObjectID;
        let cam = req.payload;
        let id = cam.empresaId;
        cam.empresaId = new ObjectID(id);
        console.log("cam", req.payload.imagen);

        if (Buffer.isBuffer(Buffer.from(req.payload.imagen))) {
          console.log("en imagen", __dirname);
          filename = `${uuidv1()}.png`;
          await write(
            join(__dirname, "../../../..", "public", "uploads", filename),
            cam.imagen
          );
        }

        const campana = await campaing.create(cam, filename, req.url.origin);
        console.log("campaña", campana);
        result = await req.mongo.db.collection("Campaña").insertOne(campana);
        console.log("result", result.ops[0].nombre);
        const camEmp = {
          id: result.insertedId,
          nombre: campana.nombre,
          imagen: campana.imagen,
          pago_km: campana.pago_km,
          zona: campana.zona,
          fecha_inicio: campana.fecha_inicio,
          fecha_final: campana.fecha_final,
          cupos: campana.cupos,
          estado: campana.estado,
        };

        const stsEmpresa = await req.mongo.db
          .collection("Empresa")
          .updateOne(
            { _id: new ObjectID(id) },
            { $push: { campanas: camEmp } }
          );
        empresas = await req.mongo.db.collection("Empresa").find().toArray();

        return h.view("registroCampana", {
          title: "Registrar Camapaña",
          success: `Campaña ${result.ops[0].nombre} registrada satisfactoriamente`,
          empresas: empresas,
        });
      } catch (error) {
        if (error.code == 11000) {
          // return h.response(`Usuario ${error.keyValue.usuario} ya se encuentra registrado`).code(500)
          return h.view("registroCampana", {
            title: "Registrar Camapaña",
            error: `Campana ${error.keyValue.nombre} ya se encuentra registrada`,
            empresas: empresas,
          });
        }
        console.log(error);
      }
    },
  });

  /*********************************
   * RUTAS PARA LA APLICACION MOVIL
   ********************************/

  //Permite el acceso al usuario
  server.route({
    method: "POST",
    path: "/api/movil/login",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      let result;
      try {
        let us = req.payload;
        // console.log(us)
        // let email = (us.email)

        const data = await req.mongo.db
          .collection("Usuario")
          .findOne({ email: us.email });

        result = await user.validateUser(data, us.password);

        //Si no existe registro envia mensaje
        if (!result) {
          // return h.response("Usuario y/o contraseña incorrecta").code(401)
          return h.response("Correo y/o constraseña incorrectos");
        }
      } catch (error) {
        console.log(error);
        // return h.response('Problemas validando el usuario').code(500)
        return h.response("Problemas validando el usuario");
      }
      console.log(result);
      return h.response(result).code(200);
    },
  });

  //Agrega un usuario
  server.route({
    method: "POST",
    path: "/api/movil/registerUser",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      let result = {};
      console.log("entrooo");
      try {
        let us = req.payload;
        console.log("entrooo");
        let temp = JSON.parse(us)
        let email = temp.email;
        console.log(email);
        us = JSON.parse(us);
        //crea el administrador con el password cifrado
        us = await user.create(us);
        // console.log(us)

        result = await req.mongo.db.collection("Usuario").insertOne(us);

        mail.sendRegisterMail(email, { nombre: us.nombre });
      } catch (error) {
        if (error.code == 11000) {
          return h
            .response(
              `Usuario ${error.keyValue.usuario} ya se encuentra registrado`
            )
            .code(500);
        }
        console.log(error);
        return h.response("Problemas creando el usuario").code(500);
      }
      return h.response(`Usuario creado con ID: ${result.ops[0]._id}`);
    },
  });

  //Obtiene los datos del usuario
  server.route({
    method: "GET",
    path: "/api/movil/usuario/{id}",
    options: {
      cors: true,
    },
    handler: (req, h) => {
      console.log("entrooo");
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const usuario = req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) });

      return usuario;
    },
  });
  //Obtiene las campañas del usuario
  server.route({
    method: "GET",
    path: "/api/movil/usuario/{id}/recorridos",
    options: {
      cors: true,
    },
    handler: (req, h) => {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const recorridos = req.mongo.db
        .collection("Usuario")
        .findOne({ _id: new ObjectID(id) }, { recorridos: 1 });
      console.log(recorridos);
      return recorridos;
    },
  });

  //Obtiene las campañas
  server.route({
    method: "GET",
    path: "/api/movil/usuario/{id}/campanas",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
      } catch (error) { }
      return "Lista las campañas de un usuario en la app movil";
    },
  });

  //Obtiene las campañas del usuario
  server.route({
    method: "GET",
    path: "/api/movil/campanas",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const campanas = await req.mongo.db
          .collection("Campaña")
          .find({})
          .toArray();
        return campanas;
      } catch (error) {
        console.log(error);
      }
    },
  });

  //Obtiene una campaña por id
  server.route({
    method: "GET",
    path: "/api/movil/campana/{id}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const id = req.params.id;
        const ObjectID = req.mongo.ObjectID;

        const campana = req.mongo.db
          .collection("Campaña")
          .findOne({ _id: new ObjectID(id) });
        return campana;
      } catch (error) {
        console.log(error);
      }
    },
  });

  //Obtiene las empresas registradas
  server.route({
    method: "GET",
    path: "/api/movil/empresas",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const empresa = await req.mongo.db
          .collection("Empresa")
          .find({})
          .toArray();
        return empresa;
      } catch (error) {
        console.log(error);
      }
    },
  });

  //Actualiza a un usuario
  server.route({
    method: "PUT",
    path: "/api/movil/usuario/{id}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const id = req.params.id;
        const ObjectID = req.mongo.ObjectID;

        const payload = req.payload;

        const status = await req.mongo.db
          .collection("Usuario")
          .updateOne({ _id: ObjectID(id) }, { $set: payload });
      } catch (error) {
        return error;
      }

      return status;
    },
  });

  //Enviar codigo de verificacion
  server.route({
    method: "PUT",
    path: "/api/movil/usuario_verification/{email}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        //get user by req email and generate code of verification with 6 alphanumeric characters and send it to user email and save code in user collection
        const email = req.params.email;

        const user = await req.mongo.db
          .collection("Usuario")
          .findOne({ email: email });
        if (!user) {
          return h.response("Usuario no encontrado").code(500);
        }
        //generate alpha numeric string of 6 length
        const code = Math.random().toString(36).slice(2)
        console.log(code);

        const status = await req.mongo.db
          .collection("Usuario")
          .updateOne({ email: email }, { $set: { code: code } });
        if (!status) {
          return h.response("Error al enviar el codigo").code(500);
        }
        console.log(code)
        mail.sendPasswordReset(email, { code: code, nombre: user.nombre });

        return h.response("Codigo enviado").code(200);
      } catch (error) {
        return error;
      }
    },
  });

  //verificar codigo de verificacion y retornar true
  server.route({
    method: "POST",
    path: "/api/movil/usuario_verification/{email}/{code}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const email = req.params.email;
        const code = req.params.code;
        const user = await req.mongo.db
          .collection("Usuario")
          .findOne({ email: email });
        if (!user) {
          return h.response("Usuario no encontrado").code(500);
        }
        if (user.code !== code) {
          return h.response("Codigo incorrecto").code(500);
        }
        const status = await req.mongo.db
          .collection("Usuario")
          .updateOne({ email: email }, { $set: { code: "" } });
        if (!status) {
          return h.response("Error al verificar el codigo").code(500);
        }
        return h.response("Codigo verificado").code(200);
      } catch (error) {
        return error;
      }
    },
  });

  //Actualiza la contraseña de un usuario
  server.route({
    method: "PUT",
    path: "/api/movil/usuario/{email}/{password}",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const email = req.params.email;
        const password = req.params.password;
        const user = await req.mongo.db
          .collection("Usuario")
          .findOne({ email: email });
        console.log(user);
        if (!user) {
          return h.response("Usuario no encontrado").code(500);
        }
        //encrypt password
        console.log("entro");
        const encryptedPassword = await bcrypt.hash(password, 10);
        const status = await req.mongo.db
          .collection("Usuario")
          .updateOne({ email: email }, { $set: { password: encryptedPassword } });
        console.log("entro2");
        if (!status) {
          return h.response("Error al actualizar la contraseña").code(500);
        }
        return h.response("Contraseña actualizada").code(200);
      } catch (error) {
        return error;
      }
    },
  });



  //Envia el recorrido
  server.route({
    method: "PUT",
    path: "/api/movil/usuario/{id}/recorrido",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const id = req.params.id;
        const ObjectID = req.mongo.ObjectID;
        const payload = req.payload;
        console.log(payload);

        let user = await req.mongo.db
          .collection("Usuario")
          .findOne({ _id: new ObjectID(id) });

        //Se obtienes los datos totales
        let km = user.km_total;
        let co2 = user.co2_total;
        let cal = user.cal_total;
        let tiempo = user.tiempo_total;
        let ganancia = user.ganancia_total;

        //se suman los valores a los totales
        user.km_total = km + payload.kms;
        user.co2_total = co2 + payload.co2;
        user.cal_total = cal + payload.cal;
        user.tiempo_total = tiempo + payload.minutos;
        user.ganancia_total = ganancia + payload.ingresos;

        let camActId = user.campana_actual.id;

        //Actualiza los totales del usuario
        const status = await req.mongo.db.collection("Usuario").updateOne(
          { _id: ObjectID(id) },
          {
            $push: { recorridos: payload },
            $set: {
              km_total: user.km_total,
              co2_total: user.co2_total,
              cal_total: user.cal_total,
              tiempo_total: user.tiempo_total,
              ganancia_total: user.ganancia_total,
            },
          }
        );

        //Obtiene la campaña actual
        let camActual = await req.mongo.db
          .collection("Campaña")
          .findOne({ _id: new ObjectID(camActId) });
        //busca al usuario en el array de usuarios de la campaña
        for (let i = 0; i < camActual.usuarios.length; i++) {
          const element = camActual.usuarios[i];
          const idUsuario = JSON.stringify(id);
          const idUsCampana = JSON.stringify(element.id);
          if (idUsuario === idUsCampana) {
            //Actualiza los campos del usuario
            console.log("holis");
            //Se obtienes los datos de la campaña
            let km = element.kms;
            let co2 = element.co2;
            let cal = element.cal;
            let tiempo = element.tiempo;
            let ingresos = element.ingresos;

            //se suman los valores a los anteriores
            element.kms = km + payload.kms;
            element.co2 = co2 + payload.co2;
            element.cal = cal + payload.cal;
            element.tiempo = tiempo + payload.minutos;
            element.ingresos = ingresos + payload.ingresos;

            //Actualiza los totales de la campaña

            //Se obtienes los datos totales
            km = camActual.km_total;
            co2 = camActual.co2_total;
            cal = camActual.cal_total;
            tiempo = camActual.tiempo_total;

            //se suman los valores a los totales
            camActual.km_total = km + payload.kms;
            camActual.co2_total = co2 + payload.co2;
            camActual.cal_total = cal + payload.cal;
            camActual.tiempo_total = tiempo + payload.minutos;

            const statusCampanaUser = await req.mongo.db
              .collection("Usuario")
              .updateOne(
                { _id: ObjectID(id), "campana.id": camActId },
                {
                  $set: {
                    kms: element.kms,
                    co2: element.co2,
                    cal: element.cal,
                    tiempo: element.tiempo,
                    ingresos: element.ingresos,
                  },
                }
              );
            const statusCampanaActUser = await req.mongo.db
              .collection("Usuario")
              .updateOne(
                { _id: ObjectID(id), "campana_actual.id": camActId },
                {
                  $set: {
                    kms: element.kms,
                    co2: element.co2,
                    cal: element.cal,
                    tiempo: element.tiempo,
                    ingresos: element.ingresos,
                  },
                }
              );

            const statusUserCampana = await req.mongo.db
              .collection("Campaña")
              .updateOne(
                { _id: camActId, "usuarios.id": ObjectID(id) },
                {
                  $set: {
                    kms: element.kms,
                    co2: element.co2,
                    cal: element.cal,
                    tiempo: element.tiempo,
                    ingresos: element.ingresos,
                  },
                }
              );

            const statusCampana = await req.mongo.db
              .collection("Campaña")
              .updateOne(
                { _id: camActId },
                {
                  $set: {
                    km_total: camActual.km_total,
                    co2_total: camActual.co2_total,
                    cal_total: camActual.cal_total,
                    tiempo_total: camActual.tiempo_total,
                  },
                }
              );

            break;
          }
        }
      } catch (error) {
        console.log(error);
      }

      return "Lista las campañas de un usuario en la app movil";
    },
  });

  //Suscribe una campaña
  server.route({
    method: "PUT",
    path: "/api/movil/usuario/{id}/campana",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        const id = req.params.id;
        const ObjectID = req.mongo.ObjectID;
        const payload = req.payload;
        const usuario = await req.mongo.db
          .collection("Usuario")
          .findOne({ _id: ObjectID(id) });
        let campana = await req.mongo.db
          .collection("Campaña")
          .findOne({ _id: ObjectID(payload.id) });
        // console.log(campana)
        if (campana.cupos != 0) {
          console.log("1");
          console.log("tam", campana.usuarios.length);
          for (let index = 0; index < campana.usuarios.length + 1; index++) {
            console.log("2");
            const element = campana.usuarios[index];
            console.log(element);
            if (element) {
              console.log("3");
              if (element.id.equals(usuario._id)) {
                console.log("4");

                return "Usted ya se encuentra registrado en esta campaña";
                break;
              } else {
                console.log("5");
                let x = campana.cupos;
                let y = x - 1;
                const usCampana = {
                  id: ObjectID(usuario._id),
                  nombre: usuario.nombre,
                  apellido: usuario.apellido,
                  documento: usuario.usuario,
                  email: usuario.email,
                  celular: usuario.celular,
                  banco: usuario.banco,
                  cuenta: usuario.cuenta,
                  kms: 0,
                  cal: 0,
                  co2: 0,
                  tiempo: 0,
                  ingresos: 0,
                };
                payload.id = ObjectID(payload.id);
                payload.kms = 0;
                payload.cal = 0;
                payload.co2 = 0;
                payload.tiempo = 0;
                payload.ingreso = 0;
                const statusUsuario = await req.mongo.db
                  .collection("Usuario")
                  .updateOne(
                    { _id: ObjectID(id) },
                    { $push: { campanas: payload } }
                  );
                const statusCampana = await req.mongo.db
                  .collection("Campaña")
                  .updateOne(
                    { _id: payload.id },
                    { $push: { usuarios: usCampana }, $set: { cupos: y } }
                  );
                // console.log("resultados", statusUsuario, statusCampana)
                return "Suscipción Satisfactoria";
                break;
              }
            } else {
              console.log("6");
              let x = campana.cupos;
              let y = x - 1;
              const usCampana = {
                id: ObjectID(usuario._id),
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                documento: usuario.usuario,
                email: usuario.email,
                celular: usuario.celular,
                banco: usuario.banco,
                cuenta: usuario.cuenta,
                kms: 0,
                cal: 0,
                co2: 0,
                tiempo: 0,
                ingresos: 0,
              };
              payload.id = ObjectID(payload.id);
              payload.kms = 0;
              payload.cal = 0;
              payload.co2 = 0;
              payload.tiempo = 0;
              payload.ingreso = 0;
              const statusUsuario = await req.mongo.db
                .collection("Usuario")
                .updateOne(
                  { _id: ObjectID(id) },
                  { $push: { campanas: payload } }
                );
              const statusCampana = await req.mongo.db
                .collection("Campaña")
                .updateOne(
                  { _id: payload.id },
                  { $push: { usuarios: usCampana }, $set: { cupos: y } }
                );
              // console.log("resultados", statusUsuario, statusCampana)
              return "Suscipción Satisfactoria";
              break;
            }
          }
        } else {
          console.log("7");
          return "Camapaña sin cupos disponibles";
        }
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  //Actualiza la campaña actual
  server.route({
    method: "PUT",
    path: "/api/movil/usuario/{id}/actualcampana",
    options: {
      cors: true,
    },
    handler: async (req, h) => {
      try {
        console.log("hola");
        const id = req.params.id;
        const ObjectID = req.mongo.ObjectID;
        const payload = req.payload;
        console.log(payload);
        payload.id = ObjectID(payload.id);
        const statusUsuario = await req.mongo.db
          .collection("Usuario")
          .updateOne(
            { _id: ObjectID(id) },
            { $set: { campana_actual: payload } }
          );
        console.log(statusUsuario);
        return "Campaña actual actualizada";
      } catch (error) {
        console.log("Error", error);
      }
    },
  });
};
