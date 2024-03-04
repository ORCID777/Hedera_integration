export class MirrorNodeClient {
  url;
  constructor(networkConfig) {
    this.url = networkConfig.mirrorNodeUrl;
  }

  async getAccountInfo(accountId) {
    const accountInfo = await fetch(
      `${this.url}/api/v1/accounts/${accountId}`,
      { method: "GET" }
    );
    const accountInfoJson = await accountInfo.json();
    return accountInfoJson;
  }
}
