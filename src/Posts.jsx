import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



export default function Posts() {

    const [posts, setPosts] = useState ([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.error(err));
        console.log("useEffect")
    }, []);

    return (
        <>
          <h1>Posts</h1>
          <button onClick={() => window.location.reload()}>Recarregar</button>
          <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
          </ul>
        </>
      )
    }
