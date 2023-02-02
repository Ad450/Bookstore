import { Controller } from "@tsed/di";
import { Get, Post } from "@tsed/schema";

@Controller("/")
export class BookController {
  @Get("/books")
  get() {
    return { data: "hello books" };
  }

  @Get("/all-books")
  getAllBooks() {
    return "this returns all books";
  }

  @Post("/login")
  login() {
    return {
      access_token: {
        aud: "https://your.krakend.io",
        iss: "bookstore",
        sub: "1234567890qwertyuio",
        jti: "mnb23vcsrt756yuiomnbvcx98ertyuiop",
        roles: ["user", "admin"],
        exp: 173568960000,
      },
      refresh_token: {
        aud: "https://your.krakend.io",
        iss: "https://your-backend",
        sub: "1234567890qwertyuio",
        jti: "mnb23vcsrt756yuiomn12876bvcx98ertyuiop",
        exp: 173568960000,
      },
      exp: 173568960000,
    };
  }
}
