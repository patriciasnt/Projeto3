$(function refresh() {
  let search = document.getElementById("search-field").value;
  let wrapper = document.getElementById("image-container");

  wrapper.innerHTML = `<div class="other-images">
              <div style="margin-left: -45%">
                <img src="img/loading.gif">
              </div>
            </div>`;

  $.ajax({
    type: "GET",
    url: "/buscar",
    data: {
      searchTerm: search
    },
    success: function(result) {
      console.log(result);
      let content = ``;
      for (let i = 0; i < result.length; i++) {
        content += `<div class="telatoda">
            <div class="other-images">
              <div>
                <img src="upload/${result[i].conteudo}">
              </div>
            </div>
            <div class="texto">
              <p>${result[i].titulo}</p>
            </div>
          </div>`;
      }
      setTimeout(() => {
        wrapper.innerHTML = content;
      }, 1000);
    },
    complete: function() {
      console.log("List realoaded");
      // Schedule the next request when the current one's complete
      setTimeout(refresh, 8000);
    }
  });
});
