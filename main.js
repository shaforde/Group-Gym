// // document.getElementById('team').addEventListener("click", .display.bind());
// //
// // document.getElementById('team').addEventListener("click", .display.bind());
// //
// // document.getElementById('team').addEventListener("click", .display.bind());
// //
// // document.getElementById('team').addEventListener("click", .display.bind());
// //
// // document.getElementById('team').addEventListener("click", .display.bind());



class pokemans{
<<<<<<< HEAD
  constructor(divId, name, hp, attack, defense, abilities){
    this.divId = divId;
=======
  constructor(name, hp, attack, defense, abilities){
>>>>>>> 69a8f0d8c9b2373c3b468c43e20d41d78339f24e
    this.name = name;
    this.health = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
<<<<<<< HEAD
=======

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







//EXAMPLE FOR API CALLS

//EACH POKEMON HAS THEIR OWN AXIOS
axios.get("https://fizal.me/pokeapi/api/v2/id/448.json")
  .then(function (response){
    console.log(response.data);
    let sprite = response.data.sprites.front_default;
    let name = response.data.name;
    let hp = response.data.stats[5].base_stat;
    let atk = response.data.stats[4].base_stat;
    let def = response.data.stats[3].base_stat;
    // let abilities = "Abilities: " + response.data.abilities;

    let Lucario = new Pokemon(sprite, name, "Lucario", hp, atk, def);
    Lucario.display();
    Kendra.pokemon.push(Lucario);
});

//PUT THIS FUNCTION WITHIN THE POKEMON CLASS
//creates html tags and the info from the json
>>>>>>> 69a8f0d8c9b2373c3b468c43e20d41d78339f24e
  display(){
    let pokemonName = document.createElement('p');
    pokemonName.innerHTML = "Name: " + this.name;
    document.getElementById(this.divId).appendChild(pokemonName);

    let pokemonHp = document.createElement('p');
    pokemonHp.innerHTML = "Hp: " + this.health;
    document.getElementById(this.divId).appendChild(pokemonHp);

    let pokemonAttack = document.createElement('p');
    pokemonAttack.innerHTML = "Atk: " + this.attack;
    document.getElementById(this.divId).appendChild(pokemonAttack);

    let pokemonDefense = document.createElement('p');
    pokemonDefense.innerHTML = "Def: " + this.defense;
    document.getElementById(this.divId).appendChild(pokemonDefense);

    let pokemonAbilities = document.createElement('p');
    pokemonAbilities.innerHTML = "Abi: " + this.abilities;
    document.getElementById(this.divId).appendChild(pokemonAbilities);
  }
}

<<<<<<< HEAD
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/pikachu.json')
  .then(function (response) {
    // handle success
    console.log(response.data);
      let name = response.data.name;
      let hp = response.data.stats[5].base_stat;
      let attack = response.data.stats[4].base_stat;
      let defense = response.data.stats[3].base_stat;
      let abilities = response.data.abilities[0].ability.name;

    let pikachu = new pokemans ("poke1", name, hp, attack, defense, abilities);
    pikachu.display();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
=======
>>>>>>> 69a8f0d8c9b2373c3b468c43e20d41d78339f24e
