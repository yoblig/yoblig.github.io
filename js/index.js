// Problem: Need to keep track of my workload

// Create list
// Work
var work = ["code", "study"];

// Load my existing Work
$(document).ready(function() {
  loadWork();
});

// buttons
$('#add').on("click", function() {
  var task = $('#task').val();
  addWork(task);
  $('#task').val("");
});

$('#work').on('click', 'button', function() {
  var currentWork = $(this).parent().text();
  removeWork(currentWork);
  $(this).parent().remove();
});

$('#work').on('click', 'input', function(){
  $(this).parent().toggleClass('strikeThrough');
});


// functions
function addWork(item) {
  work.push(item);
  $('#work').append('<li><input type="checkbox">' + item + '<button class="delete" type="button"> - </button></li>');
}

function removeWork(item) {
    // find the value within the Work
    // remove the item from the Work
    work.splice($.inArray(item, work.tasks), 1);
}

function loadWork() {
  $.each(work, function(index, value) {
    $('#work').append('<li><input type="checkbox">' + value + '<button class="delete" type="button"> - </button></li>');
  });
}