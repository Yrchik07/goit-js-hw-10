import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const numberOfMilliseconds = document.querySelector('input[name="delay"]');
const radioFulfilled = document.querySelector('input[value="fulfilled"]');
const radioRejected = document.querySelector('input[value="rejected"]');
const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', (e) =>{
  e.preventDefault();
  const delay = numberOfMilliseconds.value;
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (radioFulfilled.checked) {
      resolve(`${delay}`);
    } else {
      reject(`${delay}`);
    }
  }, 1000);
});


promise.then((result) =>{
    iziToast.show({
    message: `✅ Fulfilled promise in ${result}ms`,
    messageColor: '#FFFFFF',
    backgroundColor: '#59A10D',
    position: 'topRight',
    });
})
.catch((result) => {
// console.log(result);
  iziToast.show({
    message: `❌ Rejected promise in ${delay}ms`,
    messageColor: '#FFFFFF',
    backgroundColor: '#EF4040',
    position: 'topRight',
    });
})
// .finally(() => {
//   console.log('Stop loader...');
// })
})