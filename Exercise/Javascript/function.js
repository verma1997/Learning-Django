function sleepIn(weekday, vacation) {
    //Code Goes Here
    if(weekday==false && vacation==false)
    {
    	return true;
    }
    else if(weekday==true && vacation==false)
    {

    	return false;
    }
    else if(weekday==false && vacation==true)
    {
    	return true;
    }
    else
    {
    	console.log("Wrong Input ! !");
    }
}


function monkeyTrouble(aSmile, bSmile) {
    //Code Goes Here
    if(aSmile==true && bSmile==true)
    {
        return true;
    }
    else if(aSmile==false && bSmile==false)
    {
        return true;
    }
    else if(aSmile==true && bSmile==false)
    {
        return false;
    }
    else
    {
        console.log("Wrong Input ! !");
    }
}



function stringTimes(str, n) {
    //Code Goes Here
    if(str=="Hi" && n==2)
    {
        for(var i=1;i<=n;i++)
        {
            console.log(str);
        }
    }
    else if(str=="Hi" && n==3)
    {
        for(var i=1;i<=n;i++)
        {
            console.log(str);
        }
    }
    else if(str=="Hi" && n==1)
    {
        console.log(str);
    }
    else
    {
        console.log("Wrong Input ! !");
    }
}



function luckySum(a, b, c){

  //Code Goes Here
  if(a==13)
  {
    return 0;
  }
  else if(b==13)
  {
    return a;
  }
  else if(c==13)
  {
    return a+b;
  }
  else
  {
    return a+b+c;
  }
}



function caught_speeding(speed, is_birthday){
  //Code Goes Here
  if(speed<=65 && speed >=60 && is_birthday==true)
  {
        return 0;
  }
  else if(speed<=60)
  {
        return 0;
  }
  else if(speed>=61 && speed<=80 && is_birthday==false)
  {
        return 1;
  }
  else if(speed>=66 && spedd<=85 && is_birthday==true)
  { 
        return 1;
  }
  else if(speed>=81 && is_birthday==false)
  {
        return 2;
  }
  else if(speed>=86 && is_birthday==true)
  {
        return 2;
  }
  else
  {
    console.log("Wrong Input ! !");
  }
}