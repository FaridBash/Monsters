const ul=document.querySelector('#ul');
let x=24.16;



ul.innerHTML=`<li id="testing">${x}</li>`;
const testing=document.querySelector('#testing');
if(testing.textContent==24.16){
  console.log('possible')};