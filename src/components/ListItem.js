import React from 'react'

const ListItem = ({ item, onToggleListItem, onDeleteTask, onEditTask }) => {
  return (
    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={(e) => onToggleListItem(item.id, e.target.checked)}
        />
        <input
          style={{ width: 300 }}
          value={item.title}
          onChange={(e) => onEditTask(item.id, e.target.value)}
        />
      </div>
      <button onClick={() => onDeleteTask(item.id)}>Remove</button>
    </div>
  )
}

export default ListItem
