import React from 'react'
import { Link } from 'react-router-dom'
import { makeEmojiList } from '../Components/MakeEmojiPage'

function PostItem({post}) {

    const { id, title, preview, date, minutes_to_read } = post;

    console.log(id,'id')

    const emoji = makeEmojiList(minutes_to_read)

    console.log(post, 'post')

  return (
    <article key={id}>
        <h3>
            <Link to={`/posts/${id}`}>{title}</Link>
        </h3>
        <small>
            {date} . {emoji} {makeEmojiList} min read
        </small>

        <p>{preview}</p>

    </article>
  )
}

export default PostItem