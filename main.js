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

  //jigglypuff
  // Make a request for a pokemon from the json
  axios.get('https://fizal.me/pokeapi/api/v2/name/jigglypuff.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
        let name = response.data.name;
        let hp = response.data.stats[5].base_stat;
        let attack = response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;

      let jigglypuff = new pokemans ("jigStats", name, hp, attack, defense, abilities);
      jigglypuff.display();
    });

  //teddiursa
  // Make a request for a pokemon from the json
  axios.get('https://fizal.me/pokeapi/api/v2/name/teddiursa.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
        let name = response.data.name;
        let hp = response.data.stats[5].base_stat;
        let attack = response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;

      let teddiursa = new pokemans ("tedStats", name, hp, attack, defense, abilities);
      teddiursa.display();
});
//bellossom
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/bellossom.json')
  .then(function (response) {
    // handle success
    console.log(response.data);
      let name = response.data.name;
      let hp = response.data.stats[5].base_stat;
      let attack = response.data.stats[4].base_stat;
      let defense = response.data.stats[3].base_stat;
      let abilities = response.data.abilities[0].ability.name;

    let bellossom = new pokemans ("bellStats", name, hp, attack, defense, abilities);
    bellossom.display();
  });
//lucario
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/lucario.json')
.then(function (response) {
  // handle success
  console.log(response.data);
    let name = response.data.name;
    let hp = response.data.stats[5].base_stat;
    let attack = response.data.stats[4].base_stat;
    let defense = response.data.stats[3].base_stat;
    let abilities = response.data.abilities[0].ability.name;

  let lucario = new pokemans ("lucStats", name, hp, attack, defense, abilities);
  lucario.display();
});
//delphox
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/delphox.json')
.then(function (response) {
  // handle success
  console.log(response.data);
    let name = response.data.name;
    let hp = response.data.stats[5].base_stat;
    let attack = response.data.stats[4].base_stat;
    let defense = response.data.stats[3].base_stat;
    let abilities = response.data.abilities[0].ability.name;

  let delphox = new pokemans ("delStats", name, hp, attack, defense, abilities);
  delphox.display();
});
// lapras
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/lapras.json')
.then(function (response) {
  // handle success
  console.log(response.data);
    let name = response.data.name;
    let hp = response.data.stats[5].base_stat;
    let attack = response.data.stats[4].base_stat;
    let defense = response.data.stats[3].base_stat;
    let abilities = response.data.abilities[0].ability.name;

  let lapras = new pokemans ("lapStats", name, hp, attack, defense, abilities);
  lapras.display();
});
// ditto
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/ditto.json')
  .then(function (response) {
    // handle success
    console.log(response.data);
      let name = response.data.name;
      let hp = response.data.stats[5].base_stat;
      let attack = response.data.stats[4].base_stat;
      let defense = response.data.stats[3].base_stat;
      let abilities = response.data.abilities[0].ability.name;

    let ditto = new pokemans ("ditStats", name, hp, attack, defense, abilities);
    ditto.display();
  });
// typhlosion
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/typhlosion.json')
.then(function (response) {
  // handle success
  console.log(response.data);
    let name = response.data.name;
    let hp = response.data.stats[5].base_stat;
    let attack = response.data.stats[4].base_stat;
    let defense = response.data.stats[3].base_stat;
    let abilities = response.data.abilities[0].ability.name;

  let typhlosion = new pokemans ("typhStats", name, hp, attack, defense, abilities);
  typhlosion.display();
});
// darkrai
// Make a request for a pokemon from the json
axios.get('https://fizal.me/pokeapi/api/v2/name/darkrai.json')
  .then(function (response) {
    // handle success
    console.log(response.data);
      let name = response.data.name;
      let hp = response.data.stats[5].base_stat;
      let attack = response.data.stats[4].base_stat;
      let defense = response.data.stats[3].base_stat;
      let abilities = response.data.abilities[0].ability.name;

    let darkrai = new pokemans ("darkStats", name, hp, attack, defense, abilities);
    darkrai.display();
  });
  // infernape
  // Make a request for a pokemon from the json
  axios.get('https://fizal.me/pokeapi/api/v2/name/infernape.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
        let name = response.data.name;
        let hp = response.data.stats[5].base_stat;
        let attack = response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;

      let infernape = new pokemans ("inferStats", name, hp, attack, defense, abilities);
      infernape.display();
    });
    // sceptile
    // Make a request for a pokemon from the json
    axios.get('https://fizal.me/pokeapi/api/v2/name/sceptile.json')
      .then(function (response) {
        // handle success
        console.log(response.data);
          let name = response.data.name;
          let hp = response.data.stats[5].base_stat;
          let attack = response.data.stats[4].base_stat;
          let defense = response.data.stats[3].base_stat;
          let abilities = response.data.abilities[0].ability.name;

        let sceptile = new pokemans ("sceptStats", name, hp, attack, defense, abilities);
        sceptile.display();
      });
  // garchomp
  // Make a request for a pokemon from the json
  axios.get('https://fizal.me/pokeapi/api/v2/name/garchomp.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
        let name = response.data.name;
        let hp = response.data.stats[5].base_stat;
        let attack = response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;

      let garchomp = new pokemans ("garStats", name, hp, attack, defense, abilities);
      garchomp.display();
    });
  // pikachu
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
    
      let pikachu = new pokemans ("pikaStats", name, hp, attack, defense, abilities);
      pikachu.display();
    });
  // metagross
  // Make a request for a pokemon from the json
  axios.get('https://fizal.me/pokeapi/api/v2/name/metagross.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
        let name = response.data.name;
        let hp = response.data.stats[5].base_stat;
        let attack = response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;

      let metagross = new pokemans ("metaStats", name, hp, attack, defense, abilities);
      metagross.display();
    });

  // hydreigon
  // Make a request for a pokemon from the json
  axios.get('https://fizal.me/pokeapi/api/v2/name/hydreigon.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
        let name = response.data.name;
        let hp = response.data.stats[5].base_stat;
        let attack = response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;

      let hydreigon = new pokemans ("hydStats", name, hp, attack, defense, abilities);
      hydreigon.display();
    });


