let app = new Vue({
	el: '#app',
    data: {
        grid: [false, false, false, false, false, false, false, false, false]
    },
	methods: {
		activateSquare(index) {
			if(this.grid[index] === true) {
                this.grid[index] = false;
                console.log(index, this.grid[index]);
            }
            else {
                this.grid[index] = true;
                console.log(index, this.grid[index]);
            }
		},
		deactivateSquare(index) {
            if(this.grid[index] === false) {
                this.grid[index] = true;
                console.log(index, this.grid[index]);
            }
            else {
                this.grid[index] = false;
                console.log(index, this.grid[index]);
            }
		}
	}
});