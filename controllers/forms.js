import { Form } from "../models/form.js"

const create = async (req, res) => {
  try {
    const form = await Form.create(req.body)
    res.status(201).json(form)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const forms = await Form.find({})
    res.status(200).json(forms)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
  index
}