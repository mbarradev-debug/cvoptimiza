import { z } from 'zod';

const serverSchema = z.object({
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY es requerida'),
});

// Variables publicas (prefijo NEXT_PUBLIC_) se agregan aqui cuando se
// necesiten. Cada una debe referenciarse como `process.env.NEXT_PUBLIC_X`
// de forma literal (no dinamica) para que Next.js la inlinee en el bundle
// del cliente en build time.
const clientSchema = z.object({});

const envSchema = serverSchema.merge(clientSchema);

function loadEnv() {
  const parsed = envSchema.safeParse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  });

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');
    throw new Error(`Variables de entorno invalidas:\n${details}`);
  }

  return parsed.data;
}

export const env = loadEnv();
