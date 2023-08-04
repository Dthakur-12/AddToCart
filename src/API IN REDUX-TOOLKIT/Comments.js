import React from 'react'
import { fetchComments } from '../features/ApiSlice'
import { useDispatch } from 'react-redux'

const Comments = () => {
    const dispatch=useDispatch();
  return (
    <div>Comments: <br/>
        <button onClick={()=>dispatch(fetchComments())}>Generate_Comments:</button>
    </div>
  )
}

export default Comments