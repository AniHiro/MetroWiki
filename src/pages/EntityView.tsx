import { useParams } from "react-router-dom";
import { entities } from "../data/entities";
import ReactMarkdown from "react-markdown";
import React from "react"

export default function EntityView() {
  const { id } = useParams();
  const entity = entities.find(e => e.id === id);

  if (!entity) return <p>Статья не найдена</p>;

  return (
    <div>
      <h1>{entity.title}</h1>
      {entity.images?.[0] && <img src={entity.images[0]} alt={entity.title} />}
      <ReactMarkdown>{entity.content || ""}</ReactMarkdown>
    </div>
  );
}
