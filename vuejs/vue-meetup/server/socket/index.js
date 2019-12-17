module.exports = function (io) {
    io.on('connection', function(socket) {
        console.log('connection has been established')

        socket.on('meetup/postSave', function(post) {
            io.emit('meetup/postPublished', post)
        })
    })
}