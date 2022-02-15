// console.log("check")

function CalculteBalanceExpence() {
  const Income = document.getElementById("income-amount");
  const IncomeValue = parseInt(Income.value);
  // console.log(IncomeValue);
  const Food = document.getElementById("food-amount");
  const FoodValue = parseInt(Food.value);
  const Rent = document.getElementById("rent-amount");
  const RentValue = parseInt(Rent.value);
  const Cloth = document.getElementById("cloth-amount");
  const ClothValue = parseInt(Cloth.value);
  const TotalExpence = FoodValue + RentValue + ClothValue;
  const TotalExpenceText = document.getElementById("total-expence");
  TotalExpenceText.innerText = TotalExpence;

  // console.log(TotalExpence)

  const Balance = IncomeValue - TotalExpence;
  const BalanceText = document.getElementById("total-balance");
  BalanceText.innerText = Balance;

  // console.log(Balance)

  Income.value = "";
  Food.value = "";
  Rent.value = "";
  Cloth.value = "";

  // console.log('click working')
}

document.getElementById("calculte").addEventListener("click", function () {
  CalculteBalanceExpence();
});

document.getElementById("after-saving").addEventListener("click", function () {
  // console.log("non saving");

  const IncomeSave = document.getElementById("income-amount");

  const IncomeSaveValue = parseInt(IncomeSave.value);
  // console.log(IncomeSaveValue);
  const SavingAmount = document.getElementById("saving-amount");
  const SavingAmountValue = parseInt(SavingAmount.value);

  const TotalSavings = (IncomeSaveValue * SavingAmountValue) / 100;
  const TotalSavingsAmount = document.getElementById("total-saving-amout");
  TotalSavingsAmount.innerText = TotalSavings;
  SavingAmount.value="";
  IncomeSave.value="";

  // console.log(TotalSavings);
});
