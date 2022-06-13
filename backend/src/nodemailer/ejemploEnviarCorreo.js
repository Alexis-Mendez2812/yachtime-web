const transporter =  require('./nodemailer')


export const enviarMail = () => {

    await transporter.sendMail({
        from: "prueba <yachtimeapp.com>",
        // to: `${email}`,
        subject: "prueba",
        html: `<p>prueba</p>`,
    });
}