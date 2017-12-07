let process = {
	menu:function(){
		let content = <ul>
			<center><h1><a href='#' onClick={process.page1}><button>Click ME!!!!</button></a></h1></center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<font color="green"><h1>AATROX</h1></font><br/> <img src="img/1.jpg" height="400" width="300"></img><br/>
				<h4>1/20</h4><br/>
				
				<a href='#' onClick={process.page20}><button>prev</button></a>======
				<a href='#' onClick={process.page2}><button>next</button></a>
				<h1>
		Aatrox<br/>
the Darkin Blade<br/>
Fighter, Tank<br/>
</h1>
<h3>
Health<br/>
580 (+85 / per Level) <br/>
 Health Regen<br/>
6.59 (+0.5 / per Level)  <br/>
Mana<br/>
100 (+0 / per Level)  <br/>
Mana Regen<br/>
0 (+0 / per Level)  <br/>
Attack Damage<br/>
68 (+3.2 / per Level)  <br/>
Armor<br/>
33 (+3.8 / per Level) <br/> 
Attack Speed<br/>
0.651 (+3% / per Level)  <br/>
Magic Resist<br/>
32.1 (+1.25 / per Level)  <br/>
Movement Speed<br/>
345<br/>
			</h3></center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<center>
				<font color="purple"><h1>AHRI</h1></font><br/> <img src="img/2.png" height="400" width="300"></img><br/>
				<h4>2/20</h4><br/>
				<a href='#' onClick={process.page1}><button>prev</button></a>======
				<a href='#' onClick={process.page3}><button>next</button></a><br/>
		<h1>
		Ahri<br/>
the Nine-Tailed Fox<br/>

Mage, Assassin<br/>
</h1>
		<h3>		 
Health<br/>
526 (+92 / per Level)  <br/>
Health Regen<br/>
6.508 (+0.6 / per Level)  <br/>
Mana<br/>
334 (+50 / per Level) <br/> 
Mana Regen<br/>
6 (+0.8 / per Level)  <br/>
Attack Damage<br/>
53.04 (+3 / per Level)  <br/>
Armor<br/>
20.88 (+3.5 / per Level)  <br/>
Attack Speed<br/>
0.668 (+2% / per Level)  
Magic Resist<br/>
30 (+0.5 / per Level)  
Movement Speed<br/>
330<br/>
			</h3></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<center>
				<font color="maroon"><h1>AKALI</h1></font><br/> <img src="img/3.jpeg" height="400" width="300"></img><br/>
				<h4>3/20</h4><br/>
				<a href='#' onClick={process.page2}><button>prev</button></a>======
				<a href='#' onClick={process.page4}><button>next</button></a><br/>
				<h1>
		Akali<br/>
the Fist of Shadow<br/>

Assassin<br/>
</h1>
<h3>
	Health<br/>
593 (+90 / per Level) <br/>
 Health Regen<br/>
8.342 (+0.65 / per Level)  <br/>
Mana<br/>
200 (+0 / per Level)  <br/>
Mana Regen<br/>
50 (+0 / per Level)  <br/>
Attack Damage<br/>
58.376 (+3.2 / per Level)  <br/>
Armor<br/>
31.38 (+3.5 / per Level)  <br/>
Attack Speed<br/>
0.694 (+3.1% / per Level)  <br/>
Magic Resist<br/>
32.1 (+1.25 / per Level)<br/>
Movement Speed<br/>
350	<br/>
</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<center>
				<font color="white "><h1>ALISTAR</h1></font><br/> <img src="img/4.jpg" height="400" width="300"></img><br/>
				<h4>4/20</h4><br/>
				<a href='#' onClick={process.page3}><button>prev</button></a>======
				<a href='#' onClick={process.page5}><button>next</button></a><br/>
				<h1>Alistar<br/>
the Minotaur<br/>

Tank, Support<br/>
</h1>
<h3>
Health<br/>
613.36 (+106 / per Level)  <br/>
Health Regen<br/>
8.678 (+0.85 / per Level) <br/> 
Mana<br/>
278.84 (+38 / per Level)  <br/>
Mana Regen<br/>
8.5 (+0.8 / per Level)  <br/>
Attack Damage<br/>
61.1116 (+3.62 / per Level)  <br/>
Armor<br/>
44 (+3.5 / per Level)  <br/>
Attack Speed<br/>
0.625 (+2.125% / per Level)  <br/>
Magic Resist<br/>
32.1 (+1.25 / per Level)  <br/>
Movement Speed<br/>
330		<br/>		
</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<center>
				<font color="black"><h1>AMUMU</h1></font><br/> <img src="img/5.png" height="400" width="300"></img><br/>
				<h4>5/20</h4><br/>
				<a href='#' onClick={process.page4}><button>prev</button></a>======
				<a href='#' onClick={process.page6}><button>next</button></a><br/>
				<h1>
Amumu<br/>
the Sad Mummy<br/>

Tank, Mage<br/>
				</h1>
				<h3>
Health<br/>
613.12 (+84 / per Level)  <br/>
Health Regen<br/>
8.878 (+0.85 / per Level)  <br/>
Mana<br/>
287.2 (+40 / per Level)  <br/>
Mana Regen<br/>
7.382 (+0.525 / per Level)  <br/>
Attack Damage<br/>
53.38 (+3.8 / per Level)  <br/>
Armor<br/>
33 (+3.8 / per Level)  <br/>
Attack Speed<br/>
0.638 (+2.18% / per Level) <br/> 
Magic Resist<br/>
32.1 (+1.25 / per Level)  <br/>
Movement Speed<br/>
335<br/>
				</h3>
				
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<center>
				<font color="red"><h1>ANIVIA</h1></font><br/> <img src="img/6.png" height="400" width="300"></img><br/>
				<h4>6/20</h4><br/>
				<a href='#' onClick={process.page5}><button>prev</button></a>======
				<a href='#' onClick={process.page7}><button>next</button></a><br/>
				<h1>
Anivia<br/>
the Cryophoenix<br/>

Mage, Support<br/>
				</h1>
				<h3>
Health<br/>
480 (+82 / per Level) <br/> 
Health Regen<br/>
5.574 (+0.55 / per Level)  <br/>
Mana<br/>
396.04 (+50 / per Level) <br/>
 Mana Regen<br/>
6 (+0.8 / per Level)  <br/>
Attack Damage<br/>
51.376 (+3.2 / per Level) <br/> 
Armor<br/>
21.22 (+4 / per Level)  <br/>
Attack Speed<br/>
0.625 (+1.68% / per Level)  <br/>
Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
325<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
				<center>
				<font color="red"><h1>ANNIE</h1></font><br/> <img src="img/7.png" height="400" width="300"></img><br/>
				<h4>7/20</h4><br/>
				<a href='#' onClick={process.page6}><button>prev</button></a>======
				<a href='#' onClick={process.page8}><button>next</button></a><br/>
				<h1>
Annie<br/>
the Dark Child<br/>

Mage<br/>
				</h1>
				<h3>
Health<br/>
524 (+88 / per Level) <br/> 
Health Regen<br/>
5.424 (+0.55 / per Level) <br/>
 Mana<br/>
334 (+50 / per Level) <br/>
 Mana Regen<br/>
6 (+0.8 / per Level) <br/>
 Attack Damage<br/>
50.41 (+2.625 / per Level) <br/>
 Armor<br/>
19.22 (+4 / per Level) <br/>
 Attack Speed<br/>
0.579 (+1.36% / per Level) <br/>
 Magic Resist<br/>
30 (+0.5 / per Level) <br/> 
Movement Speed<br/>
335<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
				<center>
				<font color="red"><h1>ASHE</h1></font><br/> <img src="img/8.png" height="400" width="300"></img><br/>
				<h4>8/20</h4><br/>
				<a href='#' onClick={process.page7}><button>prev</button></a>======
				<a href='#' onClick={process.page9}><button>next</button></a><br/>
				
				<h1>
Ashe<br/>
the Frost Archer<br/>

Marksman, Support<br/>
				</h1>
				<h3>
 Health<br/>
527.72 (+79 / per Level)  <br/>
Health Regen<br/>
5.424 (+0.55 / per Level) <br/> 
Mana<br/>
280 (+32 / per Level)  Mana <br/>
Regen<br/>
6.972 (+0.4 / per Level) <br/>
 Attack Damage<br/>
65 (+2.26 / per Level) <br/>
 Armor<br/>
30 (+3.4 / per Level) <br/>
 Attack Speed
0.658 (+3.33% / per Level) <br/>
 Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
325<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
				<center>
				<font color="red"><h1>AURELION SOL</h1></font><br/> <img src="img/9.png" height="400" width="300"></img><br/>
				<h4>9/20</h4><br/>
				<a href='#' onClick={process.page8}><button>prev</button></a>======
				<a href='#' onClick={process.page10}><button>next</button></a><br/>
				<h1>
Aurelion Sol<br/>
The Star Forger<br/>

Mage, Fighter<br/>
				</h1>
				<h3>
 Health<br/>
562 (+92 / per Level)  <br/>
Health Regen<br/>
6.5 (+0.6 / per Level) <br/> 
Mana<br/>
350 (+50 / per Level) <br/> 
Mana Regen<br/>
6 (+0.8 / per Level)  <br/>
Attack Damage<br/>
57 (+3.2 / per Level)  <br/>
Armor<br/>
19 (+3.6 / per Level) <br/> 
Attack Speed<br/>
0.625 (+1.36% / per Level)  <br/>
Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
325<br/>
			</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
				<center>
				<font color="red"><h1>AZIR</h1></font><br/> <img src="img/10.png" height="400" width="300"></img><br/>
				<h4>10/20</h4><br/>
				<a href='#' onClick={process.page9}><button>prev</button></a>======
				<a href='#' onClick={process.page11}><button>next</button></a><br/>
				<h1>
Azir<br/>
the Emperor of the Sands<br/>

Mage, Marksman<br/>
				</h1>
				<h3>
  Health<br/>
552 (+92 / per Level)  <br/>
Health Regen<br/>
6.9 (+0.55 / per Level) <br/>
 Mana<br/>
350.56 (+42 / per Level) <br/>
 Mana Regen<br/>
6 (+0.8 / per Level)  <br/>
Attack Damage<br/>
52 (+2.8 / per Level) <br/>
 Armor<br/>
19.04 (+3 / per Level) <br/>
 Attack Speed<br/>
0.638 (+1.5% / per Level) <br/> 
Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
335<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page11:function(){
	let content = <div>
				<center>
				<font color="red"><h1>BARD</h1></font><br/> <img src="img/11.png" height="400" width="300"></img><br/>
				<h4>11/20</h4><br/>
				<a href='#' onClick={process.page10}><button>prev</button></a>======
				<a href='#' onClick={process.page12}><button>next</button></a><br/>
				<h1>
Bard<br/>
the Wandering Caretaker<br/>

Support, Mage<br/>
				</h1>
				<h3>
 Health<br/>
535 (+89 / per Level) <br/>
Health Regen<br/>
5.4 (+0.55 / per Level) <br/>
 Mana<br/>
350 (+50 / per Level) <br/>
 Mana Regen<br/>
6 (+0.45 / per Level)  <br/>
Attack Damage<br/>
52 (+3 / per Level) <br/>
 Armor<br/>
34 (+4 / per Level)  <br/>
Attack Speed<br/>
0.625 (+2% / per Level) <br/> 
Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
330<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page12:function(){
	let content = <div>
				<center>
				<font color="red"><h1>BLITZCRANK</h1></font><br/> <img src="img/12.png" height="400" width="300"></img><br/>
				<h4>12/20</h4><br/>
				<a href='#' onClick={process.page11}><button>prev</button></a>======
				<a href='#' onClick={process.page13}><button>next</button></a><br/>
				<h1>
Blitzcrank<br/>
the Great Steam Golem<br/>

Tank, Fighter<br/>
				</h1>
				<h3>
 Health<br/>
582.6 (+95 / per Level) <br/> 
Health Regen<br/>
8.51 (+0.75 / per Level) <br/>
 Mana<br/>
267.2 (+40 / per Level)  <br/>
Mana Regen<br/>
8.5 (+0.8 / per Level) <br/> 
Attack Damage<br/>
61.54 (+3.5 / per Level)  <br/>
Armor<br/>
44 (+4 / per Level) <br/>
 Attack Speed<br/>
0.625 (+1.13% / per Level)  <br/>
Magic Resist<br/>
32.1 (+1.25 / per Level) <br/>
 Movement Speed<br/>
325<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page13:function(){
	let content = <div>
				<center>
				<font color="red"><h1>BRAND</h1></font><br/> <img src="img/13.png" height="400" width="300"></img><br/>
				<h4>13/20</h4><br/>
				<a href='#' onClick={process.page12}><button>prev</button></a>======
				<a href='#' onClick={process.page14}><button>next</button></a><br/>
				<h1>
Brand<br/>
the Burning Vengeance<br/>

Mage<br/>
				</h1>
				<h3>
  Health<br/>
519.68 (+88 / per Level) <br/>
 Health Regen<br/>
5.424 (+0.55 / per Level) <br/>
 Mana<br/>
375.6 (+42 / per Level) <br/>
 Mana Regen<br/>
8.008 (+0.6 / per Level) <br/>
 Attack Damage<br/>
57.04 (+3 / per Level)  <br/>
Armor<br/>
21.88 (+3.5 / per Level)  <br/>
Attack Speed<br/>
0.625 (+1.36% / per Level)  <br/>
Magic Resist<br/>
30 (+0.5 / per Level)  <br/>
Movement Speed<br/>
340<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page14:function(){
	let content = <div>
				<center>
				<font color="red"><h1>BRAUM</h1></font><br/> <img src="img/14.png" height="400" width="300"></img><br/>
				<h4>14/20</h4><br/>
				<a href='#' onClick={process.page13}><button>prev</button></a>======
				<a href='#' onClick={process.page15}><button>next</button></a><br/>
				<h1>
Braum<br/>
the Heart of the Freljord<br/>

Support, Tank<br/>
				</h1>
				<h3>
  Health<br/>
576.16 (+87 / per Level)<br/> 
 Health Regen<br/>
8.18 (+1 / per Level) 
 Mana<br/>
310.6 (+45 / per Level) <br/>
 Mana Regen<br/>
6 (+0.8 / per Level) <br/>
 Attack Damage<br/>
55.376 (+3.2 / per Level) <br/>
 Armor<br/>
47 (+4.5 / per Level)  <br/>
Attack Speed<br/>
0.644 (+3.5% / per Level)  <br/>
Magic Resist<br/>
32.1 (+1.25 / per Level) <br/>
 Movement Speed<br/>
335<br/>
				</h3>
				
			</center><br/>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page15:function(){
	let content = <div>
				<center>
				<font color="red"><h1>CAITLYN</h1></font><br/> <img src="img/15.png" height="400" width="300"></img><br/>
				<h4>15/20</h4><br/>
				<a href='#' onClick={process.page14}><button>prev</button></a>======
				<a href='#' onClick={process.page16}><button>next</button></a><br/>
				<h1>

				</h1>
				<h3>
 Health<br/>
475 (+85 / per Level)  <br/>
Health Regen<br/>
5.65 (+0.55 / per Level) <br/>
 Mana<br/>
313.7 (+35 / per Level) <br/>
 Mana Regen<br/>
7.4 (+0.55 / per Level) <br/>
 Attack Damage<br/>
62 (+2.18 / per Level) <br/>
 Armor<br/>
32 (+3.5 / per Level)  <br/>
Attack Speed<br/>
0.568 (+4% / per Level)  <br/>
Magic Resist<br/>
30 (+0.5 / per Level)  <br/>
Movement Speed<br/>
325<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page16:function(){
	let content = <div>
				<center>
				<font color="red"><h1>CAMILLE</h1></font><br/> <img src="img/16.png" height="400" width="300"></img><br/>
				<h4>16/20</h4><br/>
				<a href='#' onClick={process.page15}><button>prev</button></a>======
				<a href='#' onClick={process.page17}><button>next</button></a><br/>
				<h1>
Camille<br/>
the Steel Shadow<br/>

Fighter, Tank<br/>
				</h1>
				<h3>
  Health<br/>
575.6 (+85 / per Level) <br/>
 Health Regen<br/>
8.5 (+0.8 / per Level) <br/>
 Mana<br/>
338.8 (+32 / per Level)  <br/>
Mana Regen<br/>
8.15 (+0.75 / per Level)<br/> 
 Attack Damage<br/>
68 (+3.5 / per Level) <br/>
 Armor<br/>
35 (+3.8 / per Level) <br/>
 Attack Speed<br/>
0.625 (+2.5% / per Level) <br/>
 Magic Resist<br/>
32.1 (+1.25 / per Level) <br/>
 Movement Speed<br/>
340<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page17:function(){
	let content = <div>
				<center>
				<font color="red"><h1>CASSIOPEIA</h1></font><br/> <img src="img/17.png" height="400" width="300"></img><br/>
				<h4>17/20</h4><br/>
				<a href='#' onClick={process.page16}><button>prev</button></a>======
				<a href='#' onClick={process.page18}><button>next</button></a><br/>
				<h1>
Cassiopeia<br/>
the Serpents Embrace<br/>
Mage<br/>

				</h1>
				<h3>
 Health<br/>
537 (+87 / per Level) <br/>
 Health Regen<br/>
5.5 (+0.5 / per Level) <br/>
 Mana<br/>
334 (+63 / per Level) <br/> 
Mana Regen<br/>
6 (+0.8 / per Level) <br/> 
Attack Damage<br/>
53 (+3 / per Level) <br/> 
Armor<br/>
25 (+3.5 / per Level) <br/>
 Attack Speed<br/>
0.647 (+1.5% / per Level) <br/>
 Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
328<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page18:function(){
	let content = <div>
				<center>
				<font color="red"><h1>CHOGHAT</h1></font><br/> <img src="img/18.png" height="400" width="300"></img><br/>
				<h4>18/20</h4><br/>
				<a href='#' onClick={process.page17}><button>prev</button></a>======
				<a href='#' onClick={process.page19}><button>next</button></a><br/>
				<h1>
Cho Gath<br/>
the Terror of the Void<br/>

Tank, Mage<br/>
				</h1>
				<h3>
 Health<br/>
574.4 (+80 / per Level) <br/>
 Health Regen<br/>
8.928 (+0.85 / per Level) <br/>
 Mana<br/>
272.2 (+40 / per Level)  <br/>
Mana Regen<br/>
7.206 (+0.45 / per Level)  <br/>
Attack Damage<br/>
69 (+4.2 / per Level)  <br/>
Armor<br/>
38 (+3.5 / per Level) <br/> 
Attack Speed<br/>
0.625 (+1.44% / per Level)  <br/>
Magic Resist<br/>
32.1 (+1.25 / per Level)  <br/>
Movement Speed<br/>
345<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page19:function(){
	let content = <div>
				<center>
				<font color="red"><h1>CORKI</h1></font><br/> <img src="img/19.png" height="400" width="300"></img><br/>
				<h4>19/20</h4><br/>
				<a href='#' onClick={process.page18}><button>prev</button></a>======
				<a href='#' onClick={process.page20}><button>next</button></a><br/>
				<h1>
Corki<br/>
the Daring Bombardier<br/>

Marksman<br/>
				</h1>
				<h3>
  Health<br/>
518 (+87 / per Level)  <br/>
Health Regen<br/>
5.424 (+0.55 / per Level) <br/>
 Mana<br/>
350.16 (+34 / per Level) <br/>
 Mana Regen<br/>
7.424 (+0.55 / per Level) <br/>
 Attack Damage<br/>
63 (+3.5 / per Level)  <br/>
Armor<br/>
28 (+3.5 / per Level) <br/>
 Attack Speed<br/>
0.638 (+2.3% / per Level) <br/>
 Magic Resist<br/>
30 (+0.5 / per Level) <br/>
 Movement Speed<br/>
325<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page20:function(){
	let content = <div>
				<center>
				<font color="red"><h1>DARIUS</h1></font><br/> <img src="img/20.png" height="400" width="300"></img><br/>
				<h4>20/20</h4><br/>
				<a href='#' onClick={process.page19}><button>prev</button></a>======
				<a href='#' onClick={process.page1}><button>next</button></a><br/>
				<h1>
Darius<br/>
the Hand of Noxus<br/>

Fighter, Tank<br/>
				</h1>
				<h3>
 Health<br/>
582.24 (+100 / per Level) <br/>
 Health Regen<br/>
9.846 (+0.95 / per Level) <br/>
 Mana<br/>
263 (+37.5 / per Level)  <br/>
Mana Regen<br/>
6.6 (+0.35 / per Level)  <br/>
Attack Damage<br/>
64 (+5 / per Level)  <br/>
Armor<br/>
39 (+4 / per Level) <br/> 
Attack Speed<br/>
0.625 (+1% / per Level) <br/>
 Magic Resist<br/>
32.1 (+1.25 / per Level) <br/>
 Movement Speed<br/>
340<br/>
				</h3>
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center><h1>
					Matuto kang maghintay ;)....
				</h1></center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);