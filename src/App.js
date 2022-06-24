import { useEffect,useState } from "react";
import axios from 'axios';
import './App.css';
import Quote from "./components/Quote";

function App() {
  
  const[quotes,setQuotes] = useState([])
  const[singleQuote,setSingleQuote] = useState(undefined)

  useEffect(()=>{
    fetchQuotes()
  },[])

  useEffect(()=>{
    getNewQuote()
    console.log(quotes)
  },[quotes])

  const fetchQuotes = async ()=>{
    const fetchData = await axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
    const fetchedQuotes = await fetchData.data
    setQuotes(fetchedQuotes.quotes)
  }

  const getNewQuote = ()=>{
    if(quotes.length > 0){
      let randomIndex = Math.ceil(Math.random() * quotes.length)
      let tempObj = quotes[randomIndex]
      if(tempObj!==undefined){
        setSingleQuote({quote:tempObj.quote, author:tempObj.author})
      }     
    }
  }

  const tweetQuote = ()=>{
    const tempArr = singleQuote.author.split(" ");
    const hashTag = tempArr.join("");
    const twitterUrl =`https://twitter.com/intent/tweet?text=${singleQuote.quote}  -${singleQuote.author}&hashtags=${hashTag},inspirationalquotes`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <div className="container">
      <h1 className="title">Quote Machine</h1>  
      {
        singleQuote ? <Quote singleQuote={singleQuote} getNewQuote={getNewQuote} tweetQuote={tweetQuote} /> : <div>loading...</div>
      }
      <h4><a href='https://github.com/ceo991/random-quote-machine-with-hooks' style={{color:"aliceblue",textDecoration: "none"}}>You can see the source code here</a></h4>
    </div>
  );
}

export default App;
