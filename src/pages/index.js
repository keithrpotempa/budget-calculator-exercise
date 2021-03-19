import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemList from "../components/item-list";

import ApiManager from "../modules/ApiManager";
const firebase = require("firebase");

require("firebase/firestore");

const IndexPage = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    ApiManager.getAll()
      .then(setItems)
  }

  useEffect(() => {
    getItems();
  }, []) 

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <ItemList items={items} />
    </Layout>
  )
}

export default IndexPage
