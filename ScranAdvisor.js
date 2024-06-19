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
    const result = this.restaurants.filter((restaurant) => restaurant["name"] == name);
    return result.pop();
}

// Return an array containing each restaurant's name
ScranAdvisor.prototype.findAllRestaurants = function() {
    return this.restaurants.map((restaurant) => restaurant["name"]);
}

// Find all the restaurants from a given city (pass in the city name, e.g. "Glasgow" should return 4 restaurants)
ScranAdvisor.prototype.findRestaurantByCity = function(city){
    return this.restaurants.filter((restaurant) => restaurant["location"]["town"] == city);
}

// extension
// Create a method that finds which one is the most common cuisine
ScranAdvisor.prototype.findMostCommonCuisine = function(){
    // calculate #occurances for each couisine
    // pick the couisine with highest #occurances
    let cuisineArray = [];
    this.restaurants.forEach((restaurant) => {
        cuisineArray = cuisineArray.concat(restaurant.cuisines);
    });
    return this.mode(cuisineArray);
}

ScranAdvisor.prototype.mode = function(array){
    let occurence = {};
    let max = "";
    let maxFrequency = 0;

    array.forEach((value) => {
        occurence[value] ? occurence[value]++ : occurence[value] = 1;

        if (occurence[value] > maxFrequency){
            max = value;
            maxFrequency = occurence[value];
        }
    });
    return max;
}

// Create a method that allows us to find restaurants if a given substring is found in its name - e.g. the method searchByName("ru")
ScranAdvisor.prototype.findRestaurantsBySubString = function(subString) {
    return result = this.restaurants.filter((restaurant) => restaurant["name"].toLowerCase().includes(subString));
}


module.exports = ScranAdvisor;