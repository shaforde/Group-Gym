

class pokemans{
  constructor(name, hp, attack, defense, abilities){
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

  document.getElementById('Shanelle').addEventListener("click", x.display.bind(x));

  document.getElementById('Kendra').addEventListener("click", x.display.bind(x));

  document.getElementById('Dekwondra').addEventListener("click", x.display.bind(x));

  document.getElementById('Rajin').addEventListener("click", x.display.bind(x));

  document.getElementById('Rinzen').addEventListener("click", x.display.bind(x));





//EXAMPLE FOR API CALLS

//EACH POKEMON HAS THEIR OWN AXIOS
// axios.get("https://fizal.me/pokeapi/api/v2/id/448.json")
//   .then(function (response){
//     console.log(response.data);
//     let sprite = response.data.sprites.front_default;
//     let name = response.data.name;
//     let hp = response.data.stats[5].base_stat;
//     let atk = response.data.stats[4].base_stat;
//     let def = response.data.stats[3].base_stat;
//     // let abilities = "Abilities: " + response.data.abilities;
//
//     let Lucario = new Pokemon(sprite, name, "Lucario", hp, atk, def);
//     Lucario.display();
//     Kendra.pokemon.push(Lucario);
// });
//
// //PUT THIS FUNCTION WITHIN THE POKEMON CLASS
// //creates html tags and the info from the json
//   display(){
//     let pokemonSprite = document.createElement('img');
//     pokemonSprite.src = this.sprite;
//     pokemonSprite.id = "size";
//     document.getElementById(this.divId).appendChild(pokemonSprite);
//
//     let pokemonName = document.createElement('p');
//     pokemonName.innerHTML = "Name: " + this.name;
//     document.getElementById(this.divId).appendChild(pokemonName);
//
//     let pokemonHp = document.createElement('p');
//     pokemonHp.innerHTML = "Hp: " + this.hp;
//     document.getElementById(this.divId).appendChild(pokemonHp);
//
//     let pokemonAttack = document.createElement('p');
//     pokemonAttack.innerHTML = "Atk: " + this.atk;
//     document.getElementById(this.divId).appendChild(pokemonAttack);
//
//     let pokemonDefense = document.createElement('p');
//     pokemonDefense.innerHTML = "Def: " + this.def;
//     document.getElementById(this.divId).appendChild(pokemonDefense);
// }
