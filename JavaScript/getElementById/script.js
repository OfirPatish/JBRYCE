const maaserPercentage = 0.1;
const hommashPercentage = 0.2;

const calculatePercentage = () => {
  const income = document.getElementById("income").value;

  const maaser = income * maaserPercentage;
  const hommash = income * hommashPercentage;

  const result = document.getElementById("result");
  result.innerText = `Maaser: ${maaser}\nHommash: ${hommash}`;
};
