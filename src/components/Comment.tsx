import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void; //É assim que tipa uma função
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCounter, setLikeCounter] = useState(0);

    function handleCommentDeletion() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCounter((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/61332644?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Veloso</strong>
                            <time title='22 de Agosto às 08:17' dateTime='2022-08-22-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                    
                        <button onClick={handleCommentDeletion} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCounter}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}