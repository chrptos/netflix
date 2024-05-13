export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 202)
    return { body }

    // TODO: ここから
    // try {
    //     const { email, name, password } = await readBody(event);
    //     const existingUser = await prismadb.user.findUnique({
    //         where: {
    //             email
    //         }
    //     });

    //     if (existingUser) {
    //         return
    //     }
    // } catch (error) {
    //     console.log(error);
    //     return 
    // }
})
