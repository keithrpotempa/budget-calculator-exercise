import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemTypeGroup from "../components/item-type-group";
import ApiManager from "../modules/ApiManager";

require("firebase/firestore");

const IndexPage = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [itemLists, setItemLists] = useState({});

  const getItems = () => {
    ApiManager.getAll()
      .then(response => setItemLists(groupItemsByType(response)))
  }

  const groupItemsByType = (items) => {
      const itemsDict = {}
      items.forEach(item => {
        const type = item.type;
        if (itemsDict[type]){
          itemsDict[type].push(item)
        } else {
          itemsDict[type] = [item]
        }
      })
      return itemsDict;
  }

  const handleAddSelected = (item) => {
    const newSelected = [...selectedItems];
    newSelected.push(item.id);
    setSelectedItems(newSelected);
  }
  
  const handleRemoveSelected = (item) => {
    const newSelected = [...selectedItems].filter(selected => selected !== item.id);
    setSelectedItems(newSelected);
  }

  useEffect(() => {
    getItems();
  }, []) 

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {Object.keys(itemLists).map(type => 
        <ItemTypeGroup 
          type={type}
          items={itemLists[type]}
          handleAddSelected={handleAddSelected}
          handleRemoveSelected={handleRemoveSelected}
          selectedItems={selectedItems}
        />
      )}
    </Layout>
  )
}

export default IndexPage
