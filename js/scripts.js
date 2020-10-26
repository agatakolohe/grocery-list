$(document).ready(function () {
  let groceries = [];
  $("form#grocerylist").submit(function (event) {
    event.preventDefault();
    groceries.push($("input#item").val());
    let groceryItem = groceries[groceries.length - 1];
    $("#output").append("<li>" + groceryItem + "</li>");
  });
  $("button#resort-list").click(function () {
    let capitalGroceries = [];
    groceries.sort();
    groceries.forEach(function (thing) {
      capitalGroceries.push(thing.toUpperCase());
    });
    console.log(capitalGroceries);
    capitalGroceries.forEach(function (buyable) {
      $("#final-list").append("<li>" + buyable + "</li>");
    });
    $("form#grocerylist").hide();
    $("#output").hide();
    $("#final-list").show();
  });
});
