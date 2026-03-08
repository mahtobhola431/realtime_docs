module.exports = (io, socket) => {

  socket.on("join-document", (documentId) => {

    socket.join(documentId)

    console.log("User joined:", documentId)

  })

  socket.on("edit-document", (data) => {

    socket.to(data.documentId).emit("document-updated", data)

  })

}