document.getElementById('team').addEventListener("click", .display.bind());

document.getElementById('team').addEventListener("click", .display.bind());

document.getElementById('team').addEventListener("click", .display.bind());

document.getElementById('team').addEventListener("click", .display.bind());

document.getElementById('team').addEventListener("click", .display.bind());

class pokemans{
  constructor(name,hp,attack,defense,abilities){
    this.name = name;
    this.health = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

// Make a request for a user with a given ID
axios.get("https://fizal.me/pokeapi/api/v2/name/name.json")
  .then(function (response) {
    // handle success
    console.log(response);
    //get chosen pokemons stats
    console.log(response.data)
    //create the pokemons stats and call where it comes from
let x = new pokemans (
  response.data.sprites.front_default,
  response.data.name,
  response.data.stats[5].base_stat,
  response.data.stats[4].base_stat,
  response.data.stats[3].base_stat,
  response.data.abilities[0].ability.name
)
document.getElementById('x-Name').innerHTML = "Name: " + x.name;
document.getElementById('x-Hp').innerHTML = "Hp: " + x.health;
document.getElementById('x-Attack').innerHTML = "Attack: " + x.attack;
document.getElementById('x-Defense').innerHTML = "Defense: " + x.defense;
document.getElementById('x-Ability').innerHTML = "Ability: " + x.abilities;

})
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
