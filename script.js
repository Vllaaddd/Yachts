const rangeInput = document.querySelectorAll(".range-input input"),
priceSpan = document.querySelectorAll(".price-p .price-span"),
progress = document.querySelector(".slider .progress"),
lengthInput = document.querySelectorAll(".length-input input"),
lengthSpan = document.querySelectorAll(".length-p .length-span"),
lengthprogress = document.querySelector(".slider-length .progress-length"),
bedroomButtons = document.querySelectorAll('.bbuttons .bbutton'),
filterCard = document.querySelectorAll('.card');

let priceGap = 500;

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceSpan[0].innerHTML = minVal;
            priceSpan[1].innerHTML = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

        filterCard.forEach(elem =>{
            let dattaPrice = elem.dataset['price'];
            let dataPrice = parseInt(dattaPrice);
            elem.classList.remove('hide');
            if(dataPrice >= minVal && dataPrice <= maxVal){
                elem.classList.remove('hide');
            }else{
                elem.classList.add('hide');
            }
        });
    });
});

lengthInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(lengthInput[0].value),
        maxVal = parseInt(lengthInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                lengthInput[0].value = maxVal - priceGap;
            }else{
                lengthInput[1].value = minVal + priceGap;
            }
        }else{
            lengthSpan[0].innerHTML = minVal;
            lengthSpan[1].innerHTML = maxVal;
            lengthprogress.style.left = (minVal / lengthInput[0].max) * 100 + "%";
            lengthprogress.style.right = 100 - (maxVal / lengthInput[1].max) * 100 + "%";
        }
        filterCard.forEach(elem =>{
            let dattaLength = elem.dataset['length'];
            let dataLength = parseInt(dattaLength);
            elem.classList.remove('hide');
            if(dataLength >= minVal && dataLength <= maxVal){
                elem.classList.remove('hide');
            }else{
                elem.classList.add('hide');
            }
        });
    });
});

function change() {
    let results = Array.from(document.querySelectorAll('.yacht-list > li'));
    results.forEach(function(result) {
      result.classList.add("hide");
    });
    Array.from(document.querySelectorAll('.filters input[rel]:checked'), function(input) {
      const attrib = input.getAttribute('rel');
      results = results.filter(function(result) {
        return result.classList.contains(attrib);
      });
    });
    results.forEach(function(result) {
      result.classList.remove("hide");
    });
}


let i = 0;

bedroomButtons.forEach(button =>{
    button.addEventListener('click', event =>{
        if(event.target.tagName !== 'BUTTON'){
            return false;
        }else{
            if(event.target.dataset['b'] === 'button1'){
                i--;
                document.querySelector('.binput').value = i;
            }else{
                i++;
                document.querySelector('.binput').value = i;
            }
        }

        filterCard.forEach(elem =>{
            elem.classList.remove('hide');
            if(!elem.classList.contains(i) && i){
                elem.classList.add('hide');
            }
        });

    });
});