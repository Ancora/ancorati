import React from "react"
import PropTypes from "prop-types"
/* import getThemeColor from '../../utils/getThemeColor'  Utilizei a variável css já definida */

import * as S from "./styled"

const ContentItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.ContentItemLink
    cover
    direction="right"
    bg="var(--background)"
    duration={0.6}
    /* cover
      direction="right"
      bg={getThemeColor()} Utilizei a variável css já definida
      duration={0.6} */
    to={slug}
  >
    <S.ContentItemWrapper>
      <S.ContentItemTag background={background}>{category}</S.ContentItemTag>
      <S.ContentItemInfo>
        <S.ContentItemDate>
          {date} - {timeToRead} min de leitura.
        </S.ContentItemDate>
        <S.ContentItemTitle>{title}</S.ContentItemTitle>
        <S.ContentItemDescription>{description}</S.ContentItemDescription>
      </S.ContentItemInfo>
    </S.ContentItemWrapper>
  </S.ContentItemLink>
)

ContentItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ContentItem
