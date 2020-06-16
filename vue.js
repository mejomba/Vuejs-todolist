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
				edit: true,
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

		completeTask(){
			this.todos.complete = !this.todos.complete
		}
	}
})