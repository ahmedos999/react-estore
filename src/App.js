import Navbar from './Navbar'
import Main from './Main';
import Tabs from './Tabs';
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
import PDF from './pdf';

import React, {Suspense } from 'react';
import './i18n'
 



function App() {
  // const {data:cart} = useFetch('http://localhost:8000/cart')
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(true)
  const [error,setErr] = useState(null)
  const [Favdata,setFavdata] = useState(null)
  const [FavisPending,setFavisPending] = useState(true)
  const [Faverror,setFaverror] = useState(null)
  const [curr,setCurr] = useState(null)
  const notify = () => toast.success('Item has been added Successfully');
  const notifyDelete = () => toast.error('Item has been Deleted');
  const notifyFav = () => toast('Item has been added to favourite',{
    icon:'❤️',
  });
  const notifyRemoveFav = () => toast.error('Item has been Removed');
  const notifyAlreadyFav = () => toast('Item has been favourite', {
    icon: '⚠️',
  });
  const notifyalready = () => toast('item already in Cart', {
    icon: '⚠️',
  });
  const max = () => toast('maxuiman count per item is 5', {
    icon: '⚠️',
  });


  
  

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

    setTimeout(()=>{
      fetch('http://localhost:8000/fav',{signal:abortCont.signal})
      .then(res =>{
          
      if(!res.ok){
          throw Error('Could not find the data');
          
      }
          return res.json();
          
      }).then(data => {
          setFavdata(data)
          setFavisPending(false)
          setFaverror(null)
      }).catch(e=>{
          if(e.name !=='AbortError'){
          setFaverror(e.message)
          setFavisPending(false)
          }else{
              console.log('Error aborted')
          }
  
      })
      },1000)

    return () => abortCont.abort();

    


},[])

const changeTab = (name)=>{
  setCurr(name)
}

const addItem = (event,name,description,price,img,cate,counter,size,color,total,id)=>{
  const newData = {name,description,price,img,cate,counter,size,color,total,id}
  var flag = true;
  for(let i=0;i<data.length;i++){
    if(data[i].id===id){
      flag = false;
    }
  }
  console.log(flag)
  if(flag){
    //  event.preventDefault();
  
  // data.push(newData)
  
  // const newdata = data

  setData(prevState => [...prevState, newData])


  fetch('http://localhost:8000/cart',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newData)
  }).then(()=>{
    
      notify()
  })
  }else{
    notifyalready()
  }
}
const addtoFav = (event,name,description,price,img,cate,id)=>{
  const newData = {name,description,price,img,cate,id}
  var flag = true;
  for(let i=0;i<Favdata.length;i++){
    if(Favdata[i].id===id){
      flag = false;
    }
  }
  if(flag){

  setFavdata(prevState => [...prevState, newData])

  fetch('http://localhost:8000/fav',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newData)
  }).then(()=>{
    
      notifyFav()
  })
  }else{
    notifyAlreadyFav()
  }
}
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
const removeFav = (id)=>{

  const newCart = Favdata.filter(data=>data.id!==id);
  notifyRemoveFav()
  setFavdata(newCart)
  fetch('http://localhost:8000/fav/'+id,{
      method:'DELETE',
  })
  .then(()=>{
    
    // window.location.reload(false);
    // hope to change this to state for a better exprineace but still works
  })
}
const updateCounter = (id,symbol) => {
 const updatedarray = data.map((item)=>{
    if(item.id===id){
      symbol==='+'?item.counter<5?item.counter++:max():item.counter>1?item.counter--:console.log('cant remove')
      item.total = item.price*item.counter
    }
    return item
  })

  setData(updatedarray)
};
const getTotal = (data) =>{
  console.log(data)
  var total = 0;
  for(let i=0;i<data.length;i++){
    total+=data[i].total
  }
  return total
}

  return (
    <Suspense fallback={null}>
    <Router>
      <div className="App">
      <Navbar data={data}></Navbar>
      
      <Routes>
        <Route path="/" element={
            <><Tabs curr={curr} changeTab={changeTab}></Tabs><Main/></>}>
  
        </Route>
        <Route  path="/:name" element={<><Tabs curr={curr} changeTab={changeTab} ></Tabs><Shopping addItem={addItem} addtoFav={addtoFav}></Shopping></>}>
        
        </Route>
        <Route  path="/:product/:id" element={<Product addItem={addItem}></Product>}>
          
        </Route>
        <Route  path="/Cart" element={<Cart data={data}isPending={isPending}error={error} getTotal={getTotal}handleDelete = {handleDelete} updateCounter={updateCounter}></Cart>}>
          
        </Route>
        <Route  path="/Favorite" element={<Fav Favdata={Favdata} FavisPending={FavisPending} Faverror={Faverror} removeFav={removeFav} addItem={addItem}></Fav>}>
          
        </Route>
        <Route  path="/Cart/pdf" element={<PDF data={data}isPending={isPending}error={error} getTotal={getTotal}></PDF>}>
          
        </Route>
      </Routes>
    </div>
    </Router>
    </Suspense>
  );
}

export default App;
