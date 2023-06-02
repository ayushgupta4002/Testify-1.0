import React from 'react'

function page({params}) {
    const id = params.id;
  return (
    <div>page {id}</div>
  )
}

export default page