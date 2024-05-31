# Svelte 5 Documentation Boilerplate

This project is a boilerplate for creating documentation with Svelte 5. It is designed to handle Markdown files, making it easy to write and manage your documentation.

The boilerplate provides a robust starting point for any project documentation, offering a streamlined way to create, update, and maintain your project's documentation. It leverages the power of Svelte 5 to provide a smooth and interactive user experience.

If you have any suggestions or concerns, please consider opening a new issue.

**Note:** This boilerplate is open source and maintained by the community. It is free to use and we encourage contributions to improve it.

## Setup

**Clone the repository :** Start by cloning the boilerplate repository to your local machine. You can do this by running

```untype
git clone https://github.com/SxYxuse/svelte-docs-boilerplate.git
```

**Install dependencies :** Navigate into the cloned repository and install the necessary dependencies by running

```untype
npm install
```

**Adding content :** To add new content, create a new Markdown file in the `src/content` directory. The name of the file will be the route for that content. For example, if you create `about.md`, the content will be accessible at `http://localhost:5000/about`. To handle the routes, edit the `src/lib/config/navigations.ts` file.

_Created by [SxYxuse](https://github.com/SxYxuse)_
