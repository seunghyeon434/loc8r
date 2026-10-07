const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsReadOne = async (req, res) => {
    try {
        const location = await Loc.findById(req.params.locationid).exec();
        res.status(200).json(location);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred.' });
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