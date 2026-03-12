// ==================== 会员认证系统 ====================

let currentUser = null;

// 初始化认证状态
function initAuth() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

// 更新用户界面
function updateUserUI() {
    const loggedOutMenu = document.getElementById('logged-out-menu');
    const loggedInMenu = document.getElementById('logged-in-menu');
    
    if (!loggedOutMenu || !loggedInMenu) return;

    if (currentUser) {
        loggedOutMenu.style.display = 'none';
        loggedInMenu.style.display = 'block';
        document.getElementById('user-display-name').textContent = currentUser.name;
        document.getElementById('user-display-email').textContent = currentUser.email;
    } else {
        loggedOutMenu.style.display = 'block';
        loggedInMenu.style.display = 'none';
    }
}

// 切换用户菜单显示
function toggleUserMenu() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// 点击外部关闭用户菜单
document.addEventListener('click', (e) => {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.getElementById('user-dropdown');
    if (userMenu && dropdown && !userMenu.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// 显示登录模态框
function showLoginModal() {
    document.getElementById('user-dropdown').style.display = 'none';
    document.getElementById('login-modal').classList.add('active');
    document.getElementById('login-email').focus();
}

// 关闭登录模态框
function closeLoginModal() {
    document.getElementById('login-modal').classList.remove('active');
    document.getElementById('login-form').reset();
}

// 显示注册模态框
function showRegisterModal() {
    document.getElementById('user-dropdown').style.display = 'none';
    document.getElementById('register-modal').classList.add('active');
    document.getElementById('register-name').focus();
}

// 关闭注册模态框
function closeRegisterModal() {
    document.getElementById('register-modal').classList.remove('active');
    document.getElementById('register-form').reset();
}

// 切换到注册
function switchToRegister() {
    closeLoginModal();
    showRegisterModal();
}

// 切换到登录
function switchToLogin() {
    closeRegisterModal();
    showLoginModal();
}

// 处理登录
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    // 从localStorage获取用户列表
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        closeLoginModal();
        showToast(translate('login_success'));
    } else {
        showToast(translate('login_failed'));
    }
}

// 处理注册
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const phone = document.getElementById('register-phone').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // 验证密码
    if (password !== confirmPassword) {
        showToast(translate('password_mismatch'));
        return;
    }

    // 获取现有用户
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 检查邮箱是否已注册
    if (users.find(u => u.email === email)) {
        showToast(translate('register_failed'));
        return;
    }

    // 创建新用户
    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        phone: phone,
        password: password,
        registerDate: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // 自动登录
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    closeRegisterModal();
    showToast(translate('register_success'));
}

// 退出登录
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    document.getElementById('user-dropdown').style.display = 'none';
    showPage('home');
    showToast(translate('logout'));
}

// 检查登录状态
function checkLogin() {
    if (!currentUser) {
        showToast(translate('please_login'));
        showLoginModal();
        return false;
    }
    return true;
}

// 渲染个人中心
function renderProfile() {
    if (!currentUser) {
        showPage('home');
        return;
    }

    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('profile-phone').textContent = currentUser.phone;
    document.getElementById('profile-register-date').textContent = formatDate(currentUser.registerDate);
}

// 点击模态框外部关闭
document.getElementById('login-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'login-modal') {
        closeLoginModal();
    }
});

document.getElementById('register-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'register-modal') {
        closeRegisterModal();
    }
});
