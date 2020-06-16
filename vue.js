var app = new Vue({
	el: '#app',
	data: {
		todos: [
			{
				title: 'آموزش پایتون',
				edit: false,
				complete: false,
			},
			{
				title: 'آموزش Django',
				edit: false,
				complete: false,
			},
			{
				title: 'آموزش دیتابیس',
				edit: false,
				complete: true,
			},
		],
		newTodo: '',
	},
	methods: {
		insertTask(){
			if (this.newTodo) {
					this.todos.push({
					title: this.newTodo,
					edit: false,
					complete: false
				})
			}
			this.newTodo = ''
		},

		completeTask(index){
			this.todos[index].complete = !this.todos[index].complete
		},

		deleteTask(index){
			this.todos.splice(index, 1)
		},

		editTask(index){
			for (var i = this.todos.length - 1; i >= 0; i--) {
				this.todos[i].edit = false
			}
			this.todos[index].edit = !this.todos[index].edit
		},

		updateTodo(index, title){
			this.todos[index].title = title
			this.todos[index].edit = false
		}
	}
})