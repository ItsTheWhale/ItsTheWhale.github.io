const projectDescription = {
    projectDesc: ["A simple CPS test", "Find the average, median and mode", "A simple word counter"],
    projectId: ["project-clickTest", "project-autoMMM", "project-wordCount"],
    descId: ["projectdesc-clickTest", "projectdesc-autoMMM", "projectdesc-wordCount"]
};
for (let i in projectDescription.projectId) {
    let project = document.getElementById(projectDescription.projectId[i]);
    let desc = document.getElementById(projectDescription.descId[i]);
    project.addEventListener("mouseenter", () => { desc.innerHTML = projectDescription.projectDesc[i] });
    project.addEventListener("mouseleave", () => { desc.innerHTML = '' });
};