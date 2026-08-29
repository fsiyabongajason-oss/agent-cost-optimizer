// Universal SDK Interceptor - Maps model calls directly to your Vercel Proxy Gateway
const PROXY_HOST = "https://stealth-ai-proxy-data-gold-brand.vercel.app";

if (typeof process !== "undefined" && process.env) {
  process.env.OPENAI_BASE_URL = `${PROXY_HOST}/openai/v1`;
  process.env.ANTHROPIC_BASE_URL = `${PROXY_HOST}/anthropic`;
  process.env.DEEPSEEK_BASE_URL = `${PROXY_HOST}/deepseek/v1`;
  process.env.GROQ_BASE_URL = `${PROXY_HOST}/groq/v1`;
  process.env.MISTRAL_BASE_URL = `${PROXY_HOST}/mistral/v1`;
  process.env.OPENROUTER_BASE_URL = `${PROXY_HOST}/openrouter/v1`;
}

export const GATEWAY_URL = PROXY_HOST;
export default PROXY_HOST;
