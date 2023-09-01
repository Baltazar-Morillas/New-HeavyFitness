import React, { useEffect, useState} from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Loader from './Loader'

const ItemListContainer = () => {
  const[loading, setLoading]=useState(true)
  const [data,setData]=useState([])
  const {category}=useParams()

  useEffect(()=>{
    const db = getFirestore()

    const productos = collection(db, "PRODUCTOS")
    getDocs(productos).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>doc.data())
      if (docs.length > 0) {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      } else {
        console.log("no hay productos")
      }
      if(category){
        setData(docs.filter((producto)=>producto.categoria==category))
      }else{
        setData(docs)
      }
    })
    
  },[category])

  if(loading){
    return <Loader/>
  }

  return (
    <>
      <ItemList productos={data}/>
    </>
  )
}

export default ItemListContainer