import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Book } from '@prisma/client';
import { ConflictException } from '@nestjs/common/exceptions';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Book[]> {
    return this.prismaService.book.findMany();
  }

  public getById(id: Book['id']): Promise<Book | null> {
    return this.prismaService.book.findUnique({
      where: { id },
    });
  }

  public delete(id: Book['id']): Promise<Book> {
    return this.prismaService.book.delete({
      where: { id },
    });
  }

  public create(
    bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Book> {
    const { authorId, ...otherData } = bookData;
    try {
      return this.prismaService.book.create({
        data: {
          ...otherData,
          author: {
            connect: { id: authorId },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('This book already exists');
      throw error;
    }
  }

  public updateById(
    id: Book['id'],
    bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Book> {
    return this.prismaService.book.update({
      where: { id },
      data: bookData,
    });
  }
}
