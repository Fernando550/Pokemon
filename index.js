function  random(min, max){
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
const field = document.querySelector(".container")
export class Pokemon {
    constructor({
        name,
        type,
        live,
        attacks = {},
        image
    }){
        this.name = name;
        this.type = type;
        this.live = live;
        this.attacks = attacks;
        this.power;
        this.image = image;
    }

    async attack(attack){
        const damage = await setTimeout(()=>{
            return this.power;
        }, 5000);
        return damage;
    }

    createCard(){
        const card = document.createElement("div");
        const img = document.createElement()
    }
}

export class Game{
    constructor({
        player,
        characters = [],
        field
    }){
        this.player = player;
        this.opponent = characters[random(0,3)];
        this.turn = [];
        this.field = field;
        this.play();
    }

    async play(){
        const cardPlayer = this.create();
        const cardOpponent = this.create(this.opponent);
        console.log(field)
        field.childNodes[1].appendChild(cardPlayer);
        field.childNodes[3].appendChild(cardOpponent);
        // while(this.player.live > 0 && this.opponent.live > 0){
        //     if (this.player.turn) {
        //         const AttackOpponent = await setTimeout()
        //     }
        // }
    } 

    async waitForPlayer(){
        const attack = setTimeout()
    }

    prepareToFight(){

        //create a car for user
        //create a card for opponent
    }

    create(user){
        const card = document.createElement("div");
        const img = document.createElement("img");
        if (user) {
            img.src = this.player.image;
        } else {
            img.src = this.opponent.image;
        }
        card.append(img);
        return card;
    }
}
export class Attack {
    constructor({
        type,
        damage
    }){
        this.type = type;
        this.damage = damage;
    }
    attackEnemy(){
        const min = this.power - (this.power/5);
        const max = this.power;
        const damage = random(min, max);
        return {
            damage,
            type: this.type
        };
    }
}
