import { useEffect, useState } from "react";
import { fetchComments } from "../api";

export const Buttons = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  interface Comment {
    id: number;
    message: string;
  }

  useEffect(() => {
    fetchComments().then((res) => {
        console.log(res);
        
      setComments(res);
    });
  }, []);

  return (
    <section>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.message}</li>
        ))}
      </ul>
    </section>
  );
};
