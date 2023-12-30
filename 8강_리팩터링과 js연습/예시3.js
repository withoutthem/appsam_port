// 리팩터링 전
function processOrder(customer, isRepeatCustomer, isPremiumMember, items) {

    let shippingCost;
    let discount;

    if (isPremiumMember) { // 프리미엄 멤버의 경우
        shippingCost = 0;
        discount = 0.1;
    } else if (isRepeatCustomer) { // 반복 구매자의 경우
        shippingCost = 5;
        discount = 0.05;
    } else { // 일반 구매자의 경우
        shippingCost = 10;
        discount = 0;
    }

    let orderTotal = items.reduce((total, item) => total + item.price * item.quantity, 0); // 주문 총액
    orderTotal = orderTotal - (orderTotal * discount) + shippingCost; // 할인 적용

    // 주문 내역 출력
    console.log(`Order processed for ${customer}. Total cost: ${orderTotal.toFixed(2)}`);
}





// 리팩터링 후

const getShippingCost = (isPremiumMember, isRepeatCustomer) => { // 배송비 계산
    if (isPremiumMember) return 0;
    if (isRepeatCustomer) return 5;
    return 10;
};

const getDiscount = (isPremiumMember, isRepeatCustomer) => { // 할인율 계산
    if (isPremiumMember) return 0.1;
    if (isRepeatCustomer) return 0.05;
    return 0;
};

const calculateOrderTotal = (items, discount, shippingCost) => { // 주문 총액 계산
    const itemsTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return itemsTotal - (itemsTotal * discount) + shippingCost;
};


// 실행부
const processOrder2 = (customer, isRepeatCustomer, isPremiumMember, items) => {
    const shippingCost = getShippingCost(isPremiumMember, isRepeatCustomer);
    const discount = getDiscount(isPremiumMember, isRepeatCustomer);
    const orderTotal = calculateOrderTotal(items, discount, shippingCost);

    console.log(`Order processed for ${customer}. Total cost: ${orderTotal.toFixed(2)}`);
};
