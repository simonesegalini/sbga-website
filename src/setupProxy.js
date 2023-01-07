const { createProxyMiddleware } = require("http-proxy-middleware");

const host = "93.42.250.155";
const port = "8000";

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/", {
      target: `http://${host}:${port}`,
      changeOrigin: true,
      timeout: 3600000,
      proxyTimeout: 3600000,
      secure: false,
      logLevel: "debug",
    })
  );
};
