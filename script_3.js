let input = prompt("Combien d'étages veux-tu dans ta pyramide?")
let n = Number(input) ;
let space = ' ';
let hashtag = '#';
let count = 1;

while (count <= n) {
	console.log(' '.repeat(n-count) + '#'.repeat(count));
	count = count + 1;
}