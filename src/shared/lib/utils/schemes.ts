import { z } from 'zod';

export const phoneSchema = z.string().regex(/[()+0123456789-]+/);

export const emailSchema = z.string().email();
