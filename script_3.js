 let space = prompt("Choisi un nombre entre 1 et 25");
 while(space > 25 || space <= 0)
 {
 	space = prompt("Tu dois choisir un nombre entre 1 et 25")
 };

 let hashtag = 1;
 let spaceInit = space;
 space -=1;

 console.log("Look :");
 while (hashtag <= spaceInit)
{
	 console.log(" ".repeat(space) + "#".repeat(hashtag));
	 hashtag++
	 space--
};