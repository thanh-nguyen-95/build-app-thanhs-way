# Document

> There are a lot of ways to create a document, here I'll use [Markdown][md]

## Instructions

Simply gather all the checklist and add to the following sections (this is also the actual checklist for document):

- [ ] Table of content
- [ ] Introduction
  - [ ] Overview
  - [ ] Features
- [ ] Getting started
  - [ ] Prerequisites
  - [ ] Installation
  - [ ] Run (dev/build/test)
- [ ] Structure
- [ ] How it work/ Explaination
- [ ] FAQ
- [ ] References/ Read more/ Resources

## Tips and tricks

### How to create table of content for [Markdown][md]

> Because you can use `HTML` in `Markdown` file. We can use this to create a table of content.

Steps:

1. Add a `div` tag with `id` of choice above the header.

   ```md
   <div id="my-heading"></div>
   ## The heading you want to mark
   ```

2. In the table of content, add a `link` with the `href` like so.

   ```md
   Table of content:

   - [My heading](#my-heading)
     - Sublink 1
     - Sublink 2
     - Sublink 3
   - Link 2
   - Link 3
   ```

[md]: https://daringfireball.net/projects/markdown/syntax

### Other resources

- [Dillinger - Online markdown editor](https://dillinger.io/)
- [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
