import { Router } from 'express';
import PageController from '../controller/page';

const PageRouter = Router();

PageRouter.get('/:id', PageController.getPage);
PageRouter.post('/', PageController.createPage);
PageRouter.put('/:id', PageController.updatePage);

export default PageRouter;
