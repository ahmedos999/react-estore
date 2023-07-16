import { useState,useEffect } from "react";

const useFetch = (endpoint)=>{

    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [err,setErr] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController();


        setTimeout(()=>{
        fetch(endpoint,{signal:abortCont.signal})
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


    },[endpoint])

    return {data,isPending,err}
}

export default useFetch;