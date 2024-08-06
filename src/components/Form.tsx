import { useEffect, useState } from "react";
import { postComment, fetchComments } from "../api";

export const Form = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [marker, setMarker] = useState(1);

    interface Comment {
        id: number;
        message: string;
    }

    useEffect(() => {
        fetchComments().then((res) => {
            setComments(res);
        });
    }, [marker]);

    const handleSubmitComment = () => {
        const messageInput = document.getElementById("messageInput") as HTMLInputElement;
        if (messageInput) {
            const message = messageInput.value;
            postComment({ message: message });
            messageInput.value = ""
        }
        setMarker(marker * -1)
        console.log(marker);
    }

    return <section>
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>{comment.message}</li>
            ))}
        </ul>
        <input id="messageInput" type="text" placeholder="make a comment" />
        <button onClick={handleSubmitComment}>Submit</button>
    </section>
}