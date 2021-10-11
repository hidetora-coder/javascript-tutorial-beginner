// 税込価格の計算プログラムをfunction(関数）を使って実装

function priceIncludingTax(priceExcludingTax) {
  // 消費税が10％なので、定数のtaxに0.1を代入
  const tax = 0.1;
  
  // JavaScriptでは掛け算と割り算が先に計算されるの
  // 例 1000 + (1000 × 0.1)
  return price + price * tax;
}

// 関数の呼び出し
priceIncludingTax(5000);
