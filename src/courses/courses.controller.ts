import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { CoursesService } from "./courses.service";

// Arquivo responsável por controlar requisições http

@Controller("courses")
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  // @Get é o decorator responsável por fazer com que o código retorne algo, neste caso uma mensagem em json.

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  // Esse get é um exemplo do uso de parâmetros.

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.courseService.findOne(+id);
  }

  // O @Post é o decorator responsável para enviar informações para o banco de dados, pode ser relacionado com "postar"

  @Post()
  create(@Body() body) {
    return this.courseService.create(body);
  }

  // @Patch ou @Put é usado para atualizar a base de dados, sendo patch mais utilizado para pequenas atualizações.

  @Put(":id")
  update(@Param("id") id: number, @Body() body) {
    return this.courseService.update(+id, body);
  }

  // @Delete é utilizado para remover dados do banco.
  //HttpCode como NO_CONTENT condiz com a reposta 204: sem conteúdo, ou seja não retorna nada, apenas executa.

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.courseService.remove(+id);
  }
}
