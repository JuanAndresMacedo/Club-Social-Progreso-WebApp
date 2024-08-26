import { News } from "./news.model";

export default interface GetAllNewsResponse {
    newsList: {
        $values: Array<News>;
    };
}