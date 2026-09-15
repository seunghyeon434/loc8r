/* GET homepage */
const index = (req, res) => {
    res.render('index', { title : 'Express', student : '2024810018 김승현'})
};

module.exports = {
    index
};