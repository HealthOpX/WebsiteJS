var complete_routine = {
    img: ["../assets/far.jpg", "FEMH"],
    hospital: "Far Eastern Memorial Hospital",
    cost: 388,
    breakdown: null,
    stay: 0,
    location: ["New Taipei City", "Taiwan"],
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
    location: ["New Taipei City", "Taiwan"],
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
    location: ["New Taipei City", "Taiwan"],
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
    location: ["New Taipei City", "Taiwan"],
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
    location: ["New Taipei City", "Taiwan"],
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
    location: ["New Taipei City", "Taiwan"],
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
    location: ["New Taipei City", "Taiwan"],
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
    location: ["Taipei City", "Taiwan"],
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
    location: ["Taipei City", "Taiwan"],
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
    location: ["Taipei City", "Taiwan"],
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
    location: ["Taipei City", "Taiwan"],
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
    location: ["Changwon ", "South Korea"],
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
    location: ["Changwon ", "South Korea"],
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
    location: ["Changwon ", "South Korea"],
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
    location: ["Changwon ", "South Korea"],
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
    location: ["Changwon ", "South Korea"],
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
    location: ["Changwon ", "South Korea"],
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
    location: ["Changwon ", "South Korea"],
    treatment: "Split Thickness Skin Graft > 25cm^2",
    id: "skinGraft_GT25",
    surgery: true
};
var treatments = [];
var filtered_treatments = [];
var returnTreatments = [];


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumSignificantDigits: 2
});

main();


function renderCard(cardObj) {

    var cardHTML = "";
    var colOpen = "<div class='col-md-4 card-listing'>";
    var divThumbnail = "<div class='card'>";
    var rowOpen = "<div class='row text-center'>"
    var divClose = "</div>";

    var img = "<img class='card-img-top' src=" + cardObj.img[0] + " alt=" + cardObj.img[1] +">";
    var h4 = "<h4 class='text-left'>" + cardObj.location[0] + "</h4>";
    var h3 = "<h3 class='text-left hospital'><strong>" + cardObj.hospital + "</strong></h3>";
    var treatment = "<h4 class='text-left treatment'>" + cardObj.treatment + "</h4>";

    console.log(cardObj.id);
    var button = "<div class='col-lg-4 text-right learn'><button class='btn' onclick='renderModal(this)' id="+cardObj.id+" data-toggle='modal' data-target='#renderModal'>Learn More</button></div>";

    cardHTML += colOpen + divThumbnail + img + h4 + rowOpen + "<div class='col name'>" + h3 + divClose + "<div class='col stay'>" + "<h1 class='duration'>" + cardObj.stay + "</h1><h1 style='font-size: 150%'>Days</h1>";
    cardHTML += divClose + divClose + treatment + "<hr>";
    cardHTML += "<div class='row text-center'><div class='col-sm-4'>";
    cardHTML += "<i id='hospital' class='fas fa-hospital-symbol'></i><br><label for='hospital'>Hospital</label></div>";
    cardHTML += "<div class='col-sm-4'><i id='lodging' class='fas fa-bed'></i><br><label for='lodging'>Hotel</label></div>";
    cardHTML += "<div class='col-sm-4'><i id='plane' class='fas fa-plane'></i><br><label for='plane'>Airfare</label></div>";
    
    cardHTML += "</div>";
    cardHTML += "<hr>";
    cardHTML += "<div class='row'><div class='cost col'>" + "<h1>" + formatter.format(cardObj.cost) + "</h1></div>"+ button + "</div>";
    cardHTML += divClose + divClose;

    return cardHTML;
}


function search() {
    var treatment = document.getElementById('treatment').value.toUpperCase();

    returnTreatments = [];

    if (treatment != "") {
        for (i = 0; i < treatments.length; i ++) {
            if (treatment == treatments[i].treatment.toUpperCase() || treatments[i].treatment.toUpperCase().includes(treatment)) {
                var num = treatments[i].treatment.toUpperCase().indexOf(treatment);
                var index = treatments[i].treatment.toUpperCase();
                
                if ( (index[num-1] == "" || index[num-1] == " " || index[num-1] == undefined) && (index[num+treatment.length] == "" || index[num+treatment.length] == " " || index[num+treatment.length] == undefined)  )  {
                    returnTreatments.push(treatments[i]);
                }
            }
        }
    }
    var div = document.getElementById('results');
    div.innerHTML = "";
    for (i = 0; i < returnTreatments.length; i ++) {
        div.innerHTML += renderCard(returnTreatments[i]);
    }
    document.getElementById('treatment').value = "";
}
function sort() {
    var select = document.getElementById('sort');

    var low_high = select.options[1].value;
    var high_low = select.options[2].value;

    var div = document.getElementById('results');

    if (select.value == low_high) {
        treatments.sort((a, b) => (a.cost > b.cost) ? 1 : -1);
        div.innerHTML = "";
        for (i = 0; i < treatments.length; i ++) {
            card = renderCard(treatments[i]);
            div.innerHTML += card;
        }
    }
    if (select.value == high_low) {
        treatments.sort((a, b) => (a.cost < b.cost) ? 1 : -1);
        div.innerHTML = "";
        for (i = 0; i < treatments.length; i ++) {
            card = renderCard(treatments[i]);
            div.innerHTML += card;
        }
    }
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
    var div = document.getElementById('results');
    div.innerHTML = "";
    for (i = 0; i < returnTreatments.length; i ++) {
        div.innerHTML += renderCard(returnTreatments[i]);
    }
    document.getElementById('treatment').value = ""; 
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
    var div = document.getElementById('results');
    div.innerHTML = "";
    for (i = 0; i < returnTreatments.length; i ++) {
        div.innerHTML += renderCard(returnTreatments[i]);
    }
    document.getElementById('treatment').value = ""; 
}

function renderModal(buttonObj) {
    cardId = buttonObj.id;
    cardObj = {}
    for (i=0; i<treatments.length; i++) {
        if (cardId == treatments[i].id) {
            cardObj = treatments[i];
        }
    }
    console.log(cardObj.treatment);
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
}
