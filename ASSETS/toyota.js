//required variables/
var customerId   =document.getElementById('customerid');
var customerName =document.getElementById('customername');
var description  =document.getElementById('description');
var partNumber   =document.getElementById('partnumber');
var price = document.getElementById('price');
var quantity = document.getElementById('quantity');
var cost;
var tax;
var retail = document.getElementById('retail');
var shipping, charge;
var overSizeContainer = document.getElementById('oversizecontainer');
var shippingmethod= document.getElementById('shippingmethod');
/** validation rules.
 *customer id.
 *customer Name.
 *town code.
 *part Number.
 *description.
 *price.
 *quantity.  
**/
function validData() {
    // Customer id validation.
    if (!customerId.value) {
        document.getElementById('style').style.display ='block';
        document.getElementById('popup1').innerHTML='Customer Id is missing';
        return false;
    }
    // Customer Name validation.
    if (!customerName.value) {
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML='Customer Name is missing';
        return false;
    }
    // State value validation.
    var state = document.getElementById('state').value;
    if (!state) {
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML= "State can't be missing";
        return false;
    }else if (state.length < 3) {
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML= "Invalid Input";
        return false;
        
    }else if(state.length > 3){
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML= "Invalid Input";
        return false;
    }
    // Part number Validation.
    if (!partnumber.value) {
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML='Part Number is missing';
        return false;
    }    
    // description value.
    if (!description.value) {
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML='Description value is missing';
        return false;
             
    }
    // Price value validation.
    if (price.value <= 0) {
        document.getElementById('style').style.display = 'block';
        document.getElementById('popup1').innerHTML="Null value";  
        return false;
    } 
    // End of validation rules.
    
    // Returning cost value  
    function costoutput() {
        cost =price.value*quantity.value;
        document.getElementById('cost').innerHTML='$'+cost;

        
    }
    costoutput()
    // Returning  salestax value
    function salesTax() {
        
        switch (retail.checked) {
            case true:
                switch (state) {
                    case "kla":
                    case "KLA":
                        tax=(0.1*cost)
                        document.getElementById('tax').innerHTML=tax;
                        break;
                        
                
                    case "ebb":
                    case "EBB":
                        tax=(0.05*cost)
                        document.getElementById('tax').innerHTML=tax;
                        break;
                    case "mbr":
                    case "MBR":
                        tax=(0.05*cost)
                        document.getElementById('tax').innerHTML=tax;
                        break;
                    default:
                        tax=(0*cost)
                        document.getElementById('tax').innerHTML=tax;
                        break;
                }
                break;

        
            default:
                tax=(0*cost)
                document.getElementById('tax').innerHTML=tax;
        
                break;

        }

    
        
    }
    salesTax()
    /**
     * returning values depending on charge
     * returning values depending on shipment method
     *  returning values depending on charge and shipment method
     */
    function  shippingHandling() {
        var ups= document.getElementById('ups');
        var feg= document.getElementById('feg');
        var upa= document.getElementById('upa')
        var fea =document.getElementById('fea')
        switch (overSizeContainer.checked) {
            case true:
                charge = (quantity.value*5);
                break;
            case false:
                charge = (quantity.value*0);
                break;

        }
        if (ups.checked=== true) {
            shipping = ((quantity.value*7.00)+ charge);
            document.getElementById('shipping').innerHTML=shipping;  

        }else if (feg.checked === true) {
            shipping = ((quantity.value*8.50) + charge);
            document.getElementById('shipping').innerHTML=shipping; 
            
        }else if (upa.checked === true) {
            shipping =(quantity.value*9.25);
            document.getElementById('shipping').innerHTML=shipping;


            
        }else if (fea.checked === true){
            shipping =((quantity.value*12.00)+ charge);
            document.getElementById('shipping').innerHTML=shipping;
            
        }        
    }
    shippingHandling()
    // returning the total
    function total() {
        document.getElementById('total').innerHTML = "$"+Math.round((cost + tax+ shipping))       
     }
    total()
   

    




  
    


    
}
 //exit  popup
 function exit() {
    document.getElementById('popup').style.display = "block";
  
}
 function popout() {
    document.getElementById('popup').style.display = "none";
    
}

function Close() {
    document.getElementById('style').style.display = 'none'
}