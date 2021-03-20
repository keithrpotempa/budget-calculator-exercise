import React from "react";
import { Typography } from "@material-ui/core";

import ItemList from "./item-list";

const ItemTypeGroup = ({
	type,
	items, 
	handleAddSelected, 
	handleRemoveSelected, 
	selectedItems
}) => {

	const formatTypeName = () => {
		const typeNameWords = type.split("_");
		const formattedWords = typeNameWords.map(word => {
		  return word[0].toUpperCase() + word.substr(1).toLowerCase()
		})
		return formattedWords.join(" ")
	}

	return (
		<>
			<Typography variant="h4">
				{formatTypeName(type)}
			</Typography>
			<ItemList 
				items={items} 
				handleAddSelected={handleAddSelected}
				handleRemoveSelected={handleRemoveSelected}
				selectedItems={selectedItems}
			/>
		</>
	)
}

export default ItemTypeGroup