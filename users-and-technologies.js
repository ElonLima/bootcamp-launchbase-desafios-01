
 const users = [
    { name: "Elon", technologies: ["HTML", "CSS"] },
    { name: "Ananda", technologies: ["JavaScript", "CSS"] },
    { name: "Caio", technologies: ["HTML", "Node.js"] }
  ];

  for (let user of users) {
      console.log(`${user.name} works with ${user.technologies.join(', ')}.`)
  }