import React from 'react'

function CreateComments() {


  return (
<div className='mt-2 p-3 bg-white form-group comment-group'>
    <div className='comment-avatar'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt='user_avatar' about='avatar' className='post-avatar'/>
    </div>
    <div className='form-comment' >
      <textarea className="form-control" rows="3" id="comment" placeholder='Add to the discussion' />
      <button className='btn btn-primary mt-2' type='submit'>Submit</button>
    </div>
</div>
  )
}

export default CreateComments