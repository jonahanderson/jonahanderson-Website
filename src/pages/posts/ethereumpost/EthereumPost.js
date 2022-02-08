import React from "react";
import "./EthereumPost.css"

function EthereumPost() {
  return (
    <div className="Epost">
      <div className="EImgContainer">
          <img className="EpostImg" src="https://images.unsplash.com/photo-1622790698141-94e30457ef12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
      </div>    

          <div className="EpostInfo">
              <span className="EpostTitle">How to Mine Ethereum</span>
              <p className="EpostDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Iste obcaecati nostrum non ut atque sed architecto nam mollitia 
              aspernatur cumque quia esse sunt similique, eius quaerat itaque! 
              Officiis, odio. Rerum!
              </p>
          </div>
    </div>
  );
}

export default EthereumPost;