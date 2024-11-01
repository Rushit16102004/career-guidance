$(document).ready(function(x) {
  x.preventDefault();
})
  function toggleContent(postId) {
    const content = document.getElementById(postId);
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }




// for activityRateSelf_button()

// function activityRateSelf_button() {
//           // Check if the "Start Over" button already exists
//           document.getElementsByClassName('hero');
//           if (!document.getElementById('startOverButton')) {
//             const startOverButton = document.createElement('button');
//             startOverButton.id = 'startOverButton'; // Set an ID for the button
//             startOverButton.innerText = "Get Started! Guidance";
//             startOverButton.onclick = () => {
//                 document.getElementById('login').innerText = "";
//                 startOverButton.remove();
//                 window.location.href = 'RateSelf.html';
//             };
//             // Append the button to a specific container instead of the body
//             document.getElementById('go').appendChild(startOverButton);
//         }
// }
