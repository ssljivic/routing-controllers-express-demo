import {JsonController, Get, Post as HttpPost, Param, Delete, Body, Res} from "routing-controllers";
import {Service} from "typedi";
import {PostRepository} from "../repository/PostRepository";
import {Post} from "../model/Post";

@Service()
@JsonController()
export class PostController {

    constructor(private postRepository: PostRepository) {
    }

    @Get("/posts")
    all(): Promise<Post[]> {
        return this.postRepository.findAll();
    }

    @Get("/posts2")
    all2(@Res() res: any) {
        this.postRepository.findAll()
        .then((posts: Post[]) => {
            res.send(posts);
        });
    }

    @Get("/posts/:id")
    one(@Param("id") id: number): Post {
        return this.postRepository.findOne(id);
    }

    @HttpPost("/posts")
    post(@Body() post: Post): Post {
        return this.postRepository.save(post);
    }

    @Delete("/posts/:id")
    delete(@Param("id") id: number): Post {
        return this.postRepository.remove(id);
    }

}