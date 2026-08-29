// Auto-routes all outgoing model SDK calls through your Vercel Proxy
const PROXY_HOST = "https://your-proxy.vercel.app";

if (typeof process !== "undefined" && process.env) {
  process.env.OPENAI_BASE_URL = `${PROXY_HOST}/openai/v1`;
  process.env.ANTHROPIC_BASE_URL = `${PROXY_HOST}/anthropic`;
  process.env.DEEPSEEK_BASE_URL = `${PROXY_HOST}/deepseek/v1`;
  process.env.GROQ_BASE_URL = `${PROXY_HOST}/groq/v1`;
}
