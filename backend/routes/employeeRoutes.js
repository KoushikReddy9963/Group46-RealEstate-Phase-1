import express from 'express';
import { verifyJWT, roleCheck } from '../middlewares/auth.js';
import { 
    getAdvertisements,
    addAdvertisement,
    editAdvertisement,
    deleteAdvertisement,
    getAdvertisementRequests,
    updateAdvertisementRequest,
    deleteAdvertisementRequest,
    getApprovedAdvertisements
} from '../controllers/EmployeeController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Advertisement Management Routes
router.get('/advertisements', verifyJWT, roleCheck(['employee']), getAdvertisements);
router.post('/advertisement', verifyJWT, roleCheck(['employee']), upload.single('image'), addAdvertisement);
router.put('/advertisement/:id', verifyJWT, roleCheck(['employee']), upload.single('image'), editAdvertisement);
router.delete('/advertisement/:id', verifyJWT, roleCheck(['employee']), deleteAdvertisement);

// Advertisement Request Routes
router.get('/advertisement-requests', verifyJWT, roleCheck(['employee']), getAdvertisementRequests);
router.patch('/advertisement-request/status', verifyJWT, roleCheck(['employee']), updateAdvertisementRequest);
router.delete('/advertisement-request/:id', verifyJWT, roleCheck(['employee']), deleteAdvertisementRequest);
router.get('/approved-advertisements', verifyJWT, roleCheck(['employee']), getApprovedAdvertisements);

export default router;