/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import Address from '../../db/models/address';
import { NewAddress } from '../../types/address';

const getAddress: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { userId } = req.params as { userId: string };
    const address = await Address.findOne({ where: { userId } });
    if (address) {
      return res.json(address);
    }

    res.status(404).json({ error: 'Address not found' });
  } catch (error) {
    next(error);
  }
};

const createAddress: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const body = req.body as NewAddress;

    const address = await Address.create({
      userId: body.userId,
      email: body.email,
      address: body.address,
      city: body.city,
      postcode: body.postcode,
    });

    res.json(address);
  } catch (error) {
    next(error);
  }
};

const updateAddress: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const body = req.body as NewAddress;

    const address = await Address.update(
      {
        email: body.email,
        address: body.address,
        city: body.city,
        postcode: body.postcode,
      },
      {
        where: {
          userId: body.userId,
        },
      }
    );

    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }

    res.json(address);
  } catch (error) {
    next(error);
  }
};

export default {
  getAddress,
  createAddress,
  updateAddress,
};
