<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>配列</title>
	</head>
	<body>
		<section>
			<ul id="item-list"></ul>
		</section>

    <script>
      "use strict";
      
      //　配列を作成し変数のitemsに格納する
      let items = ["item1", "item2", "item3"];
      
      // 変数itemsに格納された３つのデータを一つずつitem変数に代入している
      for ( const item of items) {
        // list_item定数に<li>タグで囲まれたテンプレート文字列を代入している
        const list_item = '<li>${item}</li>';
        
        // item-listのidが記載されている<ul>の子要素にlist_itemを記載している
        document.getElementById('item-list').insertAjacentHTML("beforeend", list_item);
      }
    </script>
	</body>
</html>
