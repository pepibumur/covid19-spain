/** @jsx jsx */

import { jsx, Styled } from 'theme-ui'
import React from 'react'
import Message from '../../content/message'

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />
  return (
    <Tag {...props}>
      <Styled.a sx={{ textDecoration: 'none' }} href={`#${props.id}`}>{props.children}</Styled.a>
    </Tag>
  )
}

export default {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  Message: Message,
}
