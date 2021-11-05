function telephoneCheck(str) {
  //put string in an array
  let newStr = str.split("");

  if(str.length<10 || str.length>16 || str.length==11 || str.length==15)
    return false;
    
  if(str.length == 10){
    return newStr.every(function(number){
      return Number.isInteger(parseInt(number));
    });
  }
  else if(str.length == 12){
    for(let i = 0; i < str.length; i++){
      
      if(i != 3 && i!= 7){
        if(!Number.isInteger(parseInt(str[i]))){
          return false;
        }
      }
      else{
        if( str[i] != " " && str[i]!= "-"){
          return false;
        }
      }
    }
    return true;
  }
  else if(str.length == 13){
    if (str[0] != '(' || str[4] != ")" || str[8] != "-") 
     return false;
    for(let i = 0; i < str.length; i++){
       if (i!= 0 && i!= 4 && i!= 8){
          if(!Number.isInteger(parseInt(str[i]))){
            return false;
          }
        }
      }
    return true;
  }
  else if(str.length == 14){
      if(parseInt(str[0]) != 1) 
       return false;
      
      if(str[1] == " "){
        if(str[5] != " " && str[5] != "-") return false;        
        if(str[9] != " " && str[9] != "-") return false;  
        for(let i = 0; i < str.length; i++){
            if (i!= 0 && i!= 1 && i!= 5 && i!= 9){
              if(!Number.isInteger(parseInt(str[i]))){
                return false;
              }
            }
        }  
        return true;
      }
      else if(str[1] == "("){
        if(str[5] != ")" || str[9] != "-")
          return false;
        for(let i = 0; i < str.length; i++){
          if (i!= 0 && i!= 1 && i!= 5 && i!= 9){
            if(!Number.isInteger(parseInt(str[i]))){
              return false;
            }
          }
        }
      }
      else 
        return false;
    return true;
  }
  else if(str.length == 16){
    if(parseInt(str[0]) != 1 || str[1] != " " && str[2] != "(" || str[6] != ")") 
       return false;
    if(str[7] != " " && str[7] != "-")
      return false;
    if(str[11] != " " && str[11] != "-")
      return false;
    for(let i = 0; i < str.length; i++){
          if (i!= 0 && i!= 1 && i!= 2 && i!= 6 && i!= 7 && i!= 11){
            if(!Number.isInteger(parseInt(str[i]))){
              return false;
            }
          }
    }
  }


  return true;
}


console.log(telephoneCheck("(818)557-4452"));
