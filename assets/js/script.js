// --- 1. SEARCH FILTER FEATURE ---
function searchMenu() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('gallery-item');

    for (let i = 0; i < items.length; i++) {
        let title = items[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// --- 2. GALLERY LIGHTBOX FEATURE ---
function openLightbox(imgSrc, captionText) {
    let modal = document.getElementById('lightboxModal');
    let modalImg = document.getElementById('lightboxImg');
    let caption = document.getElementById('lightboxCaption');
    
    modal.style.display = "flex";
    modalImg.src = imgSrc;
    caption.innerText = captionText;
}

function closeLightbox() {
    let modal = document.getElementById('lightboxModal');
    if(modal) {
        modal.style.display = "none";
    }
}

// --- 3. FORM VALIDATION & FEEDBACK (ENQUIRY) ---
function validateEnquiryForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let type = document.getElementById('enquiryType').value;
    let message = document.getElementById('message').value.trim();
    let feedback = document.getElementById('formFeedback');

    // Reset errors
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('typeError').innerText = "";
    document.getElementById('msgError').innerText = "";

    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').innerText = "Please enter your full name.";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        document.getElementById('emailError').innerText = "Please enter a valid email address.";
        isValid = false;
    }
    if (type === "") {
        document.getElementById('typeError').innerText = "Please select an enquiry type.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById('msgError').innerText = "Please type your message.";
        isValid = false;
    }

    if (isValid) {
        feedback.style.color = "green";
        feedback.innerText = "Success! Your enquiry has been sent successfully. Thank you, " + name + "!";
        document.getElementById('enquiryForm').reset();
    } else {
        feedback.style.color = "red";
        feedback.innerText = "Please fix the errors above before submitting.";
    }
    return false;
}

// --- 4. FORM VALIDATION & FEEDBACK (CONTACT) ---
function validateContactForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('cName').value.trim();
    let email = document.getElementById('cEmail').value.trim();
    let message = document.getElementById('cMessage').value.trim();
    let feedback = document.getElementById('contactFeedback');

    document.getElementById('cNameError').innerText = "";
    document.getElementById('cEmailError').innerText = "";
    document.getElementById('cMsgError').innerText = "";

    let isValid = true;

    if (name === "") {
        document.getElementById('cNameError').innerText = "Name is required.";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        document.getElementById('cEmailError').innerText = "Valid email is required.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById('cMsgError').innerText = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        feedback.style.color = "green";
        feedback.innerText = "Thank you! Your message has been received.";
        document.getElementById('contactForm').reset();
    } else {
        feedback.style.color = "red";
        feedback.innerText = "Please fill in all required fields correctly.";
    }
    return false;
}