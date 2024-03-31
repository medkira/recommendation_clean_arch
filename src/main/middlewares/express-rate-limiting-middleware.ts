
import setRateLimit from "express-rate-limit";



export const rateLimitMiddleware = setRateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: "You have exceeded your 3 requests per minute limit.",
    headers: false,
    skipFailedRequests: true,
  });


