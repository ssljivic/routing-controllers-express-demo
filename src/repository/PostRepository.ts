import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";

@Service()
export class PostRepository {

    private posts: Post[] = [];

    constructor() {
        this.init();
    }

    private init() {
        for (let i = 0; i < 1000; ++i) {
            this.posts.push(new Post(i, `post #${i}`, `about post #${i}`, [new Category(i * 1000 + 1, `Category ${i * 1000 + 1}`), new Category(i * 1000 + 2, `Category ${i * 1000 + 2}`)]));
        }
    }

    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise
        return Promise.resolve(this.posts);
    }

    findOne(id: number) {
        // here, for example you can load post id using mongoose
        // you can also return a promise here
        let foundPost: Post = undefined;
        this.posts.forEach(post => {
            if (post.id === id)
                foundPost = post;
        });
        return foundPost;
    }

    save(post: Post) {
        // here, for example you can save a post to mongodb using mongoose
        this.posts.push(post);
        return post;
    }

    remove(id: number) {
        // here, for example you can save a post to mongodb using mongoose
        const post = this.findOne(id);
        if (post)
            this.posts.splice(this.posts.indexOf(post), 1);

        return post;
    }

}