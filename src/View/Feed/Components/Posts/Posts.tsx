import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Comments from "../Comments/Comments";
import "./Posts.css";
import toast, { Toaster } from "react-hot-toast";

type Props = {};
type Post = {
  id: number;
  title: string;
  body: string;
};

type Comment = {
  id: number;
  postId: number;
  body: string;
  email: string;
  name: string;
};

export default function Posts({}: Props) {
  function usePosts() {
    return useQuery({
      queryKey: ["posts"],
      queryFn: async (): Promise<Array<Post>> => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
      },
      onError: (error) => toast("Error with code " + error), // Change this with cogo toast error messages
    });
  }

  const {
    data: posts,
    isError: postsError,
    isLoading: postsLoading,
  } = usePosts();

  function useComments() {
    return useQuery({
      queryKey: ["comments"],
      queryFn: async (): Promise<Array<Comment>> => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        return data;
      },

      onError: (error) => toast("Error with code " + error), // Change this with cogo toast error messages
    });
  }

  const {
    data: comments,
    isError: commentError,
    isLoading: commentsLoading,
  } = useComments();

  return (
    <>
      <div className="post">
        {postsLoading && <div>Loading...</div>}
        {postsError && <div>Error</div>}
        {posts && (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h3>Title : {post.title}</h3>
                <p>
                  <strong>Description:</strong> {post.body}
                </p>
                <h4>Comments section:</h4>
                {commentsLoading && <div>Loading...</div>}
                {commentError && <div>Error</div>}
                {comments &&
                  comments
                    .filter((comment) => comment.postId === post.id)
                    .map((comment) => (
                      <Comments key={comment.id} comment={comment} />
                    ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
