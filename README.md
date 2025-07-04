<<<<<<< HEAD
# Github Pages Gallery
Host your photo/video gallery in Github pages easily using Thumbsup & Github Actions for free.

### Why this project?
This project contains starter code for anyone who wants to deploy his/her photo/video galery on Github Pages,
**Zero Coding Needed**. Since Github pages is a free hosting service offered by Github to host static pages, it
offers a decent bandwidth. So it is a great choice for photographers to showcase their works. Github Actions is a CI & CD
platform that offers unlimited builds for open source projects. Combining the power of GitHub pages with Github Actions is
a zero dollar solution to get your gallery online.

### How to use
Follow the steps below to get your Gallery online. You will be using GitHub web interface to do everything.
:wink: No frustrating CLIs:
1. SignUp for a Github account and verify your email ID: https://github.com/join
2. Click on the use this template button:

![template](https://user-images.githubusercontent.com/8397274/103133407-40d86f00-46d0-11eb-82f2-edb4a0a30333.png)

3. Type a Name for your new repository

![name](https://user-images.githubusercontent.com/8397274/103133448-88f79180-46d0-11eb-87ee-8da7a7d63473.png)

4. Click on the settings tab. Click on the **Pages** option under the **Code and automation** section. Make sure that you have the **GitHub actions** selected as the **Source** for the GitHub pages.
   ![Pages](https://user-images.githubusercontent.com/8397274/222885316-edd4dad3-fcdd-4c23-ad3a-dd96fa8bc426.png)

5. Edit [config.json](config.json) by clicking on the edit button in the newly created repository under your account:

```
{
  "input": "./gallery",
  "output": "./build_output",
  "title": "Photo Gallery", // Set your gallery title here
  "sort-albums-by": "title",
  "sort-media-by": "filename",
  "download-photos": "copy",
  "cleanup": true,
  "theme": "cards", // Your theme
  "css": "./custom.css",
  "footer": "Copyright Text", // Set your copyright text here
  "usage-stats": false
}
```
You can chose from any of the themes below to set the value for theme key:
* `mosaic` - https://thumbsup.github.io/demos/themes/mosaic/
* `cards` - https://thumbsup.github.io/demos/themes/cards/
* `classic` - https://thumbsup.github.io/demos/themes/classic/
* `flow` - https://thumbsup.github.io/docs/4-themes/built-in/ (no demo available)

You can learn more about the configuration file here: https://thumbsup.github.io/docs/3-configuration/usage/. Click on the commit changes button below the page.

6. Go to actions tab of your new repository, Wait till the Initial build completes. It will show you the following check mark:
![actions](https://user-images.githubusercontent.com/8397274/103133265-7af54100-46cf-11eb-9cef-38fa122142aa.png)
7. You are all set with your new awesome gallery! Add Albums or photos to make it live.

#### Demo Video
[![demo](http://img.youtube.com/vi/uYh7b2V0pyA/0.jpg)](http://www.youtube.com/watch?v=uYh7b2V0pyA "Github Pages Gallery Demo")


#### Adding a new album to gallery
1. Go to the gallery folder of the forked repo.
2. Click on Create a new file button.
3. Type AlbumName/.gitkeep in the input box
4. Click Commit Changes button at the bottom.

![newfolder](https://media.giphy.com/media/455paOHOAWr4KWNOtg/giphy.gif)

#### Adding Medias
1. Go to gallery folder. Open any albums if any.
2. Click on Upload files button
3. Select files. Once it finishes upload, click Commit Changes button.

![selectmedia](https://media.giphy.com/media/2uIfenjYx5anbQOEAo/giphy.gif)

#### Finding your website URL
If you had done all the above steps then your website will be live now. Please check Github Actions tab in your repository for the sttaus of the
deployment.  Once it is done, Go to settings tab again and scroll down to the Github Pages section to find your public gallery URL.

![url](https://user-images.githubusercontent.com/8397274/48008065-f639b880-e13e-11e8-9f8e-72d27ad7cc30.png)

## Limitations
* Github Pages [terms of service](https://help.github.com/articles/github-terms-of-service/):
> If your bandwidth usage significantly exceeds the average bandwidth usage (as determined solely by GitHub) of other GitHub customers, we reserve the right to immediately disable your account or throttle your file hosting until you can reduce your bandwidth consumption.

* File size limit (100 MB) & Repo size limit (75 GB) & Upload limit(25MB): Github limits the maximum usable filesize as 100MB for all files. This is enough for most users. It also imposes a repo size limit of 75GB. If you add a file to a repository via a browser, the file can be no larger than 25 MB. Visit https://help.github.com/articles/what-is-my-disk-quota/ for more info.


## Tools Used
* [Github Actions](https://github.com/features/actions) For continuous deployment.
* [Thumbsup](https://thumbsup.github.io/) for gallery static page generation.
* [GithHub Pages](https://pages.github.com/) for hosting.

### History
* This project was using Travis CI Initially, Migrated to Github Actions for better speed and reliabilty. Travis stopped providing free unlimited builds for open source projects.

## Contributing
Feel free to make any changes and submit a PR.
=======
# Simple Website Using Github Pages
Make a simple HTML website and publish it using Github Pages.  
View example: https://zirafa.github.io/simple-website-template/

## Setup
- Create a Github account (if you don't have one yet)
- Fork this repository to copy it to your account, i.e. github.com/username/simple-website-template (you can rename it as well)
- Make sure you see the gh-pages branch (it should be the default)
- Edit website files on the gh-pages branch, then wait a minute or two for Github Pages to update and deploy your site.
- View your site: https://username.github.io/simple-website-template

## How does this work?
This website template uses CSS & JS to hide and show different parts of index.html and uses Github Pages to render the website from the gh-pages branch.

## Things to try
- Edit index.html and change the title of the page
- Edit index.html and change the content displayed in home, about, and contact.
- Edit index.html and change the content in the footer region.
- Replace logo.jpg and background.jpg with your own images.
- Update the metadata in the header portion of index.html (this is used by search engines and browsers).
- Edit style.css and change the link color and font style.

## Further reading

### Can I make separate HTML files for each page?
You can use Javascript AJAX calls to pull in external content into your index.html page. See script.js for more details.

### Can I configure a custom domain for my site, i.e. johnnymakerportfolio.com?
Yes! Github Pages supports [custom domain configuration](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site). However, you will need to buy a domain name from a registrar such as [NameCheap](https://www.namecheap.com/) or [Gandi](https://www.gandi.net/) -- the cost is usually around $10 - $15 a year.

### Can I add a blog, etc?
This template works best for simple sites. For a blog you can try setting up [Jekyll, which is a static site generator that also works on Github pages](https://help.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll). For even more functionality, you will probably need a content management system (CMS) such as [Wordpress](https://wordpress.com), [Drupal](http://drupal.org), or [Django](https://www.djangoproject.com). A CMS will require additional setup and a website host, such as [Dreamhost](https://www.dreamhost.com/). 

### Can I add a store?
If you are interested in selling products online, check out [BigCartel](www.bigcartel.com), which lets you setup a storefront with 5 products for free.

### I heard I need to be using XYZ framework (Bootstrap, React, etc).
Web technology changes rapidly, and it easy to get lost in the hype. Learning the basics of HTML, CSS, and JS is a good place to start. From there, you can explore different frameworks and libraries to see what interests you.

### I don't want to write code or deal with website hosting. Are there any website builders you recommend?
- Google Sites (free)
- Squarespace
- Wix



>>>>>>> 0fe06df (master)
