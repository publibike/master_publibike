const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API)


module.exports.sendRegisterMail = (to, data) => {
    sgMail.send({
        to: to,
        from: 'noreply@uflou.com.co',
        templateId: 'd-f1387881cf584f8fad6f6e5c9f0b2575',
        dynamicTemplateData: data
    }).then((response) => { console.log(response[0].statusCode); console.log(response[0].headers); }).catch((error) => { console.error(error) })
}

module.exports.sendPasswordReset = (to, data) => {
    sgMail.send({
        to: to,
        from: 'noreply@uflou.com.co',
        templateId: 'd-113e3fdd8b9e4916b7227670f2dde73f',
        dynamicTemplateData: data
    }).then((response) => { console.log(response[0].statusCode); console.log(response[0].headers); }).catch((error) => { console.error(error) })
}