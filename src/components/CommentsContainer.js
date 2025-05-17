import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
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
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
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
    <div className="flex mt-2 bg-gray-100 rounded-lg gap-2 p-2">
      <img
        className="w-8 h-8"
        src="data:image/png;base64,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"
        alt="user"
      ></img>
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-md">{text}</p>
      </div>
    </div>
  );
};

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
