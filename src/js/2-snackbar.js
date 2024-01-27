import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const numberOfMilliseconds = document.querySelector('input[name="delay"]');
const radioFulfilled = document.querySelector('input[value="fulfilled"]');
const radioRejected = document.querySelector('input[value="rejected"]');
const btnSubmit = document.querySelector('button');
// const milliseconds = numberOfMilliseconds.value;
// console.log(delay)

btnSubmit.addEventListener('click', () =>{
  const delay = numberOfMilliseconds.value;
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isActive = Math.random() > 0.5;
    if (isActive) {
      resolve('Смачного');
    } else {
      reject('Sorry');
    }
  }, 400);
});
//   if(radioFulfilled.disabled){
//   iziToast.show({
//     message: `✅ Fulfilled promise in ${delay}ms`,
//     messageColor: '#FFFFFF',
//     backgroundColor: '#59A10D',
//     position: 'topRight',
//   });
// }else{
// console.log('hdhfghf')
// }
//   // console.log(numberOfMilliseconds.value)
})

