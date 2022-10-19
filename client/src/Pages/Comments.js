import React from 'react'

function Comments({comment}) {
    console.log(comment, "comment")
  return (
    <div className='mt-2 p-3 bg-white post-comment'>
    <div className='comments-avatar'>
        <img src="https://www.w3schools.com/howto/img_avatar.png" about='avatar' className='post-avatar'/>
      </div>
        <div className='users-avatar'>
              <h3>author</h3>
         </div>
      <div className='comment-body'>
        <p>Welcome guys, I am going to show you how to write SEO optimized articles on google docs using SEO Writing Assistant which helps to write SEO friendly contents even on</p>
      </div>
  </div>  
  )
}

export default Comments