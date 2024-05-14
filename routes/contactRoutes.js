const express=require('express');
const {
    getContacts,
    createContact,
    deleteContact,
    editContact,
    getContact
}=require('../controllers/contactcontroller');
const router=express.Router();

router.route('/').get(getContacts)
router.route('/:id').delete(deleteContact)
router.route('/').post(createContact)
router.route('/:id').put(editContact)
router.route('/:id').get(getContact)




module.exports=router;