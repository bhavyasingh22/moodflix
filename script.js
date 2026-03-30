fetch("http://localhost:3000/movies")

.then(res=>res.json())

.then(data=>{

const moviesDiv=document.getElementById("movies");

data.forEach(movie=>{

const div=document.createElement("div");

div.innerHTML=`
<h3>${movie.name}</h3>
<p>Mood: ${movie.mood}</p>
`;

moviesDiv.appendChild(div);

});

});