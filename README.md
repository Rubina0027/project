
# RUBINA Your-e-Pharmasist

This is a fully responsive Medicine E-commerce website developed using Django. It allows users to purchase medicines online from anywhere and at any time. The website offers a variety of features such as login, sign in, logout, add to cart, checkout, and contact us page that is linked with a database.



## Installation

In order to run the project, please ensure that you have Python3 and pip installed on your system.

To install the project dependencies, run the following command:

```bash
  pip install -r requirements.txt
```


## MySQL Database Setup
This project uses a MySQL database to store the information about the medicines and the users. In order to use the project, you will need to set up a MySQL database and create a database and user with the following details:
```bash
  DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_db_username',
        'PASSWORD': 'your_db_password',
        'HOST': 'your_db_host',
        'PORT': 'your_db_port',
    }
}
```

## Migrations
To set up the database tables, run the following command:
```bash
  python manage.py makemigrations
  python manage.py migrate
```
## Running the project
To run the project, navigate to the project directory and run the following command:
```bash
 python manage.py runserver
```
## Functionality

This RUBINA Ecommerce Website has the following features:

### - Beautiful UI: The website has a beautiful and intuitive user interface that enhances the user experience.The website is fully responsive and adapts to different screen sizes.
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/6.jpeg)
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/13.PNG)

### - Login/Signup: Users can register and create an account to access the website's features. Existing users can login to their account using any basic device mobile/desktop and can logout of the website at any time
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/16.PNG)
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/9.jpeg)

## - Browse Medicines: Users can browse through a list of available medicines, category wise.
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/14.PNG)
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/18.PNG)

## - Add to Cart: Users can add items to their cart for future purchase.
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/5.jpeg)

## - Checkout: Users can view the items in their cart and purchase them.
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/8.jpeg)

## - Contact Us: Users can use the contact form to send messages to the website administrators. These messages are stored in the database for future reference.
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/1.jpeg)
![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/2.jpeg)


## Database: MySQL database is used at the backend to store all the data.
- Registerd Users Schema

![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/db1.jpeg)
- Product Categories Schema

![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/db3.jpeg)
- Product Schema

![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/db5.JPG)
- Contact Us Schema

![Screenshot](https://github.com/Rubina0027/project/blob/master/outputs/db2.jpeg)

Many More Schemas like Order details, Cart Items, Address are there.

#### Thank you for checking out our RUBINA Ecommerce Website!
