// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('ランディングページが読み込まれました！');
    
    // CTAボタンをクリックしたときの動作
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('ご興味をお持ちいただきありがとうございます！\nこれはデモページです。');
        });
    }
    
    // スムーズスクロール機能
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // ヘッダーの高さ分調整
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // スクロール時のヘッダー背景変更
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // カードにアニメーションを追加
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // カードを監視対象に追加
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
});