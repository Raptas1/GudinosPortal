const {connection} = require("./sql_connection");

class PortalDAO {
    constructor() {

    }

    getUser(username, callback) {
        const query = "SELECT * FROM credentials WHERE username = ?";
        connection.query(query, [username], (error, results) => {
            if(error) {
                callback(error);
            } else {
                callback(null, results[0])
            }

        })
    }
}

module.exports = {PortalDAO};