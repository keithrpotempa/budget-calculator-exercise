import React from "react"

const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => (
                <p>{item.name} - {item.type} - {item.highPrice} - {item.lowPrice}</p>)
            )}
        </>
    )
}

export default ItemList