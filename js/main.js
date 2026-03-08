let filter = document.getElementById("filter")

// Initialize data with IDs on page load
initializeIds();

inject("all")
filter.addEventListener("click", (e) =>{
    let trgt = e.target
    let parm = trgt.id
    if(!trgt)
        parm = ""
    container.innerHTML = '';
    inject(parm);
})