import React, { useState } from 'react'
import _ from 'lodash'
import Header from './components/Header'
import List from './components/List'
import './App.css';

function App() {
  const [list, setList] = useState([{
    id: 1,
    title: 'Task 1',
    isCompleted: false,
  }])
  const [showCompleted, setShowCompleted] = useState(false)
  const [lastId, setLastId] = useState(2)

  const onToggleListItem = (itemId, checked) => {
    const newList = _.cloneDeep(list)
    const selectedItem = newList.find((item) => item.id === itemId)
    selectedItem.isCompleted = checked
    setList(newList)
  }

  const onToggleCompletedItem = () => {
    setShowCompleted(!showCompleted)
  }

  const onCreateNewItem = () => {
    setList(
      [...list, { id: lastId, title: `Task ${lastId}`, isCompleted: false }]
    )
    setLastId(lastId + 1)
  }

  const onEditTask = (itemId, value) => {
    const newList = _.cloneDeep(list)
    const selectedItem = newList.find((item) => item.id === itemId)
    selectedItem.title = value
    setList(newList)
  }

  const onDeleteTask = (itemId) => {
    const newList = list.filter((item) => item.id !== itemId)
    setList(newList)
  }

  const completedList = list.filter((item) => item.isCompleted)
  const uncompletedList = list.filter((item) => !item.isCompleted)
  const completedItemNum = completedList.length

  return (
    <div className="App">
      <Header title="To Do List" onCreateNewItem={onCreateNewItem} />
      {
        completedItemNum > 0 &&
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>{completedItemNum} Completed</div>
          <div
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={onToggleCompletedItem}
          >
            {showCompleted ? 'Hide' : 'Show'}
          </div>
        </div>
      }
      {
        showCompleted &&
        <List
          list={completedList}
          onToggleListItem={onToggleListItem}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      }
      <List
        list={uncompletedList}
        onToggleListItem={onToggleListItem}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </div>
  );
}

export default App;
