// This code is for toggling the display of course details
$(document).ready(function(){
    $("h3#one").click(function(q){
        q.preventDefault();
        $("#course1").toggle();
    });
});
$(document).ready(function(){
    $("h3#two").click(function(q){
        q.preventDefault();
        $("#course2").toggle();
    });
});

// This code is for toggling the display of hardware and software skills
$(document).ready(function() {
    $(" #1, #2, #3, #4, #5, #6, #7, #8, #9, #10").hide();
    $("button#hardware_1").click(function(q){
        q.preventDefault();
        $("#1").toggle();
        $("#2, #3, #4, #5, #6, #7, #8, #9, #10").hide();
    })
    $("button#hardware_2").click(function(q){
        q.preventDefault();
        $("#1, #3, #4, #5, #6, #7, #8, #9, #10").hide();
        $("#2").toggle();
    })
    $("button#hardware_3").click(function(q){
        q.preventDefault();
        $("#1, #2, #4, #5, #6, #7, #8, #9, #10").hide();
        $("#3").toggle();
    });
    $("button#hardware_4").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #5, #6, #7, #8, #9, #10").hide();
        $("#4").toggle();
    });
    $("button#hardware_5").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #4, #6, #7, #8, #9, #10").hide();
        $("#5").toggle();
    });
    $("button#software_1").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #4, #5, #7, #8, #9, #10").hide();
        $("#6").toggle();
    });
    $("button#software_2").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #4, #5, #6, #8, #9, #10").hide();
        $("#7").toggle();
    });
    $("button#software_3").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #4, #5, #6, #7, #9, #10").hide();
        $("#8").toggle();
    });
    $("button#software_4").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #4, #5, #6, #7, #8, #10").hide();
        $("#9").toggle();
    });
    $("button#software_5").click(function(q){
        q.preventDefault();
        $("#1, #2, #3, #4, #5, #6, #7, #8, #9").hide();
        $("#10").toggle();
    });
})

// This code is for the submit button
$(document).ready(function() {
    $("#btn6").click(function(){
        alert("ThankYou for your interest, we'll get back at you shortly");
        window.location.href="../index.html";
    })
})

// Function to calculate the average skill value of hardware and software

function calculateAvg(skills, elementId) {
    let skillValues = skills.map(skill => parseFloat(localStorage.getItem(skill)) || 0);
    let total = skillValues.reduce((acc, val) => acc + val, 0);
    let average = (total*100) / ((skillValues.length)*100);
    localStorage.setItem('skillValues', JSON.stringify(skillValues));
    document.getElementById(elementId).innerText = average.toFixed(2);
}

function calculate_1_avg() {
    calculateAvg(['rustSkill', 'phpSkill', 'pythonSkill'], 'Skillofhardware1');
}

function calculate_2_avg() {
    calculateAvg(['rustSkill', 'swiftSkill', 'phpSkill', 'pythonSkill'], 'Skillofhardware2');
}

function calculate_3_avg() {
    calculateAvg(['haskellSkill', 'phpSkill'], 'Skillofhardware3');
}

function calculate_4_avg() {
    calculateAvg(['rustSkill', 'htmlCssSkill', 'phpSkill', 'pythonSkill', 'swiftSkill'], 'Skillofhardware4');

}function calculate_5_avg() {
    calculateAvg(['haskellSkill', 'phpSkill', 'swiftSkill'], 'Skillofhardware5');
}

function calculate_6_avg() {
    calculateAvg(['haskellSkill', 'swiftSkill', 'phpSkill'], 'Skillofsoftware1');
}

function calculate_7_avg() {
    calculateAvg(['rustSkill', 'htmlCssSkill', 'swiftSkill', 'swiftSkill'], 'Skillofsoftware2');
}

function calculate_8_avg() {
    calculateAvg(['haskellSkill', 'htmlCssSkill', 'pythonSkill', 'swiftSkill'], 'Skillofsoftware3');
}

function calculate_9_avg() {
    calculateAvg(['haskellSkill', 'rustSkill', 'phpSkill', 'pythonSkill'], 'Skillofsoftware4');
}

function calculate_10_avg() {
    calculateAvg(['haskellSkill', 'swiftSkill', 'phpSkill'], 'Skillofsoftware5');
}

document.addEventListener("DOMContentLoaded", function() {
    const expandableSection = document.getElementById("expandableSection");
    
    expandableSection.addEventListener("click", function() {
        this.classList.toggle("active");
    });
 });