import { Request, Response } from "express"

const genarateRandomNumber = (req:Request, res: Response) => {
  const { start, end } = req.query
  if (start && end) {
    const genarateRandomNumber = Math.floor(Math.random() * (Number(end) - Number(start)) + Number(start))
    res.json({
      success: true,
      randomNumber: genarateRandomNumber
    })
  } else {
    res.status(400).json({
      error: true,
      message: "Did not get start and end as query parametar."
    })
  }
}

export default genarateRandomNumber