// import { faker } from "@faker-js/faker";
// import CommentItem from "./CommentItem.jsx";

// const Comment = () => {
//   const data = [
//     {
//       name: "Nisa",
//       avatar: faker.image.avatar(),
//       date: "Today",
//       time: "10:30 AM",
//       comment: "Good Job!",
//     },
//     {
//       name: "Andi",
//       avatar: faker.image.avatar(),
//       date: "2025-12-02",
//       time: "11:00 AM",
//       comment: "Sangat membantu, terima kasih!",
//     },
//     {
//       name: "Sari",
//       avatar: faker.image.avatar(),
//       date: "2025-12-03",
//       time: "09:15 AM",
//       comment: "Saya belajar banyak dari sini.",
//     },
//   ];

//   return (
//     <div className="ui container comments">
//       {data.map((item, index) => (
//         <CommentItem
//           key={index}
//           name={item.name}
//           avatar={item.avatar}
//           date={item.date}
//           time={item.time}
//           comment={item.comment}
//         />
//       ))}
//     </div>
//   );
// };

// export default Comment;


import React, { Component } from "react";
import { faker } from "@faker-js/faker";
import CommentItem from "./CommentItem.jsx";

class Comment extends Component {
  render() {
    const data = [
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
          />
        ))}
      </div>
    );
  }
}

export default Comment;
