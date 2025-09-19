// Week 1 - Personal Website JavaScript
// 기본적인 JavaScript 기능들

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 부드러운 스크롤 기능
    initSmoothScrolling();
    
    // 2. 네비게이션 하이라이트
    initNavigationHighlight();
    
    // 3. 스크롤 애니메이션
    initScrollAnimations();
    
    // 4. 폼 처리
    initContactForm();
    
    // 5. 타이핑 효과 (선택사항)
    initTypingEffect();
    
    // 6. 테마 토글 (선택사항)
    initThemeToggle();
});

// 부드러운 스크롤 기능
function initSmoothScrolling() {
    // 모든 네비게이션 링크에 부드러운 스크롤 적용
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // 헤더 높이를 고려한 스크롤 위치 계산
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA 버튼도 부드러운 스크롤 적용
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: aboutSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// 네비게이션 하이라이트 기능
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNavigation() {
        const scrollPos = window.scrollY + 100; // 헤더 높이 고려
        
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                // 모든 링크에서 active 클래스 제거
                navLinks.forEach(link => link.classList.remove('active'));
                
                // 현재 섹션에 해당하는 링크에 active 클래스 추가
                const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // 스크롤할 때마다 실행
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // 초기 실행
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 애니메이션할 요소들 관찰
    const animateElements = document.querySelectorAll('.interest-card, .stat-item, .skill-category');
    animateElements.forEach(el => observer.observe(el));
}

// 연락처 폼 처리
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 가져오기
            const formData = new FormData(this);
            const name = this.querySelector('input[placeholder="Name"]').value;
            const email = this.querySelector('input[placeholder="Email"]').value;
            const message = this.querySelector('textarea').value;
            
            // 간단한 유효성 검사
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // 성공 메시지 (실제 서버는 없으므로 시뮬레이션)
            showNotification('Message sent successfully! Thank you.', 'success');
            
            // 폼 초기화
            this.reset();
        });
    }
}

// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 알림 메시지 표시
function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 스타일 적용
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 애니메이션
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // 3초 후 제거
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// 타이핑 효과 (Hero 섹션용)
function initTypingEffect() {
    const typingElement = document.querySelector('.hero-text h2 .highlight');
    if (!typingElement) return;
    
    const originalText = typingElement.textContent;
    const typingTexts = [originalText, 'Branding Experience', 'Proficient English', 'Visual Communication Skills'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = typingTexts[currentIndex];
        
        if (!isDeleting) {
            // 타이핑 중
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                // 타이핑 완료, 잠시 대기 후 삭제 시작
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, 2000);
                return;
            }
        } else {
            // 삭제 중
            typingElement.textContent = currentText.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                // 삭제 완료, 다음 텍스트로
                isDeleting = false;
                currentIndex = (currentIndex + 1) % typingTexts.length;
                charIndex = 0;
            }
        }
        
        // 타이핑 속도 조절
        const speed = isDeleting ? 60 : 100;
        setTimeout(typeWriter, speed);
    }
    
    // 3초 후 타이핑 효과 시작
    setTimeout(typeWriter, 3000);
}

// 다크모드 토글 (선택사항)
function initThemeToggle() {
    // 토글 버튼 생성
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌓';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: transform 0.3s ease;
    `;
    
    themeToggle.addEventListener('mouseover', () => {
        themeToggle.style.transform = 'scale(1.1)';
    });
    
    themeToggle.addEventListener('mouseout', () => {
        themeToggle.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(themeToggle);
    
    // 다크모드 상태 확인
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // 초기 테마 적용
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // 토글 이벤트
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
        
    });
}

// 페이지 로딩 애니메이션
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 스크롤 진행도 표시 (선택사항)
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: var(--text-dark);
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 스크롤 진행도 초기화 (원하는 경우 주석 해제)
initScrollProgress();