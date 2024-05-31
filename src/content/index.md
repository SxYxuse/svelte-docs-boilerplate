---
title: 'Svelte 5 Documentation Boilerplate'
---

# Svelte 5 Documentation Boilerplate

This project is a boilerplate for creating documentation with Svelte 5. It is designed to handle Markdown files, making it easy to write and manage your documentation.

The boilerplate provides a robust starting point for any project documentation, offering a streamlined way to create, update, and maintain your project's documentation. It leverages the power of Svelte 5 to provide a smooth and interactive user experience.

If you have any suggestions or concerns, please consider opening a new issue.

**Note:** This boilerplate is open source and maintained by the community. It is free to use and we encourage contributions to improve it.

## Setup

Setting up and managing your documentation with this Svelte 5 Documentation Boilerplate is straightforward. Here are the steps you need to follow:

1. **Clone the repository:** Start by cloning the boilerplate repository to your local machine. You can do this by running `git clone https://github.com/SxYxuse/svelte-docs-boilerplate.git`.

2. **Install dependencies:** Navigate into the cloned repository and install the necessary dependencies by running `npm install`.

3. **Start the development server:** You can start the local development server by running `npm dev`. This will start the server, and you can view your documentation at `http://localhost:5173`.

4. **Adding content:** To add new content, create a new Markdown file in the `src/content` directory. The name of the file will be the route for that content. For example, if you create `about.md`, the content will be accessible at `http://localhost:5000/about`. To handle the routes edit the `src/lib/config/navigations.ts`.

5. **Editing content:** To edit existing content, simply open the corresponding Markdown file in your text editor and make your changes. The development server will automatically reload the page when you save your changes.

6. **Building for production:** When you're ready to publish your documentation, run `npm run build`. This will create a `public` directory with your compiled project. You can then deploy this directory to your preferred hosting provider.

Remember, the power of this boilerplate is in its simplicity and flexibility. You can easily customize it to suit your project's needs.

_Created by [SxYxuse](https://github.com/SxYxuse)_
