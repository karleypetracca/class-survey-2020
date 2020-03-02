const host = "drona.db.elephantsql.com",
    database = "ngiexypr",
    user = "ngiexypr",
    password = "iuNwCDtvV5BanDHt4zIaH_PBnHLJxb2q";

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const pgp = require("pg-promise")({
    query: function(e) {
        console.log("QUERY:", e.query);
    }
});

const db = pgp(options);

module.exports = db;