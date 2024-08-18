/* ex1*/
function showText(){
	document.getElementById('s_text').innerHTML="Hellow SSB";
}

/*  ex 2*/
function showDate (){
	document.getElementById('s_Date').innerHTML=Date();
}
/*  ex 3*/
function bulbon(){
	document.getElementById('img').src="images/bulbon.gif";
}
function bulboff(){
	document.getElementById('img').src="images/bulboff.gif";
}

/*  ex 4*/
function showSad(){
	document.getElementById('s_img').src="images/sad.png";
}

function showHappy(){
	document.getElementById('s_img').src="images/happy.png";
}

/* ex 5*/
function changeColor(){
	document.getElementById('color').style.color="red";
}

/* ex 6*/
function showQus(){
	document.getElementById('a_text').innerHTML="What is your country name? Where are you from?";
}

function showAns(){
	document.getElementById('a_text').innerHTML="My country name is Bangladesh.I am from Chattogram";
}
/* ex 7*/
function changeSize(){
	document.getElementById('Size').style.fontSize="50px";
}

/* ex 8*/
function changeBackground(){
	document.getElementById('css').style.backgroundColor="red";
}

/* ex 9*/
function hideText(){
	document.getElementById('hide').style.display="none";
}
/* ex 10*/
function hideText(){
	document.getElementById('hiden').style.display="none";
}
/* ex 11*/
function ShowText(){
	document.getElementById('hiden').style.display="block";
}

// ex 12
function s_lo(){
    document.getElementById('lo_m').innerHTML = Math.min(0, 150, 30, 20, -8, -200);
}
// ex 13

function m_hi(){
    document.getElementById('hi_m').innerHTML = Math.max(0, 150, 30, 20, -8, -200);
}
// ex 14

	var x,y,z;
	x = 5;
	y = 5;
	z = x + y;
	function cheekValue(){
		document.getElementById('value').innerHTML=z;
	}

// ex 15

	var a,b,c;
	a = 5;
	b = 5;
	c = x - y;
	function Value(){
		document.getElementById('value1').innerHTML=c;
	}
// ex 16

	var e,f,g;
	e = 5;
	f = 5;
	g = e * f;
	function seeValue(){
		document.getElementById('value2').innerHTML=g;
	}

	// ex 17
	function m_floor(){
    document.getElementById('floor').innerHTML = Math.floor(4.6);
}
// ex 18
function m_ceil(){
    document.getElementById('ceil').innerHTML = Math.ceil(4.6);
}
// ex 19
function m_round(){
    document.getElementById('round').innerHTML = Math.round(4.6);
}
// ex 20
function m_pi(){
    document.getElementById('pi').innerHTML = Math.PI;
}
// ex 21
function reverseSortArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort()
    fruits.reverse()

  document.getElementById('reso_a').innerHTML = fruits;
}
// ex 22
function is_Int(){
    document.getElementById('i1_i').innerHTML = Number.isInteger(10);
}

// ex 23
	function varConvert(){
    document.getElementById('v_c').innerHTML = Number("john");

}
// ex 24
function Convert(){
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
document.getElementById("c").innerHTML = cars; 
	}

	// ex 25

	function Convert1(){
		const car = {type:"Fiat", model:"500", color:"white"};
		car.color = "red";
		car.owner = "Johnson";
		document.getElementById("car").innerHTML = "Car owner is " + car.owner; 

	}

// ex 26

function is_Int1(){
    document.getElementById('i2_i').innerHTML = Number.isInteger(10);
}

// ex 27

let Number1,number2;
Number1 = 5;
number2 = 5;
Number1 += number2;
function cheekValue1(){
	document.getElementById('valu').innerHTML=Number1;
}
// ex 28
let fastname,lastname;

fastname = "Tarikul";
lastname = "Islam";
function cheekValue2(){
	document.getElementById('last').innerHTML=lastname;
}
// ex 29
var Num1 = 5;
var num2 = 5;
var  nun = Num1 + num2;
function cheekValue3(){
	document.getElementById('valu1').innerHTML=nun;
}
// ex 30

let N1,n2;
N1 = 10;
n2 = 5;
N1 -= n2;
function cheek(){
	document.getElementById('res').innerHTML=N1;
}
// ex 31
let a1,b1;
a1 = 10;
b1 = 5;
a1 *= b1;
function cheek1(){
	document.getElementById('res1').innerHTML=a1;
}

// ex 32
let d,s;
d = 50;
s = 5;
d /= s;
function cheek2(){
	document.getElementById('res2').innerHTML=s;
}
// ex 33
let w1,x1;
w1 = 50;
x1 = 5;
w1 /= x1;
function cheekValu(){
	document.getElementById('res3').innerHTML=w1;
}
// ex 34
let w12,x12;
w12 = 50;
x12 = 5;
w12 /= x12;
function number(){
	document.getElementById('res4').innerHTML=w12;
}

// ex 35
let n,m;
n = 50;
m = 5;
n **= m;
function num(){
	document.getElementById('nu').innerHTML=n;

}

// ex 36
let x3 = -100;
x3 <<= 5;
function num1(){
	document.getElementById('nu1').innerHTML=x3;

}

// ex 37
let t = -100;
t >>= 5;
function valueIs(){
	document.getElementById('result').innerHTML=t;

}

// ex 38
let t1 = -100;
t1 >>>= 5;
function valueIs1(){
	document.getElementById('result1').innerHTML=t1;

}

// ex 39
let t6 = -100;
t6 |= 5;
function theValue(){
	document.getElementById('or').innerHTML=t6;

}

// ex 40
let Y1 = -100;
Y1 ^= 5;
function theValue1(){
	document.getElementById('up').innerHTML=Y1;

}
// ex 41
var data = "wellcome to ssB";
function dataRepeat(){
	document.getElementById('rep').innerHTML=data.repeat(3);

}
// ex 42
let x9 = 16 + "vivo";
function clickButton(){
	document.getElementById('to').innerHTML=x9;
}

// ex 43
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
function clickButton1(){
	document.getElementById('to1').innerHTML=result;
}
// ex 45
function m_hi1(){
    document.getElementById('hi_m1').innerHTML = Math.max(0, 150, 30, 20, -8, -200);
}
// ex 46
 function Convert12(){
		const car = {type:"Fiat", model:"500", color:"white"};
		car.color = "red";
		car.owner = "Johnson";
		document.getElementById("cr").innerHTML = "Car owner is " + car.owner; 

	}
// ex 47
function m_floor1(){
    document.getElementById('floor1').innerHTML = Math.floor(4.5);
}
// ex 48
let xy = 5;
function tarek(){
    document.getElementById('tarek').innerHTML = xy**2;
}
// ex 49
let xyz = 5;
function pow(){
    document.getElementById('pow').innerHTML =Math.pow(x,3);
}
// ex 50
let ab = 10;
ab--;
function opa(){
	document.getElementById('ope').innerHTML = ab;
}
