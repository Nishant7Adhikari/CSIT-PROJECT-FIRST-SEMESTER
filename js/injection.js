let container = document.querySelector(".container");
let base = "all"

const saved = localStorage.getItem('opportunities');
if (saved) {
    data = JSON.parse(saved);
}

function inject(filter) {

    let data2 = data.slice().sort((a, b) => (a.deadline || "").localeCompare(b.deadline || ""));

    data2.forEach(itm => {
        if (filter !== "filter") {
            if (filter !== "all")
                if (filter !== itm.category) return
        }

        console.log(filter)

        if (itm.title === '') return;

        let icon = "hand-pointer"
        let paymentClass = "freePayment"
        let action = "Apply";
        let actionSudo = "Deadline: "
        
        if(itm.payment != "Free"){
            paymentClass = "paidPayment";
        }
        
        if (itm.category == "Event") {
            action = "Regester ";
            actionSudo = "by: "
            icon = "pencil"
        }

        console.log(icon)
        console.log(itm.category)

        let div = document.createElement("div");
        div.innerHTML = `
            <h3 class="card-title">${itm.title}</h3>
            <div class="card-meta">
                <div class="meta-item ${paymentClass}">
                    <span>${itm.payment || itm.fee}</span>
                </div>
                <div class="meta-item location">
                    
                    <span><i class="fa-solid fa-location-arrow"></i>${itm.location}</span>
                </div>
                <div class="meta-item" id=>
                    <span><i class="fa-solid fa-calendar"></i>${itm.time}</span>
                </div>
            </div>
            <span class="card-type type-${itm.category}">${itm.category}</span>
            <span class="card-organization">${itm.organization}</span>
            <p class="card-description">${itm.description}</p>
            <div class="card-footer">
                <span class="deadline">${actionSudo}${itm.deadline}</span>
            <button class="apply-btn" data-category="${itm.category}" data-title="${itm.title.replace(/"/g, '&quot;')}">
            <i class="fa-solid fa-${icon}"></i>
            ${action}
            </button>
    `
        div.classList.add("card")
        container.appendChild(div);
    })
}