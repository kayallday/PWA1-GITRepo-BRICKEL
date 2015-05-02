/**
 * Name: Kelsey M Brickel
 * Date: 5/1/15
 * PWA - 150401
 *
 */

(function(){


    //Create variables
    var numOfPeople = 3;
    var people = [];
    var names = ['Misty', 'Kelly', 'Kelsey', 'Michelle', 'Cindy'];
    var interval;

    //Create for loop for 3 people
    for(var i =0; i< numOfPeople ; i++){
        var personIndex = Math.floor(Math.random()*names.length);
        //create # for 3 people
        var person = new Person(names[personIndex], i+1);


        //name & job on HTML
        populateHTML(person.name, "r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        //push names out
        people.push(person);
        //cut index down
        names.splice(personIndex,1);
    }
//populate date field to HTML
    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML =data;

    }
})();
