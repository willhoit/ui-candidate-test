// Example unit test function
function divide( a, b ) {
   // To see the test pass, uncomment the following line
   return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    // uses 'esrever' library to account for certain special characters
    // see: https://github.com/mathiasbynens/esrever
    return esrever.reverse(str);
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    if( !_.isEmpty(values) ){
        return _.min(values);
    }
    return "*throw array empty error*";
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    return _.uniq(values);
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    for( var i = 1; i <= 100; i++ ){

        var output = "";

        if( i % 3 === 0 ){
           output += ("Fizz");
        }

        if( i % 5 === 0 ){
           output += ("Buzz");
        }

        console.log(output || i);
    }
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {

    // http://underscorejs.org/#difference
    return _.difference(fruits, fruitsToRemove);
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {

    if( _.isArray( toPush )){
        array.push.apply(array, toPush);
    } else {
        array.push(toPush);
    }

    return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    if( sourceStr === "" ){
        return [];
    }

    return sourceStr.split(',');
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    var total = 0;

    function add(number){
        return total += number;
    }

    _.each(arguments, add);

    return total;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    var regex = /^\s+$/;

    return regex.test(sourceStr);
}

// write an example of a javascript closure
function calculateAnimalAge(animalToHumanYears){
    return function(humanYears){
        return animalToHumanYears * humanYears;
    };
}

var catAge = calculateAnimalAge(5);
var dogAge = calculateAnimalAge(7);

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var people = {
    "people": [
        {
            "firstName": "Eric",
            "lastName": "Willhoit",
            "city": "Des Moines",
            "state": "IA",
            "zip": "55555",
            "phoneNumbers": [
                {
                  "type": "home",
                  "number": "515 222-1234"
                },
                {
                  "type": "work",
                  "number": "515 222-2345"
                },
                {
                  "type": "mobile",
                  "number": "515 222-3456"
                }
            ]
        },
        {
            "firstName": "Ellie",
            "lastName": "Willhoit",
            "city": "Des Moines",
            "state": "IA",
            "zip": "55555",
            "phoneNumbers": [
                {
                  "type": "home",
                  "number": "515 444-4567"
                },
                {
                  "type": "work",
                  "number": "515 444-5678"
                },
                {
                  "type": "mobile",
                  "number": "515 444-6789"
                }
            ]
        },
        {
            "firstName": "Larry",
            "lastName": "Dunbar",
            "city": "Denver",
            "state": "CO",
            "zip": "70707",
            "phoneNumbers": [
                {
                  "type": "home",
                  "number": "860 777-3855"
                },
                {
                  "type": "work",
                  "number": "860 777-2335"
                },
                {
                  "type": "mobile",
                  "number": "860 777-6757"
                }
            ]
        }
    ]
};

// Create a javascript object (DataTable) with the following:
// A private columns property (string array)
// A private rows property (string array)
// A public method addRows that adds an item to the rows array
// A public method addColumns that adds an item to the columns array
// A public method getData that returns the a json object representation of the DataTable
// Note: the row object should be a hash of the column name and row item value
// Example:
// .addColumns('column1', 'column2', 'column3');
// .addRow('value1A', 'value1B', 'value1C');
// .addRow('value2A', 'value2B', 'value2C');
var DataTable = function(initColumns, initRows){
    var columns = initColumns || [],
        rows = initRows || [];

    this.addColumns = function(columnsToAdd){
        return pushOntoArray(columns, columnsToAdd);
    };

    this.addRows = function(rowsToAdd){
        return pushOntoArray(rows, rowsToAdd);
    };

    this.getData = function(){
        // Still uncertain of "hash" instructions..
        // All I can think of when looking at this is:
        // "This sounds like a very bad way to store data, I should be using Mongo" :D
    };
};

var Satellites = new DataTable(["Mercury", "Venus"], ["moon1", "moon2"]);

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
var selectElementData = {
    id: "x-men",
    label: "X-Men",
    options: [
        {"option": "Beast"},
        {"option": "Iceman"},
        {"option": "Banshee"},
        {"option": "Forge"}
    ],
    button: "Log!"
};

var selectElementTemplate = $("#select-element-template").html(),
    selectTemplateCompiled = Handlebars.compile(selectElementTemplate),
    selectElementHtml = selectTemplateCompiled(selectElementData);

$('#div1').html(selectElementHtml);

$('#div1 button').on( "click", function() {
    console.log( $("#div1 select").val() );
});

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
$("#foo a").html();
$("#fizz a").html();
$("a.link").html();
$("#fizz :first-child").html();
$("#foo a:first-of-type").html();

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
var states = ["Iowa", "Indiana", "Minnesota"],
    stateList = "";

// reuses previously written function
states = pushOntoArray(states, ["Colorado", "Utah"]);

function createList(state){
    stateList += "<li>" + state + "</li>";
}

_.each(states, createList);

$('#list1').html(stateList);

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
var checkboxData = {
    header: "Select all the things you like:",
    checkbox: [
        {
            "label": "Kittens",
            "value": "kittens"
        },
        {
            "label": "Gifs",
            "value": "gifs"
        },
        {
            "label": "Coffee",
            "value": "coffee"
        },
        {
            "label": "Tuberculosis",
            "value": "tuberculosis"
        },
        {
            "label": "Checkboxes",
            "value": "checkboxes"
        }
    ]
};

var checkboxTemplate = $("#checkbox-template").html(),
    checkboxTemplateCompiled = Handlebars.compile(checkboxTemplate),
    checkboxHtml = checkboxTemplateCompiled(checkboxData);

$('#foobar').html(checkboxHtml);

$('#foobar #checkAll').on( "click", function() {
    $('#foobar input:checkbox').prop('checked', true);
});

$('#foobar #uncheckAll').on( "click", function() {
    $('#foobar input:checkbox').prop('checked', false);
});

