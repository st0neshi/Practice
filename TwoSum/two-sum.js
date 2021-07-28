let input = [2, 3, 7, 8];
let target = 15;

function TwoSum(input, target) {
	const myMap = new Map();
    
    for (i = 0; i < input.length; i++) {
    	el = input[i];
        
        if (myMap.has(target - el)) {
        	return [myMap.get(target - el), i];
        } else {
        	myMap.set(el, i);
        }
    }
    
    return [];
}

document.addEventListener('click', function(){
    document.getElementById("test").innerHTML = TwoSum(input, target);
})

document.write(TwoSum(input, target));