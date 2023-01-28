import blogModel from "~~/schemas/Blogs";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const config = useRuntimeConfig();

    if (body.password !== config.PASSWORD) {
        throw createError({statusCode: 401, statusMessage: "Invalid password"})
    }


    await blogModel.create(body);

    setResponseStatus(201);

    return "Blog Added!";
})