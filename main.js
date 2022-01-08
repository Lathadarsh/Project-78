var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://static.vecteezy.com/system/resources/previews/002/485/292/non_2x/grandmother-cartoon-design-free-vector.jpg" , "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://image.shutterstock.com/image-vector/young-mother-holds-cute-baby-260nw-1926118637.jpg"];
var names = ["Family Book","Kishori Prasad Lath", "Urmila Devi Lath", "Shiv Kumar Lath", "Adarsh Lath", "Shivani Lath", "Neetu Lath"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
