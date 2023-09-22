'use strict';

function checkCashRegister(price, cash, cid) {
  const matrix = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': 0.25, 'DIME': 0.10, 'NICKEL': 0.05, 'PENNY': 0.01 }
  let change = [];
  let message = {};
  let cashDue = cash - price

  if (cashDue > 0) {
    // loop backwards over text values in cid
    for (let i = cid.length - 1; i >= 0; i--) {

      let currentDrawerItem = []
      let drawerItemValue = cid[i][1]
      let matrixValue = matrix[cid[i][0]]

      if (drawerItemValue === 0) i--

      if (matrixValue <= cashDue && matrixValue <= drawerItemValue) {
        console.log('cash due: ', cashDue);
        // subtract value from arrayValue
        console.log('drawer item: ', cid[i][0]);
        console.log('drawerItem before', drawerItemValue);
        console.log('subtract: ', matrixValue);
        drawerItemValue -= matrixValue
        console.log('new drawerItemValue: ', drawerItemValue);

        // add cash to currentDrawerItem
        // currentDrawerItem.push(matrixValue)

        // subtract value from cashdue
        cashDue -= matrixValue
        // loop back over same drawer item
        console.log(cid[i]);
        drawerItemValue = cid[i + 1][1]

          // matrixValue = matrix[cid[i + 1][0]]
          ;
        console.log('******');
        // i++
      }
      // console.log(currentDrawerItem);
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

console.log(checkCashRegister(20, 1000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
