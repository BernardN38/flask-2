function starOutGrid(grid) {
    let rowsOfStars = []
    let columnsOfStars =[]
    let newArray = [...grid]
	for (let i = 0; i < grid.length; i++) {
        for (let x=0;x<grid.length;x++){
            if (grid[i][x] == '*') {
                rowsOfStars.push(i)
                columnsOfStars.push(x)
            }

        }
	}
    for (let row of rowsOfStars) {
        for(let i=0;i<grid.length;i++) {
            grid[row][i] = '*'
        }
    }
    for (let column of columnsOfStars) {
        for(let i=0;i<grid.length;i++) {
            grid[i][column] = '*'
        }
    }
    return newArray
}
