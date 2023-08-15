import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

const Home = () => {
  const [posts,setPosts]= useState([])

  const cat= useLocation().search

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res=await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  },[cat])

//   const posts= [
//     {
//         "id": "123456",
//         "site_id": "987654321",
//         "post_id": "528036988357777409",
//         "title": "My New Blog Post",
//         "desc" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates numquam quae corporis eum sint debitis possimus est magni quod consequatur enim ut facere architecto, recusandae ducimus officia sunt magnam." ,
//         "created_date": 1402964756,
//         "img": "https://wallpaperaccess.com/full/1769054.gif"
//     },
//     {
//         "id": "123456",
//         "site_id": "987654321",
//         "post_id": "648291276105250798",
//         "title": "Another Blog Post",
//         "desc" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates numquam quae corporis eum sint debitis possimus est magni quod consequatur enim ut facere architecto, recusandae ducimus officia sunt magnam." ,
//         "created_date": 1378504674,
//         "img": "https://t3.ftcdn.net/jpg/04/18/25/32/360_F_418253213_0YwamXtXHwEiLxBxWyTweoDfEi8M6Abx.jpg"
//     },
//     {
//         "id": "123456",
//         "site_id": "987654321",
//         "post_id": "489389593268427583",
//         "title": "Travel Blog Post",
//         "desc" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates numquam quae corporis eum sint debitis possimus est magni quod consequatur enim ut facere architecto, recusandae ducimus officia sunt magnam.",
//         "created_date": 1378504578,
//         "img" : "https://media.licdn.com/dms/image/C4D12AQFe0Zi8AAIU3g/article-cover_image-shrink_720_1280/0/1589884408145?e=2147483647&v=beta&t=9Rrk5RrmHBnH5KamII_R76-H74bLLQjvYIvrORfE_tQ"
//     },
//     {
//       "id": "123456",
//       "site_id": "987654321",
//       "post_id": "489389593268427583",
//       "title": "Travel Blog Post",
//       "desc" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates numquam quae corporis eum sint debitis possimus est magni quod consequatur enim ut facere architecto, recusandae ducimus officia sunt magnam.",
//       "created_date": 1378504578,
//       "img" : "https://i1.adis.ws/i/canon/canon_future_focus_eos_r6_lifestyle_7-16x9_201cd357200b457f9eb4c11aafa6cfc9"
//   }
// ]

   const getText= (html)=>{
    const doc= new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
   }
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={`../upload/${post.img}`} alt=''/>
              </div>
              <div className='content'>
                <Link className='heading'to={`post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </div>
              </div>   
        ))}
      </div>
    </div>
  );
};

export default Home;