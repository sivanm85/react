import React from "react";

const CommentsData = [
  {
    name: "Sivananthan",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Sivananthan-replies",
        text: "Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Sivananthan-replies-replies",
            text: "Replies - Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    name: "Sivananthan",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Sivananthan-replies",
        text: "Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Sivananthan-replies",
            text: "Replies-Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Sivananthan-replies",
                text: "Replies-Replies-Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sivananthan",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Sivananthan-replies",
        text: "Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    name: "Sivananthan",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Sivananthan-replies",
        text: "Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Sivananthan-replies-replies",
            text: "Replies - Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    name: "Sivananthan",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Sivananthan-replies",
        text: "Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Sivananthan-replies-replies",
            text: "Replies - Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Sivananthan-replies-replies-replies",
                text: "Replies - Replies - Replies - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
            ],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex border p-2 m-2 bg-gray-100">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User Icon"
        className="w-8 h-8 rounded-full"
      />
      <div className="ml-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;
  return comments.map((comment, index) => (
    <div key={index} className="mb-4 text-gray-600">
      <Comment key={index} data={comment} />
      <div className="border-l-2 pl-4 ml-2 text-gray-300">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className=" m-5 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};
export default CommentsContainer;
