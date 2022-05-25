console.log('-------------------- These are food app feedbacks --------------\n')

const posts = [
    { user: 'Mike', comment: 'Looks delicious' },
    { user: 'Sarah', comment: 'Taste was amazing' },
    { user: 'Dennis', comment: 'I want to taste it too' }
];

const listPosts = () => {
    posts.map(post => {
        console.log(`${post.user}: ${post.comment}`);
    })
};

const addPost = (newPost) => {
    const addPost = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject('Error Occured');
    })

    return addPost;
};


async function processData() {
    
    try {
        await listPosts();
        const addData = await addPost({ user: 'Test', comment: 'This is a test comment !' })
        console.log('\n ********** After the add Post **********');
        console.log(addData);

    } catch (error) {
        console.log(error);
    }
}

processData();