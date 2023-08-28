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
import toast from 'react-hot-toast';
 



function App() {
  // const {data:cart} = useFetch('http://localhost:8000/cart')
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(true)
  const [error,setErr] = useState(null)
  const notify = () => toast.success('Item has been added Successfully');
  const notifyDelete = () => toast.error('Item has been Deleted');

  const handleDelete = (id)=>{

    const newCart = data.filter(data=>data.id!==id);
    notifyDelete()
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
    console.log(data)
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
  

const addItem = (event,name,description,price,img,id)=>{
  // e.preventDefault();
  event.preventDefault();
  const newData = {name,description,price,img,id}
  data.push(newData)

  setData(data)
  fetch('http://localhost:8000/cart',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newData)
  }).then(()=>{
      notify()
  })
}

  return (
    <Router>
      <div className="App">
      <Navbar data={data}></Navbar>
      
      <Routes>
        <Route path="/" element={
            <Main/>}>
  
        </Route>
        <Route  path="/:name" element={<Shopping></Shopping>}>
        
        </Route>
        <Route  path="/:product/:id" element={<Product addItem={addItem}></Product>}>
          
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
