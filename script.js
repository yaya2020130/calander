let date = new Date;
let currentHour = date.getHours()
let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}

for(let i = 9; i<18; i++){
  $('.container').append(`<div class='row time-block'><div class='hour col-1'>${i}:00</div><textarea class='description col-10 ${currentHour < i ? 'future' : currentHour == i ? 'present': 'past'}'>${todos[i]||''}</textarea><button class='saveBtn col-1' id=${i}>SAVE</button>`)
}

$(document).on('click', '.saveBtn', function(){
  let id = $(this).attr('id')
  let val = $(this).siblings('textarea').val().trim()
  todos[id] = val;
  localStorage.setItem('todos', JSON.stringify(todos))
})

