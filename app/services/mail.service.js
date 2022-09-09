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
    console.log(data)
    sgMail.send({
        to: to,
        from: 'noreply@uflou.com.co',
        templateId: 'd-12ac3d4e3992424c94220b6ca09b5fa6',
        dynamicTemplateData: data
    }).then((response) => { console.log(response[0].statusCode); console.log(response[0].headers); }).catch((error) => { console.error(error) })
}