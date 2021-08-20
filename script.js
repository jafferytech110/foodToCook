let DishToCook = {
    listOfThings: [
        'Beans',
        'Aalo Spinach',
        'Mozeralla Spinat',
        'Roasted Chicken',
        'Karachi',
        'Korma',
        'Biryani',
        'Meat',
        'Fish',
        'Vegetable Rice',
        'Burgers'
    ],
    displayDish: function (){
        this.listOfThings.forEach(element => {
            let paragraph = document.createElement("p");
            paragraph.textContent = `${element}`;
            document.querySelector(".DishName").appendChild(paragraph);
        });
    },
    shuffleDish: function(){
        //list = list.sort(() => Math.random() - 0.5)
        this.listOfThings = this.listOfThings.sort(() => Math.random() - 0.5);
        return this.listOfThings;
    },
    addDish: function(dish){
        this.listOfThings.push(dish);
    },
    displayDate: function(){
        addElementToDate(getDateUpdate());
        for(var i=1; i < this.listOfThings.length; i++){
            let datePass = new Date();
            datePass.setDate(datePass.getDate()+i);
            let date = getDate(datePass);
            addElementToDate(date);            
        };
    },
}
// new Date(2010, 7, 5);
function getDate(date){
    let d = date;
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return (`${da}-${mo}-${ye}`);
}

function addElementToDate(date){
    let paragraph = document.createElement("p");
    paragraph.textContent = `${date}`;
    document.querySelector(".date").appendChild(paragraph);
}

function getDateUpdate(){
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return (`${da}-${mo}-${ye}`);
}

document.querySelector(".display").addEventListener('click', 
    function() {
        DishToCook.displayDish();
        DishToCook.displayDate();
    });
document.querySelector(".shuffle").addEventListener('click',
    function() {
        DishToCook.shuffleDish();
    }); 




//DishToCook.addDish(dish);