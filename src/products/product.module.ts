import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], 
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {
 
} 