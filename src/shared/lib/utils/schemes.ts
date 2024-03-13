import { z } from 'zod';

export const phoneSchema = z.string().regex(/[()+0123456789-]+/);
