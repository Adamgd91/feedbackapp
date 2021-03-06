import { useState } from "react";

const FeedbackItem = () => {
  const [rating, setRating] = useState(8);
  const [text, setText] = useState("This is an example of feedback item!");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};

export default FeedbackItem;
