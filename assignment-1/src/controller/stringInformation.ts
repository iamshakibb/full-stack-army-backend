import { Request, Response } from "express"

const stringInformation = (req: Request, res: Response) => {
  const { string } = req.body

  if (!string) {
    return res.status(400).json({
      error: true,
      message: "string property need to be type string in the payload."
    })
  }
  if (string && typeof string === "string") {
    const numberOfLetter = string.match(/[a-zA-Z]/g)
    const numberOfNumber = string.match(/[0-9]/g)
    const numberOfSymbols = string.match(/[\W_]/g)
    res.json({
      success: true,
      stringInfo: {
        numberOfLetter: numberOfLetter?.length || 0,
        numberOfNumber: numberOfNumber?.length || 0,
        numberOfSymbols: numberOfSymbols?.length || 0
      }
    })
  } else {
    return res.status(400).json({
      error: true,
      message: "Did not get string as a payload."
    })
  }
}

export default stringInformation