import { HttpException, Injectable } from "@nestjs/common";
import { Course } from "./courses.entity";
import { start } from "repl";

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "NestJs",
      description: "Curso sobre fundamentos do framework NestJs",
      tags: ["node.js", "nestjs", "javascript", "typescript"],
    },
  ];

  // MÉTODOS PARA O SERVICE
  // findAll para encontrar todos os elementos do array
  findAll() {
    return this.courses;
  }

  // findOne para encontrar um item específico

  findOne(id: number) {
    const course = this.courses.find((course) => course.id === id);
    if (!course) {
      throw new HttpException(`Course with ID ${id} not found`, 404);
      // Poderia ser utilizado também o NotFoundExcepction
    }
    return course;
  }

  // create para criar um item

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  // update para atualizar um item

  update(id: number, updateCourseDTO: any) {
    const existingCourse = this.findOne(id);
    if (existingCourse as any) {
      const index = this.courses.findIndex((course) => course.id === id);
      this.courses[index] = {
        id,
        ...updateCourseDTO,
      };
    }
  }

  // remove para deletar um item

  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
