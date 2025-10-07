let topics = [];

// topics.txtを読み込む
fetch('topics.txt')
  .then(response => response.text())
  .then(text => {
    topics = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  })
  .catch(err => {
    console.error('お題リストの読み込みに失敗しました:', err);
  });

// ランダムにお題を表示
document.getElementById('nextBtn').addEventListener('click', () => {
  if (topics.length === 0) {
    alert("お題がまだ読み込まれていません。少し待ってください。");
    return;
  }
  const randomIndex = Math.floor(Math.random() * topics.length);
  document.getElementById('topic').textContent = topics[randomIndex];
});

// ルール表示
document.getElementById('rules').addEventListener('click', () => {
  alert("【ロジカルバナナの遊び方】\n\n出てきたお題について「AだからB」と理由づけして答えましょう。\n例：「バナナといったら → 種がないから食べやすい」");
});
