# Semester project 2

![image](./images/Screeshot_semester_project_2.JPG)

For this semester project I was tasked with creating an e-commerce website that had both customer-facing and admin sections. Building a checkout and payment system was not part of the project

## Description

For the e-commerce website I had to choose the theme of the website and design the website using Adobe XD. For this project I also used Heroku with Strapi to create an REST API to use with this site.

I had to create a suitable logo and name for the website. I had to to apply all that I had learned from my studies so far. The site had to have good user experience and UI design, following today's trends and design patterns.

The site had to include the following pages:
- Home
- Product List
- Product Detail
- Cart Pages

An admin user had to be able to:
- create products
- update products
- delete products

I also added a favorites page because of user request

### Here is an overview of what the different pages had to have of functionality

### Home page
The page had to include:
- a hero banner with an image uploaded to strapi. 
- a list of featured products. The products had to be marked as featured in Strapi products. When a product was marked as featured it should be displayed on the homepage.

There is also a heart icon on all the products so they can be toggled in and out of favorites.

### Products page
The page had to include:
- a list of all products added to Strapi. Each product had to display its title, price and image. The product had to link to its product detail page.
- a search text box. When searching, only the products that include the searched text in their title or description should be listed.

### Products details page
This page is reached by a user clicking on a product on the product list page, from the featured products on the homepage, from the basket or from favorites. The page had to include:
- title
- description
- image
- price
- an add to basket button. The button adds a product to the basket when pressed and shows a modal with how many items of the same type is in the basket.

### Basket page
The basket page had to display a list of all products added to the cart. I had to load the items that had been added to local storage and display them on the page. If the cart is empty it displays a message indicating this. 

Each product in the basket must display:
- title
- price
- a link to the product detail page
- image

After teh list of products I had to display the total price of all the products in the cart.

### Favorites page
I added the favorites page because of user feedback and displays all the products added to favorites. The user is able to remove one and one product by clicking the heart icon on the product or can remove all products by using the remove favorites button.

### Admin section
The admin section had to only be accessible to a logged in admin user and had to include the these features:

#### Login/Logout
I had to create a admin login form that allowed an admin user to login and stayed logged in using local storage.

When logged in, I had to display a button in the nav that logs out the user. I added a modal that asks for a confirmation to log out the user.

#### Add/Edit products
I had to create a form that allowed for a product to be added, deleted and edited. The form had to allow the admin user to toggle wether a product is featured. I also had to add a confirmation dialog before a user is able to delete an image

I added an edit button to all products if there was a logged in user. I also added a plus icon to the nav so a logged in user could add products.

#### Product images
For adding/editing images I had to add verify image functionality to check if the image was the correct format and size so the image would not fail in the form submit. 

## Built With

- HTML5
- JavaScript
- [Sass](https://sass-lang.com)

## Getting Started
### Installing

1. Clone the repo:

```bash
git clone git@github.com:Noroff-FEU-Assignments/js-frameworks-course-assignment-oerjanberger.git
```

2. Install the dependencies:

```
npm install node-sass
```

3. Add an ".env" file at the root of the project and copy this information
```bash
HOST=0.0.0.0
PORT=1337

DATABASE_URL=postgres://dudbduwaqcvuvr:3440c2832013342996f4fc7b6fd70a88d87136e861c91218833011851f27f5a0@ec2-54-75-184-144.eu-west-1.compute.amazonaws.com:5432/d1s4cv9p8m7b9h

CLOUDINARY_NAME=dvfohuqco
CLOUDINARY_KEY=871987187337773
CLOUDINARY_SECRET=1K0jRhN40zrYS0kI8rdukeg3BQI

JWT_SECRET=05f31856-6663-43c8-9e7f-1ef1b1a28039
API_TOKEN_SALT=067dda5c2683da043ff357f6e7f15e2b
```

### Running

To run the app locally:

- Add the extension "Live server"
- Right click "index.html" and choose "open with Live server"

## Contributing

Make sure to open a pull request so code can be reviewed.

## Contact

[My LinkedIn page](https://www.linkedin.com/in/%C3%B8rjan-berger-80a05889/)

