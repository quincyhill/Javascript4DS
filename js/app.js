// Define user interface variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners() {
	// DOM load event
	document.addEventListener('DOMContentLoaded', getTasks)
	// Add task event
	form.addEventListener('submit', addTask)
	//   Remove task event
	taskList.addEventListener('click', removeTask)
	//   Clear all task event
	clearBtn.addEventListener('click', clearTasks)
	//   Filter through tasks event
	filter.addEventListener('keyup', filterTasks)
}

// Get tasks from local storage
function getTasks(e) {
	// init tasks array
	let tasks = []
	//   checks if value in localstorage is null
	if (localStorage.getItem('tasks') !== null) {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}

	//   loop throught tasks
	tasks.forEach(function (task) {
		//   Create li element
		const li = document.createElement('li')
		// Add class
		li.className = 'collection-item'
		// Create text node and append to li
		li.appendChild(document.createTextNode(task))
		// Create new link element
		const link = document.createElement('a')
		// Add class
		link.className = 'delete-item secondary-content'
		// Add icon html
		link.innerHTML = `<i class = "fa fa-remove"></i>`
		//   Append the link to li
		li.appendChild(link)

		//   Append li to ul
		taskList.appendChild(li)
	})
}

// Add task
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task')
	}

	//   Create li element
	const li = document.createElement('li')
	// Add class
	li.className = 'collection-item'
	// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value))
	// Create new link element
	const link = document.createElement('a')
	// Add class
	link.className = 'delete-item secondary-content'
	// Add icon html
	link.innerHTML = `<i class = "fa fa-remove"></i>`
	//   Append the link to li
	li.appendChild(link)

	//   Append li to ul
	taskList.appendChild(li)

	//   Store in local storage
	storeTaskInLocalStorage(taskInput.value)

	// Clear input
	taskInput.value = ''

	e.preventDefault()
}

// Store in local storage
function storeTaskInLocalStorage(task) {
	// init tasks array
	let tasks = []
	//   checks local storage to see if value is null
	if (localStorage.getItem('tasks') !== null) {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	//   adds task to array
	tasks.push(task)

	//   adds array to local storage
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove Task
function removeTask(e) {
	// remove Task from DOM
	if (e.target.parentElement.classList.contains('delete-item')) {
		//   ask user to confirm deletion
		if (confirm('Are you sure about that')) {
			e.target.parentElement.parentElement.remove()

			//   remove task from local storage
			removeTaskFromLocalStorage(e.target.parentElement.parentElement)
		}
	}
	e.preventDefault()
}

// remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
	// init tasks array
	let tasks = []
	//   checks local storage to see if value is null
	if (localStorage.getItem('tasks') !== null) {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}

	// loop through tasks
	tasks.forEach(function (task, index) {
		//   check if task name matches what we want to delete
		if (taskItem.textContent === task) {
			// cuts out the element at that index
			tasks.splice(index, 1)
		}
	})

	//   updates the local storage
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear all tasks
function clearTasks(e) {
	// Loop through tasks
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild)
	}

	clearTasksFromLocalStorage()
}

// Clear tasks from from local storage
function clearTasksFromLocalStorage() {
	localStorage.clear()
}

// Filter tasks
function filterTasks(e) {
	//   Get input text
	const text = e.target.value.toLowerCase()

	console.log(text)

	// loop through all tasks
	document.querySelectorAll('.collection-item').forEach(function (task) {
		// get task name
		const item = task.firstChild.textContent

		// check if task name matches input text
		if (item.toLowerCase().indexOf(text) !== -1) {
			// display task
			task.style.display = 'block'
		} else {
			// hide task
			task.style.display = 'none'
		}
	})
}
