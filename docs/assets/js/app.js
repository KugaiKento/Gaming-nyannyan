function initializeGame() {
    const detective = document.querySelector('.detective');
    const container = document.getElementById('game-container');
    const clearMessage = document.getElementById('clear-message');
    const background = document.getElementById('background');
    const dummy = document.querySelector('.dummy');

    // 背景画像リストと対応する座標
    const backgrounds = [
        { src: "./assets/images/2.png", x: 500, y: 650 },
        { src: "./assets/images/3.png", x: 1759, y: 395},
        { src: "./assets/images/Renoir.jpg", x: 420, y: 140},
        { src: "./assets/images/Napoleon.jpg", x: 100, y: 960}

    ];

    // 偽物画像リスト
    const dummyImages = [
        "./assets/images/だまし1.png",
        "./assets/images/だまし2.png"
    ];

    // ゲーム画面のサイズを取得
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // ランダムで背景画像を設定
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];

    background.src = selectedBackground.src;

    // 探偵の位置を設定（画面外にはみ出さないように調整）
    detective.style.left = `${Math.min(selectedBackground.x, containerWidth - 100)}px`;
    detective.style.top = `${Math.min(selectedBackground.y, containerHeight - 100)}px`;

    // 偽物画像をランダムで選び、ランダムな位置に配置（画面内に収める）
    const randomDummyImage = dummyImages[Math.floor(Math.random() * dummyImages.length)];
    dummy.src = randomDummyImage;

    // 画像の幅と高さを取得（遅延がある場合 setTimeout で調整可能）
    dummy.onload = function() {
        const dummyWidth = dummy.clientWidth || 50;  // デフォルト値
        const dummyHeight = dummy.clientHeight || 50; // デフォルト値

        const dummyX = Math.random() * (containerWidth - dummyWidth);
        const dummyY = Math.random() * (containerHeight - dummyHeight);

        dummy.style.left = `${dummyX}px`;
        dummy.style.top = `${dummyY}px`;
        dummy.style.display = 'block';
    };

    // クリックイベント - 探偵をクリックでクリア
    detective.addEventListener('click', () => {
        clearMessage.style.display = 'block';
        detective.style.display = 'none';
    });

    // クリックイベント - 偽物画像をクリックでメッセージ表示
    dummy.addEventListener('click', () => {
        alert('偽物です 探偵に慣れないよぉ？笑');
    });
}

window.addEventListener('load', initializeGame);
