import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const {id}=useParams()
  const [product, setProduct] = useState([])
  
  useEffect(()=>{
    const db = getFirestore()

    const oneItem = doc(db, "PRODUCTOS", `${id}`)
    getDoc(oneItem).then((snapshot)=>{
      if(snapshot.exists()){
        const docs = snapshot.data()
        setProduct(docs)
      }
    })
  },[])
  
  return (
    <div className="cardDetail">
      <ItemDetail productos={product}/>
    </div>
  )
}

export default ItemDetailContainer