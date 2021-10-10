// モンスター討伐ゲーム

"use strict";

// モンスターのライフポイントの定義
let enemy_life = 100;

// 攻撃回数の定義
let attack_count = 0;

// ブラウザにアラートを表示
window.alert("戦闘をスタート");

// モンスター撃退までの繰り返し処理
while (enemy_life > 0) {
  const attack_point = Math.floor(Math.random() * 30) + 1;
  console.log("モンスターに" + attack_point + "のダメージ");
  
  // モンスターの体力と攻撃回数の処理
  enemy_life -= attack_point;
  attack_count += 1;
}

console.log(attack_count + "回でモンスターを撃破しました");
