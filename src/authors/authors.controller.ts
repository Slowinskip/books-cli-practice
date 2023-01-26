import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get('/')
  getAll() {
    return this.authorsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const author = await this.authorsService.getById(id);
    if (!author) throw new Error('Author not found');
    return author;
  }
}
