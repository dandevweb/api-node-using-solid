import 'dotenv/config'
import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  // DB_HOST: z.string().optional(),
  // DB_PORT: z.number().optional(),
  // DB_USERNAME: z.string().optional(),
  // DB_PASSWORD: z.string().optional(),
  // DB_DATABASE: z.string().optional(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data
