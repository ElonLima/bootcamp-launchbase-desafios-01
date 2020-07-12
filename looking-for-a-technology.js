
const users = [
    { name: "Elon", technologies: ["HTML", "CSS"] },
    { name: "Ananda", technologies: ["CSS", "JavaScript"] },
    { name: "Caio", technologies: ["HTML", "Node.js"] }
  ];

function checkIfUsesCSS(user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') return true
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    if(checkIfUsesCSS(users[i])) {
        console.log(`O usuário ${users[i].name} works with CSS.`)
    }
}