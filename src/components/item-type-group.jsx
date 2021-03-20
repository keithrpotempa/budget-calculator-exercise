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
	return (
		<>
			<Typography variant="h4">
				{type}
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