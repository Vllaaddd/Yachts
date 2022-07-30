const rangeInput = document.querySelectorAll(".range-input input"),
priceSpan = document.querySelectorAll(".price-p .price-span"),
progress = document.querySelector(".slider .progress"),
lengthInput = document.querySelectorAll(".length-input input"),
lengthSpan = document.querySelectorAll(".length-p .length-span"),
lengthprogress = document.querySelector(".slider-length .progress-length");

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
    });
});

function change() {
    let results = Array.from(document.querySelectorAll('.yacht-list > li'));
    results.forEach(function(result) {
      result.style.display = 'none';
    });
    Array.from(document.querySelectorAll('.filters input[rel]:checked'), function(input) {
      const attrib = input.getAttribute('rel');
      results = results.filter(function(result) {
        return result.classList.contains(attrib);
      });
    });
    results.forEach(function(result) {
      result.style.display = 'block';
    });
}