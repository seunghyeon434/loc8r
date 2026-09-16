/* GET 'home' page */
const homelist = (req, res) => {
    res.render('index', { title: 'Home', student : '2024810018 김승현'});
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info', student : '2024810018 김승현'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add review', student : '2024810018 김승현'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
}