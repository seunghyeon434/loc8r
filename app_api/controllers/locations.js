const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsReadOne = async (req, res) => {
    try {
        const location = await Loc.findById(req.params.locationid).exec();
        if (!location) {
            return res
                .status(404)
                .json({ "message": "location not found" });
        }
        return res
            .status(200)
            .json(location);
    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

const locationsListByDistance = (req, res) => {};
const locationsCreate = (req, res) => {};
const locationsUpdateOne = (req, res) => {};
const locationsDeleteOne = (req, res) => {};

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};