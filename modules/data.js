const fs = require('fs')

const DataHandler = {
    init: function () {
        // If "data" folder doesnt exist, setup "data"
        // data
        // - user
        // - session
        // --- [sessionId]
        // - blog
        // --- [blog_id].meta
        // --- [blog_id].content
        if (!fs.existsSync('../data')) {

        }

        
    },
    getSession: function (cookie) {

    }
}

module.exports = DataHandler