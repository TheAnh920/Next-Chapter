import React, { useEffect } from 'react'

const SingleTagPage = () => {
  useEffect(() => {
    document.title = 'Tag | Next Chapter'
  }, [])
  return (
    <div>SingleTagPage</div>
  )
}

export default SingleTagPage