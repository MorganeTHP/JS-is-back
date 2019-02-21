function factorial(n) {
	let nb = 1
	while(n !== 0){
		nb *= n--
	}
	return nb
}
let userInput = prompt("Donnes-moi un nombre")
console.log(`Le résultat est : ${factorial(userInput)}`);
