import { join } from "path";
import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import { controllers } from "./controllers/v1/controllerExporter";
import cors from "cors";

@Configuration({
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 3000,
  httpsPort: false, // CHANGE
  componentsScan: false,
  mount: { "/v1": [...controllers] },
  middlewares: [
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    { use: "urlencoded-parser", options: { extended: true } },
  ],
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs",
    },
  },
  exclude: ["**/*.spec.ts"],
})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  @Configuration()
  protected settings: Configuration;

  $beforeRoutesInit() {
    this.app.use(cors({ origin: "*" }));
  }
}
