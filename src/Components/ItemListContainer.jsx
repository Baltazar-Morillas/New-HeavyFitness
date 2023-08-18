import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
  const {category}=useParams()

  const productos = [
    {
      id: 1,
      img:"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/Proteina_oehkii.jpg",
      nombre: "Proteina WHEY X-PRO COMPLEX ENA",
      category:"suplementos",
      descripcion: "Aporta una combinación explosiva de proteínas, creatina, taurina, glutamina, aminoácidos, vitaminas, minerales y antioxidantes, en una nueva fórmula mejorada. Es la proteína de suero más avanzada del mercado." ,
      precio: 4400
    },
    {
      id: 2,
      img:"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/yeah_buddy_jqyuy6.jpg" ,
      nombre: "Pre-entreno Ronnie Coleman Signature Series Yeah Buddy",
      category:"suplementos",
      descripcion: "Polvo de pre entrenamiento para mujeres y hombres, suplemento de energía, resistencia y enfoque con beta-alanina, 420 mg de cafeína por porción, bayas ácidas, 30 porciones.",
      precio: 10000
    },
    
    {
      id: 3,
      img:"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/creatina_pioj1n.jpg" ,
      nombre: "Creatina micronizada en polvo ENA",
      category:"suplementos",
      descripcion: "Un excelente suplemento pre entrenamiento ya que colabora en la formación de los componentes energéticos, mejora la potencia muscular y retrasa la fatiga muscular, preparando al cuerpo para un mejor rendimiento fí­sico.",
      precio: 7300
    }
  ];
  const filteredProducts=productos.filter((producto)=>producto.category==category)

  const getProductos = new Promise((resolve, reject) => {
      if (productos.length > 0) {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      } else {
        reject(new Error('No hay productos'));
      }
    });
    getProductos
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })

  /*async function fetchingProductos() {
    try {
      const productosFetched = await getProductos();
      console.log(productosFetched)
    } catch (error) {
      console.log(error);
    }
  }*/
  
  

  return (
    <>
      <ItemList productos={filteredProducts}/>
    </>
  )
}

export default ItemListContainer