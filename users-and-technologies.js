
 const users = [
    { name: "Elon", technologies: ["HTML", "CSS"] },
    { name: "Ananda", technologies: ["JavaScript", "CSS"] },
    { name: "Caio", technologies: ["HTML", "Node.js"] }
  ];


  for (let i = 0; i < users.length; i++) {
      console.log(`${users[i].name} works with ${users[i].technologies.join(', ')}.`)
  }