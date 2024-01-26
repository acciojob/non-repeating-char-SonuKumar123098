function firstNonRepeatedChar(str) {
 // Write your code here
	const map={};
	for(let i=0;i<str.length;i++){
		map[str[i]]= (map[str[i]]||0) +1;
	}
	for(const char of str){
		if(map[char]===1) return char;
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
