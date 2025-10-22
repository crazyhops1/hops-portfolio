import React from 'react'
import {Element} from'react-scroll'
import project1 from '../images/new-media1.png'
import project12 from '../images/new-media2.png'
import project13 from '../images/new-media3.png'


import project2 from '../images/hops-media.png'
import project3 from '../images/hospital.png'


 export const proJects=[{
    image:project1,
    allImage:[project12,project13,project1],
    title:'AI-powered social media',
    dec:"This project is a full-stack social media web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a complete user experience similar to popular social platforms, featuring authentication, real-time messaging, AI-powered search, and dynamic user interactions.",
    Technologies :"React.js, Redux, Axios, Socket.io-client Node.js, Express.js, MongoDB, Mongoose gemini",
    link:""
    
 },
 {
    image:project2,
    title:'social media app',
    dec:"social media platform with features like user authentication, follow/unfollow , messaging, user search, post creation, liking, and real-time chat with message history.",
    Technologies :" MongoDB, Express.js, React.js, Node.js, Socket.io",
    link:"https://hops-media-bhyj.onrender.com"
    
 },

{
    image:project3,
    title:'Hospital',
    dec:'Created a fully responsive landing page for a hospital, focusing on layout structuring, clean design, reusable components, and form handling. Emphasized responsiveness and compatibility across devices',
    Technologies:'React.js Css Bootstrap',
    link:"#"





}]


const Projects = ({projectRef}) => {
 



  return (
    <Element name='projects' style={{textAlign:'center' , color:'#00CFFF'}}>
       <h4>what I do</h4>
    <div  className='d-flex justify-content-evenly flex-wrap '>
     
        {proJects.map((item,key)=>(
            <div  key={key} className="" style={{ width: "18rem" , marginTop:"2rem"}}>
  <img src={item.image}className="card-img-top" alt="..." />
  <div className="card-body" style={{maxHeight:'200px',height:'100%',overflowX:'auto',backgroundColor:"#212121",color:"white"}}>
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
     Description : <br/>  {item.dec}
    </p> <br/>

     <p className="card-text">
     Technologies :<br/> {item.Technologies}
    </p>
 
  </div>
</div>


        ))}
    </div>
    </Element>
  )
}


export default Projects
