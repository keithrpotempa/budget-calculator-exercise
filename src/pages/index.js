import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemTypeGroup from "../components/item-type-group";
import PriceCalc from "../components/price-calc";
import ApiManager from "../modules/ApiManager";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

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

  useEffect(() => {
    getItems();
  }, []) 

  return (
    <Layout>
      <SEO title="Home" />
      <Grid 
        container 
        direction="row"
        spacing={3} 
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <PriceCalc 
            selectedItems={selectedItems} 
            allItems={allItems} 
            budget={budget}
            setBudget={setBudget}
          />
        </Grid>
        <Grid item xs={12}>
          <h1>Items</h1>
          <Typography>Select up to one item from each type</Typography>
        </Grid>
        {Object.keys(groupedItemLists).map(type => 
          <Grid item xs={12} md={6}>
            <ItemTypeGroup
              key={type} 
              type={type}
              items={groupedItemLists[type]}
              handleAddSelected={handleAddSelected}
              handleRemoveSelected={handleRemoveSelected}
              selectedItems={selectedItems}
            />
          </Grid>
        )}
      </Grid> 
    </Layout>
  )
}

export default IndexPage
