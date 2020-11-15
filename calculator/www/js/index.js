var jspm1=document.getElementById("id1");
function abc(obj)
{
    var pushed=obj.innerHTML;
    if (pushed=="=")
        {
            jspm1.innerHTML=eval(jspm1.innerHTML)
        }
    else if(pushed=="AC")
    {
      jspm1.innerHTML="0"  
        
    }
    else
    {
        if(jspm1.innerHTML=="0")
            {
                jspm1.innerHTML=pushed;
            }
        else{
            jspm1.innerHTML=jspm1.innerHTML+pushed;
        }
    }
    }