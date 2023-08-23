import Navbar from './Navbar'
import Main from './Main';
// import Tabs from './Tabs';
// import Tshirts from './t-shirts';
// import Watch from './watchs';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Pants from './Pants';
// import Glasses from './Glasses';
import Product from './productPage';
import Shopping from './Shopping';
import Cart from './Cart';
import Fav from './Fav';
import { useState,useEffect } from "react";
 



function App() {
  // const {data:cart} = useFetch('http://localhost:8000/cart')
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(true)
  const [error,setErr] = useState(null)

  const handleDelete = (id)=>{

    const newCart = data.filter(data=>data.id!==id);
    setData(newCart)
    fetch('http://localhost:8000/cart/'+id,{
        method:'DELETE',
    })
    .then(()=>{
      // window.location.reload(false);
      // hope to change this to state for a better exprineace but still works
    })
  }
  const getTotal = (data) =>{
    var total = 0;
    for(let i=0;i<data.length;i++){
      total+=data[i].price
    }
    return total
  }

  useEffect(()=>{
    const abortCont = new AbortController();


    setTimeout(()=>{
    fetch('http://localhost:8000/cart',{signal:abortCont.signal})
    .then(res =>{
        
    if(!res.ok){
        throw Error('Could not find the data');
        
    }
        return res.json();
        
    }).then(data => {
        setData(data)
        setIsPending(false)
        setErr(null)
    }).catch(e=>{
        if(e.name !=='AbortError'){
        setErr(e.message)
        setIsPending(false)
        }else{
            console.log('Error aborted')
        }

    })
    },1000);
    return () => abortCont.abort();


},[])
  
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={
            <Main/>}>
  
        </Route>
        <Route  path="/:name" element={<Shopping></Shopping>}>
        
        </Route>
        <Route  path="/:product/:id" element={<Product></Product>}>
          
        </Route>
        <Route  path="/Cart" element={<Cart data={data}isPending={isPending}error={error} getTotal={getTotal}handleDelete = {handleDelete}></Cart>}>
          
        </Route>
        <Route  path="/Favorite" element={<Fav></Fav>}>
          
        </Route>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
