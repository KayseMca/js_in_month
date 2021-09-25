// Global APP controller

// constructors(MVC) the model part


var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    };
    var Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(current) {
            sum = sum + current.value
        })

        data.totals[type] = sum
    }
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, description, val) {
            var newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0
            }

            if (type === 'inc') {
                newItem = new Expense(ID, description, val)
            } else {
                newItem = new Income(ID, description, val)
            }

            data.allItems[type].push(newItem);
            return newItem
        },
        calculateBudget: function() {
            calculateTotal('exp');
            calculateTotal('inc');
            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1
            }

        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function() {
            console.log(data)

        }
    }
})();


// UI controller (MVC) the view part
var UIController = (function() {

    var domInput = {
        inputType: ".type",
        inputDescription: ".description",
        inputValue: ".value",
        inputAddButton: ".add__btn",
        incomeContainer: ".income-table",
        expenseContainer: ".expense-table",
        budgetLabel: ".budget__value",
        incomeLabel: ".header__income",
        expenseLabel: ".header__expenses",
        percentageLabel: ".percentage"
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(domInput.inputType).value,
                description: document.querySelector(domInput.inputDescription).value,
                value: parseFloat(document.querySelector(domInput.inputValue).value)
            }

        },
        addList: function(obj, type) {
            var html, element;
            // create html  placeholder
            if (type === 'inc') {
                element = domInput.incomeContainer;
                html = '<tr  id="%id%"><td class="desc">%description%</td><td class="val">%value%</td> </tr>'
            } else {
                element = domInput.expenseContainer;
                html = '<tr  id="%id%"><td class="desc">%description%</td><td class="val">%value%</td> </tr>'
            }


            // console.log(html)
            html = html.replace('%id%', obj.id)
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace("%description%", obj['description'])
            newHtml = newHtml.replace("%value%", obj.value)

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        displayBudget: function(obj) {
            console.log(obj)
            document.querySelector(domInput.budgetLabel).textContent = obj.budget
            document.querySelector(domInput.incomeLabel).textContent = obj.totalInc
            document.querySelector(domInput.expenseLabel).textContent = obj.totalExp
            if (obj.percentage > 0) {
                // document.querySelector(domInput.percentageLabel).textContent = obj.percentage + '%'
            } else {
                // document.querySelector(domInput.percentageLabel).textContent = '---';
            }

        },

        getDomString: function() {
            return domInput;
        },

        clearFields: function() {
            var fields;
            fields = document.querySelectorAll(domInput.inputValue + ',' + domInput.inputDescription);
            var fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(element) {
                element.value = ""
            });
            fieldsArray[0].focus()
        }

    }
})();


// main controller(MVC) the Controller part
var controller = (function(budgetControl, UIControl) {

    var DOM = UIControl.getDomString();
    var setupEvents = function() {
        document.querySelector(DOM.inputAddButton).addEventListener('click', addItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                addItem()
            }
        })
    }

    var updatePudget = function() {

        // calculate budget

        budgetControl.calculateBudget();
        // return the budget
        var budget = budgetControl.getBudget();
        // display the budget
        UIControl.displayBudget(budget)

    }

    var addItem = function() {
        // get the filled input

        var inputs = UIControl.getInput();

        if (inputs.description !== "" && !isNaN(inputs.value) && inputs.value > 0) {
            // add the item to the budget
            var budget = budgetControl.addItem(inputs.type, inputs.description, inputs.value);
            // add the item to the UI
            UIControl.addList(budget, inputs.type)
                // display the budget in the ui
            UIControl.clearFields();

            // update the budget
            updatePudget()
        }

    }
    return {
        init: function() {
            UIControl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                // percentage: 0
            })
            console.log("Application has started");
            setupEvents()
        }
    }
}(budgetController, UIController))

controller.init()