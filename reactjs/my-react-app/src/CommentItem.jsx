import React from "react";
import { useState } from "react";

const CommentItem = ({ avatar, name, date, time, comment,  }) => {
  const [like, setLike] = useState(0);
  return (
    <div style={{ marginTop: 20 }}>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={avatar} alt="avatar" />
        </a>

        <div className="content">
          <a href="/" className="author">
            {name}
          </a>

          <div className="metadata">
            <span className="date">
              {date} at {time}
            </span>
            <span>{like} Liked</span>
          </div>

          <div className="text">{comment}</div>
          <button onClick={() => setLike(like + 1)}>Like</button>
        </div>
      </div>

    </div>
  
  );
};

export default CommentItem;



// pengguanan dengan class component
// import React,{ Component } from "react";

// class CommentItem extends Component {
//   render() {
//     const { avatar, name, date, time, comment, like } = this.props;

//     return (
//       <div className="comment" style={{ marginTop: 20 }}>
//         <a href="/" className="avatar">
//           <img src={avatar} alt="avatar" />
//         </a>

//         <div className="content">
//           <a href="/" className="author">
//             {name}
//           </a>

//           <div className="metadata">
//             <span className="date">
//               {date} at {time}
//             </span>
//           </div>

//           <div className="text">{comment}</div>
//         </div>
//       </div>
//       <div className="like-section">
//         <span className="like-count">{like} Liked</span>
//         <button className="like-button">Like</button>
//       </div>  
//     );
//   }
// }

// export default CommentItem;
