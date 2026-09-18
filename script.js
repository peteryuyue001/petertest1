// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 处理表单提交
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('form-message');

    // 获取表单数据
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // 验证表单
    if (!data.name || !data.email || !data.subject || !data.message) {
        showMessage(messageDiv, '请填写所有必填字段', 'error');
        return;
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage(messageDiv, '请输入有效的邮箱地址', 'error');
        return;
    }

    // 组装询价内容并通过邮件客户端发送（mailto 方案，无需后端）
    const subjectLine = encodeURIComponent('[' + data.subject + '] 网站询价 - ' + data.name);
    const bodyLine = encodeURIComponent(
        '姓名：' + data.name + '\n' +
        '邮箱：' + data.email + '\n' +
        '电话：' + (data.phone || '未填写') + '\n' +
        '主题：' + data.subject + '\n' +
        '留言内容：\n' + data.message
    );
    const mailtoUrl = 'mailto:peter@delta-industry.com.cn?subject=' + subjectLine + '&body=' + bodyLine;

    // 尝试打开邮件客户端；同时保留提示信息
    const opened = window.location.href = mailtoUrl;

    showMessage(messageDiv, '已为您打开邮件客户端，点击发送即可送达！如未弹出，请直接发送邮件至 peter@delta-industry.com.cn', 'success');
    form.reset();

    // 6秒后隐藏消息
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
    }, 6000);
}

// 显示消息
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
}

// 汉堡菜单切换
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu) {
        const isActive = navMenu.classList.toggle('active');
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        }
    }
}

// 点击导航链接时关闭移动菜单
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 关闭移动菜单
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.setAttribute('aria-expanded', 'false');
            }
            
            // 移除所有活跃状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 给当前链接添加活跃状态
            this.classList.add('active');
        });
    });
});

// 监听滚动事件，更新导航栏阴影和返回顶部按钮
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// 返回顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 规格参数面板切换
function toggleSpecs(button) {
    const panel = button.parentElement;
    const table = panel.querySelector('.specs-table');
    const isActive = table.classList.toggle('active');
    button.classList.toggle('active', isActive);
}

// 平滑过渡效果
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.feature-card, .service-card, .team-member');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // 更新版权年份为当前年份
    const yearElements = document.querySelectorAll('.copyright-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // 降级处理：直接加载所有图片
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});
