'use strict';

function checkCashRegister(price, cash, cid) {
  const matrix = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': 0.25, 'DIME': 0.10, 'NICKEL': 0.05, 'PENNY': 0.01 }
  let change = [];
  let message = {};
  let cashDue = cash - price

  if (cashDue > 0) {
    let currentDrawerItem = []
    // loop backwards over text values in cid
    for (let i = cid.length - 1; i >= 0; i--) {
      let drawerItemValue = cid[i][1]
      const matrixValue = matrix[cid[i][0]]
      if (matrixValue <= cashDue && matrixValue <= drawerItemValue) {
        // subtract value from cashdue
        drawerItemValue -= matrixValue

        console.log(drawerItemValue);
        // subtract value from arrayValue
        // i++

      }
      // if cid item value <= cashDue
      // console.log(matrix[element[0]]);
      // if (matrix[element[0]])
    }
    // currentDrawerItem.push(cid item[i][0])
    // currentDrawerItem.push(cid item[i])
    // cid price += cid item matrix value
    // 
  }
  // console.log('cash due: ', cashDue);
  return message
}

console.log(checkCashRegister(20, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
