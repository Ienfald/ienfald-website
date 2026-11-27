// Add published applications and packages here. Leave this empty to show the
// coming-soon message.
const projects = [
  // {
  //   name: "My application",
  //   type: "Application",
  //   description: "A short explanation of what the project does.",
  //   url: "https://example.com",
  // },
];

const projectList = document.querySelector("#project-list");

if (projects.length > 0 && projectList) {
  projectList.replaceChildren(
    ...projects.map((project) => {
      const card = document.createElement("article");
      card.className = "project";

      const icon = document.createElement("span");
      icon.className = "project-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = project.name.charAt(0).toUpperCase();

      const copy = document.createElement("div");
      const type = document.createElement("p");
      type.className = "project-type";
      type.textContent = project.type;
      const name = document.createElement("h3");
      name.textContent = project.name;
      const description = document.createElement("p");
      description.textContent = project.description;
      copy.append(type, name, description);

      const link = document.createElement("a");
      link.href = project.url;
      link.textContent = "View project ↗";
      link.setAttribute("aria-label", `View ${project.name}`);

      card.append(icon, copy, link);
      return card;
    }),
  );
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
