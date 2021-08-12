const slides = Array.from(document.querySelectorAll('.component__intro-slide'));
const containerMap = document.querySelector('.component__wrapper-map');

const selectSlide = (s) => {
  return document.querySelector(s);
}

let logoK, slideOne, slideTwo, slideThree, slideFour, details;

let time = 0;

// declencher la fonction count toute les 2secondes
const countInterval = setInterval(count, 2000);


function count(){
  time++;

  //arreter le setInterval
  if(time > 9) {
    clearInterval(countInterval);
  }
 
  switch( time ) {
    case 1: 
     slideOne = selectSlide('#slide-1');
     slideOne.classList.add('active');
     break;
    case 3: 
      slideTwo = selectSlide('#slide-2');
      logoK = selectSlide('#logo');
      logoK.classList.add('active');
      slideTwo.classList.add('active');
      break;

    case 4:
      details = selectSlide('#details');
      details.classList.add('active');
      break;

    case 5: 
      slideThree = selectSlide('#slide-3');
      slideThree.classList.add('active');
      break;
    
    case 7:
      setInterval(()=> {
        details.classList.remove('active');
      }, 1000);
      break;

    case 8: 
      slideFour = selectSlide('#slide-4');
      slideFour.classList.add('active');
      containerMap.classList.add('moveTop');
      break;
  }
}


//Utilisation deGoogle Maps JavaScript API

function initMap() {
  const location = {lat: 48.716, lng: 2.247};

  const options = {
    zoom: 12,
    center: location
  }

  const map = new google.maps.Map(document.getElementById('map'), options);

  const marker = new google.maps.Marker({position: location, map: map});

  const infoWindow = new google.maps.InfoWindow({content: '<h1>Opticien Krys</h1>'});

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  })
}