$(function() {
  $("#login-btn").click(function(event) {
    event.preventDefault();

    // Gets the form data
    let email = $("input#email_login").val();
    let password = $("input#senha_login").val();

    let newUser = {
      password,
      email
    };

    $.ajax({
      type: "POST",
      url: "/singIn",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(newUser),
      success: function(result) {
        if (result.status === 1) {
          location.href = "/dashboard";
        } else {
          document.getElementById("login-msg").innerHTML = result.msg;
        }
      }
    });
  });
});

$(function() {
  $("#create").click(function(event) {
    event.preventDefault();

    // Gets the form data
    let userName = $("input#nome_cad").val();
    let password = $("input#senha_cad").val();
    let email = $("input#email_cad").val();

    let newUser = {
      userName,
      password,
      email
    };

    $.ajax({
      type: "POST",
      url: "/createUser",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(newUser),
      success: function(result) {
        document.getElementById("msg").innerHTML = result.msg;
      }
    });
  });
});

function search(field) {
  let searchTerm = field.value;
  let wrapper = document.getElementById("image-container");

  $.ajax({
    type: "GET",
    url: "/buscar",
    data: {
      searchTerm: searchTerm
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
      wrapper.innerHTML = content;
    }
  });
}

