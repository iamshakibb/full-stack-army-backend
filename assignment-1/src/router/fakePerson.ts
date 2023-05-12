import express from 'express'
import genarateFakePerson from '../controller/genarateFakePerson';

const fakePerson = express.Router();


fakePerson.route('/').post(genarateFakePerson)

export default fakePerson