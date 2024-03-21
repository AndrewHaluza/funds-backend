# Strapi plugin authzero-admin-login

A quick description of authzero-admin-login.

`config/plugins.js`

```
...
  "authzero-admin-login": {
      enabled: true,
      resolve: "./src/plugins/authzero-admin-login",
    },
...
```

Plugin configuration:
 - Choose default admin role
 - Enable plugin
 - Copy callback url and paste into [Strapi Auth0 Provider Config](http://localhost:1337admin/settings/users-permissions/providers)
