let filter = document.getElementById("filter")
inject("all")
filter.addEventListener("click", (e) =>{
    let trgt = e.target
    let parm = trgt.id
    if(!trgt)
        parm = ""
    container.innerHTML = '';
    inject(parm);
})