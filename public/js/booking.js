var complete_routine = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hospital",
    cost: 388,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Complete Routine Inspection Package",
    id: "completeRoutine1",
    surgery: false
}
var male_package1 = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hosiptal",
    cost: 1002,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Male Health Screening Package 1",
    id: "malePackage1",
    surgery: false
}
var male_package2 = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hosiptal",
    cost: 1811,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Male Health Screening Package 2",
    id: "malePackage2",
    surgery: false
}
var male_package3 = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hosiptal",
    cost: 4301,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Male Health Screening Package 3",
    id: "malePackage3",
    surgery: false
}
var female_package1 = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hosiptal",
    cost: 1164,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Female Health Screening Package 1",
    id: "femalePackage1",
    surgery: false
}
var female_package2 = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hosiptal",
    cost: 1940,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Female Health Screening Package 2",
    id: "femalePackage2",
    surgery: false
}
var female_package3 = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hosiptal",
    cost: 4495,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", " Taiwan"],
    treatment: "Female Health Screening Package 3",
    id: "femalePackage3",
    surgery: false
}
var pedia_reconstruction = {
    img: ["../assets/sunflower.jpg", "Sunflower"],
    hospital: "Sunflower Dental Clinic",
    cost: 5000,
    breakdown: null,
    stay: 0,
    location: ["Taipei City", " Taiwan"],
    treatment: "Pedia Care Total Reconstruction",
    id: "pediaReconstruction",
    surgery: true
}
var tooth_implant = {
    img: ["../assets/sunflower.jpg", "Sunflower"],
    hospital: "Sunflower Dental Clinic",
    cost: 3000,
    breakdown: null,
    stay: 0,
    location: ["Taipei City", " Taiwan"],
    treatment: "Implant",
    id: "toothImplant",
    surgery: true
}
var ceramic_crown = {
    img: ["../assets/sunflower.jpg", "Sunflower"],
    hospital: "Sunflower Dental Clinic",
    cost: 1000,
    breakdown: null,
    stay: 0,
    location: ["Taipei City", " Taiwan"],
    treatment: "Ceramic Crown",
    id: "ceramicCrown",
    surgery: true
}
var endo_canal = {
    img: ["../assets/sunflower.jpg", "Sunflower"],
    hospital: "Sunflower Dental Clinic",
    cost: 1000,
    breakdown: null,
    stay: 0,
    location: ["Taipei City", " Taiwan"],
    treatment: "Endo Canal",
    id: "endCanal",
    surgery: true
}
var hipReplacement = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 14118,
    breakdown: [2486, 11632],
    stay: 27.7,
    location: ["Changwon", " South Korea"],
    treatment: "Hip Replacement",
    id: 'hipReplacement',
    surgery: true
};
var kneeReplacement = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 6713,
    breakdown: [1154, 5559],
    stay: 12.4,
    location: ["Changwon", " South Korea"],
    treatment: "Knee Replacement",
    id: "kneeReplacement",
    surgery: true
};
var angioplasty = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 12536,
    breakdown: [443, 12093],
    stay: 4.2,
    location: ["Changwon", " South Korea"],
    treatment: "Angioplasty",
    id: "angioplasty",
    surgery: true
};
var hysterectomy = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 8896,
    breakdown: [976, 7920],
    stay: 10.1,
    location: ["Changwon", " South Korea"],
    treatment: "Hysterectomy",
    id: "hysterectomy",
    surgery: true
};
var cataracts = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 798,
    breakdown: [117, 621],
    stay: 1.5,
    location: ["Changwon", " South Korea"],
    treatment: "Cataracts",
    id: "cataracts",
    surgery: true
};
var skinGraftLT_25 = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 729,
    breakdown: [88, 639],
    stay: 1.5,
    location: ["Changwon", " South Korea"],
    treatment: "Split Thickness Skin Graft < 25cm^2",
    id: "skinGraft_LT25",
    surgery: true
};
var skinGraftGT_25 = {
    img: ["../assets/hospital.jpg", "Hanyang"],
    hospital: "Hanyang University Hanmaeun Changwon Hospital",
    cost: 992,
    breakdown: [88, 834],
    stay: 1.5,
    location: ["Changwon", " South Korea"],
    treatment: "Split Thickness Skin Graft > 25cm^2",
    id: "skinGraft_GT25",
    surgery: true
};
var treatments = [];
var returnTreatments = [];
var displayAllBool = false;
var allProcedureNames = [];
var allLocationNames = [];
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumSignificantDigits: 2
});
main();

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
function renderCard(cardObj) {

    var rowHTML = "";
    var divClose = "</div>";

    // Div Start Open
    var divStart = "<div class='col-md-12 listing-block' onclick='renderModal(this)' id="+cardObj.id+" data-toggle='modal' data-target='#renderModal'>";

    // Div Media Open
    var divMedia = "<div class='media'>";

    // Div Stats Open
    var divStats = "<div class='stats'>";

    // Icon Self Closing
    var icon = "<i class='fas fa-procedures fa-2x'></i>"

    // Img Self Closing
    var img = "<img class='d-flex align-self-start' src=" + cardObj.img[0] + " alt=" + cardObj.img[1] + ">";

    // Div Body Open
    var divBody = "<div class='media-body pl-3'>";

    // Price Open/Close
    var price = "<div class='price'>" + formatter.format(cardObj.cost) + "<small>" + cardObj.location + "</small></div>";

    // Stats Open/Close
    var stats = divStats + "<span>" + icon + cardObj.stay + " Days</span></div>";

    // Treatment Open/Close
    var treatment = "<div class='treatment'>" + cardObj.treatment + divClose;


    rowHTML += divStart + divMedia + img + divBody + price + stats + treatment + divClose + divClose + divClose;

    // var cardHTML = "";
    // var colOpen = "<div class='col-md-4 card-listing'>";
    // var divThumbnail = "<div class='card'>";
    // var rowOpen = "<div class='row text-center'>"
    // var divClose = "</div>";

    // var img = "<img class='card-img-top' src=" + cardObj.img[0] + " alt=" + cardObj.img[1] +">";
    // var h4 = "<h4 class='text-left'>" + cardObj.location[0] + "</h4>";
    // var h3 = "<h3 class='text-left hospital'><strong>" + cardObj.hospital + "</strong></h3>";
    // var treatment = "<h4 class='text-left treatment'>" + cardObj.treatment + "</h4>";

    // var button = "<div class='col-lg-4 text-right learn'><button class='btn' onclick='renderModal(this)' id="+cardObj.id+" data-toggle='modal' data-target='#renderModal'>Learn More</button></div>";

    // cardHTML += colOpen + divThumbnail + img + h4 + rowOpen + "<div class='col name'>" + h3 + divClose + "<div class='col stay'>" + "<h1 class='duration'>" + cardObj.stay + "</h1><h1 style='font-size: 150%'>Days</h1>";
    // cardHTML += divClose + divClose + treatment + "<hr>";
    // cardHTML += "<div class='row text-center'><div class='col-sm-4'>";
    // cardHTML += "<i id='hospital' class='fas fa-hospital-symbol'></i><br><label for='hospital'>Hospital</label></div>";
    // cardHTML += "<div class='col-sm-4'><i id='lodging' class='fas fa-bed'></i><br><label for='lodging'>Hotel</label></div>";
    // cardHTML += "<div class='col-sm-4'><i id='plane' class='fas fa-plane'></i><br><label for='plane'>Airfare</label></div>";
    
    // cardHTML += "</div>";
    // cardHTML += "<hr>";
    // cardHTML += "<div class='row'><div class='cost col'>" + "<h1>" + formatter.format(cardObj.cost) + "</h1></div>"+ button + "</div>";
    // cardHTML += divClose + divClose;

    return rowHTML;
}
function findTotalTreatments() {
    for (i=0; i < treatments.length; i++) {
        if (allProcedureNames.length == 0) {
            allProcedureNames.push(treatments[i].treatment);
        } else if (allProcedureNames.includes(treatments[i].treatment) == false) {
            allProcedureNames.push(treatments[i].treatment);
        }
    }
}
function formatLocationNames(location) {
    return location[0] + ", " + location[1];
}
function unformatLocationNames(location) {
    return location.split(',')[0];
}
function findTotalLocations() {
    var locationName = "";
    for (i = 0; i < treatments.length; i++) {
        locationName = formatLocationNames(treatments[i].location);
        if ( allLocationNames.length == 0) {
            allLocationNames.push(locationName);
        } else if (allLocationNames.includes(locationName) == false) {
            allLocationNames.push(locationName);
        }
    }
}
function findTreatmentsByProcedure(treatment, treatmentList) {
    var allLocations = [];
    for (i = 0; i < treatmentList.length; i ++) {
        if (treatment == treatmentList[i].treatment.toUpperCase() || treatmentList[i].treatment.toUpperCase().includes(treatment)) {
            var num = treatmentList[i].treatment.toUpperCase().indexOf(treatment);
            var index = treatmentList[i].treatment.toUpperCase();
            
            if ( (index[num-1] == "" || index[num-1] == " " || index[num-1] == undefined) && (index[num+treatment.length] == "" || index[num+treatment.length] == " " || index[num+treatment.length] == undefined)  )  {
                returnTreatments.push(treatmentList[i]);
            }
        }
    }
    allLocations = findLocations();
    return allLocations.length;
}
function findTreatmentsByLocation(location, treatmentList) {
    if (location.includes(',')) {
        location = unformatLocationNames(location);
    }
    var allLocations = [];
    for (i = 0; i < treatmentList.length; i ++) {
        if (location == treatmentList[i].location[0].toUpperCase() || treatmentList[i].location[0].toUpperCase().includes(location)) {
            var num = treatmentList[i].location[0].toUpperCase().indexOf(location);
            var index = treatmentList[i].location[0].toUpperCase();
            
            if ( (index[num-1] == "" || index[num-1] == " " || index[num-1] == undefined) && (index[num+location.length] == "" || index[num+location.length] == " " || index[num+location.length] == undefined)  )  {
                returnTreatments.push(treatmentList[i]);
            }
        } else if ((location == treatmentList[i].location[1].toUpperCase() || treatmentList[i].location[1].toUpperCase().includes(location))) {
            var num = treatmentList[i].location[1].toUpperCase().indexOf(location);
            var index = treatmentList[i].location[1].toUpperCase();
            
            if ( (index[num-1] == "" || index[num-1] == " " || index[num-1] == undefined) && (index[num+location.length] == "" || index[num+location.length] == " " || index[num+location.length] == undefined)  )  {
                returnTreatments.push(treatmentList[i]);
            }
        }
    }  
    allLocations = findLocations();
    return allLocations.length;
}
function setResultsReport(counter) {
    if (counter != 0) {
        document.getElementById('result-number').innerHTML = "Displaying " + returnTreatments.length + " results from " + counter + " location(s).";
    }
}
function search(treatment, location) {
    returnTreatments = [];
    var locationCounter = 0;

    if (treatment != "" && location == "") {
        locationCounter = findTreatmentsByProcedure(treatment, treatments);
    
    } else if (location != "" && treatment == "") {
        locationCounter = findTreatmentsByLocation(location, treatments);
    }

    var div = document.getElementById('results');
    div.innerHTML = "";
    for (i = 0; i < returnTreatments.length; i ++) {
        div.innerHTML += renderCard(returnTreatments[i]);
    }
    setResultsReport(locationCounter);
    document.getElementById('treatment').value = "";
    document.getElementById('location').value = "";
}
function sort() {
    var select = document.getElementById('sort');
    var div = document.getElementById('results');
    if (displayAllBool == true) {
        if (select.classList[1] == "fa-sort-amount-up") {
            document.getElementById('sort').className = "fas fa-sort-amount-down";
            document.getElementById('sort').title = "Sort Descending";
            treatments.sort((a, b) => (a.cost > b.cost) ? 1 : -1);
            div.innerHTML = "";
            for (i = 0; i < treatments.length; i ++) {
                card = renderCard(treatments[i]);
                div.innerHTML += card;
            }
        } else {
            document.getElementById('sort').className = "fas fa-sort-amount-up";
            document.getElementById('sort').title = "Sort Ascending";
            treatments.sort((a, b) => (a.cost < b.cost) ? 1 : -1);
            div.innerHTML = "";
            for (i = 0; i < treatments.length; i ++) {
                card = renderCard(treatments[i]);
                div.innerHTML += card;
            }
        }
    } else {
        if (select.classList[1] == "fa-sort-amount-up") {
            document.getElementById('sort').className = "fas fa-sort-amount-down";
            document.getElementById('sort').title = "Sort Descending";
            returnTreatments.sort((a, b) => (a.cost > b.cost) ? 1 : -1);
            div.innerHTML = "";
            for (i = 0; i < returnTreatments.length; i ++) {
                card = renderCard(returnTreatments[i]);
                div.innerHTML += card;
            }
        } else {
            document.getElementById('sort').className = "fas fa-sort-amount-up";
            document.getElementById('sort').title = "Sort Ascending";
            returnTreatments.sort((a, b) => (a.cost < b.cost) ? 1 : -1);
            div.innerHTML = "";
            for (i = 0; i < returnTreatments.length; i ++) {
                card = renderCard(returnTreatments[i]);
                div.innerHTML += card;
            }
        }
    }
}
function renderFilters() {
    var div = document.getElementById('results');
    div.innerHTML = "";
    for(i = 0; i < returnTreatments.length; i++) {
        div.innerHTML += renderCard(returnTreatments[i]);
    }
}
function findLocations() {
    var allLocations = [];

    if (returnTreatments.length > 0) {
        for (i = 0; i < returnTreatments.length; i++) {
            if (allLocations.length == 0) {
                allLocations.push(returnTreatments[i].location[0]);
            } else if (allLocations.includes(returnTreatments[i].location[0]) == false) {
                allLocations.push(returnTreatments[i].location[0]);
            }
        }
    }
    return allLocations;
}
function displayKorea(bool) {
    if (bool == true) {
        returnTreatments = [];
        for (i = 0; i <treatments.length; i ++) {
            if (treatments[i].location[1].includes("Korea")) {
                returnTreatments.push(treatments[i])
            }
        }
    }
    document.getElementById('newTaipei').checked = false;
    document.getElementById('taipei').checked = false;
    var counter = findLocations();
    setResultsReport(counter.length);
    renderFilters();
    clearType();
}
function displayTaipei(bool) {
    if (bool == true) {
        returnTreatments = [];
        for (i = 0; i < treatments.length; i++) {
            if (!treatments[i].location[0].includes("New") && treatments[i].location[0].includes("Taipei")) {
                returnTreatments.push(treatments[i]);
            }
        }
    }
    document.getElementById('newTaipei').checked = false;
    document.getElementById('korea').checked = false;
    var counter = findLocations();
    setResultsReport(counter.length);
    renderFilters();
    clearType();
}
function displayNewTaipei(bool) {
    if (bool == true) {
        returnTreatments = [];
        for(i = 0; i < treatments.length; i++) {
            if (treatments[i].location[0].includes("New")) {
                returnTreatments.push(treatments[i]);
            }
        }
    }
    document.getElementById('taipei').checked = false;
    document.getElementById('korea').checked = false;
    var counter = findLocations();
    setResultsReport(counter.length);
    clearType();
    renderFilters();
}
function displayAll(bool) {
    if (bool == true) {
        returnTreatments = treatments;
        displayAllBool = true;
    }
    document.getElementById('surgeriesFilter').checked = false;
    document.getElementById('examsFilter').checked = false;
    var counter = findLocations();
    setResultsReport(counter.length);
    clearLocation();
    renderFilters();
}
function displaySurgeries(bool) {
    if (bool == true) {
        returnTreatments = [];
        for (i = 0; i < treatments.length; i++) {
            if (treatments[i].surgery == true) {
                returnTreatments.push(treatments[i]);
            }
        }
    } else {
        returnTreatments = treatments;
    }
    document.getElementById('allFilter').checked = false;
    document.getElementById('examsFilter').checked = false;
    var counter = findLocations();
    setResultsReport(counter.length);
    clearLocation();
    renderFilters();
}
function displayExams(bool) {
    if (bool == true) {
        returnTreatments = [];
        for (i = 0; i < treatments.length; i++) {
            if (treatments[i].surgery == false) {
                returnTreatments.push(treatments[i]);
            }
        }
    } else {
        returnTreatments = treatments;
    }

    document.getElementById('allFilter').checked = false;
    document.getElementById('surgeriesFilter').checked = false;
    var counter = findLocations();
    setResultsReport(counter.length);
    clearLocation();
    renderFilters();
}
function clearLocation() {
    document.getElementById('taipei').checked = false;
    document.getElementById('korea').checked = false;
    document.getElementById('newTaipei').checked = false;
    displayAllBool = false;
}
function clearType() {
    document.getElementById('allFilter').checked = false;
    document.getElementById('surgeriesFilter').checked = false;
    document.getElementById('examsFilter').checked = false;
    displayAllBool = false;
}
function renderModal(buttonObj) {
    cardId = buttonObj.id;
    cardObj = {}
    for (i=0; i<treatments.length; i++) {
        if (cardId == treatments[i].id) {
            cardObj = treatments[i];
        }
    }
    var message = "Hello, I am interested in learning more about this procedure at this location listed on HealthOpX. Please contact me as soon as possible."
    
    var form = " <form method='post' name='myemailform' action='./views/confirmation.html' ><div><label for='fname'>" +
    "First Name:</label> <input type='text' id='fname' name='fname'></div><div><label for='lname'> " +
    "Last Name:</label> <input type='text' id='lname' name='lname'></div><div><label for='mail'>E-mail:</label>" + 
    "<input type='email' id='mail' name='email'></div><div><label for='proceedure'>Proceedure:</label>"+
    "<input type='text' id='pro' name='proceedure'></div><div><label for='msg'>Message:</label>"+
    "<textarea id='msg' name='message'></textarea></div><button class='btn btn-dark' style='width:100%' type='submit'>Send your message</button></form><br>";

    var footer = "<div class='modal-footer'><button type='button' class='btn btn-dark' data-dismiss='modal'>Close</button></div>";

    var modalHTML = "";

    if (cardObj.breakdown != null) {
        var header = "<div class='modal-header'>";
        modalHTML += header + cardObj.treatment + " Cost Breakdown" + "<br><ul class='text-left'><li>Translator Cost: " + formatter.format(cardObj.breakdown[0]) + "</li><li>" + "Procedure Cost: " + formatter.format(cardObj.breakdown[1]) + "</li></ul>" + "</div><br>";
        modalHTML += form;

    } else {
        modalHTML += form + "<a class='btn btn-dark details' href='local.html#FEMH'>View Details</a></div>";
    }
    modalHTML += footer;
    document.getElementById('modal-content').innerHTML = modalHTML;
    document.getElementById('pro').value = cardObj.treatment;
    document.getElementById('msg').value = message;

}
function submit() {
    location.href ='confirmation.html';
}
function main() {
    treatments = [hipReplacement, kneeReplacement, angioplasty, hysterectomy, cataracts, skinGraftGT_25, skinGraftLT_25, pedia_reconstruction, tooth_implant, ceramic_crown, endo_canal, male_package1, male_package2, male_package3, female_package1, female_package2, female_package3, complete_routine];
    var div = document.getElementById('results');
    for (i = 0; i < treatments.length; i ++) {
        card = renderCard(treatments[i]);
        div.innerHTML += card;
    }
    findTotalTreatments();
    findTotalLocations();
    autocomplete(document.getElementById("treatment"), allProcedureNames);
    autocomplete(document.getElementById("location"), allLocationNames);

    var treatment = new URL(location.href).searchParams.get('treatment-search');
    var local = new URL(location.href).searchParams.get('location-search');
    if (treatment == "" && local == "") {
        displayAllBool = true;
        document.getElementById('allFilter').checked = true;
        displayAll(true);
    } else if (treatment != null || local != null) {
        if (treatment) {
            search(treatment.toUpperCase(), "");    
        }
        if (local) {
            search("", local.toUpperCase());    
        }
        displayAllBool = false;
    } else {
        displayAllBool = true;
        document.getElementById('allFilter').checked = true;
        displayAll(true);
    }
}
