let xp = prompt("Qual sua quantidade de experiência?")
let nome = prompt("Qual é o nome do heroi?");
 
switch (true) {
case (xp >= 0 && xp <= 1000):
console.log(`O heroi de nome ${nome} é ferro`);
break;
case (xp >= 1001 && xp <= 2000):
console.log(`O heroi de nome ${nome} está no nível Bronze`);
break;
case (xp >= 2.001 && xp <= 5000):
console.log(`O heroi de nome ${nome} está no nível Prata`);
break;
case (xp >= 5001 && xp <= 7000):
console.log(`O heroi de nome ${nome} está no nível Ouro`);
break;
case (xp >= 7001 && xp <= 8000):
console.log(`O heroi de nome ${nome} está no nível Platina`);
break;
case (xp >= 8001 && xp <= 9000):
console.log(`O heroi de nome ${nome} está no nível Ascendente`);
break;
case (xp >= 9001 && xp <= 10000):
console.log(`O heroi de nome ${nome} está no nível Imortal`);
break;
case (xp >= 9001 && xp <= 10000):
console.log(`O heroi de nome ${nome} está no nível Imortal`);
break;
case (xp >= 100001):
console.log(`O heroi de nome ${nome} está no nível radiante`);
break;
} 

