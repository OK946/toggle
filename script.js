document.getElementById(`firstButton`).addEventListener(`click`, ()=>{
    document.getElementById(`header`).classList.toggle(`first`)
});

document.getElementById(`secondButton`).addEventListener(`click`, ()=>{
    if(document.getElementById(`header`).classList.contains(`second`)){
        document.getElementById(`header`).classList.remove(`second`);
    } else {
        document.getElementById(`header`).classList.add(`second`)
    }
});