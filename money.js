// console.log("check")





document.getElementById('calculte').addEventListener('click',function(){

          const Income=document.getElementById('income-amount');
          const IncomeValue = parseInt(Income.value) ;
          // console.log(IncomeValue);
          const Food=document.getElementById('food-amount')
          const FoodValue=parseInt(Food.value) ;
          const Rent =document.getElementById('rent-amount')
          const RentValue = parseInt(Rent.value)   ;
          const Cloth=document.getElementById('cloth-amount')
          const ClothValue=parseInt(Cloth.value)  ;
          const TotalExpence = FoodValue + RentValue + ClothValue;
          const TotalExpenceText =document.getElementById('total-expence');
          TotalExpenceText.innerText =TotalExpence;

          
          // console.log(TotalExpence)

          const Balance = IncomeValue - TotalExpence;
          const BalanceText =document.getElementById("total-balance");
          BalanceText.innerText =Balance;

          // console.log(Balance)

          Income.value =""

          // console.log('click working')
})