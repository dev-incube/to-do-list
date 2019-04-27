import React from 'react'

const Header = ({ title, onCreateNewItem }) => {
  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <h1>{title}</h1>
        <button style={{ height: 40, width: 40 }} onClick={onCreateNewItem}> + </button>
      </div>
  )
}

export default Header
