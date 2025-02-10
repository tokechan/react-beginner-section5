import "./styles.css";

const onCrickAdd = () => {
  //テキスツボックスの内容の取得、その後初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了リストに追加　　下の関数を呼びして共通化している
  createIncompleteTodo(inputText);
};

//渡させてた引数を基に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
  //li生成
  const li = document.createElement("li");

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親に当たるliタグを完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    //戻すボタンを生成してdivタグ配下に設定
    const returnButton = document.createElement("button");
    returnButton.innerHTML = "return";
    returnButton.addEventListener("click", () => {
      //TODOの内容を取得し、未完了リストに追加
      const todoText = returnButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      //押された戻すボタンの親にあるliタグを削除
      returnButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(returnButton);
    //完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });
  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親に当たるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  deleteButton.innerText = "delete";

  //liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  //未完成リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onCrickAdd);
