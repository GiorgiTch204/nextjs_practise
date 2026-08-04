export default async function Blog(){
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("done");
        }, 1000);
    });
    return <h1>Blog Page</h1>
};