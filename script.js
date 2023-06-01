let main = document.querySelector('.main');
let vkhod1 = document.querySelector('.vkhod1');
let vkhod2 = document.querySelector('.vkhod2');
let vkhod3 = document.querySelector('.vkhod3');
let loc1 = document.querySelector('.location1');
let loc2 = document.querySelector('.location2');
let loc3 = document.querySelector('.location3');
let loc_win = document.querySelector('.loc_win');
let scoreMainBox = document.querySelector('.scoreMainBox');
let scoreMain = 0;

// 1 location
vkhod1.onclick = function() {
	main.style.display = 'none';
	loc1.style.display = 'block';

	let btn1Loc1 = document.querySelector('.verno_loc1');
	let btn2Loc1 = document.querySelector('.neverno1_loc1');
	let btn3Loc1 = document.querySelector('.neverno2_loc1');

	btn1Loc1.onclick = function() {
		alert('Верный ответ! И получает 1 очко');
		loc1.style.display = 'none';
		main.style.display = 'block';
		scoreMain = scoreMain + 1;
		scoreMainBox.innerHTML = scoreMain;
		if (scoreMain == 3)	{
			alert("Молодец ты закончил школу!");
			main.style.display = 'none';
			loc1.style.display = 'none';
			loc2.style.display = 'none';
			loc3.style.display = 'none';
			loc_win.style.display = 'block';
		}
	}
	btn2Loc1.onclick = function() {
		alert('Неверный ответ! И не получает 1 очко');
		loc1.style.display = 'none';
		main.style.display = 'block';
	}
	btn3Loc1.onclick = function() {
		alert('Неверный ответ! И не получает 1 очко');
		loc1.style.display = 'none';
		main.style.display = 'block';
	}
}

// 2 location
vkhod2.onclick = function() {
	main.style.display = 'none';
	loc2.style.display = 'block';

	let player1Loc2 = true;
	let player2Loc2 = false;

	let player1_choiseLoc2 = null;
	let player2_choiseLoc2 = null;

	let textLoc2 = document.querySelector(".infoLoc2");
	let choise_player1Loc2 = document.querySelector(".choice-player-1Loc2");
	let choise_player2Loc2 = document.querySelector(".choice-player-2Loc2");

	document.addEventListener("keydown", function(arg) {
	// 1 игрок
		if(player1Loc2 == true && player2Loc2 == false) {
			if(arg.code == "KeyA") {
				console.log("игрок 1 нажал на А");
				player1_choiseLoc2 = "камень";
				textLoc2.innerHTML = "Ход одноклассника";
				player2Loc2 = true;
				player1Loc2 = false;
			}

			else if(arg.code == "KeyS") {
				console.log("игрок 1 нажал на S");
				player1_choiseLoc2 = "ножницы";
				textLoc2.innerHTML = "Ход одноклассника";
				player2Loc2 = true;
				player1Loc2 = false;
			}

			else if(arg.code == "KeyD") {
				console.log("игрок 1 нажал на D");
				player1_choiseLoc2 = "бумага";
				textLoc2.innerHTML = "Ход одноклассника";
				player2Loc2 = true;
				player1Loc2 = false;
			}
		}
	// 2 игрок
		if(player1Loc2 == false && player2Loc2 == true) {
			if(arg.code == "KeyJ") {
				console.log("игрок 1 нажал на J");
				player2_choiseLoc2 = "камень";
				player2Loc2 = false;
				setTimeout(show_choiseLoc2, 1000);
				setTimeout(finishLoc2, 2000);
			}

			else if(arg.code == "KeyK") {
				console.log("игрок 1 нажал на K");
				player2_choiseLoc2 = "ножницы";
				player2Loc2 = false;
				setTimeout(show_choiseLoc2, 1000);
				setTimeout(finishLoc2, 2000);
			}

			else if(arg.code == "KeyL") {
				console.log("игрок 1 нажал на L");
				player2_choiseLoc2 = "бумага";
				player2Loc2 = false;
				setTimeout(show_choiseLoc2, 1000);
				setTimeout(finishLoc2, 2000);
			}
		}
	})

	function show_choiseLoc2() {
	// 1 игрок
		if(player1_choiseLoc2 == "камень") {
			choise_player1Loc2.style.backgroundImage = 'url(kamen.png)';
			choise_player1Loc2.style.backgroundSize = '100%';
		}
		else if(player1_choiseLoc2 == 'ножницы') {
			choise_player1Loc2.style.backgroundImage = 'url(nozhnitsy.png)';
			choise_player1Loc2.style.backgroundSize = '100%';
		}
		else if(player1_choiseLoc2 == 'бумага') {
			choise_player1Loc2.style.backgroundImage = 'url(bumaga.png)';
			choise_player1Loc2.style.backgroundSize = '100%';
		}
	// 2 игрок
		if(player2_choiseLoc2 == 'камень') {
			choise_player2Loc2.style.backgroundImage = 'url(kamen.png)';
			choise_player2Loc2.style.backgroundSize = '100%';
		}
		else if(player2_choiseLoc2 == 'ножницы') {
			choise_player2Loc2.style.backgroundImage = 'url(nozhnitsy.png)';
			choise_player2Loc2.style.backgroundSize = '100%';
		}
		else if(player2_choiseLoc2 == 'бумага') {
			choise_player2Loc2.style.backgroundImage = 'url(bumaga.png)';
			choise_player2Loc2.style.backgroundSize = '100%';
		}
	}

	function finishLoc2() {
		if(player1_choiseLoc2 == player2_choiseLoc2) {
			alert('Ничья');
			loc2.style.display = 'none';
			main.style.display = 'block';
		}
		else if(player1_choiseLoc2 == 'камень' && player2_choiseLoc2 == 'ножницы') {
			alert('Победа ученика! И получает 1 очко.');
			loc2.style.display = 'none';
			main.style.display = 'block';
			scoreMain = scoreMain + 1;
			scoreMainBox.innerHTML = scoreMain;
			if (scoreMain == 3)	{
				alert("Молодец ты закончил школу!");
				main.style.display = 'none';
				loc1.style.display = 'none';
				loc2.style.display = 'none';
				loc3.style.display = 'none';
				loc_win.style.display = 'block';
			}
		}
		else if(player1_choiseLoc2 == 'ножницы' && player2_choiseLoc2 == 'бумага') {
			alert('Победа ученика! И получает 1 очко.');
			loc2.style.display = 'none';
			main.style.display = 'block';
			scoreMain = scoreMain + 1;
			scoreMainBox.innerHTML = scoreMain;
			if (scoreMain == 3)	{
				alert("Молодец ты закончил школу!");
				main.style.display = 'none';
				loc1.style.display = 'none';
				loc2.style.display = 'none';
				loc3.style.display = 'none';
				loc_win.style.display = 'block';
			}
		}
		else if(player1_choiseLoc2 == 'бумага' && player2_choiseLoc2 == 'камень') {
			alert('Победа ученика! И получает 1 очко.');
			loc2.style.display = 'none';
			main.style.display = 'block';
			scoreMain = scoreMain + 1;
			scoreMainBox.innerHTML = scoreMain;
			if (scoreMain == 3)	{
				alert("Молодец ты закончил школу!");
				main.style.display = 'none';
				loc1.style.display = 'none';
				loc2.style.display = 'none';
				loc3.style.display = 'none';
				loc_win.style.display = 'block';
			}
		}
		else {
			alert('Победа одноклассника! И неполучает 1 очко.');
			loc2.style.display = 'none';
			main.style.display = 'block';
		}
	}
}

