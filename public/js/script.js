// mobile responsive navbar
const openMobileNavButton = document.getElementById("open-mobile-nav");
if (openMobileNavButton) {
    console.log("clicked")
  openMobileNavButton.addEventListener("click", function () {
    document.getElementById("mobile-sidebar").classList.add("show");
  });
}

const closeMobileNavButton = document.getElementById("close-mobile-nav");
if (closeMobileNavButton) {
  closeMobileNavButton.addEventListener("click", function () {
    document.getElementById("mobile-sidebar").classList.remove("show");
  });
}

const closeMobileNavBlankRight = document.getElementById(
  "mobile-sidebar-right"
);
if (closeMobileNavBlankRight) {
  closeMobileNavBlankRight.addEventListener("click", function () {
    document.getElementById("mobile-sidebar").classList.tog("show");
  });
}

const paymentButton = document.getElementById("payment-button");
const paymentButtonMb = document.getElementById("payment-button-mb");
const paymentElement = document.getElementById("evention-payment");
const closePaymentButton= document.getElementById("close-payment");

paymentButton.addEventListener("click", () => {
  paymentElement.classList.remove("hide");
  document.body.style.overflow = "hidden";
});
paymentButtonMb.addEventListener("click", () => {
  paymentElement.classList.remove("hide");
  document.body.style.overflow = "hidden";
});
closePaymentButton.addEventListener("click", () => {
  paymentElement.classList.add("hide");
  document.body.style.overflow = "";
});