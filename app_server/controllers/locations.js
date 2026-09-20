/* GET 'home' page */
const homelist = (req, res) => {
    res.render('location-list', { title: 'Home', pageHeader: 'Starcups'});
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info', pageHeader: 'Starcups'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
}