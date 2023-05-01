const { request, response } = require("express");

// Mongoose Schemas
const Sample = require("./Flights.schema");

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const sample = async (req = request, res = response) => {
    // Returns list of Sample objects under "result" field

    try {
        // Your Code Goes Here!!!!
        
        // Return query result
        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

module.exports = {
    sample,
};