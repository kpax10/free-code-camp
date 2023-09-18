'use strict';

function checkCashRegister(price, cash, cid) {
  const matrix = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': 0.25, 'DIME': 0.10, 'NICKEL': 0.05, 'PENNY': 0.01 }
  let change = [];
  let message = {};
  let cashDue = cash - price

  if (cashDue > 0) {
    // loop backwards over text values in cid
    let currentDrawerItem = []
    // if cid item value <= cashDue
    // currentDrawerItem.push(cid item[i][0])
    // currentDrawerItem.push(cid item[i])
    // cid price += cid item matrix value
    // 


  }
  message.status = 'OPEN';
  message.change = change

  console.log(cashDue);
  return message
}

console.log(checkCashRegister(20, 50, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))