import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostService } from "./05-dependency-c";

// Main
(async () => {

    const postService = new PostService(
        new WebApiPostService(),
    );

    const posts = await postService.getPosts();

    console.log({ posts });

})();
