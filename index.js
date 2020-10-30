let output = document.getElementById('outPut')
let input = document.querySelectorAll('input')
let text=document.querySelector('#myText h1')
let showValue=document.getElementsByClassName('showValue')

function mainEventHandler() {
	
	function eventHandler1(input) {
		let inputValue1 = input.value
		if (inputValue1 > 9) {
			inputValue1 = String.fromCharCode(55 + Number(input.value))
		}
		return inputValue1
	}

	function eventHandler2(input) {
		let inputValue2 = input.value
		if (inputValue2 > 9) {
			inputValue2 = String.fromCharCode(55 + Number(input.value))
		}
		return inputValue2
	}

	function eventHandler3(input) {
		let inputValue3 = input.value
		if (inputValue3 > 9) {
			inputValue3 = String.fromCharCode(55 + Number(input.value))
		}
		return inputValue3
	}

	function eventHandler4(input) {
		let inputValue4 = input.value
		if (inputValue4 > 9) {
			inputValue4 = String.fromCharCode(55 + Number(input.value))
		}
		return inputValue4
	}

	function eventHandler5(input) {
		let inputValue5 = input.value
		if (inputValue5 > 9) {
			inputValue5 = String.fromCharCode(55 + Number(input.value))
		}
		return inputValue5
	}

	function eventHandler6(input) {
		let inputValue6 = input.value
		if (inputValue6 > 9) {
			inputValue6 = String.fromCharCode(55 + Number(input.value))
		}
		return inputValue6
	}

	let outputAssets = `#${eventHandler1(input[0])}${eventHandler2(input[1])}${eventHandler3(input[2])}${eventHandler4(input[3])}${eventHandler5(input[4])}${eventHandler6(input[5])}`
	let arr=outputAssets.split('')
	arr=arr.slice(1)
	
	for(let i=0;i<showValue.length;i++){
		showValue[i].innerText=arr[i]
	}

	output.style.backgroundColor=outputAssets	
	let copyValue=output.innerText='Hex Color Code Is '+outputAssets
	text.style.color=outputAssets
	


	
}
mainEventHandler()













// let input=document.querySelectorAll('input')
// for(let i=0;i<input.length;i++){


// input[i].addEventListener('input',function(){
// 	let inputValue=input[i].value

// 	if(inputValue>9){
// 		inputValue=String.fromCharCode(55+Number(input[i].value))

// 	}
// 	var colorArr=new Array(inputValue)
// 	output.style.backgroundColor=`#${colorArr[0]}${colorArr[1]}${colorArr[2]}${colorArr[3]}${colorArr[4]}${colorArr[5]}`
// })
// }