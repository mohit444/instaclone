import { Users } from "./users";

export const POSTS = [
  {
    image_url:
      "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: Users[0].user,
    likes: 4580,
    profile_picture: Users[0].image,
    caption: "this is my caption",
    comments: [
      {
        user: "BOB",
        comment: "This is bob comment note down and do styling.",
      },
      {
        user: "BOB",
        comment: "This is bob comment note down and do styling.",
      },
    ],
  },
  {
    image_url:
      "https://i.pinimg.com/originals/f2/8d/22/f28d2203739f0c38a3a6afb7ffb07584.jpg",
    user: Users[1].user,
    likes: 4580,
    profile_picture: Users[1].image,
    caption: "this is my caption",
    comments: [
      {
        user: "BOB",
        comment: "This is bob comment note down and do styling.",
      },
      {
        user: "BOB",
        comment: "This is bob comment note down and do styling.",
      },
    ],
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1616906462171-a7286e6f51b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3RhZ3JhbSUyMHBvc3RzJTIwb2YlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    user: Users[2].user,
    likes: 4580,
    profile_picture: Users[2].image,
    caption: "this is my caption",
    comments: [
      {
        user: "BOB",
        comment: "This is bob comment note down and do styling.",
      },
      {
        user: "BOB",
        comment: "This is bob comment note down and do styling.",
      },
    ],
  },
];
