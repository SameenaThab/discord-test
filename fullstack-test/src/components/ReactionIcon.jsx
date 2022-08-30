import React from "react";
import { createReaction } from "../actions";
import Button from "./Button";
import styles from "./ReactionCreator.module.css";

const  ReactionIcon = ({ messageId,emoji }) => {
    console.log(emoji);
    return (
        <button onClick={() =>createReaction(messageId,emoji)}>
            <span aria-label="emoji" role="img">
                emoji
            </span>
        </button>
      );
};

export default ReactionIcon;
