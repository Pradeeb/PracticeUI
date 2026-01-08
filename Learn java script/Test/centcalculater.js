function calculateArea() {
    let top = parseFloat(document.getElementById('top').value);
    let bottom = parseFloat(document.getElementById('bottom').value);
    let left = parseFloat(document.getElementById('left').value);
    let right = parseFloat(document.getElementById('right').value);
    let centVal = 435.6; // fixed

    if ([top, bottom, left, right].some(v => isNaN(v) || v <= 0)) {
        alert("Enter valid values for all 4 sides");
        return;
    }

    //  Approx area formula (trapezoid)
    let avgLength = (top + bottom) / 2;
    console.log(avgLength);
    
    let avgWidth = (left + right) / 2;
    console.log(avgWidth);
    
    // Square meters
    let areaM2 = avgLength * avgWidth;
     console.log(areaM2);

    let sqft = areaM2 / 100;
     console.log(sqft);
   
    // Convert sq ft → cent
    let cent = sqft * 2.47;
     console.log(cent);

    document.getElementById('ares').innerText = cent*0.404;
    document.getElementById('cent').innerText = cent.toFixed(4) + " cent";

    document.getElementById('result').style.display = 'block';
}
