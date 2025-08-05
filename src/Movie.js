import React from 'react'

function Movie(props) {
  return (
    <>
      <li key={props.id}>Book: {props.name} | Price: {props.price}</li>
    </>
  )
}

export default Movie;
