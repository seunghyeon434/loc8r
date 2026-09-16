/* GET 'about' page */
const about = (req, res) => {
    res.render('index', { title : 'About', student : '2024810018 김승현'})
};

module.exports = {
    about
};