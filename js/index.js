/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction()
{

if (document.getElementById('same').checked)  /*I needed to use id 'same' cause thats focus for checked */
{
    const n=document.getElementById('shippingName').value; /*Here i declare variable ... n is the name of this variable, with this '=' am telling java script a value is coming up next*/
    const z=document.getElementById('shippingZip').value;/*Here same just z */
    document.getElementById('billingName').value=n;/*here is the way how i got same text n numbers by clicking on checkbox */
    document.getElementById('billingZip').value=z;

}
else{
    document.getElementById('billingName').value=""; /*This is if someone not check it, to write something else .. */
    document.getElementById('billingZip').value="";
}
}

