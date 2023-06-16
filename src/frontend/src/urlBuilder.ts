import authConfig from "./auth_config.json";

export function urlBuilder() {
  const authUrlBuilder = () => {
    const domain = authConfig.domain;
    const clientId = authConfig.clientId;
    const scopes = authConfig.scopes;
    const redirectUrl = authConfig.redirectUrl;

    return `https://${domain}/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUrl}`;
  };

  const logoutUrlBuilder = () => {
    const domain = authConfig.domain;
    const clientId = authConfig.clientId;
    const logoutRedirectUrl = authConfig.logoutRedirectUrl;

    return `https://${domain}/v2/logout?client_id=${clientId}&returnTo=${logoutRedirectUrl}`;
  };

  return { authUrlBuilder, logoutUrlBuilder };
}
