const myFunc= ()=>{
    let Data = 0;
    const hello =()=>{
         const ssdCode = String( prompt("Enter Code "));
        if (ssdCode=== "*232#") {
            const option = String( prompt("1. Data Plan \n 2.Social bundle\n3.Special Offer\n4.Night Plan \n 99.cancel"));
         if (option==="1") {                
                const optionData = String( prompt("1. 100 for 100mb for 1day \n 2. 100 for IG/TT/FB for 1days\n3. 1gb for 300 1day\n 4. 2.5gb for 600 2days\n5. 3gb for 800 for 2days\n6. 8gb for 1500 7days \n 99. Cancel"));
             if (optionData ==="1") {
                    const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                    if (optionDataComf ==="1") {
                        Data +=100
                        alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)
                 
                        alert(`You have successfully purchase with Airtime`)
                    }else if (optionDataComf ==="2") {
                        Data +=100
                        alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)                    
                        alert(`You have successfully purchase with Pulse Point`)
                    }else if (optionDataComf==="3") {
                        Data +=100
                        alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)                    
                        alert(`You have successfully purchase with Airtime and Pulse Point`)
                    }else{
                        alert("Wrong Parameter") 
                    }                                                      
            } else if(optionData==="2"){
                const optionDataComf = String( prompt("You are paying for 100 for IG/TT/FB for 1days\/ \n1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                  
                    Data +=100
                    alert(`You have successfully purchase ${Data}mb  for 100 IG/TT/FB valid till ${new Date().getFullYear()}`)
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionData ==="2") {
                    Data +=100
                    alert(`You have successfully purchase ${Data}mb for 100 IG/TT/FB valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionData==="3") {
                    Data +=100
                    alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                }                   
            }else if (optionData === "3") {
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                         
                    Data +=1024
                    alert(`You have successfully purchase ${Data}mb  for 300  valid till ${new Date().getFullYear()}`)                    
               
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionData ==="2") {
                    Data +=1024
                    alert(`You have successfully purchase ${Data}mb for 300  valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionData==="3") {
                    Data +=1024
                    alert(`You have successfully purchase ${Data}mb for 300 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "4") {                
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                              
                    Data +=2048+500
                    alert(`You have successfully purchase ${Data}mb  for 600  valid till ${new Date().getFullYear()}`)                                                    
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionDataComf ==="2") {
                    Data +=2048+500
                    alert(`You have successfully purchase ${Data}mb for 600  valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionDataComf==="3") {
                    Data +=2048+500
                    alert(`You have successfully purchase ${Data}mb for 600 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "5") {                
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                                                                                                 
                    Data +=1024*3
                    alert(`You have successfully purchase ${Data}mb  for 800  valid for 2days`)                    
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionDataComf ==="2") {
                    Data +=1024*3
                    alert(`You have successfully purchase ${Data}mb for 800 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionDataComf==="3") {
                    Data +=1024*3
                    alert(`You have successfully purchase ${Data}mb for 800 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "6") {                
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                                                                                                 
                // } else if (optionDataComf ==="5") {
                    Data +=1024*8
                    alert(`You have successfully purchase ${Data}mb  for 1500  valid for 2days`)                    
                // } else if (optionDataComf ==="6") {
                //     Data +=1024*3
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionDataComf ==="2") {
                    Data +=1024*8
                    alert(`You have successfully purchase ${Data}mb for 1500  valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionDataComf==="3") {
                    Data +=1024*8
                    alert(`You have successfully purchase ${Data}mb for 1500 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "99") {                
                console.log ("Canceled") 
            }  
         }  else if (option ==="2") {
                const optionData = String( prompt("1. 50 for 25mb for 1day \n 2. 100 for IG/TT/FB for 1days\n3. 1gb for 300 1day\n 4. 2.5gb for 600 2days\n5. 3gb for 800 for 2days\n6. 8gb for 1500 7days \n 99. Cancel"));
             if (optionData ==="1") {
                    const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                    if (optionDataComf ==="1") {
                        Data +=100
                        alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)
                 
                        alert(`You have successfully purchase with Airtime`)
                    }else if (optionDataComf ==="2") {
                        Data +=100
                        alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)                    
                        alert(`You have successfully purchase with Pulse Point`)
                    }else if (optionDataComf==="3") {
                        Data +=100
                        alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)                    
                        alert(`You have successfully purchase with Airtime and Pulse Point`)
                    }else{
                        alert("Wrong Parameter") 
                    }                                                      
            } else if(optionData==="2"){
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                  
                    Data +=100
                    alert(`You have successfully purchase ${Data}mb  for 100 IG/TT/FB valid till ${new Date().getFullYear()}`)
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionData ==="2") {
                    Data +=100
                    alert(`You have successfully purchase ${Data}mb for 100 IG/TT/FB valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionData==="3") {
                    Data +=100
                    alert(`You have successfully purchase ${Data}mb for 100 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                }                   
            }else if (optionData === "3") {
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                         
                    Data +=1024
                    alert(`You have successfully purchase ${Data}mb  for 300  valid till ${new Date().getFullYear()}`)                    
               
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionData ==="2") {
                    Data +=1024
                    alert(`You have successfully purchase ${Data}mb for 300  valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionData==="3") {
                    Data +=1024
                    alert(`You have successfully purchase ${Data}mb for 300 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "4") {                
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                              
                    Data +=2048+500
                    alert(`You have successfully purchase ${Data}mb  for 600  valid till ${new Date().getFullYear()}`)                                                    
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionDataComf ==="2") {
                    Data +=2048+500
                    alert(`You have successfully purchase ${Data}mb for 600  valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionDataComf==="3") {
                    Data +=2048+500
                    alert(`You have successfully purchase ${Data}mb for 600 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "5") {                
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                                                                                                 
                    Data +=1024*3
                    alert(`You have successfully purchase ${Data}mb  for 800  valid for 2days`)                    
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionDataComf ==="2") {
                    Data +=1024*3
                    alert(`You have successfully purchase ${Data}mb for 800 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionDataComf==="3") {
                    Data +=1024*3
                    alert(`You have successfully purchase ${Data}mb for 800 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "6") {                
                const optionDataComf = String( prompt("1. Airtime\n 2. Pulse Point\n3. Airtime and Pulse Point\n 99.cancel"));
                if (optionDataComf ==="1") {                                                                                                                 
                // } else if (optionDataComf ==="5") {
                    Data +=1024*8
                    alert(`You have successfully purchase ${Data}mb  for 1500  valid for 2days`)                    
                // } else if (optionDataComf ==="6") {
                //     Data +=1024*3
                    alert(`You have successfully purchase with Airtime`)
                }else if (optionDataComf ==="2") {
                    Data +=1024*8
                    alert(`You have successfully purchase ${Data}mb for 1500  valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Pulse Point`)
                }else if (optionDataComf==="3") {
                    Data +=1024*8
                    alert(`You have successfully purchase ${Data}mb for 1500 valid till ${new Date().getFullYear()}`)                    
                    alert(`You have successfully purchase with Airtime and Pulse Point`)
                }
                else{
                    alert("Wrong Parameter") 
                } 
            }else if (optionData === "99") {                
                console.log ("Canceled") 
            }  
         }
        }else if (ssdCode=== "*222#") {
       const option = String( prompt("1.Balance\n 2.Number\n3.Data Balance\n 99.cancel"));
            if (option==="1") {                
                alert(" Your current balance is  $200 available till 12/11/2023.");
                console.log (" Your current balance is  $200 available till 12/11/2023.")                       
            } else if(option==="2"){
                alert("Your phone number is 081366525**");
                console.log ("Your phone number is 081366525**") 
            }else if (option === "3") {
                alert("Your Data Balance is 300 gb");
                console.log (`Your Data Balance is  ${Data}gb`) 
            }else if (option === "99") {                
                console.log ("Canceled") 
            }
        } else{
            alert("Wrong Parameter")
        }
    }
    hello()
 
}
myFunc()