

// 1. 리팩터링 전
const processData = (data) => {
    if (!data) {
        return 'No data';
    }

    const name = data.name;
    const age = data.age;
    const email = data.email;

    let result = 'Processed Data:\n';
    result += 'Name: ' + name + '\n';
    result += 'Age: ' + age + '\n';
    result += 'Email: ' + email + '\n';

    if (data.isAdmin) {
        result += 'Status: Admin\n';
    } else {
        result += 'Status: User\n';
    }

    return result;
}


// 2. 리팩터링 후 (기능의 분리)
const formatData = ({ name, age, email, isAdmin }) => {
    return `
        Processed Data:
        Name: ${name}
        Age: ${age}
        Email: ${email}
        Status: ${isAdmin ? 'Admin' : 'User'}
    `;
}

const processData2 = (data) => {
    if (!data) {
        return 'No data';
    }
    return formatData(data);
}