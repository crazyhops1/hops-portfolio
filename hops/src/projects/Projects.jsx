import React from 'react'
import {Element} from'react-scroll'


const Projects = ({projectRef}) => {
 const proJects=[{
    image:"./hops-media.png",
    title:'social media app',
    dec:"social media platform with features like user authentication, follow/unfollow , messaging, user search, post creation, liking, and real-time chat with message history.",
    Technologies :" MongoDB, Express.js, React.js, Node.js, Socket.io",
    link:"https://hops-media-bhyj.onrender.com"
    
 },

{
    image:'./hospital.png',
    title:'Hospital',
    dec:'Created a fully responsive landing page for a hospital, focusing on layout structuring, clean design, reusable components, and form handling. Emphasized responsiveness and compatibility across devices',
    Technologies:'React.js Css Bootstrap',
    link:"#"





}]



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
    <a href={item.link} className="btn "style={{backgroundColor:'#00CFFF'}}>
     viwe Projects
    </a>
  </div>
</div>


        ))}
    </div>
    </Element>
  )
}

export default Projects