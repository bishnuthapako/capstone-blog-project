import React, {useEffect, useState} from 'react'
import PostItem from './PostItem'


const initialState = {
  articles: [],
  error: null,
  status: "pending"
};


function MembersPost() {
const [{articles, error, status}, setState]=useState(initialState);

useEffect(()=>{
  setState(initialState)
  fetch("/members_only_posts").then((r)=>{
    if(r.ok){
      r.json().then((post)=>setState({articles, error: null, status: "resolved"})
      );
    } else {
      r.json().then((message)=>setState({articles: null, error: message.error, status: "rejected"})
      );
    }
  })

},[]);

if(status === "pennding") return <h1>Loading...</h1>;
if(status==="rejected") return <h1>{error}</h1>
  
  return (

    <main>
      <h2>Member only Posts</h2>
      {
        articles.map((article)=>(
          <PostItem key={article.id} post={article} />
        ))
      }
    </main>
  )
}

export default MembersPost