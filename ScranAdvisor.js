const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// mvp
// Count the number of restaurants that we have stored
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

// Find a restaurant by its name (full name)
ScranAdvisor.prototype.findRestaurantByName = function(name){
    const result = this.restaurants.filter((value) => value["name"] == name);
    return result.pop();
}

// Return an array containing each restaurant's name
ScranAdvisor.prototype.findAllRestaurants = function() {
    return this.restaurants.map((value) => value["name"]);
}

// Find all the restaurants from a given city (pass in the city name, e.g. "Glasgow" should return 4 restaurants)
ScranAdvisor.prototype.findRestaurantByCity = function(city){
    return this.restaurants.filter((value) => value["location"]["town"] == city);
}

// extension
// Create a method that finds which one is the most common cuisine
// Create a method that allows us to find restaurants if a given substring is found in its name - e.g. the method searchByName("ru")



module.exports = ScranAdvisor;