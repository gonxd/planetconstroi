var textArray = ['Constrói', 'Repara', 'Mantém'];
var typingText = document.getElementById('typing-text');
var wordIndex = 0;
var letterIndex = 0;
var typingDelay = 100;  // Faster typing
var erasingDelay = 100;  // Faster erasing
var nextWordDelay = 1000;  // Shorter delay between words
type();

function type() {
    if (letterIndex < textArray[wordIndex].length) {
        if (!typingText.classList.contains('typing')) typingText.classList.add('typing');
        typingText.textContent = 'Planet ' + textArray[wordIndex].substring(0, letterIndex + 1);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, nextWordDelay);
    }
}

function erase() {
    if (letterIndex > 0) {
        if (!typingText.classList.contains('typing')) typingText.classList.add('typing');
        typingText.textContent = 'Planet ' + textArray[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        typingText.classList.remove('typing');
        wordIndex++;
        if (wordIndex >= textArray.length) wordIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}




var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var modalCaption = document.getElementById('modal-caption');
var galleryImages = document.getElementsByClassName('gallery-image');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var currentImageIndex = 0;
for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function(e) {
        currentImageIndex = Array.prototype.indexOf.call(galleryImages, e.target);
        openModal();
    });
}
prevButton.addEventListener('click', function(e) {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openModal();
});
nextButton.addEventListener('click', function(e) {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openModal();
});
modal.addEventListener('click', function() {
    modal.classList.add('hidden');
});
function openModal() {
    modalImage.src = galleryImages[currentImageIndex].src;
    modalCaption.textContent = galleryImages[currentImageIndex].alt;
    modal.classList.remove('hidden');
}
function isSmallScreen() {
    // This media query should match your Tailwind `md` breakpoint.
    const mediaQuery = window.matchMedia('(min-width: 768px)').matches;
    return !mediaQuery;
}
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var navDesk = document.getElementById('desktopnav')
    var logo = document.getElementById('logo');
    var obrasFeitasDiv = document.getElementById('obras-feitas');
    var rect = obrasFeitasDiv.getBoundingClientRect();
    var hamburger = this.document.getElementById("menu-button")
    if (rect.top <= 0) {
        if (isSmallScreen) {
            hamburger.classList.add('text-white');
            hamburger.classList.remove('text-black');
        }
        header.classList.remove('bg-white');
        header.classList.add('bg-transparent');
        navDesk.classList.add('text-white');
        header.classList.remove("shadow-md");
        logo.classList.add('hidden');
        logo.innerHTML = '<span>Planet Constroi</span>';
    } else {
        if (isSmallScreen) {
            hamburger.classList.remove('text-white');
            hamburger.classList.add('text-black');
        }
        logo.classList.remove('hidden');
        header.classList.remove('bg-transparent');
        navDesk.classList.remove('text-white');
        header.classList.add('bg-white');
        header.classList.add("shadow-md");
        logo.innerHTML = '<img src="images/logo.png" alt="Logo" class="h-32">';
    }
});

document.getElementById('menu-button').addEventListener('click', function() {
    var mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    mobileMenuBackdrop.classList.remove('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(function(item) {
    item.addEventListener('click', function() {
        var mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
        mobileMenuBackdrop.classList.add('hidden');
    });
});

document.getElementById('close-button').addEventListener('click', function() {
    var mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    mobileMenuBackdrop.classList.add('hidden');
});

