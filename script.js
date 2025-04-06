// DOMの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    // 以前のナビゲーションのスムーズスクロールコードを削除
    // 各ページには個別のHTMLファイルがあるため、通常のリンクとして機能させる
    
    // 現在の年度を自動的に設定（フッターの著作権表示用）
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
    }
    
    // イベントカードにクリックイベントを追加（events.htmlページのみ）
    const eventCards = document.querySelectorAll('.event-card');
    
    if (eventCards.length > 0) {
        eventCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // リンクをクリックした場合はカードのトグルを発動させない
                if (e.target.tagName.toLowerCase() === 'a') {
                    return;
                }
                
                this.classList.toggle('expanded');
                
                // スタイルを動的に追加
                if (!document.querySelector('.event-card-styles')) {
                    document.head.insertAdjacentHTML('beforeend', `
                        <style class="event-card-styles">
                            .event-card.expanded {
                                background-color: #e1f0fa;
                                transform: scale(1.03);
                            }
                        </style>
                    `);
                }
            });
        });
    }
    
    // お問い合わせリンクのイベントリスナー（現在はプレースホルダー）
    const contactLink = document.querySelector('.contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('お問い合わせフォームは現在準備中です。しばらくお待ちください。');
        });
    }
    
    // ダウンロードリンクのイベントリスナー（現在はプレースホルダー）
    const downloadLink = document.querySelector('.download-link');
    if (downloadLink) {
        downloadLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('入会申込書のダウンロードは現在準備中です。しばらくお待ちください。');
        });
    }
    
    // イベント申し込みリンクのイベントリスナー（現在はプレースホルダー）
    const eventLinks = document.querySelectorAll('.event-link');
    if (eventLinks.length > 0) {
        eventLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('イベント申し込みフォームは現在準備中です。しばらくお待ちください。');
            });
        });
    }
    
    // レポートリンクのイベントリスナー（現在はプレースホルダー）
    const reportLinks = document.querySelectorAll('.event-report');
    if (reportLinks.length > 0) {
        reportLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('イベント報告書は現在準備中です。しばらくお待ちください。');
            });
        });
    }

    // 同一ページ内のアンカーリンクのスムーズスクロール（ホームページのクイックリンクなど）
    const inPageLinks = document.querySelectorAll('a[href^="#"]');
    if (inPageLinks.length > 0) {
        inPageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                // #だけの場合はトップへのリンクなので、処理しない
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}); 