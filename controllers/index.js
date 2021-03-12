const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
//const dashboardRoutes = require('./dashboard-routes.js');

//router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);





router.use('/', homeRoutes);

module.exports = router;
