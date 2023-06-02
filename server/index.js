const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;
const router = express.Router();
const route = require('./routes/routes');
const cors = require('cors');
const { keyverification } = require('./middleware/keyverification');
require('dotenv').config()
app.use(cors());
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://Ayush:${process.env.MONGO_PASS}@cluster0.fohsg.mongodb.net/${process.env.DB_NAME}`, { useNewUrlParser: true })
    .then(() => console.log("db connected"))
    .catch((err)=>console.log(err));


app.use("/api/route", route);


app.use(keyverification);

app.get('/get-data', keyverification, (req, res) => {
    const { schema } = req.query;
    console.log(req.query);

    if (!schema) {
        return res.status(400).json({ error: 'Missing data schema parameter' });
    }

    try {
        const data = generateMockData(JSON.parse(schema));
        res.json(data);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data schema' });
    }
});

function generateMockData(schema) {
    const data = {};

    for (const key in schema) {
        if (schema.hasOwnProperty(key)) {

            const dataType = schema[key];
            let value = {};

            switch (key) {
                case 'name':
                    value = faker.person.fullName();
                    break;
                case 'Person_desc':
                    value.bio = faker.person.bio();
                    value.gender = faker.person.gender();
                    value.Job = faker.person.jobTitle();
                    value.Job_type = faker.person.jobType();
                    break;
                case 'firstname':
                    value = faker.person.firstName();
                    break;
                case 'lastname':
                    value = faker.person.lastName();
                    break;
                case 'age':
                    value = faker.number.int(110);
                    break;
                case 'id':
                    value = faker.string.uuid();
                    break;

                case 'password':
                    value = faker.internet.password();
                    break;
                case 'name':
                    value = faker.person.fullName();
                    break;
                case 'email':
                    value = faker.internet.email();
                    break;
                case 'username':
                    value = faker.internet.userName();
                    break;
                case 'company':
                    value = faker.company.name();
                    break;
                case 'commerce':
                    value.product_name = faker.commerce.productName();
                    value.product_price = faker.commerce.price();
                    value.product_description = faker.commerce.productDescription();
                    value.product_material = faker.commerce.productMaterial();
                    break;
                case 'animal':
                    // var dataname = schema[key];
                    // console.log(dataname);
                    value = faker.animal.dog();

                    break;
                case 'airline':
                    value.airline = faker.airline.airline();
                    value.airplane = faker.airline.airplane();
                    value.aircraft = faker.airline.aircraftType();
                    value.airport = faker.airline.airport();
                    break;
                case 'location':
                    value.city = faker.location.city();
                    value.country = faker.location.country();
                    value.country_Code = faker.location.countryCode();
                    break;
                case 'vehicle':
                    value.vehicle = faker.vehicle.vehicle();
                    value.vehicle_model = faker.vehicle.model();
                    value.vehicle_manufacturer = faker.vehicle.manufacturer();
                    value.vehicle_fuel = faker.vehicle.fuel();
                    break;
                case 'music':
                    value.song_name = faker.music.songName();
                    value.genre = faker.internet.genre();

                    break;
                case 'web':
                    value.domain = faker.internet.domainName();
                    value.ip = faker.internet.ip();
                    break;
                case 'finance':
                    value.currency_name = faker.finance.currencyName();
                    value.currency_symbol = faker.finance.currencySymbol();
                    value.account_name = faker.finance.accountName();
                    value.account_number = faker.finance.accountNumber();
                    value.amount = faker.finance.amount();
                    break;
                case 'phone':
                    value.phone_number = faker.phone.number();
                    value.phone_imei = faker.phone.imei();
                    break;
                case 'lorem':
                    value.paragraph = faker.lorem.paragraph();
                    value.sentence = faker.lorem.sentence();
                    break;
                case 'date':
                    value.month = faker.date.month();
                    value.weekday = faker.date.weekday();
                    value.date = faker.date.recent();
                    break;



                default:
                    value = null;
            }

            data[key] = value;
        }
    }

    return data;
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
