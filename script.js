let lists=document.querySelectorAll('.list');
let rightbox=document.querySelector('#right')
let leftbox=document.querySelector('#left')

for(list of lists){
    list.addEventListener("dragstart",function(e){
        let selexted=e.target;
        rightbox.addEventListener('dragover',function(e){
            e.preventDefault();
        });
        rightbox.addEventListener('drop',function(e){
            rightbox.appendChild(selexted);
            selexted=null;
        });
        leftbox.addEventListener('dragover',function(e){
            e.preventDefault();
        });
        leftbox.addEventListener('drop',function(e){
            leftbox.appendChild(selexted);
            selexted=null;
        });
    })
}