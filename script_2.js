function factorial(n) {
	let nb = 1;
	if (n == 0 || n == 1)
		return 1;
	while(n !== 0) {
		nb *= n--
	}
	return nb
}
let userInput = prompt("De quel nombre veux-tu calculer la factorielle ?")
console.log(`Le résultat est : ${factorial(userInput)}`);