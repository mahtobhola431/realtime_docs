const Document = require("../models/document.model")

exports.createDocument = async () => {

  const doc = await Document.create({
    title: "Untitled Document"
  })

  return doc
}

exports.getDocument = async (id) => {

  const doc = await Document.findById(id)

  return doc
}

exports.updateDocument = async (id, content) => {

  const doc = await Document.findByIdAndUpdate(
    id,
    { content },
    { new: true }
  )

  return doc
}

exports.getAllDocuments = async () => {

  const docs = await Document
    .find()
    .sort({ updatedAt: -1 })

  return docs
}

exports.getAllDocuments = async (req, res) => {

  const docs = await documentService.getAllDocuments()

  res.json(docs)
}