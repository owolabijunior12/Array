const myFunc= ()=>{
    let power;
    const hello =()=>{
       const ssdCode = String( prompt("Enter Code "));
        if (ssdCode=== "*222#") {
       const option = String( prompt("1.Balance\n 2.Number\n3.Data Balance\n 99.cancel"));
            if (option==="1") {                
                alert(" Your current balance is  $200 available till 12/11/2023.");
                console.log (" Your current balance is  $200 available till 12/11/2023.")                       
            } else if(option==="2"){
                alert("Your phone number is 081366525**");
                console.log ("Your phone number is 081366525**") 
            }else if (option === "3") {
                alert("Your Data Balance is 300 gb");
                console.log ("Your Data Balance is 300 gb") 
            }else if (option === "99") {                
                console.log ("Canceled") 
            }
        } else  if (ssdCode=== "*232#") {
            const option = String( prompt("1. Data Plan \n 2.Social bundle\n3.4.Night Plan \n 99.cancel"));
            if (option==="1") {                
                alert(" Your current balance is  $200 available till 12/11/2023.");
                console.log (" Your current balance is  $200 available till 12/11/2023.")                       
            } else if(option==="2"){
                alert("Your phone number is 081366525**");
                console.log ("Your phone number is 081366525**") 
            }else if (option === "3") {
                alert("Your Data Balance is 300 gb");
                console.log ("Your Data Balance is 300 gb") 
            }else if (option === "99") {                
                console.log ("Canceled") 
            }
        }else{
            alert("Wrong Parameter")
        }
    }
    hello()
 
}
myFunc()