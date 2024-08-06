import Cake from "../images/cake.jpg";
import Soups from "../images/soup.jpg";
import Broccoli from "../images/broccoli.jpg";
import Frying from "../images/fry.jpg";

const recipes = [
  {
    id: 1,
    title: "Cake Recipe",
    author: "John Doe",
    image: Cake,
    ingredients: [
      "200 gms oreo/chocolate cookie of your choice",
      "50 gms sprig coconut sugar",
      "1 tsp sprig vanilla extract",
      "2 tbsp coconut oil",
      "1 nos sprig jar of love",
      "50 ml heavy cream"
    ],
    directions: [
      "Take two 5 inch removable bottom tart pans and keep them ready.",
      "In a food processor, add the cookies, coconut sugar, vanilla and coconut oil and blitz till it forms moist sand like texture.",
      "Press this mixture into the tart pans and refrigerate.",
      "Whip your heavy cream till it forms soft peaks, mix in the coconut ginger jar gently. Now, equally divide the filling between the tarts and refrigerate for about 15 mins.",
      "Serve with fresh strawberries."
    ]
  },
  {
    id: 2,
    title: "Soups",
    author: "Jane Smith",
    image: Soups,
    ingredients: [
      "1 kgs red tomatoes",
      "1 tsp salt",
      "1 tsp black paper powder",
      "1/2 tsp sugar",
      "1 tbsp bread crutons for serving"
    ],
    directions: [
      "In a pressure cooker add1/4 cup water and boiled it",
      "Now add 1 by 2 pieces of tomatoes",
      "Cover it",
      "And make 3 whistle",
      "Then let it cool",
      "Then blend with blender",
      "Now now remove skin and seeds by poring it in jar",
      "Now boil the soup",
      "Add salt,sugar,black paper powder",
      "Boil 5_7 min. till thick",
      "Now serve it hot by garnish with bread croutons"
    ]
  },
  {
    id: 3,
    title: "Broccoli Recipe",
    author: "Jane Smith",
    image: Broccoli,
    ingredients: [
      "2 cups small broccoli florets",
      "1/4 cup finely chopped carrots",
      "1/4 cup finely chopped cucumber",
      "1/4 cup finely chopped onion",
      "1/4 cup finely chopped tomatoes",
      "1/4 cup finely chopped yellow and red bell peppers",
      "2-3 lettuce leaves",
      "1 tbsp finely chopped coriander leaves",
      "4-5 mint leaves",
      "2 tbsp raisins and cashew nuts",
      "For the dressing: 1/4 cup hung curd",
      "Juice of 1 lemon",
      "1 tbsp honey",
      "1 tsp black pepper",
      "1/4 Salt"
    ],
    directions: [
      "Combine the ingredients for the dressing in a bowl and mix it well. Refrigerate until not in use.",
      "Cut the broccoli in small florets.",
      "Heat water in a pan and blanch the broccoli for 2-3 mins.",
      "Transfer the broccoli florests in ice cold water.",
      "Finely chop the rest of the vegetables onions, tomatoes, carrot, cucumber and bell peppers.",
      "Combine all the salad ingredients in a large bowl, pour the hung curd dressing over, and mix it well. Refrigerate for 30 mins. Stir again and Serve chilled!"
    ]
  },
  {
    id: 4,
    title: "Frying Peaks",
    author: "Jane Smith",
    image: Frying,
    ingredients: [
      "2 nos medium sized potatoes",
      "4 tsp corn flour",
      "1/2 tsp chilli powder",
      "1/2 tsp garam masala / chat masala",
      "3 tbsp lemon juice extract",
      "1 nos onion (cut into very small pieces)",
      "3 nos green chilly (slit into small pieces)",
      "1/2 tsp salt as needed",
      "1 sprig curry leaves"
    ],
    directions: [
      "Prepare a solution of cornflour with a pinch of salt and water",
      "The consistency should be semithick so that it will coat the potato pieces unifromly",
      "Pressure cook the potatoes for up to 3 whistles",
      "Once pressure it released, peel of the potatoes and cut them into small identical sized cubes",
      "Coat them evenly with the corn flour solution",
      "Heat oil in a pan and deep fry the potatoes for 3-4 minutes until the color changes to olden brown",
      "In another pan, heat 2 tbsp of oil",
      "When the oil is hot, add the onion pieces, green chillies, curry leaves and saute it until the onion turns yellow color",
      "Add the fried potato pieces, add red chilly powder, garam masala, salt, lemon extract one after another and saute total for a 2-3 minutes",
      "The potato pieces should be evenly coated with the masala",
      "Turn off the flame and transfer to a servin bowl",
      "Serve hot with some ketchup"
    ]
  },
];

export default recipes;
