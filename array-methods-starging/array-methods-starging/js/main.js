// Add script to import the company direcotry
// filter
// reduce
// some
// every
// sort
// find
// findIndex()
// slice()

//Array.filter()
// returns an array based on the conditions you set
    /*
    const newArray = inventors.filter(function(inv,index){
        // console.log(inv.year)
        if(inv.year <= 1600){
            return inv;
        }
    })*/
                                    //same as the funtion(inv,ind)
                                    //returns exact same thing as above
    //const newArray = inventors.filter((inv)=> inv.year <= 1600);
    // more explicit (?) return
    //const newArray = inventors.filter((inv)=> {

    //});

    //filter if there's an a in the first name
    //let newArray = inventors.filter(function(inv,ind){
    //    const firstLetter = inv.first.charAt(0).toLowerCase();
    //    if(firstLetter === "a"){
    //        return inv
    //    }
    //})
    
    //console.log(newArray)
    // console.log(inventors)
    // console.table(inventors)

//Array.reduce
//grind down an array into a single value
/*
const newItems = inventors.reduce(function(total,inventor){
    const age = inventor.passed - inventor.year;
    console.log(age)
    return (total + age);
},0)

console.log(newItems)
*/

//Array.sort
//runs through an array based on a test condition
//function(a,b)

/*const newThings = inventors.sort(function(a,b){
    if(a.passed< b.passed)
    {
        return 1;      
    }
    else
    {
        return -1;
    }
})

console.table(newThings)
*/

//Array.find
// returns single element

//Array.sort
// tests whether at least one element in the array passes the test
//returns true or false

//Array.splice
// removing or adding elements in an array in a certain position
/*
const anArray = [1,2,4,5]
anArray.splice(2,0,3)
console.table(anArray)
*/

//return a list of the calgary employees
console.table(company)

const employeeArray = company.filter((person)=> person.location.toLowerCase() == "calgary")

console.table(employeeArray)

//sort by highest payed
const employeePay = company.sort(function (a,b){
    if(a.salary < b.salary)
    {
        return 1;
    }
    else
    {
        return -1;
    }
})

console.table(employeePay)

//what is the total salary
const employeeTotalPay = company.reduce(function(total,person)
{
    return (total + person.salary)
},0)

console.log(employeeTotalPay)