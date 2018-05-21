



function forLoop(array)

{
  var i
  var l = 25
  
  for ( i=0 ; i < l ;i++)
  {
    if (i===1)
    array[i]= "I am 1 strange loop."
    else
    array[i] =`I am ${i} strange loops.`
    
   
  }
   
 return array[i]
}

function whileLoop(n)
{
  
  while(n>0)
  {
    
    console.log(--n)
    
  }
  
  return "done"
  
}


