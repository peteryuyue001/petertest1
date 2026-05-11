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

    // 这里可以添加实际的后端接口调用
    // 目前显示成功消息，实际使用时需要连接到后端服务
    console.log('表单数据:', data);
    
    showMessage(messageDiv, '感谢您的消息！我们会尽快与您联系。', 'success');
    form.reset();

    // 3秒后隐藏消息
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
    }, 3000);
}

// 显示消息
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
}

// 导航栏激活效果
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有活跃状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 给当前链接添加活跃状态
            this.classList.add('active');
        });
    });
});

// 监听滚动事件，更新导航栏
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// 响应式导航菜单（可选）
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
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
});
