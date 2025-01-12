document.querySelector('.custom-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 获取表单数据
    const formData = new FormData(this);

    // 显示定制方案模态框
    document.getElementById('planModal').style.display = 'block';

    // 更新方案内容（这里可以根据实际数据动态生成）
    updatePlanDetails(formData);
});

function updatePlanDetails(formData) {
    // 更新行程概要
    document.querySelector('.plan-summary').innerHTML = `
        <span><i class="fas fa-calendar-alt"></i> 出行日期：<strong>${formData.get('date')}</strong></span>
        <span><i class="fas fa-users"></i> 出行人数：<strong>${formData.get('people')}人</strong></span>
        <span><i class="fas fa-clock"></i> 行程天数：<strong>${formData.get('days')}天</strong></span>
    `;

    // 计算总价
    const pricePerPerson = 898; // 假设每人价格
    const totalPrice = pricePerPerson * formData.get('people');
    document.querySelector('.total-price').textContent = `¥${totalPrice}`;
}

// 关闭模态框
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('planModal').style.display = 'none';
});

// 点击模态框外部关闭
window.addEventListener('click', function(e) {
    const modal = document.getElementById('planModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});