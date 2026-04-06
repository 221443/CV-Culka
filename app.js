const { profile, skills, education, experience, projects } = window.cvData;

const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
};

const createNode = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
};

const renderContacts = () => {
    const list = document.getElementById("contact-list");
    list.innerHTML = "";

    profile.contacts.forEach((contact) => {
        const item = document.createElement("li");
        const link = document.createElement(contact.href === "#" ? "span" : "a");
        link.className = "contact-chip";
        link.textContent = contact.label === "Location" ? profile.location : contact.label;

        if (contact.href !== "#") {
            link.href = contact.href;
            link.target = "_blank";
            link.rel = "noreferrer";
        }

        item.appendChild(link);
        list.appendChild(item);
    });
};

const renderList = (containerId, items) => {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    items.forEach((item) => {
        const wrapper = createNode("article", containerId === "experience-list" ? "timeline-item" : "stack-item");
        const head = createNode("div", "row-head");
        const title = createNode("h3", "", item.title);
        const meta = createNode("p", "row-meta", item.meta);
        const description = createNode("p", containerId === "experience-list" ? "timeline-description" : "education-copy", item.description);

        head.append(title, meta);
        wrapper.append(head, description);
        container.appendChild(wrapper);
    });
};

const renderSkills = () => {
    const list = document.getElementById("skills-list");
    list.innerHTML = "";

    skills.forEach((skill) => {
        const item = createNode("li", "", skill);
        list.appendChild(item);
    });
};

const renderProjects = () => {
    const container = document.getElementById("projects-list");
    container.innerHTML = "";

    projects.forEach((project) => {
        const card = createNode("article", "project-card");
        const topLine = createNode("div", "project-topline");
        const title = createNode("h3", "", project.title);
        const role = createNode("span", "project-role", project.role);
        const meta = createNode("p", "project-stack", project.stack);
        const description = createNode("p", "project-description", project.description);

        topLine.append(title, role);
        card.append(topLine, meta, description);

        if (project.link) {
            const link = createNode("a", "project-link", "Open project");
            link.href = project.link;
            link.target = "_blank";
            link.rel = "noreferrer";
            card.appendChild(link);
        }

        container.appendChild(card);
    });
};

const renderPhoto = () => {
    if (!profile.photo) {
        return;
    }

    const image = document.getElementById("profile-photo");
    const placeholder = document.getElementById("photo-placeholder");

    image.src = profile.photo;
    image.hidden = false;
    placeholder.hidden = true;
};

setText("full-name", profile.fullName);
setText("headline", profile.headline);
setText("summary", profile.summary);
setText("about-text", profile.about);
renderContacts();
renderSkills();
renderList("education-list", education);
renderList("experience-list", experience);
renderProjects();
renderPhoto();