# ienfald-website

The dependency-free website for ienfald.nl.

## Preview locally

Run this command from the repository root and open <http://localhost:8000>:

```sh
python3 -m http.server 8000
```

## Publish a software project

Add an object to the `projects` array in `projects.js`. Each project needs a
`name`, `type`, `description`, and `url`. The site displays the project
automatically; when the array is empty, the homepage displays its coming-soon
message.
