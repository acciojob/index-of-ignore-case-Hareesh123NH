function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let A=s1.toLowerCase();
	let B=s2.toLowerCase(); 
	return A.indexOf(B);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
