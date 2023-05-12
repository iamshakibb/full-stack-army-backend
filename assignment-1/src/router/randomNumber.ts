import express from 'express'
import genarateRandomNumber from '../controller/genarateRandomNumber';

const randomNumber = express.Router();


randomNumber.route('/').get(genarateRandomNumber)

export default randomNumber