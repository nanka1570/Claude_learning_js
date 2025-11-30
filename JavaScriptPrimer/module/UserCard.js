// 問題3
function UserCard(props){
    return `ユーザーカード: ${props.name}`;
}

const formatName = (firstName, lastName) => {
    return `${lastName} ${firstName}`;
};

export default UserCard;
export { formatName };