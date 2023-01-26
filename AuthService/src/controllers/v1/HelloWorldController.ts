import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/login")
export class HelloWorldController {
  @Get("/")
  get() {
    return dummyToken;
  }

  @Get("/books")
  getBooks() {
    return [{ books: "all-books" }];
  }

  @Get("/json")
  getJson() {
    return {
      keys: [
        {
          kid: "sim2",
          kty: "oct",
          k: "and0X3NlY3JldA==",
          alg: "HS256",
        },
      ],
    };
  }
}

const dummyToken = {
  access_token: {
    iss: "https://0.0.0.0:8083",
    sub: "1234567890qwertyuio",
    jti: "mnb23vcsrt756yuiomnbvcx98ertyuiop",
    exp: 1735689600,
  },
  refresh_token: {
    aud: "https://your.krakend.io",
    iss: "https://your-backend",
    sub: "1234567890qwertyuio",
    jti: "mnb23vcsrt756yuiomn12876bvcx98ertyuiop",
    exp: 1735689600,
  },
  exp: 1735689600,
};
