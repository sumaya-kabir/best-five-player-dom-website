document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerCost = getInputValue('player-field');
    
    // player expense calculation
    const selectedFive = document.getElementById('selected-five');
    const listLength = selectedFive.childNodes.length - 1;

    const playerCostTotal = playerCost * listLength;

    // set expense value
    setValue('player-expense', playerCostTotal);
    
    
})

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const playerExpenses = getElementValue('player-expense');
    const coachCost = getInputValue('coach-field');
    const managerCost = getInputValue('manager-field');

    // total calculation
    const totalCost = playerExpenses + coachCost + managerCost;

    // set total value
    setValue('total', totalCost);
})