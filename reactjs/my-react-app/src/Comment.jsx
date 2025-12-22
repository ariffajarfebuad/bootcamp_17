// import React, { Component } from "react";
// import { faker } from "@faker-js/faker";
// import CommentItem from "./CommentItem.jsx";

// class Comment extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [
//         {
//           name: "Nisa",
//           avatar: faker.image.avatar(),
//           date: "Today",
//           time: "10:30 AM",
//           comment: "Good Job!",
//           like: 7,
//         },
//         {
//           name: "Andi",
//           avatar: faker.image.avatar(),
//           date: "2025-12-02",
//           time: "11:00 AM",
//           comment: "Sangat membantu, terima kasih!",
//           like: 0,
//         },
//         {
//           name: "Sari",
//           avatar: faker.image.avatar(),
//           date: "2025-12-03",
//           time: "09:15 AM",
//           comment: "Saya belajar banyak dari sini.",
//           like: 2,
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="ui container comments">
//         {this.state.data.map((item, index) => (
//           <CommentItem
//             key={index}
//             name={item.name}
//             avatar={item.avatar}
//             date={item.date}
//             time={item.time}
//             comment={item.comment}
//             like={item.like}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Comment;


import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import CommentItem from "./CommentItem.jsx";


const Comment = () => {
  let data = [

    {
      name: "Nisa",
      avatar: faker.image.avatar(),
      date: "Today",
      time: "10:30 AM",
      comment: "Good Job!",
    },
    {
      name: "Andi",
      avatar: faker.image.avatar(),
      date: "2025-12-02",
      time: "11:00 AM",
      comment: "Sangat membantu, terima kasih!",
    },
    {
      name: "Sari",
      avatar: faker.image.avatar(),
      date: "2025-12-03",
      time: "09:15 AM",
      comment: "Saya belajar banyak dari sini.",
    },
  ];



  return (
    <div className="ui container comments">
      {data.map((item, index) => (
        <CommentItem
          key={index}
          name={item.name}
          avatar={item.avatar}
          date={item.date}
          time={item.time}
          comment={item.comment}
          like={item.like}
        />
      ))}
    </div>
  );
};

export default Comment;


