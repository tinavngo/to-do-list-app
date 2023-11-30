function newItem() {

  // 1. Adding a new item to the list of items 
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);
  
  if (inputValue === '') {
      alert("You must write something!");

  } else {
      let list = $('#list');
      list.append(li);
      $('#input').val(""); // Reset input field
  }

  // 2. Crossing out an item from the list of items:
  function crossOut() {
      li.toggleClass('strike');
  }
  li.on('dblclick', crossOut);
  
  // 3(i). Adding the delete Button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

  // 3(ii). Adding class delete (display: none) from the css:
  function deleteListItem() {
      li.addClass('delete');
  }

  // 4. Recording the items:
  $('#list').sortable();
}
