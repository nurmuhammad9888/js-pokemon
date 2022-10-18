var elList = document.querySelector(".list");

for(var pokemon of pokemons){
    var elItem = document.createElement("li");
    elItem.classList.add("position-relative")
    elItem.classList.add("mx-auto")
    elItem.classList.add("col-12")
    elItem.classList.add("col-md-4")
    elItem.classList.add("col-lg-3")
    elItem.classList.add("pokemon-list")
    
    var elTitle = document.createElement("h3");
    elTitle.classList.add("pokemon-title")
    
    var elBadge = document.createElement("span");
    elBadge.classList.add("position-absolute" ,"top-0" ,"start-100" ,"translate-middle" ,"badge" ,"rounded-pill" ,"bg-danger")
    
    var elImg = document.createElement("img")
    
    var elTime = document.createElement("time");
    elTime.classList.add("position-absolute" ,"bottom-0" ,"start-100" ,"translate-middle" ,"badge" ,"rounded-pill" ,"bg-warning" , "text-dark")
    
    var elText = document.createElement("p");
    elText.classList.add("pokemon-text")

    elTitle.textContent = pokemon.name;
    elBadge.textContent = pokemon.num;
    elImg.src = pokemon.img;
    elImg.width = "250";
    elImg.height = "250";
    
    elTime.textContent = pokemon.spawn_time;
    elText.textContent = pokemon.candy;
    
    elItem.appendChild(elTitle);
    elItem.appendChild(elBadge);
    elItem.appendChild(elImg);
    elItem.appendChild(elTime);
    elItem.appendChild(elText);
    
    elList.appendChild(elItem)
    
}
