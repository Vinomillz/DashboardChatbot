export interface Post {
    id: string;
    vendor: string;
    status: string;
    destination: string;
    body: string;
    author: string;
    date: string;
    comments: PostComment[];
}


export interface PostComment{
    id: string;
    text: string;
    username: string;
}