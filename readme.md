I have firstly installed all the necessary package, though have'nt used all my packages.

then i have used mongoDB as my database and connected to it.

i have created a reportSchema wherein all the object's properties are mentioned as per the problem statement.

then i have created 2 user api's(post/create which automatically saves in the database.)

after running node app.js these two requests were stored in the database inside a reports array as objects.

finally i commented out my both created requests and made a find request which converts the prices into given "kg" unit using required conversion rate. and consoled the result out.


i could have used post/get routes and rendered an ejs file but it was not mentioned in the ps so i did this way.