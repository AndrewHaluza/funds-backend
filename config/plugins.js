module.exports = ({ env }) => {
  const isProduction = env("APP_ENV", "") === "production";

  return {
    "users-permissions": {
      enabled: true,
      config: {
        jwt: {
          expiresIn: "7d",
        },
      },
    },
    email: {
      enabled: true,
      config: {
        provider: "strapi-provider-email-smtp",
        providerOptions: {
          host: isProduction
            ? env("SMTP_HOST", "localhost")
            : env("DEV_SMTP_HOST", "localhost"),
          port: isProduction
            ? env("SMTP_PORT", 5502)
            : env("DEV_SMTP_PORT", 5502),
          secure: env("SMTP_SECURE", false) === "true",
          username: env("SMTP_USERNAME"),
          password: env("SMTP_PASSWORD"),
        },
        settings: {
          defaultFrom: isProduction
            ? env("SMTP_DEFAULT_FROM")
            : "test-local@smtp4dev.com",
          defaultReplyTo: isProduction
            ? env("SMTP_DEFAULT_REPLY")
            : "test-local@smtp4dev.com",
        },
      },
    },
    "authzero-admin-login": {
      enabled: true,
      resolve: "./src/plugins/authzero-admin-login",
    },
  };
};
