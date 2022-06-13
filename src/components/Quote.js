import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faQuoteLeftAlt, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Quote({singleQuote, getNewQuote, tweetQuote}) {
  
  return (
    <div>             
      <div className = "quote-box" id="quote-box">
        <h4 className = "quote" id="text">{singleQuote.quote}</h4>
        <p id="author"><em>--{singleQuote.author}</em></p>
        <button onClick={tweetQuote} className="tweet-quote"><a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${singleQuote.quote}  -${singleQuote.author}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></button>
        <button id="new-quote" onClick={getNewQuote}><FontAwesomeIcon icon={faQuoteLeftAlt} />New Quote<FontAwesomeIcon icon={faQuoteRight} /></button>
      </div>
    </div>
  )
}

export default Quote