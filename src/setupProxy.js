const { createProxyMiddleware } = require("http-proxy-middleware");

const host = "localhost";
const port = "3000";

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
