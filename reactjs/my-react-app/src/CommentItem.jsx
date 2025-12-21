
// const CommentItem = ({ avatar, name, date, time, comment }) => {
//   return (
//     <div className="comment" style={{ marginTop: 20 }}>
//       <a href="/" className="avatar">
//         <img src={avatar} alt="avatar" />
//       </a>

//       <div className="content">
//         <a href="/" className="author">
//           {name}
//         </a>

//         <div className="metadata">
//           <span className="date">
//             {date} at {time}
//           </span>
//         </div>

//         <div className="text">{comment}</div>
//       </div>
//     </div>
//   );
// };

// export default CommentItem;


import { Component } from "react";

class CommentItem extends Component {
  render() {
    const { avatar, name, date, time, comment } = this.props;

    return (
      <div className="comment" style={{ marginTop: 20 }}>
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
          </div>

          <div className="text">{comment}</div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
