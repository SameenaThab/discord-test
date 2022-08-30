import React from "react";
import ReactionIcon from "./ReactionIcon";
import { emojiReactions } from "../constants";
import styles from "./ReactionCreator.module.css";

const  ReactionCreator = ({ messageId }) => {
    return (
        <div key={messageId} className={styles.reactions}>
            {
            Object.values(emojiReactions).map((emojiReaction) => (
                <ReactionIcon messageId={messageId} emoji={emojiReaction}/>
                ))
            }
        </div>
    );
};

export default ReactionCreator;
