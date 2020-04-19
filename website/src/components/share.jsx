/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const Share = ({ twitterHandle, url, title, tags }) => {
  const attributes = {
    size: 40,
    round: true,
    sx: {mx: 2}
  }
  return <div>
    <FacebookShareButton url={url}>
      <FacebookIcon {...attributes}/>
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon {...attributes}/>
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon {...attributes}/>
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon {...attributes}/>
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon {...attributes}/>
    </WhatsappShareButton>
  </div>
}

export default Share
