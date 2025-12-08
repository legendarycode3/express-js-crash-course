// import { response } from "express";

const output = document.querySelector('#output');

const button = document.querySelector('#get-posts-btn');

 const form = document.querySelector('#add-post-form');



//GET & SHOW  POST (posts)
async function showPosts() {

    try {
        const res = await fetch('http://localhost:8000/api/posts');

        if(!res.ok){
            throw new Error("Failed to fetch the posts");
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        });
    } 
    catch (error) {
      console.log('Error Fetching The Posts: ', error);  
    }
}







// SUBMITING NEW POST (ADDING A NEW "Post" FUNCTION)
async function addPost(e) {
    e.preventDefault();

    //const formData1 = document.getElementById()

    
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res  = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        })

        if(!res.ok){
            throw new Error(`Failed to add post ${response.status}`);
        }

        const newPost = await res.json();

        const postEl = document.createElement('div');
        postEl.textContent = newPost.title;
        output.appendChild(postEl);
        showPosts();
    } catch (error) {
        console.log(`error adding post`);
    }
}


// EVENT LISTENER
button.addEventListener('click', showPosts);

 form.addEventListener('submit', addPost);