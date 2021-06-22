var lines = 10
for (var i = 0; i < lines; i ++){
      for( var j = 0; j <= lines; j ++){
        if(i % 2 == 0){
          if(j % 2 == 0){
            document.write("#")
          }
          else{
            document.write("0")
          }
        }
        else{
          if( j % 2 == 0){
            document.write("0")
          }
          else{
            document.write("#")
          }
        }
        
      }
  document.write("<br/>")
}
