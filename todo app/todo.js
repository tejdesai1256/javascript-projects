let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');
let delBtn=document.querySelector('.delete');

btn.addEventListener('click',function(){
    let item=document.createElement('li');
    item.innerText=inp.value;
    let delBtn=document.createElement('button');
    delBtn.innerText='Delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value='';
});

let delBtns=document.querySelectorAll('.delete');
delBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        e.target.parentElement.remove();
    });
});

let delBtns2=document.querySelectorAll('.delete');
for(delBtn of delBtns2){
    delBtn.addEventListener('click',function(e){
        e.target.parentElement.remove();
    }); 
}

//event deligation
ul.addEventListener('click',function(){
   console.log(event.target.nodeName);
    });

    //initial commit1