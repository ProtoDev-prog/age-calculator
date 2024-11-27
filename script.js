const btn=document.querySelector('button');
const input=document.querySelector('#input');
const p=document.querySelector('.con');
btn.addEventListener('click',()=>{
    // console.log('Clicked')
    if(input.value==''){
        alert('Please Enter Your BirthDay');
    }
    else{
        let birthDay=new Date(input.value);
        let currentDate=new Date();
        let bYear=birthDay.getFullYear();
        let cYear=currentDate.getFullYear();
        let bD=cYear-bYear;
        if((currentDate.getMonth()-birthDay.getMonth())<0){
            bD--
        }
        p.innerHTML=`Your are ${bD} Years Old`;
    }
})