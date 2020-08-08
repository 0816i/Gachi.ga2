import { Request, Response, NextFunction } from "express";

const wrapper = (asyncFunction: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await asyncFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export { wrapper };
