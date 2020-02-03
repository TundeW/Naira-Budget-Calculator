let budgetInput = document.getElementById('budget_input_value');

let expenseTextInput = document.getElementById('expense_det');

let expenseValueInput = document.getElementById('expense_input_value');

let budgetButton = document.getElementById('budget_button');

let expenseButton = document.getElementById('expense_button');

let resetButton = document.getElementById('reset_button');

budgetInput.addEventListener("input", budgetUnHide);

expenseTextInput.addEventListener("input", expenseUnHide);

expenseValueInput.addEventListener("input", expenseUnHide);

budgetButton.addEventListener("click", addBudget);

expenseButton.addEventListener('click', addExpense);

resetButton.addEventListener('click', reset);


function addBudget() {
    let budgetValue = document.getElementById('budget');
    let budgetInput = document.getElementById('budget_input_value');
    budgetValue.innerHTML = budgetInput.value;

    calculateBalance();

    budgetInput.value = ''

    budgetUnHide();
    resetUnHide();
}

function addExpense() {

    addToExpenseList();

    displayTotalExpense();

    calculateBalance();
    let expenseTextInput = document.getElementById('expense_det');
    let expenseValueInput = document.getElementById('expense_input_value');

    expenseTextInput.value = ''
    expenseValueInput.value= ''

    expenseUnHide();
    resetUnHide();
}

function calculateBalance() {
    let budgetValue = document.getElementById('budget');
    let expenseValue = document.getElementById('expense');
    let balanceValue = document.getElementById('balance');
    let _balance = parseFloat(budgetValue.innerHTML) - parseFloat(expenseValue.innerHTML);
    balanceValue.innerHTML = _balance;
    if(_balance < 0) {
        document.getElementById("balColor").className= "amttwo";
    } else {
         document.getElementById("balColor").className= "amtone";
    }

}

function removeRow(oButton) {
    var empTab = document.getElementById('expense_table');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
    displayTotalExpense();
    calculateBalance();
    }


function addToExpenseList() {
    let expenseTextInput = document.getElementById('expense_det').value;
    let expenseValueInput = document.getElementById('expense_input_value').value;
    let expenseTable = document.getElementById('expense_table')
    let expenseRow = document.createElement('tr');
    let expenseItem = document.createElement('td');
    let expenseItem2 = document.createElement('td');
    let expenseItem3 = document.createElement('td');
    let expenseTextNode = document.createTextNode(expenseTextInput);
    let expenseValueNode = document.createTextNode(expenseValueInput);
    let removeButton = document.createElement('button');
    let buttonText = document.createTextNode('Remove');

    removeButton.appendChild(buttonText);
     removeButton.classList.add('btn');
    removeButton.classList.add('btn2');
    removeButton.setAttribute('onclick', 'removeRow(this)');

    expenseItem.appendChild(expenseTextNode);
    expenseItem2.appendChild(expenseValueNode);
    expenseItem3.appendChild(removeButton);

    expenseRow.appendChild(expenseItem);
    expenseRow.appendChild(expenseItem2);
    expenseRow.appendChild(expenseItem3);

    expenseTable.appendChild(expenseRow);

}

function displayTotalExpense() {
    arr = document.getElementById('expense_table');
    //alert(arr)
    sum = 0;
    for (let i = 1; i < arr.rows.length; i++) {
        sum = sum + parseFloat(arr.rows[i].cells[1].innerHTML);
    }
    let expenseValue = document.getElementById('expense');
    expenseValue.innerHTML = sum;

}

function reset() {
    let budgetValue = document.getElementById('budget');
    let expenseValue = document.getElementById('expense');
    let balanceValue = document.getElementById('balance');
    budgetValue.innerHTML = 0
    expenseValue.innerHTML = 0
    balanceValue.innerHTML = 0

    let expenseTextInput = document.getElementById('expense_det');
    let expenseValueInput = document.getElementById('expense_input_value');
    let budgetInput = document.getElementById('budget_input_value');

    expenseTextInput.value = ''
    expenseValueInput.value= ''
    budgetInput.value = ''

    arr = document.getElementById('expense_table');
    length = arr.rows.length
    for (let i = 1; i < length; i=i+1) {
        arr.deleteRow(1);
    }
    resetButton.classList.add('hide');
}



function budgetUnHide() {
    if (budgetInput.value !== '') {
        budgetButton.classList.remove('hide')
    }
    else {
        budgetButton.classList.add('hide')
    }
}

function expenseUnHide() {
    if (expenseTextInput.value !== '' & expenseValueInput.value !== '') {
        expenseButton.classList.remove('hide')
    }
    else {
        expenseButton.classList.add('hide')
    }
}


let budgetValue = document.getElementById('budget');
let expenseValue = document.getElementById('expense');
let balanceValue = document.getElementById('balance');

function resetUnHide() {
    if (budgetValue.innerHTML !== 0 || expenseValue.innerHTML!== 0 || balanceValue.innerHTML !== 0) {
        resetButton.classList.remove('hide')
    }
    else {
        resetButton.classList.add('hide')
    }
}
//g||
