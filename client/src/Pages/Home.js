import React, { useEffect, useState } from 'react'

function Home() {
  const [articles, setArticles]=useState([])
  console.log(articles, 'art')
  useEffect(()=>{
    fetch("/posts")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data, 'data')
      setArticles(data)})
  },[])


  return (
    
    <h13>hello</h13>
  )
}

export default Home