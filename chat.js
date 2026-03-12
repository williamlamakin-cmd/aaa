// ==================== 在线客服聊天系统 ====================

let chatOpen = false;
let chatMessages = [];

// 初始化聊天
function initChat() {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
        chatMessages = JSON.parse(savedMessages);
        renderChatMessages();
    }
}

// 切换聊天窗口
function toggleChat() {
    chatOpen = !chatOpen;
    const chatWindow = document.getElementById('chat-window');
    const badge = document.getElementById('unread-badge');
    
    if (chatOpen) {
        chatWindow.style.display = 'flex';
        badge.style.display = 'none';
        document.getElementById('chat-input').focus();
    } else {
        chatWindow.style.display = 'none';
    }
}

// 发送聊天消息
function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息
    addChatMessage('user', message);
    input.value = '';
    
    // 模拟客服回复
    setTimeout(() => {
        const response = getAutoResponse(message);
        addChatMessage('system', response);
    }, 500 + Math.random() * 1000);
}

// 按Enter发送
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// 快速回复
function sendQuickReply(type) {
    const messages = {
        'product_inquiry': currentLanguage === 'en' ? 'I want to inquire about a product' : '我想咨询产品信息',
        'order_status': currentLanguage === 'en' ? 'I want to check my order status' : '我想查询订单状态',
        'shipping_info': currentLanguage === 'en' ? 'I want to know about shipping fees' : '我想了解运费说明',
        'other': currentLanguage === 'en' ? 'I have other questions' : '我有其他问题'
    };
    
    const input = document.getElementById('chat-input');
    input.value = messages[type];
    sendChatMessage();
}

// 添加聊天消息
function addChatMessage(type, content) {
    const message = {
        type: type,
        content: content,
        time: new Date().toISOString()
    };
    
    chatMessages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
    renderChatMessages();
}

// 渲染聊天消息
function renderChatMessages() {
    const container = document.getElementById('chat-messages');
    const lang = currentLanguage;
    
    // 只保留最近50条消息
    const recentMessages = chatMessages.slice(-50);
    
    container.innerHTML = recentMessages.map(msg => {
        const time = new Date(msg.time);
        const timeStr = time.toLocaleTimeString(lang === 'zh' ? 'zh-CN' : 'en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        return `
            <div class="chat-message ${msg.type}">
                <span class="message-content">${msg.content}</span>
                <span class="message-time">${timeStr}</span>
            </div>
        `;
    }).join('');
    
    // 滚动到底部
    container.scrollTop = container.scrollHeight;
}

// 获取自动回复
function getAutoResponse(message) {
    const lang = currentLanguage;
    const lowerMsg = message.toLowerCase();
    
    // 产品相关
    if (lowerMsg.includes('产品') || lowerMsg.includes('商品') || lowerMsg.includes('product')) {
        return lang === 'en' 
            ? 'We offer quality electronics, medical aids, and hardware products. What type of product are you interested in?'
            : '我们提供优质的电子产品、医疗辅助和五金产品。您对哪类产品感兴趣？';
    }
    
    // 订单相关
    if (lowerMsg.includes('订单') || lowerMsg.includes('order')) {
        return lang === 'en'
            ? 'Please provide your order number (starting with GC) and I will check the status for you.'
            : '请提供您的订单号（以GC开头），我会帮您查询订单状态。';
    }
    
    // 运费相关
    if (lowerMsg.includes('运费') || lowerMsg.includes('shipping') || lowerMsg.includes('fee')) {
        return lang === 'en'
            ? 'Shipping fee is estimated at 500 CNY (about $70 USD). Any excess will be refunded to your account after delivery. The exact fee depends on the actual shipping cost.'
            : '运费预估为500人民币。实际发货后，多收的费用会退还到您的账户。最终费用取决于实际物流成本。';
    }
    
    // 退换货
    if (lowerMsg.includes('退') || lowerMsg.includes('换') || lowerMsg.includes('return') || lowerMsg.includes('refund')) {
        return lang === 'en'
            ? 'For returns and exchanges, please contact our customer service within 7 days of receiving your order. We will assist you with the process.'
            : '关于退换货，请在收到商品后7天内联系我们的客服。我们会协助您处理。';
    }
    
    // 支付相关
    if (lowerMsg.includes('支付') || lowerMsg.includes('付款') || lowerMsg.includes('pay')) {
        return lang === 'en'
            ? 'We accept bank transfer, Alipay, and WeChat Pay. After payment, please include your order number in the reference.'
            : '我们支持银行转账、支付宝和微信支付。付款时请备注订单号。';
    }
    
    // 默认回复
    const defaultResponses = lang === 'en' 
        ? [
            'Thank you for your message! Our customer service team will assist you shortly.',
            'I understand. Let me check that for you.',
            'Thank you for contacting GlobalChoice. How can I help you today?',
            'For more detailed assistance, please email support@globalchoice.com'
        ]
        : [
            '感谢您的留言！我们的客服团队会尽快为您服务。',
            '我理解了，让我为您查询一下。',
            '感谢联系全球优选，请问有什么可以帮您？',
            '如需更详细的帮助，请发送邮件至 support@globalchoice.com'
        ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initChat();
});
