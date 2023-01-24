import express from "express";

class Server {
  private static app: express.Application;

  private static async initServer(): Promise<express.Application> {
    this.app = express();
    try {
      this.app.listen(3000);
      console.info("app server running on port 3000 🔥🔥");
      return this.app;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async bootstrapServer() {
    await this.initServer();
    // register all api endpoints by storing them into db (mongodb)
    // first check if the endpoints doesnot exist already before adding to db
  }
}

Server.bootstrapServer();
