

  // ここから下にjqueryの処理を書いて練習します

//   nameariaとtextariaをクリックされたときに次の処理をする
  $("#username").on("click",function(){
        $("#username").val(""); //空にする
  });

  $("#text").on("click",function(){
    $("#text").val(""); //空にする
  });


  // 送信ボタンをクリックされたら次の処理をする
  $("#send").on("click", function () {
    // データを登録で送る
    newPostRef.push({
      username: $("#username").val(), //名前
      text: $("#text").val(), //テキストエリア
    })
    $("#text").val(""); //空にする
    $("#username").val(""); //空にする
  });

  // 受信処理
  newPostRef.on("child_added", function (data) {
    let v = data.val(); //ここに保存されたデータが全て入ってくる
    // let k = data.key; //今回は使いません

    console.log(v); //vの変数に入っているオブジェクトを全てみる

    let str = `<p>${v.username}<br>${v.text}</p>`;

    // ここでデータをhtmlに埋め込む
    $(".chat-area").prepend(str);
  })

  // $("#text").on("keydown", function (e) {
  //   console.log(e, "event");

  //   if (e.keyCode === 13) {
  //     newPostRef.push({
  //       username: $("#username").val(), //名前
  //       text: $("#text").val(), //テキストエリア
  //     })
  //     $("#text").val(""); //空にする
  //     $("#username").val(""); //空にする
  //   }
  // })
