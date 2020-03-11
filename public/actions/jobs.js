let button = document.getElementById('return');
button.addEventListener("click", function (event) {
  window.location.href = '/'

});

let form = document.getElementById('formulario');
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let localizacion = form.querySelector('#localizacion').value;
  console.log(localizacion)
  getjobs(localizacion)
});
const getjobs = async localizacion => {
  let url = "https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?" + "location=" + localizacion;
  let response = await axios.get(url);

  document.getElementById("lista").innerHTML = "";
  console.log(response.data)
  let jobs = response.data;
  jobs.forEach(job => {

    if(job.company_logo == null){
      job.company_logo = "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png";
    }

    const lista =

      `<div class="card mb-12" type="button" data-toggle="modal" data-target="#exampleModalLong${job.id}">
          <div class="row no-gutters align_card">
              <div class="col-md-2 container_img">
                  <img class="card-img" src=${job.company_logo}>
              </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <div class="header_card col-md-12">
                          <h5 class="card-title">${ job.title}</h5>
                          <h4 class="card-text card_time"><small class="text-muted">${job.type}</small></h4>
                      </div>
                      <div class="footer_card col-md-12">
                          <p class="card-text"><i class="fas fa-briefcase ofert_icon"></i>${job.company}</p>
                          <p class="card-text"><small class="text-muted"><i class="fas fa-map-marker-alt ofert_icon ml-3"></i>${job.location}</p>
                          <p class="card-text card_right"><small class="text-muted"><i class="far fa-calendar-alt ofert_icon"></i>${job.created_at}</small></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Modal -->

      <div class="modal fade" id="exampleModalLong${job.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">${ job.title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>

              <div class="modal-heade">
                  <div class="imgs">
                      <div class="logo">
                          <img class= "card-img-modal" src=${job.company_logo}>
                      </div>
                  </div>

                  <div class="info">
                      <div class="text-left col-md-8">
                          <p class="modal-icon"><i class="fas fa-map-marker-alt modal_icon ml-3"></i>${job.location}</p>
                      </div>
                      <div class="col-md-4">
                          <p class="modal-icon right">${job.type}</p>
                      </div>
                  </div>  
              </div>

              <div class="modal-body">
                  <div class="info mb-5">
                      <div class="text-left col-md-6"><a href="${job.company_url}">
                          <i class="fas fa-briefcase ofert_icon"></i>${job.company}</a>
                      </div>
                      <div class="text-right col-md-6">
                          <i class="far fa-calendar-alt ofert_icon"></i>${job.created_at}
                      </div>
                  </div>
                  <div class="content">${job.description}</div>
              </div>
              
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>`
      
    document.getElementById("lista").innerHTML += lista;

    });
  };

  $("#buscar").click(function(){
      $(".main").animate({height: '380px', marginTop: '50px'});
      $(".subtitle").animate({opacity: '1', margin: '90px 0 60px 0'});
  });
    
  