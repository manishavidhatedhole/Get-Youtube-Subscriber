const mongoose = require('mongoose')
const subscriberModel = require('./model/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL ="mongodb+srv://manishavidhatedhole:riyu2117@cluster0.pv3jgpk.mongodb.net/";
mongoose.connect(DATABASE_URL);
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Contion staviled with mongo atlas...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()