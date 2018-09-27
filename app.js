let sleepiness =1;
let boredom =1;
let hunger =1;

class Tomagotchi{
	constructor(name){
		this.name = name;
		this.sleepLevel = sleepiness;
		this.boredLevel = boredom;
		this.hungerLevel = hunger;
	}
}

setInterval( () => {
	sleepiness = sleepiness*1.15;
	boredom = boredom*1.25;
	hunger = hunger*1.35;
	
	sleep(sleepiness);
	bored(boredom);
	hungry(hunger);

}, 500)


const sleep = () =>{

}

const bored = () =>{

}

const hungry = () =>{

}

const startGame = () =>{
	let name = prompt('Give your gotch a name', 'Name');
	const tom = new Tomagotchi(name);

}



startGame();
