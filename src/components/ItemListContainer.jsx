import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
  function onAdd() {
    console.log("Item added");
  }
  let ItemListJson = [
    {
      id: "fifa-21",
      title: "Fifa 21",
      description: "PS4",
      price: 3500,
      pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/369/products/nb_juego-playstation-fifa-21_ver_cb5795fb2cdc73be257c61cd86d40fba2-202643c1c0738b566c16249099551842-480-0.jpg",
    },
    {
      id: "god",
      title: "God of war",
      description: "PS4",
      price: 2000,
      pictureUrl: "https://cdnx.jumpseller.com/divina/image/8095248/resize/480/480?1642264715",
    },
    {
      id: "pes",
      title: "Pes 2019",
      description: "PS4",
      price: 2100,
      pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/369/products/nb_pes-2019-para-ps4_ver_a5563a82c03805d5b63e3bcef188c4291-d94be90cd7753be69316249105339805-480-0.jpg",
    },
    
  ];

  const [itemList, setItemList] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemListJson);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((res) => {
      setItemList(res);
    });
  }, []);

  return (
    <>
      <h3> {props.greeting} </h3>
      {/* <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
      <ItemList itemList={itemList} />
    </>
  );
}