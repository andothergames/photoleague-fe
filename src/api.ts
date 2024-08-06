import axios, { AxiosResponse } from "axios";

interface Comment {
    id: number;
    message: string;
}

const photoleagueAPI = axios.create({
    baseURL: "http://localhost:8080"
});

export const fetchComments = (): Promise<Comment[]> => {
    return photoleagueAPI.get('/comment').then((res: AxiosResponse<Comment[]>) => {
        return res.data
    })
}

export const postComment = (body: Partial<Comment>): Promise<void> => {
    return photoleagueAPI.post('/comment', body)
        .then((res: AxiosResponse<void>) => {
            console.log(res)
            return
        })
}