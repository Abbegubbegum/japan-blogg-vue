import blogModel from "~~/schemas/Blogs";
import { BlogPost } from "~~/types/types";

export default defineEventHandler(async () => {
    const result = await blogModel.find({})

    result.sort((a, b) => {
        const aInt = parseInt(a.date.slice(-2));
        const bInt = parseInt(b.date.slice(-2));

        return bInt - aInt;
    });

    return (result as BlogPost[]);
})