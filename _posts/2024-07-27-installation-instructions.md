---
layout: post
title: Installing Awesome Jekyll Theme!
image: "https://picsum.photos/700/300"
category: Jekyll
author: Me
---

## Installation: The Easy Way to Have Your Site on GitHub Pages (Recommended!) 😄

1. **Navigate to the Main Page of the Repository**

   On GitHub.com, go to the main page of the repository at [awesome-jekyll-theme](https://github.com/a-chacon/awesome-jekyll-theme).

2. **Click 'Use this Template'**

   Click the "Use this template" button above the file list and select "Create a new repository."

3. **Set Repository Details**

   - Select the owner of the repository.
   - Type a name for your repository. If you want the site to be available at `https://YOURUSERNAME.github.io`, name it `YOURUSERNAME.github.io` (replace `YOURUSERNAME` with your GitHub username). Otherwise, you can choose any name you prefer, and the site will be available at `https://YOURUSERNAME.github.io/REPOSITORYNAME`.
   - Add an optional description.
   - Choose repository visibility.

4. **Create Repository from Template**

   Click "Create repository from template."

5. **Enable GitHub Pages**

   To deploy the site on GitHub Pages, enable it in your repository settings. Go to **Settings -> Pages -> Source** and select `GitHub Actions`.

6. **Customize Your Website Settings**

   Edit the `_config.yml` file to change any settings you want. The settings in the file are self-explanatory, and there are comments inside to help you understand what each setting does. After making changes, click the "Commit changes" button to save them.

7. **Congratulations! You Have a Website!**

   If you named the repository `YOURUSERNAME.github.io`, your website should be ready in a minute or two at `https://YOURUSERNAME.github.io`. If you used a different name, your website will be available at `https://YOURUSERNAME.github.io/REPOSITORYNAME`. Every time you make a change to any file, your website will be rebuilt and updated in about a minute.

## Advanced Installation (Optional) ⚙️

1. **Create a New Jekyll Site**

   If you don’t already have a Jekyll site, create one with:

   ```bash
    jekyll new my-site
   ```

   Then, navigate into your new site’s directory:

   ```bash
    cd my-site
   ```

2. **Add the Theme to Your Gemfile**

   Open your `Gemfile` and add this line:

   ```ruby
    gem "awesome-jekyll-theme"
   ```

3. **Update Your `_config.yml`**

   In your `_config.yml` file, add this line:

   ```yaml
   theme: awesome-jekyll-theme
   ```

4. **Install the Theme**

   Run the following command to install the theme and its dependencies:

   ```bash
    bundle
   ```

5. **Run Your Site**

   Start your Jekyll site with:

   ```bash
    bundle exec jekyll serve
   ```
