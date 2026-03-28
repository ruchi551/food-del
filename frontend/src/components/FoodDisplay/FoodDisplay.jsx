import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list, search, showSearch } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if (category !== 'All' && category !== item.category) return null;
                    if (showSearch && search &&
                        !item.name.toLowerCase().includes(search.toLowerCase())) return null;
                    return (
                        <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            desc={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FoodDisplay