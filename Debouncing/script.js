let container = document.querySelector("#container");

let timeout = null;

document.getElementById("searchBox").addEventListener("input",function(){
      clearTimeout(timeout);
      console.log(1);
    timeout = setTimeout(function(){
      searchmovie(document.getElementById("searchBox").value);
      console.log(document.getElementById("searchBox").value);
    },1000);
})


let url = "6f10ab69";
const searchmovie = async(query)=>{
    try {
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${url}&s=${query}`) ;
        let data = await res.json();
        console.log(data.Search)
        showData(data.Search)
    } catch (error) {
         console.log("error",error)
    }
}


function showData(data) {
    container.innerHTML = null;
    if (data != undefined) {
      data.forEach(function (el) {
        let div = document.createElement("div");
        let poster = document.createElement("img");
        poster.src = el.Poster;
        let title = document.createElement("h3");
        title.innerText = el.Title;
        let year = document.createElement("p");
        year.innerText = el.Year;
        let imdbID = document.createElement("p");
        imdbID.innerText = el.imdbID;
        div.append(poster, title, year, imdbID);
        container.append(div);
      });
    } else {
      let h1 = document.createElement("h1");
      h1.innerText = "Not Found Any Movies for the Search!";
      container.append(h1);
    }
  };
