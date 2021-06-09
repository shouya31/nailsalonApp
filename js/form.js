// // ①送信のイベント発火から、フォームの値を取得する

// // ②取得した値を指定のパスにPOSTで送信する
// window.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('form').addEventListener('submit', function(e){
//         e.preventDefault()

//         //　FormDataオブジェクトを用いて、フォームの値を取得する
//         const form = new FormData(this)

//         // GoogleAPIを用いて、スプレッドシートに書き込み作業を行う


//     })
//  });

document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}