function addPlayer(element){
    const selectedFive = document.getElementById('selected-five');
    const listLength = selectedFive.childNodes.length;

    // show error if select more than 5
    if(listLength > 5){
        alert('Only Select Five');
    } else {
        const selectLi = document.createElement('li');
        selectLi.innerText = element.parentNode.parentNode.children[0].innerText;
        selectedFive.appendChild(selectLi);

        // disabled button after click
        element.setAttribute('disabled', true);
        
    }
}




// const btnAll = document.querySelectorAll('.btn');
// console.log(btnAll);
// const selectBtn = btnAll[0].parentNode.parentNode.children[0].innerText;
// console.log(selectBtn);
// // create new selected player
// const selectedFive = document.getElementById('selected-five');

// const selectLi = document.createElement('li');

// selectLi.innerText = selectBtn;

// selectedFive.appendChild = selectLi;