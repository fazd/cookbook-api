import { Schema } from 'joi';

export type DtoType = {
  body?: Schema;
  params?: Schema;
  query?: Schema;
};
