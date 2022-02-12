interface ErrorItem {
  code: string;
  message: string;
  details?: string;
  status?: number;
  isOperational?: boolean;
  level?: string;
}
