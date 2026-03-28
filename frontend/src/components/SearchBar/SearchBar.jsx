import React, { useContext } from 'react'
import './SearchBar.css'
import { StoreContext } from '../../Context/StoreContext'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(StoreContext)

    if (!showSearch) return null;  // ✅ hides bar when toggle is off

    return (
        <div className='search-bar'>
            <div className='search-bar-input'>
                <span>🔍</span>
                <input
                    type="text"
                    placeholder='Search for food...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoFocus
                />
                <span
                    className='search-bar-clear'
                    onClick={() => { setSearch(''); setShowSearch(false); }}
                >✕</span>
            </div>
        </div>
    )
}

export default SearchBar