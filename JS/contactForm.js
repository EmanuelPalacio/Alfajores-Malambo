const form = document.querySelector(".contact__form");
const dataEntry = document.querySelectorAll(".dataEntry");
const btn = document.querySelector(".btn-contact");
const expressions = {
  name: /^[a-zA-Z ]{3,150}/,
  email:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
  message: /^[a-zA-Z-0-9 ]{2,150}/,
};
const valideExpressions = {
  name: false,
  email: false,
  message: false,
};
const validateStyle = (expression, data, selector, target) => {
  if (expression.test(data)) {
    document
      .querySelector(`${selector} .dataEntry`)
      .classList.remove("validate--false");
    document
      .querySelector(`${selector} .dataEntry`)
      .classList.add("validate--true");
    document
      .querySelector(`${selector} .error`)
      .classList.remove("error--active");
    valideExpressions[target] = true;
  } else {
    document
      .querySelector(`${selector} .dataEntry`)
      .classList.remove("validate--true");
    document
      .querySelector(`${selector} .dataEntry`)
      .classList.add("validate--false");
    document.querySelector(`${selector} .error`).classList.add("error--active");
    valideExpressions[target] = false;
  }
};

const validate = (e) => {
  const target = e.target.name;
  const data = e.target.value;
  switch (target) {
    case "name":
      validateStyle(expressions.name, data, ".contact__name", target);
      break;
    case "email":
      validateStyle(expressions.email, data, ".contact__email", target);
      break;
    case "message":
      validateStyle(expressions.message, data, ".contact__message", target);
      break;
  }
};
dataEntry.forEach((elem) => {
  elem.addEventListener("keyup", validate);
});

form.addEventListener("submit", (elem) => {
  const { name, email, message } = valideExpressions;
  elem.preventDefault();
  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_e4e6sp9";

  if (name && email && message) {
    dataEntry.forEach((e) => e.classList.remove("validate--true"));
    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        btn.value = "ENVIAR";
      },
      (err) => {
        btn.value = "Error";
        alert(JSON.stringify(err));
      }
    );
    form.reset();
  } else {
    dataEntry.forEach((e) => {
      const target = e.name;
      const data = e.value;
      switch (target) {
        case "name":
          validateStyle(expressions.name, data, ".contact__name", target);
          break;
        case "email":
          validateStyle(expressions.email, data, ".contact__email", target);
          break;
        case "message":
          validateStyle(expressions.message, data, ".contact__message", target);
          break;
      }
    });
  }
});
