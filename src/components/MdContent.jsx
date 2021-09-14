import React from 'react'
import ReactMarkdown from 'react-markdown'

import mdComponents from '../utils/mdComponents'

const MdContent = ({ children, className }) => (
  <div className={className}>
    <ReactMarkdown components={mdComponents} children={children} />
  </div>
)

export default MdContent