// location 3 
vkhod3.onclick = function() {
	main.style.display = 'none';
	loc3.style.display = 'block';
	let bang = document.querySelectorAll('.bang');
	let meme = document.querySelectorAll('.meme');
	let coin = document.querySelectorAll('.coin');
	let scoreBox = document.querySelector('.scoreBox');
	let score = 0;

	// Взрыв
	for (let i = 0; i < 14; i = i + 1) {
		bang[i].onclick = function() {
			score = score - 1;
			scoreBox.innerHTML = score;
			bang[i].style.backgroundImage = 'url(bang.png)';
			bang[i].style.backgroundSize = '100% 100%';
		}
	}

	// Мемы
	for (let i = 0; i < 13; i = i + 1) {
		meme[i].onclick = function() {
			meme[i].style.backgroundImage = 'url(mem.jpg)';
			meme[i].style.backgroundSize = '100% 100%';
		}
	}

	// Монетки
	for (let i = 0; i < 9; i = i + 1) {
		coin[i].onclick = function() {
			score = score + 1;
			scoreBox.innerHTML = score;
			coin[i].style.backgroundImage = 'url(coin.png)';
			coin[i].style.backgroundSize = '100% 100%';
			if(score == 3) {
				alert("Ты нашёл монетку! И получает 1 очко");
				loc3.style.display = 'none';
				main.style.display = 'block';
				scoreMain = scoreMain + 1;
				scoreMainBox.innerHTML = scoreMain;
			}
			if (scoreMain == 3)	{
				alert("Молодец ты закончил школу!");
				main.style.display = 'none';
				loc1.style.display = 'none';
				loc2.style.display = 'none';
				loc3.style.display = 'none';
				loc_win.style.display = 'block';
			}
		}
	}
}