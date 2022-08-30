import React from "react";
import { createReaction } from "../actions";
import Button from "./Button";
import ReactionIcon from "./ReactionIcon";
import styles from "./ReactionCreator.module.css";
import { emojiReactions } from "../constants";

const  ReactionCreator = ({ messageId }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createReaction(messageId,'👍');
      }}
      className={styles.wrapper}
    >
      <div>
        <Button className={styles.emojiButton} type="submit">
            <span aria-label="like" role="img">
                👍
            </span>
        </Button>
        <Button className={styles.emojiButton} type="submit">
            <span aria-label="love" role="img">
                ❤️
            </span>
        </Button>
         <Button className={styles.emojiButton} type="submit">
            <span aria-label="lol" role="img">
                😂
            </span>
        </Button>
        <ReactionIcon messageId={messageId} emoji={emojiReactions.LOL}/>
      </div>
    </form>
  );
};

export default ReactionCreator;
