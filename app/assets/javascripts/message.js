$(function() {
  function buildHTML(message) {
    if ( message.image ) {
      let html = `<div class="MessageBox">
                    <div class="Property">
                      <div class="Property__name">
                        ${message.user_name}
                      </div>
                      <div class="Property__daytime">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Objects">
                      <p class="Message__content">
                        ${message.body}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    } else {
      let html = `<div class="MessageBox">
                    <div class="Property">
                      <div class="Property__name">
                        ${message.user_name}
                      </div>
                      <div class="Property__daytime">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Objects">
                      <p class="Message__content">
                        ${message.body}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }
  $('.FormBox').on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      let html = buildHTML(message)
      $('.MessageList').append(html);
      $('.MessageList').animate({ scrollTop: $('.MessageList')[0].scrollHeight});
      $('form')[0].reset();
      $('.SendBtn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージの送信に失敗しました");
    });
  });
});