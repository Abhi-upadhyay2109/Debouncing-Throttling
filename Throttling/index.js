let timeout = null;
let click =true

document.getElementById("search").addEventListener("input",function(){
    if(click===true){

        clearTimeout(timeout);
        console.log(1);
        click =false;
        searchRecipes(document.getElementById("search").value);
        console.log(document.getElementById("search").value);
        timeout = setTimeout(function(){
        click= true;
        },5000);
    }
})




function searchRecipes(query){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(Response =>Response.json())
    .then(data => {
        displayRecipes(data.meals);
    })
    .catch(error => {
        console.error("There was an error fetching the recipes:",error);
    })
}


function displayRecipes(recipes){
    const recipeList = document.getElementById("recipelist");
    recipeList.innerHTML ="";

    if(recipes){
        recipes.forEach(recipe => {
            recipeList.innerHTML += `
            <div>
            <h3> ${recipe.strMeal}<h3>
            <img> src="${recipe.strMealThumb}" alt="${recipe.strMeal}" width ="200">
            </div>`;
        });
    }else{
        recipeList.innerHTML = "<p> Not Recipe found. </p>"
    }
}
