const db = require('./conn');

class SurveyData {
    constructor(id, name, rank, title) {
        this.id = id;
        this.name = name;
        this.rank = rank;
        this.title = title;
    }

    static async getAll() {
        try {
            const response = await db.any(`
            SELECT * FROM topic
            INNER JOIN rank ON topic.rank_id = rank.id;
            `)
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getStatus() {
        try {
            const response = await db.any(`
            SELECT rank.title FROM rank;
            `)
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = SurveyData;