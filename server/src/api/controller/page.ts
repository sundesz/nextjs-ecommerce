/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import Page from '../../db/models/pages';
import { NewPage } from '../../types/page';

const getPage: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: pageId } = req.params as { id: string };
    const page = await Page.findByPk(pageId);
    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.json(page);
  } catch (error) {
    next(error);
  }
};

const createPage: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const body = req.body as NewPage;
    const page = await Page.create({
      name: body.name,
      content: body.content,
      status: body.status,
    });

    res.json(page);
  } catch (error) {
    next(error);
  }
};

const updatePage: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: pageId } = req.params as { id: string };
    const body = req.body as NewPage;

    const page = await Page.update(
      {
        name: body.name,
        content: body.content,
        status: body.status,
      },
      { where: { pageId } }
    );

    res.json(page);
  } catch (error) {
    next(error);
  }
};

export default {
  getPage,
  createPage,
  updatePage,
};
