import React from "react";
import Post from "./Post";

const DATA = [
  {
    id: "123",
    username: "musk",
    userImg:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    img: "https://whyd.com/wp-content/uploads/2021/12/Happy-New-Year-Memes..jpeg",
    caption: "wow",
  },
  {
    id: "123",
    username: "bob",
    userImg:
      "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-19.png?resize=224%2C224&ssl=1",
    img: "https://i.pinimg.com/236x/8e/e1/d7/8ee1d7b8d6ee8d10526c736da2d117d2--funny-texts-gag.jpg",
    caption: "this is dope",
  },
  {
    id: "123",
    username: "harold",
    userImg:
      "https://i1.wp.com/66.media.tumblr.com/ecc0a62b9244c5b89c452ee2177006bf/c532a2f5c4f9814c-2a/s500x750/7c73002e59b266bb92822f1297cebafa3ecb333a.jpg",
    img: "https://brobible.com/wp-content/uploads/2021/11/best-50-memes-tuesday-keeping-secrets.jpg?w=1024",
    caption: "is this a picture?",
  },
];

function Posts() {
  return (
    <div>
        {DATA.map(post => (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        ))}
    </div>
  );
}

export default Posts;
