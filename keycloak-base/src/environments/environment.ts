export const environment = {
  app: {
    info: {
      version: '0.0.1',
    },
    keycloak: {
      config: {
        url: 'http://localhost:8080',
        realm: 'master',
        clientId: 'alm-client',
      },
    },
    graphql: {
      alm: {
        uri: 'http://localhost:3000/graphql',
        ws: '',
      },
    },
  },
};
