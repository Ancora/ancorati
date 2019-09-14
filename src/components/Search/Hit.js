import React from "react"
import ContentItem from "../ContentItem"

const Hit = ({ hit }) => (
  <ContentItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    timeToRead={hit.timeToRead}
  />
)

export default Hit
