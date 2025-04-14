import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const displayReadingTime = () => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const count = Math.ceil(minutes / (minutes < 30 ? 5 : 10));
    return `${emoji.repeat(count)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p><i>{displayReadingTime()}</i></p>
    </article>
  );
}

export default Article;
