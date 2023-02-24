// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("DOMContentLoaded", function(){
    //let takeoff = this.document.getElementById("takeoff");
    //let land = this.document.getElementById("landing");


    takeoff.addEventListener("click", event =>{
        let confirm = this.window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirm){
        this.document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        this.document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        this.document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
    
    });

    landing.addEventListener("click", event =>{
        this.window.alert("The shuttle is landing. Landing gear engaged.");
        this.document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
        this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
        this.document.getElementById("spaceShuttleHeight").innerHTML = 0;
        this.document.getElementById("rocket").style.top = 255 + 'px';
        this.document.getElementById("rocket").style.left = 40 + '%';
    });

    missionAbort.addEventListener("click", event =>{
        let confirm = this.window.confirm("Confirm that you want to abort the mission.");
        if(confirm){
            this.document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
            this.document.getElementById("spaceShuttleHeight").innerHTML = 0;
            this.document.getElementById("rocket").style.top = 255 + 'px';
            this.document.getElementById("rocket").style.left = 40 + '%';
        }
    });

    up.addEventListener("click", event =>{
        if(this.document.getElementById("rocket").offsetTop>-5){
            let newHeight = Number(this.document.getElementById("spaceShuttleHeight").innerHTML);
            newHeight += 10000;
            this.document.getElementById("spaceShuttleHeight").innerHTML = newHeight;
            //235 offsetTop is bottom boundary
            let newPxHeight = this.document.getElementById("rocket").offsetTop;
            newPxHeight = newPxHeight - 10;
            this.document.getElementById("rocket").style.top = newPxHeight + 'px';
        }
    });

    down.addEventListener("click", event =>{
        if(this.document.getElementById("rocket").offsetTop<255){
            let newHeight = Number(this.document.getElementById("spaceShuttleHeight").innerHTML);
            newHeight -= 10000;
            this.document.getElementById("spaceShuttleHeight").innerHTML = newHeight;
            //5 offsetTop is top boundary
            let newPxHeight = this.document.getElementById("rocket").offsetTop;
            newPxHeight = newPxHeight + 10;
            this.document.getElementById("rocket").style.top = newPxHeight + 'px';
        }
    });

    left.addEventListener("click", event =>{
        if(this.document.getElementById("rocket").offsetLeft>0){
            let newHorizontalPos = this.document.getElementById("rocket").offsetLeft;
            newHorizontalPos = newHorizontalPos - 10;
            //-25 is left boundary
            this.document.getElementById("rocket").style.left = newHorizontalPos + "px";
        }
    });

    right.addEventListener("click", event =>{
        if(this.document.getElementById("rocket").offsetLeft<(this.document.getElementById("flightDisplay").offsetWidth)/3){
            let newHorizontalPos = this.document.getElementById("rocket").offsetLeft;
            newHorizontalPos = newHorizontalPos + 10;

            this.document.getElementById("rocket").style.left = newHorizontalPos + "px";
        }
    });


    





});
