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
  constructor(divId, name, hp, attack, defense, abilities){
    this.divId = divId;
    this.name = name;
    this.health = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
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
