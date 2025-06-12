import React from "react";
import Icons from "./Icons";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Sangeetha priya",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Sangeetha priya",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Sangeetha priya",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Sangeetha priya",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Sangeetha priya",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Sangeetha priya",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Sangeetha priya",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Sangeetha priya",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Sangeetha priya",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sangeetha priya",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Sangeetha priya",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Sangeetha priya",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Sangeetha priya",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments </h1>

      <CommentsList data={commentsData} />
    </div>
  );
};

const Comments = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="flex mt-2 bg-tertiary rounded-lg gap-2 p-2 ">
      <Icons name="userAvatar" size={40} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-md">{text}</p>
      </div>
    </div>
  );
};
// recurssion
const CommentsList = ({ data }) => {
  return data.map((comment, index) => (
    <div key={index}>
      <Comments comment={comment} />
      <div className="border-l border-l-gray-400 ml-4">
        <CommentsList data={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentsContainer;
