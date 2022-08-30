import React from "react";
import ReactionIcon from "./ReactionIcon";
import { emojiReactions } from "../constants";

const  ReactionCreator = ({ messageId }) => {
    return (
        Object.values(emojiReactions).map((emojiReaction) => (
            <ReactionIcon messageId={messageId} emoji={emojiReaction}/>
        ))
    );
};

export default ReactionCreator;
