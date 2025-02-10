# react-beginner-section5
Created with CodeSandbox

これはじゃけぇさんのコンテンツをハンズオンで学んだもの
これは復習する価値あり

 とりあえず、JSのみで作成している


学んだことの記録
 JSでは取得したDOMは全て繋がっている。
 参照している。
 「参照を持っている」と呼ばれるらしい。


JSの要素
-オブジェクト
DOM  （Document Object Model） のオブジェクト
returnButton は <button> 要素を指しており、document.getElementById() や document.querySelector() で取得した DOM（Document Object Model）オブジェクト です。

-プロパティ
DOM  （Document Object Model） のプロパティ
説明: returnButton の 直前の兄弟要素 を取得する プロパティ。
ポイント: previousElementSibling は プロパティ なので、値を取得できるが () は不要。

-メソッド
関数（Function）
説明: todoText を引数として受け取り、何かの処理を実行する 関数（メソッド）。
ポイント: JavaScript では、オブジェクトのプロパティとして定義された関数を 「メソッド」 と呼ぶが、通常の関数も「メソッド」と表現されることがある。
