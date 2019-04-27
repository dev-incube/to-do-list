import React, { Component } from 'react'
import _ from 'lodash'
import Header from './components/Header'
import List from './components/List'
import './App.css';

class App extends Component {
  state = {
    list: [{
      id: 1,
      title: 'Task 1',
      isCompleted: true,
    }, {
      id: 2,
      title: 'Task 2',
      isCompleted: false,
    }, {
      id: 3,
      title: 'Task 3',
      isCompleted: false,
    }, {
      id: 4,
      title: 'Task 4',
      isCompleted: true,
    }],
    showCompleted: false,
    lastId: 5,
  }

  onToggleListItem = (itemId, checked) => {
    console.log(itemId, checked)
    this.setState(({ list }) => {
      const newList = _.cloneDeep(list)
      const selectedItem = newList.find((item) => item.id === itemId)
      selectedItem.isCompleted = checked
      return { list: newList }
    })
  }

  onToggleCompletedItem = () => {
    // this.setState({ showCompleted: !this.state.showCompleted })
    this.setState(({ showCompleted }) => ({ showCompleted: !showCompleted }))
  }

  onCreateNewItem = () => {
    this.setState(({ list, lastId }) => ({
      list: [...list, { id: lastId, title: `Task ${lastId}`, isCompleted: false }],
      lastId: lastId + 1,
    }))
  }

  onEditTask = (itemId, value) => {
    console.log(itemId, value)
    this.setState(({ list }) => {
      const newList = _.cloneDeep(list)
      const selectedItem = newList.find((item) => item.id === itemId)
      selectedItem.title = value
      return { list: newList }
    })
  }

  onDeleteTask = (itemId) => {
    console.log('del', itemId)
    this.setState(({ list }) => {
      const newList = list.filter((item) => item.id !== itemId)
      return {
        list: newList
      }
    })
  }

  render() {
    const { list, showCompleted } = this.state
    const completedList = list.filter((item) => item.isCompleted)
    const uncompletedList = list.filter((item) => !item.isCompleted)
    const completedItemNum = completedList.length
    return (
      <div className="App">
        <Header title="To Do List" onCreateNewItem={this.onCreateNewItem} />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>{completedItemNum} Completed</div>
          <div
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={this.onToggleCompletedItem}
          >
            {showCompleted ? 'Hide' : 'Show'}
          </div>
        </div>
        {
          showCompleted &&
          <List
            list={completedList}
            onToggleListItem={this.onToggleListItem}
            onDeleteTask={this.onDeleteTask}
            onEditTask={this.onEditTask}
          />
        }
        <List
          list={uncompletedList}
          onToggleListItem={this.onToggleListItem}
          onDeleteTask={this.onDeleteTask}
          onEditTask={this.onEditTask}
        />
      </div>
    );
  }
}

export default App;
