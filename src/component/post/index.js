import React, { useState, useEffect}from 'react';
import blogPost from './post'
import { NavLink } from 'react-router-dom';

function Post(props) {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const posts = blogPost;
        setPosts(posts)
    }, posts);



    return (
        <div id="post">
            
            {posts.map(function (postdetails) {
                console.log(postdetails.idurl);
               
            return (
                <div>
                <NavLink id="posta" to={'./blog/'+ postdetails.idurl }>
                        <h6>{postdetails.blogTitle}</h6>
                    </NavLink>
                    <p>{postdetails.postOn}</p>

                </div>
                
            
            )
            })
        } 
        </div>
            ) 
}
export default Post;
