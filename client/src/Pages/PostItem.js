import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { makeEmojiList } from '../Components/MakeEmojiPage'
import Tags from './Tags'
import {UserContext} from "../UserContext"

function PostItem({articles}) {

  console.log(articles, "art")

  const {setCurrentPost}=useContext(UserContext)

  // console.log(articles, 'articles')
    const { id, title, date, minutes_to_read } = articles;
    // console.log(title,'id')
    const emoji = makeEmojiList(minutes_to_read)

  return (
    <article className="mt-2 p-5 bg-white text-green rounded" key={id}>
        <h3>
            <Link onClick={()=>{setCurrentPost({...articles})}} to={`/posts/${id}`}>{title}</Link>
        
        </h3>
        <small>
            {date} . {emoji} {makeEmojiList} min read
        </small>
        {/* <p>{preview}</p> */}
        <Tags />
    </article>
  )
}

export default PostItem