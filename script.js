const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const requiredFields = form.querySelectorAll(
    "input[required], textarea[required]"
  );

  requiredFields.forEach((field) => {
    const fieldWrapper = field.closest(".field");
    const error = fieldWrapper?.querySelector(".error");

    if (!field.value.trim()) {
      isValid = false;
      field.classList.add("invalid");
      if (error) error.classList.remove("hide");
    } else {
      field.classList.remove("invalid");
      if (error) error.classList.add("hide");
    }
  });

  const radios = form.querySelectorAll('input[name="query"]');
  const radioChecked = [...radios].some((r) => r.checked);
  const radioField = radios[0].closest(".field");

  if (!radioChecked) {
    isValid = false;

    const error = radioField.querySelector(".error");
    if (error) error.classList.remove("hide");
  } else {
    radioField.classList.remove("invalid");

    const error = radioField.querySelector(".error");
    if (error) error.classList.add("hide"); 
  }

  const checkbox = form.querySelector('input[type="checkbox"]');
  const checkboxField = checkbox.closest(".field");

  if (!checkbox.checked) {
    isValid = false;

    const error = checkboxField.querySelector(".error");
    if (error) error.classList.remove("hide");
  } else {
    checkboxField.classList.remove("invalid");

    const error = checkboxField.querySelector(".error");
    if (error) error.classList.add("hide");
  }
});
