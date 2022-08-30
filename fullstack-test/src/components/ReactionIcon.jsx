import React, { useState, useEffect } from "react";
import { createReaction, deleteReaction } from "../actions";
import styles from "./ReactionIcon.module.css";
import { useReactionStore } from "../stores/reactions";
import { useUserStore } from "../stores/users";
import classnames from "classnames";

const  ReactionIcon = ({ messageId,emoji }) => {
  const activeUserId = useUserStore((state) => state.activeUserId);
  const allReactions = useReactionStore((state) => state.reactions);
  const reactionsForMessage = allReactions.filter((reaction) => reaction.messageId === messageId && reaction.emoji === emoji);
  const activeUsersReaction = allReactions.find((reaction) => reaction.messageId === messageId && reaction.emoji === emoji && reaction.userId === activeUserId);
  const toggleReaction = () => {
    activeUsersReaction !== undefined? deleteReaction(activeUsersReaction.id) : createReaction(messageId,emoji);
  };
  return (
    <button className={classnames(styles.emojiButton, {
            [styles.statusIndicatorOnline]: activeUsersReaction !== undefined,
          })} onClick={() => toggleReaction()}>
        <span aria-label="emoji" role="img">
            {emoji} {reactionsForMessage.length}
        </span>
    </button>
  );
};

export default ReactionIcon;