import { Request, Response } from "express";
import { faker } from '@faker-js/faker';

const genarateFakePerson = (req: Request, res: Response) => {
  if (!req.body.generatePerson) {
    return res.status(400).json({
      error: true,
      message: "generatePerson is a required value in the payload"
    })
  }

  if (!Array.isArray(req.body.generatePerson)) {
    return res.status(400).json({
      error: true,
      message: `generatePerson need to be an array of string. like ['firstName', 'lastName', 'avatar', 'address', 'email','age']`
    })
  }
  const selectedProperties = req.body.generatePerson as string[]

  const genarateFakeUser = {
    firstName: selectedProperties.includes("firstName") ? faker.person.firstName() : undefined,
    lastName: selectedProperties.includes("lastName") ? faker.person.lastName() : undefined,
    email: selectedProperties.includes("email") ? faker.internet.email() : undefined,
    avatar: selectedProperties.includes("avatar") ? faker.internet.avatar() : undefined,
    age: selectedProperties.includes("age") ? faker.number
      .int({
        'min': 10,
        'max': 90
      }) : undefined,
    address: selectedProperties.includes("address") ? faker.location.streetAddress() : undefined
  }
  res.json({ success: true, fakeUser: genarateFakeUser })

}

export default genarateFakePerson