//javascript to hide comingUpContent and pastEventsContent information (preset)
document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';


//function to show the comingUpContent information on click and hide other tabs
//***onclick="showComingUp" is in html, don't have to define on click in javascript***
function showComingUp() {
  hidePanels();
  document.getElementById('comingUpContent').style.display = 'block';
}
//function to show the pastEventsContent information on click and hide other tabs
function showPastEvents() {
  hidePanels();
  document.getElementById('pastEventsContent').style.display = 'block';
}
//function to show the eventsWeekContent information on click and hide other tabs
function showEventsWeek() {
  hidePanels();
  document.getElementById('eventsWeekContent').style.display = 'block';
}

//function to hide other panels while one is open
function hidePanels() {
  document.getElementById('comingUpContent').style.display = 'none';
  document.getElementById('pastEventsContent').style.display = 'none';
  document.getElementById('eventsWeekContent').style.display = 'none';
}

//overidding a css element through Javascript
