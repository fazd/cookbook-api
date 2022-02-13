interface Timestamps {
  createdAt: string;
  modifiedAt: string;
}

interface Pagination {
  page?: string;
  limit?: string;
  orderBy?: string;
  sortBy?: string;
}

interface MetadataPagination {
  limit: number;
  total: number;
  page: number;
  pages: number;
  sortBy: string;
  orderBy: string;
}

type PaginatedData<T> = {
  data: T[];
  metadata: MetadataPagination;
};
