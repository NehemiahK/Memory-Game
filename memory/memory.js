function gameStart(){
    function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    var vals = [1,1,2,2,3,3,4,4,5,5,6,6];
    var shuffled = shuffle(vals);


    var counter =1;
    var valscounter=0;


    for (var j=0; j<3;j++){
        var x = 'row' + counter;
        for (var i=0; i<4;i++){
            var img = document.createElement("img");
            img.className="card";
            var att = document.createAttribute("src");
            var alt = document.createAttribute("alt");
            var id = document.createAttribute("id");
            alt.value=shuffled[valscounter];
            att.value= "texture.jpg";
            id.value=valscounter;
            img.setAttributeNode(att);
            img.setAttributeNode(alt);
            img.setAttributeNode(id);
            document.getElementById(x).appendChild(img);
            valscounter++;
        }
        counter++;
    }
}

gameStart();


var checkVal = []; // holds the past two values to compare them.
var checkId = []; // hold the past two ids to flip them over.

function checkCard(){

    //var altVal = this.alt;
    if (this.id != checkId[0]){ // make sure they dont click the same card twice.

        checkVal.push(this.alt);
        checkId.push(this.id);

        if (checkVal.length==1){
            this.src = this.alt + ".jpg";

        }
        else if (checkVal.length ==2){
            this.src = this.alt + ".jpg";
        }

        var card1 =checkVal[0];
        var card2 =checkVal[1];

        if (checkVal.length==2){

            if (card1!=card2){

                var myVar = setTimeout(myTimer, 1400);
                        function myTimer() {
                            document.getElementById(checkId[0]).src = "texture.jpg";
                            document.getElementById(checkId[1]).src = "texture.jpg";
                            checkId=[];
                            checkVal=[];
                        }

            }
            else{
                checkId=[];
                checkVal=[];
            }

        }

    }

}

/*assigning the event listeners to the cards */

var cards = document.getElementsByClassName("card");
for (var x=0; x<cards.length; x++){
    cards[x].addEventListener("click", checkCard);
}
