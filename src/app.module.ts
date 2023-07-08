import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true, // never be done 'true' in production
      typePaths: ['./**/*.graphql'] // it'll consider schema file only to one which name will contain '.graphql'
    }),
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
