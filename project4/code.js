// JavaScript function to handle button click
function toggleNavbarClass() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('bg-dark'); // Toggle the background color class
  }

  // Add a click event listener to the button
  document.getElementById('toggleButton').addEventListener('click', toggleNavbarClass);

  // Create an animation using JavaScript
  var logo = document.querySelector('.navbar-brand');
  logo.addEventListener('mouseover', function() {
    logo.style.transform = 'rotate(360deg)';
  });

 
  document.addEventListener('keypress', function(e) {
    if (e.key === 's') { // Play sound when 's' key is pressed
      var audioElement = document.getElementById('audioElement');
      audioElement.play();
    }
  });
  
  // Add a click event listener to the logo
  logo.addEventListener('click', function() {
    alert('Logo Clicked');
  });

// JavaScript function to handle button click
document.getElementById('sideNavButton').addEventListener('click', function() {
  openSidebar();
});
document.getElementById('closeButton').addEventListener('click', function() {
    closeSidebar();
  });

function openSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
  }

  $(document).ready(function() {
  $('#autoWidth,#autoWidth2').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth, #autoWidth2').removeClass('cS-hidden');
      } 
  });  
});

function submitForm() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const zip = document.getElementById("zip").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const verifyPassword = document.getElementById("verifyPassword").value;

  const passwordPattern = /^.{6,}$/;

  const phonePattern = /^\d{11}$/;

  const emailPattern = /@/;

  const zipPattern = /^\d{5}$/;   

  if (name && address && zip && country && gender && email && verifyPassword) {
    if (password === verifyPassword) {
      if (zipPattern.test(zip)) {
        if (emailPattern.test(email)) {
          if (phonePattern.test(phone)) {
            if (passwordPattern.test(password)) {
              const successMessage = `Name: ${name}\nAddress: ${address}\nZip Code: ${zip}\nCountry: ${country}\nGender: ${gender.value}\nPhone: ${phone}\nEmail: ${email}`;
              alert(`Success!\n\n${successMessage}`);
            } else {
              alert("Please enter a password with at least 6 characters.");
            }
          } else {
            alert("Please enter a valid 11-digit phone number.");
          }
        } else {
          alert("Please enter a valid(@) email address.");
        }
      } else {
        alert("Please enter a valid 5-digit Zip Code.");
      }
    } else {
      alert("Password and Verify Password do not match.");
    }
  } else {
    alert("Please fill out all required fields.");
  }
}
