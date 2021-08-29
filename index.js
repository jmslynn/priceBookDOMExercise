
document.getElementById('add').addEventListener('click', () => {
  let table = document.getElementById('list');
  let row = table.insertRow(1);
  // date
  row.insertCell(0).innerHTML = document.getElementById('purchase-date').value;
  //store
  row.insertCell(1).innerHTML = document.getElementById('store-name').value;
  //sale?
  row.insertCell(2).innerHTML = document.getElementById('sale').value;
  //coupon?
  row.insertCell(3).innerHTML = document.getElementById('coupon').value;
//price paid
row.insertCell(4).innerHTML = document.getElementById('price-paid').value;
//full price
row.insertCell(5).innerHTML = document.getElementById('full-price').value;

  //clear task fields
  document.getElementById('store-name').value='';
  document.getElementById('sale').value='';
  document.getElementById('coupon').value='';
  document.getElementById('price-paid').value='';
  document.getElementById('full-price').value='';
});
