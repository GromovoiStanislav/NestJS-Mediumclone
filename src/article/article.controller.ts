import {Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {ArticleService} from './article.service';
import {AuthGuard} from "../user/guards/auth.guard";
import {UserEntity} from "../user/user.entity";
import {User} from "../user/decorators/user.decorator";
import {CreateArticleDto} from "./dto/createArticle.dto";
import {ArticleResponseInterface} from "./types/articleResponse.interface";

@Controller('articles')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {
    }

    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    async create(@User() currentUser: UserEntity, @Body('article') createArticleDto: CreateArticleDto,): Promise<ArticleResponseInterface> {
        const article = await this.articleService.createArticle(currentUser, createArticleDto);
        return this.articleService.buildArticleResponse(article);
    }



    @Get(':slug')
    async getSingleArticle(@Param('slug') slug: string): Promise<ArticleResponseInterface> {
        const article = await this.articleService.findBySlug(slug);
        return this.articleService.buildArticleResponse(article);
    }

}
