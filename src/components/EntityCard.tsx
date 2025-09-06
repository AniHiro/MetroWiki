import { Link } from "react-router-dom";
import type { Entity } from "../types/entity";
import React from 'react'


export default function EntityCard({ entity }: { entity: Entity }) {
  return (
    <div className="entity-card">
      {entity.images?.[0] && <img src={entity.images[0]} alt={entity.title} />}
      <h3>{entity.title}</h3>
      <p>{entity.shortDescription}</p>
      <Link to={`/entity/${entity.id}`}>Читать</Link>
    </div>
  );
}
