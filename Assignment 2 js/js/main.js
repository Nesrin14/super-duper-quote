

function quote() {
var quotesText = ["“If you are gonna be two-faced at least make one of them pretty.”", 
"“If you don't stand for something you will fall for anything.”",
"“A day without sunshine is like, you know, night.”",
"“The mystery of human existence lies not in just staying alive, but in finding something to live for.”",
"“In the middle of difficulty lies opportunity”",
"“Some things in life are out of your control. You can make it a party or a tragedy.”",
"“Scars have the strange power to remind us that our past is real.”"
];
var authors = ['― Marilyn Monroe', '― Gordon A. Eadie','― Steve Martin',
'― Fyodor Dostoyevsky, The Brothers Karamazov','― Albert Einstein',
'― Nora Roberts, Vision in White','― Cormac McCarthy, All the Pretty Horses'];

var num = Math.floor( Math.random() * quotesText.length);

 document.getElementById("Quotes").innerHTML = quotesText[num] + "<br><br>" + authors[num];
}