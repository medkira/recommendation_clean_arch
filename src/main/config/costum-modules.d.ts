declare module Express {
  interface Request {
    userId?: string;
    userRole?: UserRole;
  }
}
