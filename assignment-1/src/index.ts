import express from "express"
import cors from "cors"
import { publicRoute, randomNumber, fakePerson, stringInfo } from "./router";

const app = express();
const port = process.env.PORT || 5555;
app.set('views', __dirname + `/views`);
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.json())
app.use(cors())

app.use('/', publicRoute)
app.use('/random-number', randomNumber)
app.use('/fake-person', fakePerson)
app.use('/string-info', stringInfo)

app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`);
})