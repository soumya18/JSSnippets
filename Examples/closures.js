/**
* @description Simple Closure Example
*/

function init(){
    var name = 'mozilla';
    /*  closure */
    function displayName(){
      console.log(name);
    }
    
    displayName();
}
  
init();

/**
 * @description return closure from a function & call it
 */

function init1(){
    var name = 'mozilla';
    function displayName(){
        console.log(name);
    }

    return displayName;
}
  
var func = init1();
  
func();


/**
 * @description 
*/

function counter() {
    var counter = 0;

    function changeBy(val){
        counter += val;
    }

    var rtObj = {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value: function(){
            return counter;
        }
    }

    return rtObj;
}

var cntrVar = counter();
var incrementVal = cntrVar.increment();
console.log(cntrVar.value());

