

function getAll() {
    var url = "https://picsum.photos/v2/list?page=1&limit=10";
    var xhr = new XMLHttpRequest();
  
    xhr.open("GET", url, true);
  
    xhr.onload = function() {
      if (this.status == 200) {
        // console.log(this.responseText);
        var posts = JSON.parse(this.responseText);
        var html = "";
          // ${post.sometihinguseless}
        posts.forEach(post => {
          html += `
          <div class="col">
          <div  class="portfolio-item">
               <a href="${post.url}">
                  <img class="img-fluid" src="${post.download_url}" alt="">
                  
                   <div class="img-overlay"> 
                      <div class="icon">
                          <i class="fas fa-search-plus fa-3x"></i>
                      </div>
                  </div>
              </a> 
          </div>
      </div>`;
        });
  
        document.querySelector("#collage").innerHTML = html;
      }
    };
  
    xhr.send();
  }
  getAll();


