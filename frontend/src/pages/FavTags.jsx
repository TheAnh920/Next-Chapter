import React, { useEffect } from 'react'

const FavTags = () => {
  useEffect(() => {
    document.title = 'Favorite Tags | Next Chapter'
  }, [])
  return (
    <div>FavTags</div>
  )
}

export default FavTags