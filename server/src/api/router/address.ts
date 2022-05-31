import { Router } from 'express';
import AddressController from '../controller/address';

const AddressRouter = Router();

AddressRouter.get('/:id', AddressController.getAddress);
AddressRouter.post('/', AddressController.createAddress);
AddressRouter.put('/:id', AddressController.updateAddress);

export default AddressRouter;
