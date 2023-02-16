//First Example: Sum numbers

// const userNumber = document.getElementById('user-number');
// const calSumBtn = document.getElementById('cal-btn');
// const sumCaled = document.getElementById('calculated-sum');

// function claculateSum(){

//     let result = 0;

//     for(i = 0; i <= userNumber.value; i++){
//         result += i;
//     }
//     sumCaled.textContent = result;
//     sumCaled.style.display = 'block';
// }
// calSumBtn.addEventListener('click', claculateSum);

//Second Example: Highlight Link

// const aTagArr = document.querySelectorAll('a');

// console.log(aTagArr[0].textContent);

// for(aTag of aTagArr){
//     aTag.style.background = 'blue';
// }

// Third Example: Display My Information

const ulSelectorElement = document.getElementById('output-user-data');


let myInfo = {
    name: 'Sihwan_Kim',
    gender: 'male',
    age: 31,
    address: 'Gungo Dayami',
    graduate: true
};

console.dir(myInfo);

for (info in myInfo) {
    ulSelectorElement.textContent = myInfo;
}

