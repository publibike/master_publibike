"use strict";

const admin = require('../../../model/index').admin;
const user = require('../../../model/index').user;
const company = require('../../../model/index').company;
const Joi = require('joi');
/****************************************
* RUTAS DEL API REST DE LA APLICACIÓN
* **************************************/
//mongo "mongodb+srv://publibike.6sxap.mongodb.net/<dbname>" --username devloto
module.exports.register = async server => {

    /**
     * RUTAS DE ADMINISTRACION DE LA APP
     */
    //Permite el acceso al administrador
    server.route({
        method: 'POST',
        path: '/api/admin/login',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let result;
            try {
                let admini = req.payload;
                // let usuario = parseInt(admini.usuario)

                const data = await req.mongo.db.collection('Administrador').findOne({ "usuario": admini.usuario });

                result = await admin.validateAdmin(data, admini.password);
                console.log(result)
                //Si no existe registro envia mensaje
                if (!result) {
                    // return h.response("Usuario y/o contraseña incorrecta").code(401)
                    return h.view('index', {
                        error: 'Usuario y/o contraseña incorrecta'
                    }, {
                        layout: 'index'
                    })
                }

            } catch (error) {
                console.log(error)
                // return h.response('Problemas validando el usuario').code(500)
                return h.view('index', {
                    error: 'Problemas validando el usuario'
                }, {
                    layout: 'index'
                })
            }

            //Se configura la redireccion y se crea la cookie
            let cookie = req.state.admin;
            console.log('cookie', cookie)
            // if (!cookie) {
            //     cookie = {
            //       usuario: result.usuario,
            //       tipo: result.tipo,
            //       firstVisit: false
            //     }
            //   }

            //   cookie.lastVisit = Date.now()

            // console.log('cookie',cookie)


            if (result.tipo === "super") {
                console.log(result)
                return h.redirect('/admin/dashboard').state('session', cookie);
            } else if (result.tipo === "empresa") {
                return h.redirect(`/admin/empresa/${result.empresaId}`).state('session', cookie);
            }
        }
    });


    //Agrega un administrador SuperUsuario
    server.route({
        method: 'POST',
        path: '/api/admin/createadmin',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let result = {};
            try {
                let ad = req.payload
                // ad = JSON.parse(ad)
                const ObjectID = req.mongo.ObjectID;
                console.log(ad)
                //crea el administrador con el password cifrado
                ad = await admin.create(ad);
                console.log(ad)
                if (ad.tipo == "empresa") {

                    const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(ad.empresaId) });
                    ad.empresa = empresa.nombre;
                    ad.empresaId = empresa._id;
                }

                result = await req.mongo.db.collection('Administrador').insertOne(ad);
                // console.log(result)

            } catch (error) {

                if (error.code == 11000) {
                    // return h.response(`Administrador ${error.keyValue.usuario} ya se encuentra registrado`).code(500)
                    return h.view('registroAdmin', {
                        error: `Administrador ${error.keyValue.usuario} ya se encuentra registrado`
                    })
                }
                console.log(error)
                // return h.response('Problemas creando el administrador').code(500)

            }

            // return h.response(`Administrador creado con ID: ${result.ops[0]._id}`).redirect('/admin/registro')
            return h.view('registroAdmin', {
                success: `Administrador ${result.ops[0].usuario} Registrado`
            });
        }
    });

    //Agrega un administrador empresa
    server.route({
        method: 'POST',
        path: '/api/admin/createadmin/empresa',
        handler: async (req, h) => {
            let result = {};
            try {
                let ad = req.payload
                ad = JSON.parse(ad)

                //consulta el id de la empresa
                const empresa = await req.mongo.db.collection('Empresa').findOne({ "nombre": ad.empresa });

                //agrega el id de la empresa al objeto administrador
                ad.empresaId = empresa._id;

                //crea el administrador con el password cifrado
                ad = await admin.create(ad);

                result = await req.mongo.db.collection('Administrador').insertOne(ad);
                console.log(result.ops[0])

            } catch (error) {

                if (error.code == 11000) {
                    return h.response(`Administrador ${error.keyValue.usuario} ya se encuentra registrado`).code(500)
                }
                console.log(error)
                return h.response('Problemas creando el administrador').code(500)
            }

            return h.response(`Administrador creado con ID: ${result.ops[0]._id}`)

        }
    });

    //Agrega un nuevo usuario
    server.route({
        method: 'POST',
        path: '/api/admin/empresa/{id}/createusuario',
        handler: async (req, h) => {
            try {
                let us = req.payload
                console.log(us)
                const id = req.params.id;
                const ObjectID = req.mongo.ObjectID;
                const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) }, { "_id": 1, "nombre": 1 });

                us = await user.create(us, empresa);

                const status = await req.mongo.db.collection('Usuario').insertOne(us);

                const usEmp = {
                    id: status.insertedId,
                    nombre: us.nombre,
                    usuario: us.usuario,
                    email: us.email,
                    km: us.km_total,
                    co2: us.co2_total,
                    cal: us.cal_total,
                    tiempo: us.tiempo_total
                }

                const statusEmp = await req.mongo.db.collection('Empresa').updateOne({ _id: new ObjectID(id) }, { $push: { usuarios: usEmp } })

                // return h.response(statusEmp.ok).redirect(`/admin/empresa/${id}/registro/usuarios`);
                return h.view('registroUsuarios', {
                    success: `Usario ${status.ops[0].usuario} registrado Satisfactoriamente`,
                    empresa: empresa
                },
                    {
                        layout: 'layoutEmpresa'
                    })
            } catch (error) {
                if (error.code == 11000) {
                    // return h.response(`Usuario ${error.keyValue.usuario} ya se encuentra registrado`).code(500)
                    return h.view('registroUsuarios', {
                        error: `Usuario ${error.keyValue.usuario} ya se encuentra registrado`
                    },
                        {
                            layout: 'layoutEmpresa'
                        })
                }
                console.log(error)
                // return h.response('Problemas creando el usuario').code(500)

            }
        }
    });
    //Agrega una nueva empresa
    server.route({
        method: 'POST',
        path: '/api/admin/createcompany',
        handler: async (req, h) => {
            try {
                let comp = req.payload

                comp = await company.create(comp)

                const status = await req.mongo.db.collection('Empresa').insertOne(comp);

                // return h.response(status.ok).redirect(`/admin/registro/empresa`);
                return h.view('registroEmpresa', {
                    success: `Empresa ${status.ops[0].nombre} Registrada`
                });

            } catch (error) {

                if (error.code == 11000) {
                    // return h.response(`Empresa ${error.keyValue.nombre} ya se encuentra registrada`).code(500)
                    return h.view('registroEmpresa', {
                        error: `Empresa ${error.keyValue.nombre} ya se encuentra registrada`
                    })
                }
                return h.view('registroEmpresa', {
                    error: `Problemas registrando la Empresa, error: ${error} `
                })
                console.log(error)
            }
        }
    });

    //Agrega un nuevo reconocimiento
    server.route({
        method: 'POST',
        path: '/api/admin/empresa/{id}/createreconocimiento',
        handler: async (req, h) => {

            try {

                const payload = req.payload
                const id = req.params.id;
                const ObjectID = req.mongo.ObjectID;

                let rec = payload;
                rec.empresaId = new ObjectID(id);
                console.log(id, rec)
                // rec = JSON.stringify(rec)
                console.log("rec final", rec)
                const status = await req.mongo.db.collection('Reconocimiento').insertOne(rec);

                const recEmp = {
                    id: status.insertedId,
                    categoria: rec.categoria,
                    tipo: rec.tipo_activacion,
                    activacion: rec.activacion
                }
                const result = await req.mongo.db.collection('Empresa').updateOne({ _id: new ObjectID(id) }, { $push: { reconocimientos: recEmp } })

                const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) }, { "_id": 1, "nombre": 1 });
                // return h.response(result.ok).redirect(`/admin/empresa/${id}/registro/reconocimiento`);
                return h.view('registroReconocimiento',{
                    success: `Reconocimiento ${status.ops[0].nombre} registrado satisfactoriamente`,
                    empresa: empresa
                },
                {
                    layout: 'layoutEmpresa'
                })
            } catch (error) {
                if (error.code == 11000) {
                    // return h.response(`Usuario ${error.keyValue.usuario} ya se encuentra registrado`).code(500)
                    return h.view('registroReconocimiento', {
                        error: `Reconocimiento ${error.keyValue.nombre} ya se encuentra registrado`
                    },
                    {
                        layout: 'layoutEmpresa'
                    })
                }
                console.log(error)
            }

        }
    });




    //Obtiene todos los usuarios registrados
    server.route({
        method: 'GET',
        path: '/api/admin/usuarios',
        handler: (req, h) => {

            const usuario = req.mongo.db.collection('Usuario').find({}, { "nombre": 1, "usuario": 1, "email": 1, "empresa": 1 }).toArray();
            return usuario;
        }
    });

    //Obtiene datos por usuario
    server.route({
        method: 'GET',
        path: '/api/admin/usuario/{id}',
        handler: (req, h) => {

            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const usuario = req.mongo.db.collection('Usuario').findOne({ _id: new ObjectID(id) });

            return usuario;
        }
    });

    //Obtiene los datos de todas las empresas
    server.route({
        method: 'GET',
        path: '/api/admin/empresas',
        handler: (req, h) => {

            const empresas = req.mongo.db.collection('Empresa').find().toArray();
            return empresas;
        }
    });

    //Obtiene datos por empresa
    server.route({
        method: 'GET',
        path: '/api/admin/empresa/{id}',
        handler: (req, h) => {

            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const empresa = req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });
            return empresa;
        }
    });


    /*********************************
     * RUTAS PARA LA APLICACION MOVIL
     ********************************/
    //Permite el acceso al usuario
    server.route({
        method: 'POST',
        path: '/Bienestar/api/movil/login',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let result;
            try {
                let us = req.payload;
                console.log(us)
                const usuario = Number.parseInt(us.user, '10')
                console.log(typeof (1010187957))

                // let email = (us.email)

                result = await req.mongo.db.collection('Usuario').findOne({ "usuario": usuario });

                console.log("result", result)
                // result = await user.validateUser(data, us.password);

                //Si no existe registro envia mensaje
                if (!result) {
                    // return h.response("Usuario y/o contraseña incorrecta").code(401)
                    return h.response("Usuario no registrado, comuniquese con su empresa")
                }

            } catch (error) {
                console.log(error)
                // return h.response('Problemas validando el usuario').code(500)
                return h.response("Problemas validando el usuario")
            }
            console.log(result)
            return h.response(result).code(200)

        }
    });


    //Obtiene los datos del usuario 
    server.route({
        method: 'GET',
        path: '/Bienestar/api/movil/usuario/{id}',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            try {
                const id = req.params.id;
                const ObjectID = req.mongo.ObjectID;
    
                const usuario = await req.mongo.db.collection('Usuario').findOne({ _id: new ObjectID(id) });
    
                return usuario;
            } catch (error) {
                console.log(error)
            }
           
        }

    });
    //Obtiene los reconocimientos de un usuario
    server.route({
        method: 'GET',
        path: '/Bienestar/api/movil/usuario/{id}/reconocimientos',
        options: {
            cors: true
        },
        handler: (req, h) => {

            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const reconocimientos = req.mongo.db.collection('Usuario').findOne({ _id: new ObjectID(id) });

            return reconocimientos;
        }
    });
    
    //Obtiene los reconocimientos de una empresa
    server.route({
        method: 'GET',
        path: '/Bienestar/api/movil/empresa/{id}/reconocimientos',
        options: {
            cors: true
        },
        handler: (req, h) => {

            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const reconocimientos = req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });

            return reconocimientos;
        }
    });
    //Obtiene un reconocimiento
    server.route({
        method: 'GET',
        path: '/Bienestar/api/movil/reconocimiento/{id}',
        options: {
            cors: true
        },
        handler: (req, h) => {

            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const usuario = req.mongo.db.collection('Reconocimiento').findOne({ _id: new ObjectID(id) });

            return usuario;
        }
    });

    //Actualiza a un usuario 
    server.route({
        method: 'PUT',
        path: '/Bienestar/api/movil/usuario/{id}',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let status;
            try {
                const id = req.params.id
                const ObjectID = req.mongo.ObjectID;

                const payload = req.payload

                status = await req.mongo.db.collection('Usuario').updateOne({ _id: ObjectID(id) }, { $set: payload });

            } catch (error) {
                return error
            }

            return h.response(status).code(200);
        }
    });

    //Envia el recorrido
    server.route({
        method: 'PUT',
        path: '/Bienestar/api/movil/usuario/{id}/recorrido',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let status, statusUser, reconocimientos, rec;
            try {
                console.log("HOLA")
                const id = req.params.id
                const ObjectID = req.mongo.ObjectID;
                const payload = req.payload;

                status = await req.mongo.db.collection('Usuario').updateOne({ _id: ObjectID(id) }, { $push: { recorridos: payload } });

                // console.log(status)

                let user = await req.mongo.db.collection('Usuario').findOne({ _id: new ObjectID(id) })
                //Se obtienes los datos totales
                let km = user.km_total;
                let co2 = user.co2_total;
                let cal = user.cal_total;
                let tiempo = user.tiempo_total;

                let idEmpresa = user.empresa.id;

                //se suman los valores a los totales
                user.km_total = km + payload.kms;
                user.co2_total = co2 + payload.co2;
                user.cal_total = cal + payload.cal;
                user.tiempo_total = tiempo + payload.minutos;
                //Se actualizan los valores generales del usuario
                statusUser = await req.mongo.db.collection('Usuario').updateOne({ _id: ObjectID(id) }, { $set: user });

                //Logica para actualizar los valores totales de la empresa
                let company = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(idEmpresa) })

                //Se obtienes los datos totales
                let km_C = company.km;
                let co2_C = company.co2;
                let cal_C = company.cal;
                let tiempo_C = company.tiempo;

                //se suman los valores a los totales
                company.km = km_C + payload.kms;
                company.co2 = co2_C + payload.co2;
                company.cal = cal_C + payload.cal;
                company.tiempo = tiempo_C + payload.minutos;

                statusUser = await req.mongo.db.collection('Empresa').updateOne({ _id: ObjectID(idEmpresa) }, { $set: company });

                //Logica para desbloquear reconocimientos
                reconocimientos = await req.mongo.db.collection('Reconocimiento').find({ empresaId: new ObjectID(idEmpresa) }).toArray();
                for (let i = 0; i < reconocimientos.length; i++) {
                    const element = reconocimientos[i];
                    const idGeneral = JSON.stringify(element._id);
                    for (let j = 0; j < user.reconocimientos.length; j++) {
                        const element2 = user.reconocimientos[j];
                        const idParticular = JSON.stringify(element2.id);
                        if (idGeneral === idParticular) {
                            break;
                        }
                        if (element.tipo_activacion == "distancia") {
                            if (user.km_total >= element.activacion) {
                                let userRec = {
                                    categoria: element.categoria,
                                    id: element._id
                                }
                                rec = await req.mongo.db.collection('Usuario').updateOne({ _id: ObjectID(id) }, { $push: { reconocimientos: userRec } });
                            }
                        } else if (element.tipo_activacion == "tiempo") {
                            if (user.tiempo_total >= element.activacion) {
                                let userRec = {
                                    categoria: element.categoria,
                                    id: element._id
                                }
                                rec = await req.mongo.db.collection('Usuario').updateOne({ _id: ObjectID(id) }, { $push: { reconocimientos: userRec } });
                            }
                        }
                    }
                }

            } catch (error) {
                console.log("error", error)
            }
            return h.response(status).code(200)
        }
    });


    //Actualiza el riesgo COVID del usuario
    server.route({
        method: 'PUT',
        path: '/Bienestar/api/movil/usuario/{id}/riesgocovid',
        options: {
            cors: true
        },
        handler: async (req, h) => {
            let status
            try {

                const id = req.params.id
                const ObjectID = req.mongo.ObjectID;
                const payload = req.payload
                console.log(payload)

                status = await req.mongo.db.collection('Usuario').updateOne({ _id: ObjectID(id) }, { $push: { riesgo_COVID: payload } });

            } catch (error) {
                console.log(error)
            }
            console.log(status)
            return h.response(status).code(200)
        }
    });



}