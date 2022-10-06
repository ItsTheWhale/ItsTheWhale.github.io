const projectDescription = {
    projectDesc: ["About me!", "Trolling the web, made easy", "Some reverse psychology..."],
    projectId: ["project-aboutMe", "project-gammaSearch", "project-notARickroll"],
    descId: ["projectdesc-aboutMe", "projectdesc-gammaSearch", "projectdesc-notARickroll"],
};
for (let i in projectDescription.projectId) {
    let project = document.getElementById(projectDescription.projectId[i]);
    let desc = document.getElementById(projectDescription.descId[i]);
    project.addEventListener("mouseenter", () => { desc.innerHTML = projectDescription.projectDesc[i] });
    project.addEventListener("mouseleave", () => { desc.innerHTML = '' });
};