import React from "react";
import './Post.css';

function Post() {
    return (
      <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1622790698141-94e30457ef12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />

            <div className="postInfo">
                <span className="postTitle">How to Mine Ethereum</span>
            </div>
            <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Iste obcaecati nostrum non ut atque sed architecto nam mollitia 
            aspernatur cumque quia esse sunt similique, eius quaerat itaque! 
            Officiis, odio. Rerum!
            </p>
      </div>
    );
  }
  
  export default Post;