import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemTypeGroup from "../components/item-type-group";
import PriceRange from "../components/price-range";
import ApiManager from "../modules/ApiManager";
import { Typography, TextField } from "@material-ui/core";

// import "firebase/firestore";

const IndexPage = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [groupedItemLists, setGroupedItemLists] = useState({});
  const [allItems, setAllItems] = useState([]);
  const [budget, setBudget] = useState(0);

  const getItems = () => {
    ApiManager.getAll()
      .then(response => {
        setGroupedItemLists(groupItemsByType(response))
        setAllItems(response)
      })
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

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  }

  useEffect(() => {
    getItems();
  }, []) 

  return (
    <Layout>
      <SEO title="Home" />
      <TextField 
        id="budget-input" 
        label="Budget" 
        variant="outlined"
        type="number"
        onChange={handleBudgetChange} 
      />
      <PriceRange selectedItems={selectedItems} allItems={allItems} budget={budget}/>
      <h1>Items</h1>
      <Typography>Select up to one item from each type</Typography>
      {Object.keys(groupedItemLists).map(type => 
        <ItemTypeGroup
          key={type} 
          type={type}
          items={groupedItemLists[type]}
          handleAddSelected={handleAddSelected}
          handleRemoveSelected={handleRemoveSelected}
          selectedItems={selectedItems}
        />
      )}
    </Layout>
  )
}

export default IndexPage
