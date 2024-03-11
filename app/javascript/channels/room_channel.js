import consumer from "channels/consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('chatroom channel')
  },

  disconnected() {
  },

  received(data) {
    $('#msg').append('<div class="message border border-secondary rounded p-5 m-5">' + data.content + '</div>')
    console.log(data.content)
  }
});

// var submit_messages
//
// $(document).on('turbolinks:load', function () {
//   submit_messages()
// })
//
// submit_messages = function () {
//   $('#message_content').on('keydown', function (event) {
//     if (event.keyCode === 13) {
//       $('input').click()
//       event.target.value = ''
//       event.preventDefault()
//
//       console.log('yes we hitted enter')
//     }
//   })
// }
