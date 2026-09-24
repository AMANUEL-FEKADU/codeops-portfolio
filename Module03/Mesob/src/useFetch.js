import { useEffect, useState } from "react";

export function useFetch(url){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const ctrl= new AbortController();
        async function fetcher() {
            try{
                const res=await fetch(url,{signal:ctrl.signal})
                if(!res.ok){
                    throw new Error('failed to fetch Data')

                }
                const json=await res.json()
                setData(json)
            } catch(err){
                if(err.name!=='AbortError'){
                    setError(err.message)
                }
            } finally{
                setLoading(false)
            }
            
        }
        fetcher()
        return ()=>ctrl.abort()
    },[url])

    return {data,loading,error}
}