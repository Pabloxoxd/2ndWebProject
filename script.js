function verify(){
    var getDate = new Date()
    var getYear = getDate.getFullYear()
    var born = getYear - document.querySelector('input#born').value 
    var res = document.querySelector('p#placeholder')
    var pic = document.querySelector('p#pic')
    
    if(born > 0 && born < 14){
        if(document.getElementById('male').checked){
            var age = `<strong>boy</strong>`
            pic.innerHTML = `<img src="./img src/boy.jpg" alt="?" width="490px" class="mage">`
        }else if(document.getElementById('fem').checked){
            var age = `<strong>girl</strong>`
            pic.innerHTML = `<img src="./img src/girl.jpg" alt="?" width="490px" class="mage">`
        }
    }
    else if(born >=14 && born <=21){
        if(document.getElementById('male').checked){
            var age = `<strong>young man</strong>`
            pic.innerHTML = `<img src="./img src/young m.jpg" alt="?" width="490px" class="mage">`
        }else if(document.getElementById('fem').checked){
            var age = `<strong>young woman</strong>`
            pic.innerHTML = `<img src="./img src/younf f.jpg" alt="?" width="490px" class="mage">`
        }
    }
    else if (born > 21 && born <=65){
        if(document.getElementById('male').checked){
            var age = `<strong>man</strong>`
            pic.innerHTML = `<img src="./img src/man.jpg" alt="?" width="490px" class="mage">`
        }else if(document.getElementById('fem').checked){
            var age = `<strong>woman</strong>`
            pic.innerHTML = `<img src="./img src/woman.jpg" alt="?" width="490px" class="mage">`
        }
    }
    else if (born > 65){
        if(document.getElementById('male').checked){
            var age = `<strong>elder man</strong>`
            pic.innerHTML = `<img src="./img src/old m.jpg" alt="?" width="490px" class="mage">`
        }else if(document.getElementById('fem').checked){
            var age = `<strong>elder woman</strong>`
            pic.innerHTML = `<img src="./img src/old f.jpg" alt="?" width="490px" class="mage">`
        }
    }
    res.innerHTML =  `You are a ${age} and you are ${born} years old!!`
}

