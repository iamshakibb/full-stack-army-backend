import express from 'express'
import stringInformation from '../controller/stringInformation';

const fakePerson = express.Router();


fakePerson.route('/').post(stringInformation)

export default fakePerson