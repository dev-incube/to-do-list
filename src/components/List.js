import React from 'react'
import ListItem from './ListItem'

const List = ({ list, onToggleListItem, onDeleteTask, onEditTask }) => {
  return (
    <div>
      {
        list.map((item) => (
          <ListItem item={item} onToggleListItem={onToggleListItem} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
        ))
      }
    </div>
  )
}

export default List
