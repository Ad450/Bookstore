import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/books")
export class BookController {
  @Get("/")
  get() {
    return { data: "hello books" };
  }

  @Get("/all-books")
  getAllBooks() {
    return "this returns all books";
  }
}
