// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4 style={{ color: 'white' }}>{title}</h4>
//           <span style={{ color: 'white',textAlign: 'justify' }}>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }



// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, url }) => {
//   return (
//     <Col xs={12} sm={6} md={4}>
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         <div 
//           className="proj-imgbx" 
//           style={{
//             display: 'flex', 
//             flexDirection: 'column', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             textAlign: 'center'
//           }}
//         >
//           <img 
//             src={imgUrl} 
//             alt={title} 
//             style={{ height: '300px', width: '550px', objectFit: 'contain' }} 
//           />
//           <div className="proj-txtx" style={{ marginTop: '15px' }}>
//             <h4 style={{ color: 'white' }}>{title}</h4>
//             <span style={{ color: 'white', textAlign: 'justify' }}>{description}</span>
//           </div>
//         </div>
//       </a>
//     </Col>
//   );
// };

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div 
          className="proj-imgbx" 
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center'
          }}
        >
          <img 
            src={imgUrl} 
            alt={title} 
            style={{ height: '300px', width: '550px', objectFit: 'contain' }} 
          />
          <div className="proj-txtx" style={{ marginTop: '15px' }}>
            <h4 style={{ color: 'white' }}>{title}</h4>
            <span style={{ color: 'white', textAlign: 'justify' }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};


