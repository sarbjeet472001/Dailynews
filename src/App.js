import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import moon from './components/mm.jpg'
import sun from './components/ssuunn.png'
import Search from './components/Search';
import Error from './components/Error';

function App() {
  const navigate=useNavigate();
  const apikey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const [mode,setmode]=useState("light");
  const [tcol,setTcol]=useState("dark");
  const [col,setCol]=useState("body-tertiary")
  const [im,setIm]=useState(moon);
  const [value,setValue]=useState("");
  const [k,setK]=useState("");

  const res=(word)=>{
    return word.replace(/\s+/g,' ').trim();
  }

  const searchNews=(e)=>{
    const data=e.target.value
     setValue(data)
  }
  const handlesn=(e)=>{
    e.preventDefault();
    console.log(res(value));
    if(res(value)!==""){
      navigate('/search')
      setK(res(value))
    }
  }

  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      setTcol("light");
      setCol("dark")
      setIm(sun)
      document.body.style.background="#042743"
    }else{
      setmode("light");
      setTcol("dark");
      setCol("body-tertiary")
      setIm(moon)
      document.body.style.background="white";
    }
  }

  return (
    <>
    <Navbar tooglemode={togglemode} im={im} tcol={tcol} col={col} value={value} handlesn={handlesn} searchNews={searchNews}/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
    <Routes>
      <Route path='/' element={<News pagesize={6} tcol={tcol} apikey={apikey} setProgress={setProgress} cat="general" key="general" country="in" />}/>
      <Route path='/business' element={<News pagesize={6} tcol={tcol} apikey={apikey} setProgress={setProgress} cat="business" key="business" country="in" />}/>
      <Route path='/entertainment' element={<News pagesize={6} tcol={tcol} apikey={apikey} setProgress={setProgress} cat="entertainment" key="entertainment" country="in" />}/>
      <Route path='/general' element={<News pagesize={6} tcol={tcol} apikey={apikey} setProgress={setProgress} cat="general" key="general" country="in" />}/>
      <Route path='/health' element={<News pagesize={6} tcol={tcol}  apikey={apikey} setProgress={setProgress} cat="health" key="health" country="in" />}/>
      <Route path='/science' element={<News pagesize={6} tcol={tcol} apikey={apikey} setProgress={setProgress} cat="science" key="science" country="in" />}/>
      <Route path='/sports' element={<News pagesize={6} tcol={tcol}  apikey={apikey} setProgress={setProgress} cat="sports" key="sports" country="in" />}/>
      <Route path='/technology' element={<News pagesize={6} tcol={tcol}  apikey={apikey} setProgress={setProgress} cat="technology" key="technology" country="in" />}/>
      <Route path='/search' element={<Search pagesize={6} tcol={tcol} value={k} apikey={apikey} setProgress={setProgress} cat="technology" key="search" country="in"/>}/>
      <Route path='*' element={<Error tcol={tcol}/>}/>
    </Routes>
    </>
  );
}

export default App;
