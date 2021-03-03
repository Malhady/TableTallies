// Returns the shared instance of the Realm app.
export function getRealmApp() {
  if (app === undefined) {
    const appId = "recipedatabase-shard-00-02.xyt17.mongodb.net:27017"; // Set Realm app ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: "default",
        version: "0",
      },
    };
    app = new Realm.App(appConfig);
  }
  return app;
}