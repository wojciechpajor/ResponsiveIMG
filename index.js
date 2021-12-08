function handleClick(){
    let myImage = document.getElementById('myImage');
    if(myImage.style.objectFit == "cover") {
        myImage.style.objectFit = 'contain';
    }
    else {
        myImage.style.objectFit = 'cover';
    }
}