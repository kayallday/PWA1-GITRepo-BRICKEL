/**
 * Kelsey M Brickel
 * 15/05/01
 * PWA
 */


(function(){
    //add object to global window object
    window.Person=Person;
    //create static variables for jobs and actions
    Person.jobs = ['front-end developer', 'content specialist', 'web designer', 'IT Girl'];
    Person.actions = ['editing', 'debugging', 'analyzing'];


    //create a function that will go through names, actions, jobs
    function Person(name, row){
        console.log("Person Created: ", name);

        this.name = name;
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //need to define row for JavaScript to know which row
        this.row = row;

        //new var id to add this.row to position using getElementById
        var id = document.getElementById("r"+this.row+"c3");

        id.innerHTML=this.action;
        //display
    }


    //use prototype for randomizing everything
    Person.prototype.updates = function(){
        if(Math.floor(Math.random()<.01)){
        var i = Math.floor(Math.random()*Person.actions.length);
        this.action = Person.action[i];
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
        }
    }
})();