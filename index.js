

//alert(movieName);

async function load(){

    //document.querySelector("img").setAttribute("src", "./assests/loading.gif");


    let movieName = document.querySelector(".query").value;
    let query = `https://www.omdbapi.com/?apikey=bbaf6da6&t=${movieName}`;

    

    let response = await fetch(query);
    let data = await response.json();

    if(data["Response"]==="True"){
        
        document.querySelector("img").setAttribute("src",data["Poster"]);
        document.querySelector(".name").textContent = data["Title"];
        document.querySelector(".year").textContent = data["Year"];
        document.querySelector(".rated").textContent = data["Rated"];
        document.querySelector(".description").textContent = data["Plot"];

    }else{
        alert("Enter valid movie name!");
    }


    
}


document.querySelector("button").addEventListener("click",load);

document.addEventListener("keypress", function(event){
    //console.log(`key pressed ${event.key} key code = ${event.code}`);

    if (event.key == "Enter") {
        //alert(document.querySelector(".temp").value);
        load();
    }
    
});


