// from haversine import haversine

// distance calc variables
let radius = 3200.0  // 3.2km or 4 mile total diameter
let numPoints = 6


exports.getRadius = function(lat, lng){
	let circlePoints = []
		for(let i=0;i< numPoints;i++){
			let angle = Math.PI * 2 * i / numPoints
			let dx = radius * Math.cos(angle)
			let dy = radius * Math.sin(angle)
			let point = {}
			point['lat'] = lat + (180 / Math.PI) * (dy / 6378137)
			point['lng'] = lng + (180 / Math.PI) * (dx / 6378137) / Math.cos(lat * Math.PI / 180)
			circlePoints.push(point)

		// console.log(circlePoints)
	}
	return circlePoints
}
// let testSnapLocation = getRadius(35.5420586,-77.055535) //test: snap #1055

//top,top right,bottom right,bottom,bottom left,top left

// 1˚ lat= ~69miles (range 68.7 @ equator ->69.4 @ poles)
// 1˚ lng= 69.17miles @ equator-> 53miles@40˚lat -> 0 at poles

// haversine gets distance between two points
// lyon = (45.7597, 4.8422)
// paris = (48.8567, 2.3508)
// print(haversine(lyon, paris, miles=True))

