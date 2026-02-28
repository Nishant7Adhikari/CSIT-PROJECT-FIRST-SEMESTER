# Project Guidelines

> These instructions are for the members of our team. Follow the rules and structure below to collaborate effectively.

---

## 1. Team Structure & Roles

1. **Project Leads**
   - One members take overall responsibility for planning, reviewing code, and mentoring.
   - Shall maintain the repository, assign tasks, and resolve merge conflicts.

2. **Feature Developers**
   - Build core components (navigation, forms, responsive layouts).
   - Write reusable CSS/JS modules.
   - Pair for knowledge transfer.

3. **Support Developers**
   - Implement smaller UI pieces (buttons, cards, menus).
   - Fix bugs, write simple scripts, and update documentation.
   - Practice Git workflow with guidance.

*Everyone* should help with testing, proofreading, and providing feedback.

---

## 2. Task Distribution

- **Sprint Planning**: Break the project into multiple tasks. In each task:
  1. Lead draft a task list.
  2. Assign tasks first, then pair them to members including self as needed.

- **Suggested initial division**:
  - HTML structure and semantic markup — Team effort, leads review.
  - Core CSS (layout, grid, typography) — Intermediates.
  - Component styling (buttons, forms) — Beginners with intermediate review.
  - JavaScript utilities (event handlers, validations) — Mixed pairs.
  - Final cross‑browser testing and optimization — Everyone.

---

## 3. General Rules

1. **Git workflow**:
   - Fork the project.
   - Clone the forked project.
   - work on the project.
   - add, commit, push.
   - Write clear commit messages (what changed and why).
   - Open pull requests for review; confirmed by lead before merge.
   - Rebase or merge regularly to avoid conflicts.

2. **Code style**:
   - Keep HTML valid.
   - Use the component wise CSS files (`css/general.css`, `css/button.css`) and organize new styles there in new module files.
   - Format JavaScript with consistent indentation and comments. Use `main.js` for global scripts; add new files under `js/` if needed.
   - Follow naming conventions: kebab-case for classes, snake_case for ids and camelCase for JS variables/functions.
   kebab-case: filter, top-button, new-filter, upload-icon, ...
   snake_case: filter, top_button, new_filter, upload_icon, ...
   camelCase: filter, topButton, newFilter, uploadIcon, ... 

3. **Communication**:
   - Use viber group for updates.
   - Tag teammates in comments when help or review is needed.
   - Document your work in the log.txt.

5. **Testing & Quality**:
   - Preview changes locally before committing.
   - Test on at least two browsers (e.g., Chrome, Edge) and one mobile device.
   - Fix any layout or functionality issues promptly.

---

## 4. Final Delivery

- Ensure the `index.html` loads correctly and the CSS/JS are linked properly.
- Run a final walkthrough as a team to verify every component works.
- Tag a release in Git and prepare a short demo for instructors.
