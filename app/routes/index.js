"use strict";

const api = require("./api");

/****************************************
* RUTAS DE VISUALIZACIÓN DE LA APLICACIÓN
* **************************************/

module.exports.register = async server => {
    //registra la ruta api
    await api.register(server);

    /************************************
     * Rutas para el perfil Admin General
     * ***********************************/
    //Ruta de login del admin
    server.route({
        method: "GET",
        path: "/admin",
        handler: async (request, h) => {
            if (request.state.session) {
                if (request.state.session === 'super') {
                    return h.redirect('/admin/dashboard')
                } else if (request.state.session === 'empresa') {
                    return h.redirect('/admin/empresa')
                }
            }
            return h.view('index', null,
                {
                    layout: 'index'
                })
        }
    });

    //Ruta de logout del admin
    server.route({
        method: "GET",
        path: "/admin/logout",
        handler: async (request, h) => {
            return h.redirect('/admin').unstate('admin')
        }
    });

    //Ruta que muestra el home del administrador o dashboard
    server.route({
        method: "GET",
        path: "/admin/dashboard",
        handler: async (request, h) => {

            const usuarios = await request.mongo.db.collection('Usuario').find({}).toArray();
            const empresas = await request.mongo.db.collection('Empresa').find({}).toArray();

            return h.view('dashboard', {
                title: 'Bienvenido',
                admin: request.state.session,
                usuarios: usuarios,
                empresas: empresas
            })
        }
    });

    //Ruta para registrar administrador
    server.route({
        method: "GET",
        path: "/admin/registro",
        handler: async (request, h) => {

            const empresas = await request.mongo.db.collection('Empresa').find({}).toArray();
            return h.view('registroAdmin', {
                title: 'Registrar Administrador',
                empresas: empresas
            })
        }
    });

    //Ruta para registrar empresa
    server.route({
        method: "GET",
        path: "/admin/registro/empresa",
        handler: async (request, h) => {
            return h.view('registroEmpresa', {
                title: 'Registrar Empresa'
            })
        }
    });



    //Ruta que muestra el home del administrador o dashboard
    server.route({
        method: "GET",
        path: "/admin/usuarios",
        handler: async (request, h) => {
            const usuarios = await request.mongo.db.collection('Usuario').find({}).toArray();
            return h.view('usuarios', {
                title: 'Usuarios Registrados',
                usuarios: usuarios
            })
        }
    });

    //Ruta que muestra las empresas registradas
    server.route({
        method: "GET",
        path: "/admin/empresas",
        handler: async (request, h) => {
            try {

                const empresas = await request.mongo.db.collection('Empresa').find({}).toArray();
                return h.view('empresas', {
                    title: 'Empresas Registradas',
                    empresa: empresas
                })
            } catch (error) {
                console.log(error)
            }
        }
    });

    //Ruta que muestra un usuario
    server.route({
        method: "GET",
        path: "/admin/usuario/{id}",
        handler: async (req, h) => {
            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const usuario = await req.mongo.db.collection('Usuario').findOne({ _id: new ObjectID(id) });
            const arrayRecorridos = Object.values(usuario.recorridos);
            const tamRecorrido = arrayRecorridos.length;
            const ultRecorrido = arrayRecorridos[tamRecorrido - 1];
            ultRecorrido.minutos=ultRecorrido.minutos.toFixed(1)
            ultRecorrido.kms=ultRecorrido.kms.toFixed(1)
            ultRecorrido.cal=ultRecorrido.cal.toFixed(1)
            ultRecorrido.co2=ultRecorrido.co2.toFixed(1)
            usuario.tiempo_total = usuario.tiempo_total.toFixed(2)
            usuario.co2_total = usuario.co2_total.toFixed(2)
            usuario.cal_total = usuario.cal_total.toFixed(2)
            usuario.km_total = usuario.km_total.toFixed(2)


            return h.view('usuario', {
                title: `Usuario: ${usuario.usuario}`,
                usuario: usuario,
                ultRecorrido: ultRecorrido
            })
        }
    });


    //Ruta que muestra un usuario
    server.route({
        method: "GET",
        path: "/admin/empresadetalle/{id}",
        handler: async (req, h) => {
            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });
            const total = await req.mongo.db.collection('Empresa').aggregate([{ $group: { _id: new ObjectID(id), km: { $sum: "usuarios.km" }, cal: { $sum: "usuarios.cal" }, co2: { $sum: "usuarios.co2" } } }]);

            empresa.tiempo = empresa.tiempo.toFixed(2)
            empresa.co2 = empresa.co2.toFixed(2)
            empresa.cal = empresa.cal.toFixed(2)
            empresa.km = empresa.km.toFixed(2)
            return h.view('dashboardEmpresaSuper', {
                title: `Empresa: ${empresa.nombre}`,
                empresa: empresa
            })
        }
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
            const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });

            return h.view('dashboardEmpresa', {
                admin: req.state.admin,
                empresa: empresa
            },
                {
                    layout: 'layoutEmpresa'
                })
        }
    });

    //Ruta que muestra los usuarios de una empresa
    server.route({
        method: "GET",
        path: "/admin/empresa/{id}/usuarios",
        handler: async (req, h) => {
            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;
            const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });
            const usuarios = await req.mongo.db.collection('Usuario').find({ "empresa.id": new ObjectID(id) }).toArray();

            return h.view('usuariosEmpresa', {
                admin: req.state.admin,
                empresa: empresa,
                usuarios: usuarios
            },
                {
                    layout: 'layoutEmpresa'
                })
        }
    });

    //Ruta que permite ver el registro de usuarios
    server.route({
        method: "GET",
        path: "/admin/empresa/{id}/registro/usuarios",
        handler: async (req, h) => {
            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;
            const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });

            return h.view('registroUsuarios', {
                admin: req.state.admin,
                empresa: empresa
            },
                {
                    layout: 'layoutEmpresa'
                })
        }
    });

    //Ruta que permite ver el registro de reconocimientos
    server.route({
        method: "GET",
        path: "/admin/empresa/{id}/registro/reconocimiento",
        handler: async (req, h) => {
            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;
            const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(id) });

            return h.view('registroReconocimiento', {
                admin: req.state.admin,
                empresa: empresa
            },
                {
                    layout: 'layoutEmpresa'
                })
        }
    });

    //Ruta que muestra un usuario
    server.route({
        method: "GET",
        path: "/admin/empresa/usuario/{id}",
        handler: async (req, h) => {
            const id = req.params.id;
            const ObjectID = req.mongo.ObjectID;

            const usuario = await req.mongo.db.collection('Usuario').findOne({ _id: new ObjectID(id) });

            const empresa = await req.mongo.db.collection('Empresa').findOne({ _id: new ObjectID(usuario.empresa.id) })

            const arrayRecorridos = Object.values(usuario.recorridos);
            const tamRecorrido = arrayRecorridos.length;
            const ultRecorrido = arrayRecorridos[tamRecorrido - 1];

            return h.view('usuario', {
                title: req.state.admin,
                usuario: usuario,
                empresa: empresa,
                ultRecorrido: ultRecorrido

            },
                {
                    layout: 'layoutEmpresa'
                })
        }
    });

    //Ruta que redirecciona al index
    server.route({
        method: "GET",
        path: "/",
        handler: async (request, h) => {
            return h.redirect('/admin')
        }
    });
    //Ruta que permite cargar los diferentes assets de las vistas
    server.route({
        method: "GET",
        path: "/assets/{param*}",
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    });
}