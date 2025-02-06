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
        { src: "./assets/images/Renoir.jpg", x: 420, y: 140}
    ];

    // 偽物画像リスト
    const dummyImages = [
        "./assets/images/だまし1.png",
        "./assets/images/だまし2.png",
        "./assets/images/Renoir.jpg",
        // "./assets/images/fake3.png"
    ];

    // ランダムで背景画像を設定
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    
    background.src = selectedBackground.src;

    // 探偵の位置を設定
    detective.style.left = `${selectedBackground.x}px`;
    detective.style.top = `${selectedBackground.y}px`;

    // 偽物画像をランダムで選び、ランダムな位置に配置
    const randomDummyImage = dummyImages[Math.floor(Math.random() * dummyImages.length)];
    dummy.src = randomDummyImage;
    dummy.style.left = `${Math.random() * (container.clientWidth - 15)}px`;
    dummy.style.top = `${Math.random() * (container.clientHeight - 15)}px`;
    dummy.style.display = 'block';

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