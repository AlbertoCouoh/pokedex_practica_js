//Define container of container
const contenedor = document.getElementById('container');
const contwarn = document.getElementById('div-warn');
const contData = document.getElementById('cont-data');
//get pokemons
const getPokeList = () => {
    let maxi = 10;
    for (let i = maxi - 1; i => 0; i--) {
        const elediv = document.createElement('Button');
        elediv.classList.add('btn-poke');
        elediv.onclick = function () { alert("hola"); }
        elediv.id = i.toString();
        contenedor.prepend(elediv);
        const divpo = document.getElementById(i);
        const texth3 = document.createElement('h3');
        texth3.classList.add('h3-style');
        texth3.id = 'h3-' + i.toString();
        divpo.prepend(texth3);

        if (i == 0) {
            break;
        }
    }

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${maxi}&offset=0`;
    fetch(url).then(res => res.json()).then(res => {
        const pokemons = res.results;
        console.log(pokemons);
        for (let i = 0; i < pokemons.length; i++) {
            const element = pokemons[i];
            const h3cont = document.getElementById('h3-' + i.toString());
            h3cont.textContent = (i + 1).toString() + " - " + element.name;
        }
    })
};
//getPokeList();

//Make container
const adddiv = () => {
    const pokemons = getPokeList();

    console.log(pokemons);

    for (let i = 0; i < 1; i++) {
        const elediv = document.createElement('div');
        elediv.classList.add('div-poke');
        elediv.id = i.toString();
        contenedor.prepend(elediv);
        const divpo = document.getElementById(i);
        const texth3 = document.createElement('h3');
        texth3.DOCUMENT_TYPE_NODE.add('button');
        texth3.classList.add('h3-style')
        texth3.id = 'h3-' + i.toString();
        texth3.textContent = "pokename";
        divpo.prepend(texth3);
    }
};

//Get pokemon
const fetchPokemon = () => {
    const pokeName = document.getElementById("searchPoke");
    let pokeInput = pokeName.value.toLowerCase();
    if (pokeInput.length === 0) {
        const h3warn = document.createElement('h3');
        h3warn.classList.add('h3-warni');
        h3warn.id = "h3warn";
        h3warn.textContent = "!Inserte un dato¡";
        contwarn.prepend(h3warn);
    }else{
        h3w = document.getElementById("h3warn");
        if (!h3w) {
            getInfoPoke(pokeInput);
        } else {
            elemnto = h3w.parentNode;
            elemnto.removeChild(h3w);
            getInfoPoke(pokeInput);
        }
    }

};

//Get Image Pokemon
const pokeImage = (url) => {
    const pokeImg = document.getElementById("poke-img");
    if (url != null) {
        pokeImg.src = url;
    } else {
        pokeImg.src = "img/icon_pokeball.png"
        pokeImg.classList.add('def-img')
    }

};

//Get Name Pokemon
const namePokemn = (url) => {
    const pokeNa = document.getElementById("namepokem");
    pokeNa.textContent = url;
};

//get Type Pokemon
const typePokemn = (url) => {

    const pokeNa = document.getElementById("pktype");
    let tipos = "";
    if (url.length != 1) {
        for (let i = 0; i < url.length; i++) {
            const element = url[i].type.name;
            tipos = tipos + element + ", ";

            console.log(tipos);
        }
        const typos = tipos.substring(0, tipos.length - 2);
        pokeNa.textContent = "Tipo: " + typos;
    } else {
        tipos = url[0].type.name;
        pokeNa.textContent = "Tipo: " + tipos;
    }

};
//get Hp
const getHp = (url) => {
    const pokehp = document.getElementById("hpval");
    const chp = document.getElementById("hp");
    let hpvalue = url[0].base_stat;
    chp.textContent = "HP: "+ hpvalue +" ";
    pokehp.value = hpvalue;
};

//get Attack
const getAttack = (url) => {
    const pokeattack = document.getElementById("attackval");
    const attackv = document.getElementById("attack");
    let pokeatt = url[1].base_stat;
    attackv.textContent = "ATK: "+ pokeatt +" ";
    pokeattack.value = pokeatt;
};

//get Defense
const getDefense = (url) => {
    const pokedef = document.getElementById("defval");
    const def = document.getElementById("def");
    let defval = url[2].base_stat;
    def.textContent = "DEF: "+ defval +" ";
    pokedef.value = defval;
};
//get SpAttack
const getSpAttack = (url) => {
    const spatkv = document.getElementById("speattv");
    const spatk = document.getElementById("spatt");
    let spatkval = url[3].base_stat;
    spatk.textContent = "SP.ATK: "+ spatkval +" ";
    spatkv.value = spatkval;
};


const selectTarjet = () => {
    console.log('click');
};

const getInfoPoke = (pokemonid) =>{
    let idpoke = pokemonid;
    const url = `https://pokeapi.co/api/v2/pokemon/${idpoke}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("img/sad-pikachu.gif");
            } else {
                return res.json();
            }
        }).then((data) => {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let poke_Name = data.name;
            namePokemn(poke_Name);

            let tipePoke = data.types;
            console.log(tipePoke);
            typePokemn(tipePoke);

            let pokestats = data.stats;
            getHp(pokestats);

            getAttack(pokestats);

            getDefense(pokestats);

            getSpAttack(pokestats);
        })
}