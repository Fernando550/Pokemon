import { Pokemon, Attack } from "./index.js";
import { Game } from "./index.js";

const Pikachu = new Pokemon({
    name: "Pikachu",
    type: "electric",
    image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg?width=325",
    attacks:{
        "ThunderShock": new Attack({
            type: "electric",
            damage: 80
        }),

        "Electro Ball": new Attack({
            type: "electric",
            damage: 60
        }),

        "Quick Attack": new Attack({
            type: "Normal",
            damage: 50
        }),

        "Discharge": new Attack({
            type: "Electric",
            damage: 70
        })
    }
})
const Charmander = new Pokemon(
    {
        name: "Charmander",
        type: "fire",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvCFOFpzNrkyVk1uPO1e9xbGGX5Ha5SuEcA&usqp=CAU",
        attacks: {
            "fire Ball": new Attack({
                type: "fire",
                damage: 50
            }),
        
            "flamethrower": new Attack({
                type: "fire",
                damage: 70
            }),

            "flame Charge": new Attack({
                type: "fire",
                damage: 75
            }),

            "Frustration Shadow": new Attack({
                type: "normal",
                damage: 20
            })
        }
    }
)

const Squirtle = new Pokemon({
    name: "squirtle",
    type: "water",
    image: "https://img.joomcdn.net/7ff6debe2ecc1003e96dfda69e006418aef60a67_original.jpeg",
    attacks: {
        "Aqua Jet": new Attack({
            type: "water",
            damage: 45
        }),

        "Water Pulse": new Attack({
            type: "water",
            damage: 60
        }),

        "Aqua Tail": new Attack({
            type: "water",
            damage: 50
        }),

        "Frustration Shadow": new Attack({
            type: "normal",
            damage: 45
        })
    }
})

const Bulbasaur = new Pokemon({
    name: "bulbasaur",
    type: "plant",
    image: "https://img.joomcdn.net/32bd764d8b970d453c4efac20d566aa2e993fc9f_original.jpeg",
    attacks: {
        "Seed Bomb": new Attack({
            type: "plat",
            damage: 82
        }),

        "Power Whip": new Attack({
            type: "plat",
            damage: 62
        }),

        "Sludge Bomb": new Attack({
            type: "plat",
            damage: 75
        }),

        "Frustration Shadow": new Attack({
            type: "normal",
            damage: 10
        })
    }
})

let player;

const choosePicakhu = document.getElementById("Pikachu");
const chooseCharmander = document.getElementById("Charmander");
const chooseSquirtle = document.getElementById("Squirtle");
const chooseBulbasaur = document.getElementById("Bulbasaur");
const starGameButton = document.querySelector(".start-fight");
const cards = document.querySelectorAll(".card");
const field = document.querySelector(".container");

function chooseCard(exception){
    cards.forEach((card)=>{
        card.classList.remove("choose");
    })
    const card = cards[exception]
    card.classList.add("choose");
}


choosePicakhu.addEventListener("click", ()=>{
    chooseCard(0);
    player = Pikachu;
})

chooseCharmander.addEventListener("click",()=>{
    chooseCard(1);
    player = Charmander;
})

chooseSquirtle.addEventListener("click",()=>{
    chooseCard(2);
    player = Squirtle;
})

chooseBulbasaur.addEventListener("click", ()=>{
    chooseCard(3);
    player = Bulbasaur;
})

starGameButton.addEventListener("click", ()=> { 
    if (player) {
        const container = document.querySelector(".container");
        container.classList.add("field");
        const play = new Game({
            player: player,
            characters: [Pikachu, Charmander, Squirtle, Bulbasaur],
            field
        })
    } else {
        alert("You have to choose a Pokemon before");
    }
    
})