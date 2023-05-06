
const { adduser, updateuser, deleteuser, searchUsers, searchUsersid, getAllUsers, getAllUserswithp } = require('./user.controller')


const router = require('express').Router();


router.post('/adduser', adduser);
router.patch('/updateuser' , updateuser);
router.delete('/deleteuser', deleteuser);
router.get('/searchUsers', searchUsers);
router.get('/searchUserid', searchUsersid);
router.get('/getAllUsers', getAllUsers);
router.get('/getAllUserswithp', getAllUserswithp);



module.exports = router; 