const projectDescription = {
    projectDesc: ["A simple CPS test", "Find the average, median and mode", "A simple word counter", "Calculates Metric Time"],
    projectId: ["project-clickTest", "project-autoMMM", "project-wordCount", "project-metric-time"],
    descId: ["projectdesc-clickTest", "projectdesc-autoMMM", "projectdesc-wordCount", "projectdesc-metric-time"]
};
for (let i in projectDescription.projectId) {
    let project = document.getElementById(projectDescription.projectId[i]);
    let desc = document.getElementById(projectDescription.descId[i]);
    project.addEventListener("mouseenter", () => { desc.innerHTML = projectDescription.projectDesc[i] });
    project.addEventListener("mouseleave", () => { desc.innerHTML = '' });
};