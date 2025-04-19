
document.getElementById('submitButton').addEventListener('click', function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = document.getElementById('year').value;
  const gender = document.getElementById('gender');
  const result = document.getElementById('result');

  if (day < 1 || day > 31) {
    result.textContent = "Day must be between 1 and 31.";
    return;
  }

  if (month < 1 || month > 12) {
    result.textContent = "Month must be between 1 and 12.";
    return;
  }

  if (!year || year.length !== 4 || isNaN(year)) {
    result.textContent = "Enter a valid 4-digit year.";
    return;
  }

  if (!gender.value) {
    result.textContent = "Please select your gender.";
    return;
  }

  const CC = parseInt(year.slice(0, 2));
  const YY = parseInt(year.slice(2));
  const MM = month;
  const DD = day;

  let d = ((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;
  d = Math.floor(d);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

  const dayName = days[d];
  const akanName = gender.value === 'male' ? maleNames[d] : femaleNames[d];

  result.textContent = `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
});
