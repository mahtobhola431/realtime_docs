// const documentService = require("../services/document.service")

// exports.createDocument = async (req, res) => {

//   const doc = await documentService.createDocument()

//   res.json(doc)
// }

// exports.getDocument = async (req, res) => {

//   const doc = await documentService.getDocument(req.params.id)

//   res.json(doc)
// }

// exports.updateDocument = async (req, res) => {

//   const { content } = req.body

//   const doc = await documentService.updateDocument(
//     req.params.id,
//     content
//   )

//   res.json(doc)
// }

const documentService = require("../services/document.service")

exports.createDocument = async (req, res) => {

  const doc = await documentService.createDocument()

  console.log("Document created:", doc._id)

  res.json(doc)
}

exports.getDocument = async (req, res) => {

  const doc = await documentService.getDocument(req.params.id)

  console.log("Document fetched:", req.params.id)

  res.json(doc)
}

exports.updateDocument = async (req, res) => {

  const { content } = req.body

  const doc = await documentService.updateDocument(
    req.params.id,
    content
  )

  console.log("Document updated:", req.params.id)

  res.json(doc)
}