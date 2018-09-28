let sleepiness =1;
let boredom =1;
let hunger =1;
let age =0;

class Tomagotchi{
	constructor(name){
		this.name = name;
		this.sleepLevel = sleepiness;
		this.boredLevel = boredom;
		this.hungerLevel = hunger;
	}
}

setInterval( play = () => {
	sleepiness = sleepiness*1.1;
	boredom = boredom*1.15;
	hunger = hunger*1.2;
	age += 500/3000;
	grow(age);
	sleep(sleepiness);
	bored(boredom);
	hungry(hunger);

}, 500)

const grow = (size) =>{
	$('#age').css('height', size + 5 + '%');
}

const sleep = (slp) =>{
	$('#sleepiness').css('height', slp + 5 + '%');	
}

const bored = (brd) =>{
	$('#boredom').css('height', brd + 5 + '%');
}

const hungry = (hng) =>{
	$('#hunger').css('height', hng + 5 + '%');
}

const startGame = () =>{
	let name = prompt('Give your gotch a name', 'Name');
	$('#tomogatchi').html('<circle cx ="25" cy ="25" r="25" fill ="red"></circle>');
	const tom = new Tomagotchi(name);
	$('#intro').html('<p>make sure to feed, play, or put ' + tom.name + ' to sleep</p><p>He will grow if you keep him alive!</p>');
	play();

}




startGame();
