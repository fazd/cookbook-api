import { configuration } from '../config';

const { pagination } = configuration;

export const getPaginationParams = (query: Pagination) => {
  const limit = parseInt(query.limit ?? pagination.limit);
  const page = parseInt(query.page ?? pagination.page);
  const skip = (page - 1) * limit;
  const orderBy = query.orderBy ?? pagination.orderBy;
  const sortBy = query.sortBy ?? pagination.sortBy;
  return {
    page,
    limit,
    skip,
    orderBy,
    sortBy,
  };
};

export const sortCompactToStr = (sortBy: string, orderBy: string) => {
  const dir = orderBy === pagination.orderBy ? '-' : '';
  return `${dir}${sortBy}`;
};
