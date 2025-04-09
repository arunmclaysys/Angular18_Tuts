function fetchPostData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("fetched post data");
        }, 3000);
    });    
}

function fetchComments() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("fetched post comments");
        }, 3000);
    }); 
}

async function fetchBlogInfo() {
    console.log("started fetching details");
    // const blogData = await fetchPostData();
    // console.log(blogData);
    // const blogComments = await fetchComments();
    // console.log(blogComments);

    //Alternate way
    const [blogData,blogComments] = await Promise.all([fetchPostData(),fetchComments()]);
    console.log(blogData);
    console.log(blogComments);
    console.log("Done!!!!!");
}

fetchBlogInfo();