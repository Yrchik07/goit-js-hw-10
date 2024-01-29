import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const numberOfMilliseconds = document.querySelector('input[name="delay"]');
const radioFulfilled = document.querySelector('input[value="fulfilled"]');
const radioRejected = document.querySelector('input[value="rejected"]');
const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', (e) =>{
  e.preventDefault();

  let delay = numberOfMilliseconds.value;

if(delay > 0 && (radioFulfilled.checked || radioRejected.checked)){
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (radioFulfilled.checked) {
      resolve(`${delay}`);
    } else {
      reject(`${delay}`);
    }
  }, delay);
});

numberOfMilliseconds.value = '';

promise.then((result) =>{
    iziToast.show({
    message: `✅ Fulfilled promise in ${result}ms`,
    messageColor: '#FFFFFF',
    backgroundColor: '#59A10D',
    position: 'topRight',
    });
})
.catch((result) => {
 iziToast.show({
    message: `❌ Rejected promise in ${result}ms`,
    messageColor: '#FFFFFF',
    backgroundColor: '#EF4040',
    position: 'topRight',
    });
})
.finally(() => {
  console.log('Stop loader...');
})
}else{
  return;
}
})