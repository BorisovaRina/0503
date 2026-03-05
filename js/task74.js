console.log("Intentional fallthrough в switch:\n");

function getAccessLevel(role) {
    let access = [];
    
    switch(role) {
        case 'admin':
            access.push('delete');
            access.push('edit');
            // Intentional fallthrough
        case 'moderator':
            access.push('moderate');
            // Intentional fallthrough
        case 'user':
            access.push('read');
            access.push('comment');
            break;
        default:
            access.push('read');
    }
    
    return access;
}

console.log("admin:", getAccessLevel('admin'));
console.log("moderator:", getAccessLevel('moderator'));
console.log("user:", getAccessLevel('user'));
console.log("guest:", getAccessLevel('guest'));
