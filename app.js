let sleepiness =1;
let boredom =1;
let hunger =1;
let age =0;
let sleepinessLevel =0;
let boredomLevel = 0;
let hungerLevel = 0;

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
//	console.log(size);
	$('#age').css('height', (size +5)+ '%');
	$('#age').text(Math.floor((size)));
}

const sleep = (slp) =>{
//	console.log(slp);
	//8.5 cuz there's 85% of the page left
	sleepinessLevel = slp/8.5;
	$('#sleepiness').css('height', (slp) +5+ '%');	
	$('#sleepiness').text(Math.floor(sleepinessLevel)+1);
}

const bored = (brd) =>{
//	console.log(brd);
	boredomLevel = brd/8.5;
	$('#boredom').css('height', (brd) + 5 + '%');
	$('#boredom').text(Math.floor(boredomLevel)+1);
}

const hungry = (hng) =>{
	console.log(hng);
	hungerLevel = hng/8.5;
	console.log('level'+hungerLevel);
	$('#hunger').css('height', (hng) + 5 + '%');
	$('#hunger').text(Math.floor(hungerLevel)+1);
}

const interact = () => {

	console.log('doohickey');
	$('#hunger-button').on('click', () => {
		if(hunger > 8.5){
			hunger-=8.5;
			$('#hunger').css('height', hunger + 5 + '%');
		}
	
	});
	$('#sleep-button').on('click', () => {
		if (sleepiness > 8.5){
			sleepiness-=8.5;
			$('#sleepiness').css('height', sleepiness + 5 + '%');
		}
	});
	$('#bored-button').on('click', () => {
		if (boredom > 8.5){
			boredom-=8.5;
			$('#boredom').css('height', boredom +5 + '%');
		}
	});
	('#evolve-button').on('click', () => {

	});
}

const startGame = () =>{
	let name = prompt('Give your gotch a name', 'Name');
	$('#tomogatchi').html('<circle cx ="25" cy ="25" r="25" fill ="red"></circle>');
	const tom = new Tomagotchi(name);
	$('#intro').html('<p>make sure to feed, play, or put ' + tom.name + ' to sleep<br/></p><p>He will grow if you keep him alive!</p>');
	play();
	interact();

}




startGame();
