const Data = require("../models/dataModel")

const getDatas = (req, res) => {
  Data.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
}

const getOne = (req, res) => {
  Data.findOne({ _id: req.params.id })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
}

const addDatas = (req, res) => {
  const datas = new Data(req.body)

  datas
    .save()
    .then(() => res.status(201).json({ message: "Velo added" }))
    .catch(error => res.status(404).json({ error }))
}

const updateData = (req, res) => {
  Data.updateOne(
    {
      _id: req.params.id
    },
    {
      $set: {
        name: req.body.name,
        description: req.body.description
      }
    }
  )
    .then(() => res.status(201).json({ message: "Velo updated" }))
    .catch(err => console.error(err))
}

const deleteDatas = (req, res) => {
  Data.deleteOne({
    _id: req.params.id
  })
    .then(() => res.status(201).json({ message: "Velo deleted" }))
    .catch(err => console.error(err))
}

module.exports = { getDatas, addDatas, updateData, deleteDatas, getOne }
