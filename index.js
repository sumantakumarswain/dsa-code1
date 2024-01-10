class stack{
    constructor(){
        this.item = [];
        this.insert = function(item){
            return this.item.push(item)
        }
        this.pop = function(){
            return this.item.pop()
        }
        this.reverse = function(){
            var reversed = []
            var length = this.item.length
            for(var i = 0 ; i < length; i++){
                reversed.push(this.pop())
            }
            return reversed
        }
    }
}

var stack1 = new stack();


function isBracketBalanced(brackets){
 for(var i = 0 ; i < brackets.length; i++){
    if(brackets[i] == "(" ||
     brackets[i] == "{"||
     brackets[i] == "[" ){

     stack1.insert(brackets[i])

    }else{
       if(stack1.item.length == 0){

        console.log("brackets are not balanced") ;
        break;

       }else{
         var popedItems = stack1.pop()

        if(popedItems == "(" && brackets[i] == ")" ||
        popedItems == "{" && brackets[i] == "}" ||
        popedItems == "[" && brackets[i] == "]" ){

        }else{

            console.log("brackets are not balanced");
            break;
        }
       }
    }

    if(i == (brackets.length - 1)){
        if(stack1.item.length == 0){
            console.log("brackets are balanced");
        }else{
            console.log("brackets are not balanced");
        }
    }
 }
}

isBracketBalanced("}")