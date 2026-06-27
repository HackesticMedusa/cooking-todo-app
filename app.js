// ChefSync - Core Logic & Meal Database

// 1. Core Meal Database (Fallback / Local Engine)
const LOCAL_MEAL_DATABASE = {
  busy: {
    everything: {
      breakfast: {
        title: "Avocado Toast & Eggs",
        time: "10m",
        desc: "Toasted sourdough bread topped with mashed avocado, soft eggs, and red pepper flakes.",
        cals: 420,
        ingredients: [
          { name: "Sourdough Bread", qty: "2 slices", price: 0.80, category: "Bakery" },
          { name: "Avocado", qty: "1 whole", price: 1.50, category: "Produce" },
          { name: "Eggs", qty: "2 large", price: 0.60, category: "Dairy & Eggs" },
          { name: "Red Pepper Flakes & Seasoning", qty: "1 pinch", price: 0.10, category: "Pantry" }
        ],
        prep: ["Toast the bread slice.", "Mash avocado in a small bowl with salt, pepper, and lime juice."],
        cook: ["Boil or fry eggs to your preference.", "Spread mashed avocado on toast and top with eggs.", "Garnish with red pepper flakes."],
        cleanup: ["Wipe the bowl used for avocado.", "Wash the egg frying pan."]
      },
      lunch: {
        title: "Greek Chicken Wrap",
        time: "12m",
        desc: "Soft flour tortilla wrapped with pre-cooked chicken breast, romaine lettuce, tomatoes, feta cheese, and tzatziki.",
        cals: 510,
        ingredients: [
          { name: "Chicken Breast (Cooked)", qty: "150g", price: 2.50, category: "Meat & Seafood" },
          { name: "Tortilla Wrap", qty: "1 large", price: 0.50, category: "Pantry" },
          { name: "Feta Cheese", qty: "30g", price: 0.70, category: "Dairy & Eggs" },
          { name: "Tomatoes & Cucumber", qty: "50g", price: 0.40, category: "Produce" },
          { name: "Tzatziki Sauce", qty: "2 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Slice tomatoes, cucumbers, and pre-cooked chicken breast into strips."],
        cook: ["Warm tortilla in a dry skillet for 30 seconds.", "Spread tzatziki, then layer chicken, veggies, and feta.", "Roll tightly and slice in half."],
        cleanup: ["Wipe down the prep board and knife.", "Put tzatziki container back in fridge."]
      },
      dinner: {
        title: "Garlic Butter Steak Bites with Broccoli",
        time: "15m",
        desc: "Seared sirloin beef cubes tossed in garlic herb butter served alongside crisp steamed broccoli.",
        cals: 650,
        ingredients: [
          { name: "Sirloin Beef", qty: "250g", price: 5.50, category: "Meat & Seafood" },
          { name: "Broccoli Florets", qty: "150g", price: 1.00, category: "Produce" },
          { name: "Garlic Butter", qty: "2 tbsp", price: 0.50, category: "Dairy & Eggs" },
          { name: "Soy Sauce", qty: "1 tbsp", price: 0.15, category: "Pantry" }
        ],
        prep: ["Cut sirloin into bite-sized cubes.", "Chop broccoli into small florets."],
        cook: ["Steam broccoli in microwave for 3 minutes with a splash of water.", "Heat skillet over high heat, sear steak bites for 2 minutes per side.", "Reduce heat, add garlic butter, soy sauce, and toss steak and broccoli together for 1 minute."],
        cleanup: ["Wash the skillet.", "Put cooking utensils in dishwasher."]
      },
      substitutions: [
        { original: "Sirloin Beef", replace: "Firm Tofu Cubes" },
        { original: "Feta Cheese", replace: "Hummus" },
        { original: "Sourdough Bread", replace: "Gluten-Free Toast" }
      ]
    },
    vegetarian: {
      breakfast: {
        title: "Greek Yogurt Berry Bowl",
        time: "5m",
        desc: "Rich Greek yogurt topped with fresh berries, crunchy granola, and honey.",
        cals: 320,
        ingredients: [
          { name: "Greek Yogurt", qty: "200g", price: 1.20, category: "Dairy & Eggs" },
          { name: "Mixed Berries", qty: "80g", price: 1.50, category: "Produce" },
          { name: "Granola", qty: "30g", price: 0.40, category: "Pantry" },
          { name: "Honey", qty: "1 tbsp", price: 0.20, category: "Pantry" }
        ],
        prep: ["Rinse berries under cold water."],
        cook: ["Scoop yogurt into bowl.", "Top with berries, granola, and drizzle with honey."],
        cleanup: ["Wash the bowl and spoon."]
      },
      lunch: {
        title: "Caprese Panini",
        time: "10m",
        desc: "Crispy grilled sandwich with fresh mozzarella cheese, sliced tomatoes, basil pesto, and balsamic glaze.",
        cals: 490,
        ingredients: [
          { name: "Ciabatta Bread", qty: "1 roll", price: 0.90, category: "Bakery" },
          { name: "Fresh Mozzarella", qty: "75g", price: 1.60, category: "Dairy & Eggs" },
          { name: "Tomato", qty: "1/2 slice", price: 0.30, category: "Produce" },
          { name: "Pesto Sauce", qty: "1.5 tbsp", price: 0.60, category: "Pantry" }
        ],
        prep: ["Slice mozzarella and tomatoes.", "Cut ciabatta roll in half."],
        cook: ["Spread pesto on both sides of bread.", "Layer tomato and mozzarella in bread.", "Toast in a pan or panini press for 3 minutes per side until cheese melts."],
        cleanup: ["Wipe the cutting board.", "Put pesto jar in fridge."]
      },
      dinner: {
        title: "Sesame Peanut Noodles",
        time: "15m",
        desc: "Quick wheat noodles tossed in a creamy savory peanut sauce with cucumber matchsticks and sesame seeds.",
        cals: 580,
        ingredients: [
          { name: "Ramen or Wheat Noodles", qty: "100g", price: 0.60, category: "Pantry" },
          { name: "Peanut Butter", qty: "2 tbsp", price: 0.40, category: "Pantry" },
          { name: "Soy Sauce & Sesame Oil", qty: "1.5 tbsp", price: 0.30, category: "Pantry" },
          { name: "Cucumber", qty: "1/2 whole", price: 0.40, category: "Produce" },
          { name: "Green Onions", qty: "2 stalks", price: 0.20, category: "Produce" }
        ],
        prep: ["Slice cucumber into matchsticks and green onions.", "Whisk peanut butter, soy sauce, sesame oil, and hot water in a cup to form sauce."],
        cook: ["Boil noodles for 4 minutes, then drain.", "Toss warm noodles with peanut sauce.", "Garnish with cucumbers, green onions, and sesame seeds."],
        cleanup: ["Wash the boiling pot.", "Clean noodle strainer."]
      },
      substitutions: [
        { original: "Peanut Butter", replace: "Sunflower Seed Butter (Nut-free)" },
        { original: "Fresh Mozzarella", replace: "Vegan Mozzarella" },
        { original: "Ramen or Wheat Noodles", replace: "Rice Noodles (GF)" }
      ]
    },
    vegan: {
      breakfast: {
        title: "Nut Butter & Banana Smoothie",
        time: "5m",
        desc: "Thick almond milk smoothie loaded with banana, oats, hemp seeds, and almond butter.",
        cals: 380,
        ingredients: [
          { name: "Almond Milk (Unsweetened)", qty: "250ml", price: 0.60, category: "Pantry" },
          { name: "Banana", qty: "1 ripe", price: 0.25, category: "Produce" },
          { name: "Rolled Oats", qty: "40g", price: 0.15, category: "Pantry" },
          { name: "Almond Butter", qty: "1.5 tbsp", price: 0.90, category: "Pantry" }
        ],
        prep: ["Peel the banana and slice into chunks."],
        cook: ["Add oats, banana, almond milk, and almond butter to blender.", "Blend on high speed for 60 seconds until creamy."],
        cleanup: ["Rinse blender cup immediately to avoid dry oatmeal sticking."]
      },
      lunch: {
        title: "Smashed Chickpea Avocado Salad",
        time: "10m",
        desc: "Smashed canned chickpeas and avocado mixed with lemon juice and parsley, served in pita bread.",
        cals: 460,
        ingredients: [
          { name: "Canned Chickpeas (Drained)", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Avocado", qty: "1/2 whole", price: 0.75, category: "Produce" },
          { name: "Lemon Juice", qty: "1 tbsp", price: 0.15, category: "Produce" },
          { name: "Pita Pocket", qty: "1 whole", price: 0.50, category: "Bakery" }
        ],
        prep: ["Drain and rinse chickpeas.", "Chop fresh parsley."],
        cook: ["In a medium bowl, mash chickpeas and avocado together.", "Mix in lemon juice, salt, pepper, and parsley.", "Stuff chickpea salad into pita pocket halves."],
        cleanup: ["Rinse the chickpea can and discard.", "Wash the bowl and fork."]
      },
      dinner: {
        title: "15-Minute Black Bean Quesadilla",
        time: "15m",
        desc: "Crispy tortilla stuffed with spiced black beans, sweet corn, salsa, and creamy vegan cheese.",
        cals: 520,
        ingredients: [
          { name: "Tortilla (Large)", qty: "2 wraps", price: 1.00, category: "Pantry" },
          { name: "Black Beans (Canned)", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Sweet Corn (Canned)", qty: "50g", price: 0.30, category: "Pantry" },
          { name: "Vegan Cheddar Shreds", qty: "50g", price: 1.20, category: "Dairy & Eggs" },
          { name: "Salsa", qty: "3 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Drain black beans and corn.", "Mix beans with cumin, chili powder, and salt in a bowl."],
        cook: ["Place one tortilla in a skillet.", "Spread black beans, corn, salsa, and vegan cheese on top, cover with second tortilla.", "Cook over medium heat for 4 minutes per side until crispy."],
        cleanup: ["Wash the skillet.", "Put salsa jar back in fridge."]
      },
      substitutions: [
        { original: "Almond Butter", replace: "Sunflower Butter" },
        { original: "Vegan Cheddar Shreds", replace: "Hummus" },
        { original: "Pita Pocket", replace: "Gluten-Free Wrap" }
      ]
    },
    glutenfree: {
      breakfast: {
        title: "Gluten-Free Berry Parfait",
        time: "5m",
        desc: "Creamy yogurt layered with gluten-free granola, mixed berries, and honey.",
        cals: 310,
        ingredients: [
          { name: "Yogurt", qty: "180g", price: 1.00, category: "Dairy & Eggs" },
          { name: "Gluten-Free Granola", qty: "35g", price: 0.70, category: "Pantry" },
          { name: "Fresh Berries", qty: "75g", price: 1.40, category: "Produce" }
        ],
        prep: ["Wash berries."],
        cook: ["Layer yogurt, granola, and berries in a glass or bowl.", "Repeat layers and serve cold."],
        cleanup: ["Wash the layering glass."]
      },
      lunch: {
        title: "Avocado Salmon Bowl",
        time: "12m",
        desc: "Flaked canned salmon served over pre-cooked microwave jasmine rice with avocado slices and soy-tamari.",
        cals: 520,
        ingredients: [
          { name: "Canned Salmon", qty: "120g", price: 2.20, category: "Meat & Seafood" },
          { name: "Microwave Rice Cup", qty: "1 cup", price: 1.20, category: "Pantry" },
          { name: "Avocado", qty: "1/2 whole", price: 0.75, category: "Produce" },
          { name: "Gluten-Free Tamari Sauce", qty: "1 tbsp", price: 0.20, category: "Pantry" }
        ],
        prep: ["Slice avocado into wedges.", "Drain canned salmon."],
        cook: ["Heat the rice cup in microwave for 90 seconds.", "Place rice in bowl, top with flaked salmon and avocado.", "Drizzle with tamari sauce."],
        cleanup: ["Discard rice cup container and salmon can.", "Wash the bowl."]
      },
      dinner: {
        title: "Chicken & Veggie Rice Skillet",
        time: "15m",
        desc: "One-skillet meal with diced chicken breast, frozen mixed vegetables, pre-cooked rice, and gluten-free soy seasoning.",
        cals: 580,
        ingredients: [
          { name: "Chicken Breast", qty: "180g", price: 2.80, category: "Meat & Seafood" },
          { name: "Frozen Mixed Veggies", qty: "100g", price: 0.50, category: "Pantry" },
          { name: "Pre-cooked Jasmine Rice", qty: "150g", price: 0.80, category: "Pantry" },
          { name: "Gluten-Free Soy Sauce", qty: "1.5 tbsp", price: 0.20, category: "Pantry" }
        ],
        prep: ["Cut chicken breast into small cubes."],
        cook: ["Sauté chicken cubes in a skillet with oil for 6 minutes until cooked.", "Add frozen vegetables and sauté for 3 minutes.", "Stir in rice and GF soy sauce, stir-fry for 3 minutes until hot."],
        cleanup: ["Wash the stir-fry skillet.", "Wipe the oil splatters from the stove."]
      },
      substitutions: [
        { original: "Tamari Sauce", replace: "Coconut Aminos" },
        { original: "Canned Salmon", replace: "Canned Chickpeas" },
        { original: "Chicken Breast", replace: "Firm Tofu Cubes" }
      ]
    },
    keto: {
      breakfast: {
        title: "Keto Scrambled Eggs & Avocado",
        time: "8m",
        desc: "Creamy scrambled eggs cooked in butter, served with avocado slices and hot sauce.",
        cals: 460,
        ingredients: [
          { name: "Eggs", qty: "3 large", price: 0.90, category: "Dairy & Eggs" },
          { name: "Butter", qty: "1.5 tbsp", price: 0.40, category: "Dairy & Eggs" },
          { name: "Avocado", qty: "1/2 whole", price: 0.75, category: "Produce" },
          { name: "Hot Sauce", qty: "1 tsp", price: 0.10, category: "Pantry" }
        ],
        prep: ["Whisk eggs in a small bowl with salt and pepper.", "Slice avocado."],
        cook: ["Melt butter in a pan over medium-low heat.", "Add eggs and stir constantly for 3 minutes for soft curds.", "Plate scrambled eggs next to avocado and splash with hot sauce."],
        cleanup: ["Wash the whisk and egg pan."]
      },
      lunch: {
        title: "Keto Tuna Lettuce Boats",
        time: "10m",
        desc: "Flaky tuna salad made with mayonnaise, mustard, and celery, served inside crisp romaine lettuce boats.",
        cals: 420,
        ingredients: [
          { name: "Canned Tuna", qty: "1 can", price: 1.50, category: "Meat & Seafood" },
          { name: "Mayonnaise", qty: "2.5 tbsp", price: 0.40, category: "Pantry" },
          { name: "Celery", qty: "1 stalk", price: 0.25, category: "Produce" },
          { name: "Romaine Lettuce Leaves", qty: "3 large", price: 0.60, category: "Produce" }
        ],
        prep: ["Chop celery finely.", "Wash and dry romaine lettuce leaves.", "Drain tuna."],
        cook: ["In a bowl, mix tuna, mayonnaise, mustard, celery, and black pepper.", "Spoon tuna salad evenly into lettuce leaves."],
        cleanup: ["Wash the mixing bowl.", "Discard tuna can."]
      },
      dinner: {
        title: "Keto Creamy Garlic Chicken",
        time: "15m",
        desc: "Sautéed chicken breast in a luxurious heavy cream sauce seasoned with garlic, parmesan, and spinach.",
        cals: 680,
        ingredients: [
          { name: "Chicken Breast", qty: "200g", price: 3.00, category: "Meat & Seafood" },
          { name: "Heavy Cream", qty: "75ml", price: 0.80, category: "Dairy & Eggs" },
          { name: "Parmesan Cheese", qty: "20g", price: 0.50, category: "Dairy & Eggs" },
          { name: "Fresh Baby Spinach", qty: "50g", price: 0.60, category: "Produce" },
          { name: "Garlic", qty: "2 cloves", price: 0.15, category: "Produce" }
        ],
        prep: ["Mince garlic cloves.", "Slice chicken breast horizontally to make thin cutlets."],
        cook: ["Sauté chicken cutlets in oil for 4 minutes per side, then remove.", "Add garlic to pan, cook for 30 seconds. Pour in heavy cream and parmesan; bring to simmer.", "Add spinach and chicken back, simmer for 2 minutes until sauce thickens."],
        cleanup: ["Wash the heavy skillet.", "Wipe prep knife."]
      },
      substitutions: [
        { original: "Heavy Cream", replace: "Coconut Milk" },
        { original: "Chicken Breast", replace: "Thick Pork Chops" },
        { original: "Romaine Lettuce Leaves", replace: "Keto Wraps" }
      ]
    }
  },
  gym: {
    everything: {
      breakfast: {
        title: "Protein Oatmeal with Eggs",
        time: "12m",
        desc: "High protein breakfast with rolled oats cooked in milk, topped with berries, accompanied by hard-boiled eggs.",
        cals: 520,
        ingredients: [
          { name: "Rolled Oats", qty: "60g", price: 0.20, category: "Pantry" },
          { name: "Milk", qty: "200ml", price: 0.40, category: "Dairy & Eggs" },
          { name: "Eggs", qty: "2 large", price: 0.60, category: "Dairy & Eggs" },
          { name: "Blueberries", qty: "50g", price: 1.00, category: "Produce" }
        ],
        prep: ["Place eggs in boiling pot.", "Measure oats and milk."],
        cook: ["Boil eggs for 9 minutes.", "Cook oats and milk in microwave for 2 minutes. Stir and top with berries.", "Peel eggs and serve alongside oats."],
        cleanup: ["Clean egg boiling pot.", "Rinse oatmeal bowl."]
      },
      lunch: {
        title: "Double Chicken & Rice Bowl",
        time: "15m",
        desc: "Gym classic with clean diced chicken breast, brown rice, broccoli, and light soy seasoning.",
        cals: 620,
        ingredients: [
          { name: "Chicken Breast", qty: "250g", price: 3.50, category: "Meat & Seafood" },
          { name: "Brown Rice (Instant)", qty: "1.5 cups", price: 1.00, category: "Pantry" },
          { name: "Broccoli Florets", qty: "120g", price: 0.80, category: "Produce" }
        ],
        prep: ["Dice chicken breast.", "Wash broccoli florets."],
        cook: ["Sauté chicken cubes in skillet until fully cooked (7m).", "Microwave rice for 90s.", "Steam broccoli, combine everything in a bowl with light seasoning."],
        cleanup: ["Wash chicken cutting board.", "Clean stir skillet."]
      },
      dinner: {
        title: "Baked Salmon, Sweet Potato & Asparagus",
        time: "25m",
        desc: "Baked salmon fillet rich in omega-3, paired with baked sweet potato cubes and asparagus.",
        cals: 690,
        ingredients: [
          { name: "Salmon Fillet", qty: "180g", price: 5.50, category: "Meat & Seafood" },
          { name: "Sweet Potato", qty: "200g", price: 0.60, category: "Produce" },
          { name: "Asparagus", qty: "100g", price: 1.50, category: "Produce" }
        ],
        prep: ["Preheat oven to 400°F (200°C).", "Chop sweet potatoes into cubes.", "Trim woody ends of asparagus."],
        cook: ["Toss sweet potatoes in olive oil, bake for 25 minutes.", "Place salmon and asparagus on baking tray. Season with lemon juice, salt, pepper.", "Bake salmon and asparagus for 12 minutes during the last half of potato baking."],
        cleanup: ["Clean baking sheet.", "Wipe prep knife."]
      },
      substitutions: [
        { original: "Salmon Fillet", replace: "Tuna Steak" },
        { original: "Chicken Breast", replace: "Extra Lean Ground Beef" },
        { original: "Sweet Potato", replace: "Quinoa" }
      ]
    },
    vegetarian: {
      breakfast: {
        title: "Protein Power Berry Toast",
        time: "10m",
        desc: "Thick sourdough toast spread with high-protein cottage cheese and topped with berries and chia seeds.",
        cals: 410,
        ingredients: [
          { name: "Sourdough Toast", qty: "2 slices", price: 0.80, category: "Bakery" },
          { name: "Cottage Cheese (Low fat)", qty: "150g", price: 1.10, category: "Dairy & Eggs" },
          { name: "Berries", qty: "60g", price: 1.20, category: "Produce" },
          { name: "Chia Seeds", qty: "1 tsp", price: 0.15, category: "Pantry" }
        ],
        prep: ["Toast sourdough.", "Rinse berries."],
        cook: ["Spread cottage cheese generously on hot toast.", "Top with berries and sprinkle with chia seeds."],
        cleanup: ["Wash cutting board and prep knife."]
      },
      lunch: {
        title: "High-Protein Lentil Salad",
        time: "10m",
        desc: "Drained canned green lentils tossed with protein-rich hemp seeds, diced peppers, cucumbers, and crumbled feta cheese.",
        cals: 510,
        ingredients: [
          { name: "Canned Lentils", qty: "200g", price: 0.70, category: "Pantry" },
          { name: "Hemp Seeds", qty: "2 tbsp", price: 0.80, category: "Pantry" },
          { name: "Feta Cheese", qty: "40g", price: 0.85, category: "Dairy & Eggs" },
          { name: "Bell Pepper & Cucumber", qty: "80g", price: 0.60, category: "Produce" }
        ],
        prep: ["Drain and rinse lentils.", "Dice cucumber and bell pepper."],
        cook: ["Combine lentils, hemp seeds, pepper, and cucumber in bowl.", "Crumble feta over the top, drizzle with olive oil and vinegar, toss to combine."],
        cleanup: ["Discard lentil can.", "Wash mixing bowl."]
      },
      dinner: {
        title: "Tempeh Veggie Stir-Fry",
        time: "20m",
        desc: "Protein-packed tempeh cubes sautéed with snap peas, broccoli, and carrots over brown rice.",
        cals: 620,
        ingredients: [
          { name: "Tempeh", qty: "150g", price: 2.20, category: "Meat & Seafood" },
          { name: "Stir-fry Veggies Mix", qty: "150g", price: 0.90, category: "Produce" },
          { name: "Brown Rice", qty: "1 cup", price: 0.70, category: "Pantry" },
          { name: "Soy-Ginger Sauce", qty: "2 tbsp", price: 0.35, category: "Pantry" }
        ],
        prep: ["Cube the tempeh.", "Rinse veggies."],
        cook: ["Sauté tempeh in a hot skillet with sesame oil until golden (6m).", "Add vegetables and cook for another 5 minutes.", "Stir in soy-ginger sauce, serve over warm brown rice."],
        cleanup: ["Clean the wok/skillet.", "Clean spatula."]
      },
      substitutions: [
        { original: "Tempeh", replace: "High Protein Firm Tofu" },
        { original: "Cottage Cheese", replace: "Greek Yogurt" },
        { original: "Feta Cheese", replace: "Hummus" }
      ]
    },
    vegan: {
      breakfast: {
        title: "Tofu Scramble Breakfast Burrito",
        time: "15m",
        desc: "High protein scramble using firm tofu with turmeric, spinach, nutritional yeast, rolled into a large wrap.",
        cals: 440,
        ingredients: [
          { name: "Firm Tofu", qty: "150g", price: 0.90, category: "Meat & Seafood" },
          { name: "Spinach", qty: "50g", price: 0.60, category: "Produce" },
          { name: "Nutritional Yeast & Spices", qty: "2 tbsp", price: 0.40, category: "Pantry" },
          { name: "Tortilla Wrap", qty: "1 large", price: 0.50, category: "Pantry" }
        ],
        prep: ["Press tofu with paper towels to drain water.", "Crumble tofu with hands or fork."],
        cook: ["Sauté crumbled tofu in pan with olive oil, turmeric, salt, pepper for 5 minutes.", "Toss in spinach and nutritional yeast until spinach wilts.", "Spoon scramble into warmed wrap and roll."],
        cleanup: ["Wash sauté pan.", "Wipe down grease splashes."]
      },
      lunch: {
        title: "Chickpea Quinoa Tabbouleh",
        time: "10m",
        desc: "Zesty high-protein bowl featuring cooked quinoa, chickpeas, parsley, mint, diced tomatoes, and lemon dressing.",
        cals: 530,
        ingredients: [
          { name: "Quinoa (Pre-cooked)", qty: "1 cup", price: 0.80, category: "Pantry" },
          { name: "Canned Chickpeas", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Parsley & Mint", qty: "1 bunch", price: 1.00, category: "Produce" },
          { name: "Cherry Tomatoes", qty: "60g", price: 0.50, category: "Produce" }
        ],
        prep: ["Drain chickpeas.", "Chop fresh herbs and tomatoes finely."],
        cook: ["Combine quinoa, chickpeas, herbs, and tomatoes in a serving bowl.", "Whisk lemon juice and olive oil, toss into the salad."],
        cleanup: ["Clean cutting board and herb knife.", "Wash mixing bowl."]
      },
      dinner: {
        title: "Lentil Pasta Bolognese",
        time: "20m",
        desc: "Red lentil pasta (high protein & gluten-free) tossed in a hearty marinara sauce chunky with soy crumbles.",
        cals: 650,
        ingredients: [
          { name: "Red Lentil Pasta", qty: "90g", price: 1.50, category: "Pantry" },
          { name: "Marinara Sauce", qty: "150ml", price: 0.80, category: "Pantry" },
          { name: "Textured Vegetable Protein (TVP)", qty: "40g", price: 0.60, category: "Pantry" },
          { name: "Italian Herb Mix", qty: "1 tsp", price: 0.10, category: "Pantry" }
        ],
        prep: ["Boil pasta water.", "Rehydrate TVP in 1/4 cup hot water for 5 minutes."],
        cook: ["Boil lentil pasta for 7 minutes, then drain.", "Simmer marinara, rehydrated TVP, and Italian herbs in pan for 5 minutes.", "Mix pasta and sauce together and serve."],
        cleanup: ["Wash cooking pot and pasta strainer.", "Clean sauce pan."]
      },
      substitutions: [
        { original: "Red Lentil Pasta", replace: "Chickpea Pasta" },
        { original: "Firm Tofu", replace: "Canned Black Beans" },
        { original: "TVP", replace: "Canned Brown Lentils" }
      ]
    },
    glutenfree: {
      breakfast: {
        title: "Gluten-Free Protein Pancakes",
        time: "15m",
        desc: "Fluffy pancakes made with oat flour, banana, eggs, and protein powder.",
        cals: 460,
        ingredients: [
          { name: "Oat Flour (Gluten-Free)", qty: "50g", price: 0.60, category: "Pantry" },
          { name: "Protein Powder", qty: "1 scoop", price: 1.20, category: "Pantry" },
          { name: "Egg", qty: "1 large", price: 0.30, category: "Dairy & Eggs" },
          { name: "Banana", qty: "1/2 whole", price: 0.15, category: "Produce" }
        ],
        prep: ["Mash banana in a bowl.", "Whisk in egg, oat flour, protein powder, and a splash of milk to make smooth batter."],
        cook: ["Heat nonstick pan over medium heat.", "Pour batter and cook pancakes for 2-3 minutes per side until golden."],
        cleanup: ["Wash mixing bowl and whisk.", "Clean pancake spatula."]
      },
      lunch: {
        title: "Tuna Salad & Sweet Potato",
        time: "12m",
        desc: "High protein canned tuna salad served over a baked microwave sweet potato.",
        cals: 530,
        ingredients: [
          { name: "Canned Tuna", qty: "1 can", price: 1.50, category: "Meat & Seafood" },
          { name: "Greek Yogurt (Plain)", qty: "2 tbsp", price: 0.30, category: "Dairy & Eggs" },
          { name: "Sweet Potato (Large)", qty: "1 whole", price: 0.60, category: "Produce" },
          { name: "Celery", qty: "1 stalk", price: 0.25, category: "Produce" }
        ],
        prep: ["Finely dice celery.", "Drain tuna.", "Poke sweet potato multiple times with a fork."],
        cook: ["Microwave sweet potato on high for 6 minutes, flipping halfway.", "Mix tuna, yogurt, celery, salt, and pepper in a bowl.", "Slice potato open, fluff inside, and top with tuna mixture."],
        cleanup: ["Clean the bowl and fork.", "Wipe microwave turntable."]
      },
      dinner: {
        title: "Turkey & Quinoa Stir-Fry",
        time: "20m",
        desc: "Sautéed ground turkey, quinoa, snap peas, and gluten-free tamari sauce.",
        cals: 610,
        ingredients: [
          { name: "Ground Turkey (Lean)", qty: "200g", price: 2.80, category: "Meat & Seafood" },
          { name: "Quinoa (Pre-cooked)", qty: "1 cup", price: 0.80, category: "Pantry" },
          { name: "Snap Peas", qty: "100g", price: 1.20, category: "Produce" },
          { name: "Gluten-Free Soy Sauce", qty: "2 tbsp", price: 0.25, category: "Pantry" }
        ],
        prep: ["Rinse snap peas.", "Measure pre-cooked quinoa."],
        cook: ["Brown turkey in skillet for 6 minutes.", "Add snap peas and cook for 3 minutes.", "Stir in quinoa and GF soy sauce, sauté until thoroughly hot."],
        cleanup: ["Wash cooking skillet.", "Wipe down grease splatters."]
      },
      substitutions: [
        { original: "Ground Turkey", replace: "Lean Ground Beef" },
        { original: "Quinoa", replace: "Brown Rice" },
        { original: "Canned Tuna", replace: "Canned Chicken" }
      ]
    },
    keto: {
      breakfast: {
        title: "Bacon & Spinach Omelet",
        time: "10m",
        desc: "Keto powerhouse made with 3 eggs, crispy bacon bits, cheddar, and baby spinach.",
        cals: 580,
        ingredients: [
          { name: "Eggs", qty: "3 large", price: 0.90, category: "Dairy & Eggs" },
          { name: "Bacon Strips", qty: "2 cooked", price: 1.20, category: "Meat & Seafood" },
          { name: "Cheddar Cheese", qty: "30g", price: 0.50, category: "Dairy & Eggs" },
          { name: "Baby Spinach", qty: "30g", price: 0.40, category: "Produce" }
        ],
        prep: ["Whisk eggs.", "Crumble cooked bacon.", "Grate cheddar cheese."],
        cook: ["Cook eggs in a buttered pan over medium heat.", "When eggs begin to set, sprinkle bacon, spinach, and cheddar over one half.", "Fold omelet in half, cover for 1 minute until cheese melts."],
        cleanup: ["Wash omelet pan and egg whisk."]
      },
      lunch: {
        title: "Keto Beef Salad Bowl",
        time: "12m",
        desc: "Sautéed ground beef served over mixed salad greens, topped with avocado and olive oil.",
        cals: 620,
        ingredients: [
          { name: "Ground Beef (Lean)", qty: "180g", price: 2.20, category: "Meat & Seafood" },
          { name: "Mixed Greens", qty: "100g", price: 1.00, category: "Produce" },
          { name: "Avocado", qty: "1/2 whole", price: 0.75, category: "Produce" },
          { name: "Olive Oil & Lemon juice", qty: "2 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Slice avocado.", "Wash salad greens."],
        cook: ["Cook ground beef in a skillet for 6 minutes, drain fat.", "Assemble salad greens in bowl, top with beef and avocado.", "Drizzle with olive oil and lemon juice dressing."],
        cleanup: ["Wash meat skillet.", "Clean salad bowl."]
      },
      dinner: {
        title: "Lemon Herb Cod & Asparagus",
        time: "20m",
        desc: "Flaky baked cod fillet topped with butter and herbs, served with asparagus.",
        cals: 530,
        ingredients: [
          { name: "Cod Fillet", qty: "220g", price: 4.50, category: "Meat & Seafood" },
          { name: "Asparagus", qty: "120g", price: 1.60, category: "Produce" },
          { name: "Butter", qty: "2 tbsp", price: 0.50, category: "Dairy & Eggs" }
        ],
        prep: ["Preheat oven to 375°F (190°C).", "Rinse and trim asparagus stalks."],
        cook: ["Place cod and asparagus in baking dish.", "Melt butter with lemon juice and herbs, pour over cod.", "Bake for 15 minutes until cod flakes easily with a fork."],
        cleanup: ["Wash baking dish.", "Clean melting pot."]
      },
      substitutions: [
        { original: "Cod Fillet", replace: "Salmon Fillet" },
        { original: "Bacon Strips", replace: "Turkey Bacon" },
        { original: "Cheddar Cheese", replace: "Swiss Cheese" }
      ]
    }
  },
  lazy: {
    everything: {
      breakfast: {
        title: "Classic Pancakes & Bacon",
        time: "20m",
        desc: "Fluffy homemade flour pancakes served with maple syrup and crispy baked bacon.",
        cals: 580,
        ingredients: [
          { name: "Pancake Mix", qty: "100g", price: 0.50, category: "Pantry" },
          { name: "Milk & Egg", qty: "1 set", price: 0.60, category: "Dairy & Eggs" },
          { name: "Bacon Strips", qty: "3 uncooked", price: 1.80, category: "Meat & Seafood" },
          { name: "Maple Syrup", qty: "2 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Mix pancake batter in bowl with milk and egg.", "Preheat baking sheet for bacon."],
        cook: ["Bake bacon in oven at 400°F for 12 minutes.", "Cook pancakes on hot griddle (2 minutes per side).", "Serve pancakes topped with syrup and bacon on the side."],
        cleanup: ["Wash batter mixing bowl.", "Wash griddle skillet.", "Clean bacon baking sheet."]
      },
      lunch: {
        title: "BLT Sourdough Sandwich",
        time: "15m",
        desc: "Crispy bacon, juicy tomatoes, romaine lettuce, and mayonnaise on toasted sourdough slices.",
        cals: 510,
        ingredients: [
          { name: "Sourdough Bread", qty: "2 slices", price: 0.80, category: "Bakery" },
          { name: "Bacon Strips", qty: "4 cooked", price: 2.20, category: "Meat & Seafood" },
          { name: "Romaine Lettuce & Tomato", qty: "50g", price: 0.50, category: "Produce" },
          { name: "Mayonnaise", qty: "1.5 tbsp", price: 0.30, category: "Pantry" }
        ],
        prep: ["Slice tomatoes.", "Wash and dry lettuce."],
        cook: ["Toast sourdough slices in toaster.", "Cook bacon until crispy.", "Spread mayonnaise, then layer bacon, lettuce, and tomatoes on toast. Top with second slice."],
        cleanup: ["Wipe crumbs from toaster.", "Clean bacon pan."]
      },
      dinner: {
        title: "Slow-Cooked Chili & Cornbread",
        time: "45m",
        desc: "Hearty ground beef chili simmered with kidney beans, sweet onions, and spices, served with fresh cornbread.",
        cals: 710,
        ingredients: [
          { name: "Ground Beef", qty: "200g", price: 2.50, category: "Meat & Seafood" },
          { name: "Kidney Beans (Canned)", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Canned Diced Tomatoes", qty: "200g", price: 0.60, category: "Pantry" },
          { name: "Cornbread Mix & Ingredients", qty: "1 pack", price: 1.20, category: "Pantry" },
          { name: "Onion & Spices", qty: "1 set", price: 0.50, category: "Produce" }
        ],
        prep: ["Preheat oven for cornbread according to package.", "Dice onion."],
        cook: ["Bake cornbread for 25 minutes.", "Sauté onion and ground beef in large pot (6m). Add canned tomatoes, kidney beans, and chili spices.", "Simmer chili on low heat for 30 minutes to blend flavors."],
        cleanup: ["Wash large chili pot.", "Wash cornbread baking pan."]
      },
      substitutions: [
        { original: "Ground Beef", replace: "Ground Turkey" },
        { original: "Bacon Strips", replace: "Chicken Sausage" },
        { original: "Pancake Mix", replace: "Gluten-Free Flour Mix" }
      ]
    },
    vegetarian: {
      breakfast: {
        title: "Fluffy Cinnamon French Toast",
        time: "15m",
        desc: "Brioche bread dipped in egg custard flavored with cinnamon and vanilla, pan-fried to gold.",
        cals: 440,
        ingredients: [
          { name: "Brioche Bread Slices", qty: "3 thick slices", price: 1.20, category: "Bakery" },
          { name: "Eggs", qty: "2 large", price: 0.60, category: "Dairy & Eggs" },
          { name: "Milk", qty: "50ml", price: 0.15, category: "Dairy & Eggs" },
          { name: "Cinnamon & Maple Syrup", qty: "2 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Whisk eggs, milk, cinnamon, and vanilla in a wide shallow bowl."],
        cook: ["Dip bread slices in custard, soaking both sides.", "Cook in a buttered pan over medium heat for 3 minutes per side.", "Drizzle maple syrup and dust with cinnamon."],
        cleanup: ["Wash the shallow soaking bowl.", "Clean the griddle pan."]
      },
      lunch: {
        title: "Loaded Sweet Potato",
        time: "30m",
        desc: "Slow-roasted sweet potato stuffed with black beans, sweet corn, salsa, and sour cream.",
        cals: 480,
        ingredients: [
          { name: "Sweet Potato (Large)", qty: "1 whole", price: 0.80, category: "Produce" },
          { name: "Black Beans (Canned)", qty: "100g", price: 0.40, category: "Pantry" },
          { name: "Sour Cream", qty: "2 tbsp", price: 0.50, category: "Dairy & Eggs" },
          { name: "Salsa", qty: "3 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Wash sweet potato and poke with fork.", "Drain black beans."],
        cook: ["Roast sweet potato in oven at 400°F for 40 minutes (or microwave for 8m).", "Heat black beans in small pan with cumin.", "Slice potato open, fill with beans, salsa, and top with sour cream."],
        cleanup: ["Wash the bean heating pan.", "Clean the prep plate."]
      },
      dinner: {
        title: "Sweet Potato Chickpea Coconut Curry",
        time: "35m",
        desc: "Creamy curry with roasted sweet potato cubes, chickpeas, baby spinach, simmered in coconut milk and yellow curry paste.",
        cals: 630,
        ingredients: [
          { name: "Sweet Potato", qty: "150g", price: 0.50, category: "Produce" },
          { name: "Canned Chickpeas", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Coconut Milk (Canned)", qty: "200ml", price: 1.00, category: "Pantry" },
          { name: "Yellow Curry Paste", qty: "1.5 tbsp", price: 0.60, category: "Pantry" },
          { name: "Baby Spinach", qty: "50g", price: 0.60, category: "Produce" },
          { name: "Jasmine Rice", qty: "80g", price: 0.40, category: "Pantry" }
        ],
        prep: ["Peel and cube sweet potato.", "Drain chickpeas.", "Measure jasmine rice."],
        cook: ["Boil jasmine rice in pot (15m).", "Sauté sweet potato and curry paste in pot for 3 minutes. Add coconut milk, simmer for 15 minutes until potato is tender.", "Add chickpeas and spinach, simmer for 3 minutes. Serve over rice."],
        cleanup: ["Wash the curry pot.", "Wash the rice pot.", "Wipe cutting board."]
      },
      substitutions: [
        { original: "Sour Cream", replace: "Coconut Yogurt" },
        { original: "Jasmine Rice", replace: "Cauliflower Rice" },
        { original: "Brioche Bread Slices", replace: "Gluten-Free Bread Slices" }
      ]
    },
    vegan: {
      breakfast: {
        title: "Vegan Cinnamon Oat Waffles",
        time: "20m",
        desc: "Crispy waffles made with oat flour, almond milk, baking powder, vanilla, and maple syrup.",
        cals: 390,
        ingredients: [
          { name: "Oat Flour", qty: "100g", price: 0.80, category: "Pantry" },
          { name: "Almond Milk", qty: "150ml", price: 0.40, category: "Pantry" },
          { name: "Baking Powder", qty: "1 tsp", price: 0.05, category: "Pantry" },
          { name: "Maple Syrup", qty: "2 tbsp", price: 0.40, category: "Pantry" }
        ],
        prep: ["Preheat waffle iron.", "Whisk oat flour, almond milk, baking powder, and vanilla in bowl to form waffle batter."],
        cook: ["Pour batter onto waffle iron.", "Cook for 5-6 minutes until waffle is steam-free and crispy.", "Serve with maple syrup and berries."],
        cleanup: ["Wash waffle iron grids (once cool).", "Wash batter bowl."]
      },
      lunch: {
        title: "Creamy Tomato Lentil Soup",
        time: "30m",
        desc: "Slow-simmered soup made with red lentils, crushed tomatoes, onions, garlic, and coconut milk.",
        cals: 450,
        ingredients: [
          { name: "Red Lentils", qty: "80g", price: 0.40, category: "Pantry" },
          { name: "Canned Crushed Tomatoes", qty: "200ml", price: 0.60, category: "Pantry" },
          { name: "Coconut Milk", qty: "100ml", price: 0.50, category: "Pantry" },
          { name: "Onion & Garlic", qty: "1 set", price: 0.40, category: "Produce" }
        ],
        prep: ["Dice onions and mince garlic.", "Rinse red lentils in strainer."],
        cook: ["Sauté onions and garlic in pot for 4 minutes.", "Add lentils, crushed tomatoes, and 200ml water, simmer for 20 minutes.", "Stir in coconut milk, season with salt, and simmer for 3 minutes."],
        cleanup: ["Clean soup pot.", "Rinse lentil strainer."]
      },
      dinner: {
        title: "Vegan Mushroom Shepherd's Pie",
        time: "45m",
        desc: "Chunky cremini mushrooms and brown lentils in savory gravy, baked beneath a smooth blanket of mashed potatoes.",
        cals: 580,
        ingredients: [
          { name: "Potatoes (Russet)", qty: "250g", price: 0.60, category: "Produce" },
          { name: "Cremini Mushrooms", qty: "150g", price: 1.80, category: "Produce" },
          { name: "Canned Brown Lentils", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Vegetable Broth", qty: "150ml", price: 0.40, category: "Pantry" },
          { name: "Vegan Butter", qty: "2 tbsp", price: 0.60, category: "Dairy & Eggs" }
        ],
        prep: ["Peel and chop potatoes.", "Clean and slice mushrooms.", "Drain canned lentils."],
        cook: ["Boil potatoes for 15 minutes, drain, and mash with vegan butter.", "Sauté mushrooms in skillet, add lentils and veggie broth, thicken with cornstarch (5m).", "Spread mushroom filling in baking dish, top with mashed potatoes, and bake at 400°F for 20 minutes."],
        cleanup: ["Wash potato boiling pot.", "Wash baking dish.", "Clean mushroom skillet."]
      },
      substitutions: [
        { original: "Russet Potatoes", replace: "Cauliflower (for mash)" },
        { original: "Cremini Mushrooms", replace: "Extra Firm Tofu" },
        { original: "Oat Flour", replace: "Gluten-Free All-Purpose Flour" }
      ]
    },
    glutenfree: {
      breakfast: {
        title: "Gluten-Free Banana Bread",
        time: "35m",
        desc: "Baked sweet banana bread slices made with almond flour and maple syrup.",
        cals: 380,
        ingredients: [
          { name: "Almond Flour", qty: "120g", price: 2.20, category: "Pantry" },
          { name: "Bananas (Ripe)", qty: "2 whole", price: 0.50, category: "Produce" },
          { name: "Eggs", qty: "2 large", price: 0.60, category: "Dairy & Eggs" },
          { name: "Maple Syrup", qty: "3 tbsp", price: 0.60, category: "Pantry" }
        ],
        prep: ["Preheat oven to 350°F (175°C).", "Mash bananas in bowl.", "Whisk eggs, maple syrup, and bananas together, then fold in almond flour."],
        cook: ["Grease a mini loaf pan.", "Pour batter in pan and bake for 30 minutes until toothpick test is clean."],
        cleanup: ["Wash banana mashing bowl.", "Clean mini loaf baking pan."]
      },
      lunch: {
        title: "Hearty Rice & Beans Salad",
        time: "15m",
        desc: "Drained canned black beans, sweet corn, cilantro, and warm brown rice dressed with lime vinaigrette.",
        cals: 460,
        ingredients: [
          { name: "Black Beans (Canned)", qty: "150g", price: 0.50, category: "Pantry" },
          { name: "Sweet Corn (Canned)", qty: "100g", price: 0.40, category: "Pantry" },
          { name: "Jasmine Brown Rice", qty: "1 cup", price: 0.70, category: "Pantry" },
          { name: "Cilantro & Lime Juice", qty: "1 bunch", price: 0.80, category: "Produce" }
        ],
        prep: ["Drain and rinse beans and sweet corn.", "Chop cilantro."],
        cook: ["Heat rice cup in microwave.", "Toss warm rice, beans, corn, and cilantro together in salad bowl.", "Drizzle lime juice and olive oil."],
        cleanup: ["Wash salad bowl.", "Clean herb cutting knife."]
      },
      dinner: {
        title: "Crispy Pork Chops & Apple Mash",
        time: "30m",
        desc: "Pan-fried pork loin chops served alongside fresh warm applesauce mashed potatoes.",
        cals: 680,
        ingredients: [
          { name: "Pork Chops (Loin)", qty: "200g", price: 3.50, category: "Meat & Seafood" },
          { name: "Apples", qty: "2 whole", price: 1.00, category: "Produce" },
          { name: "Potatoes", qty: "150g", price: 0.40, category: "Produce" }
        ],
        prep: ["Peel and cube potatoes and apples.", "Season pork chops with salt, pepper, garlic powder."],
        cook: ["Boil potatoes and apples together in pot for 15 minutes, drain, mash.", "Sauté pork chops in hot pan for 5 minutes per side until crusty and cooked through."],
        cleanup: ["Clean boiling pot.", "Wash meat pan.", "Wipe grease spots."]
      },
      substitutions: [
        { original: "Pork Chops", replace: "Chicken Breast" },
        { original: "Almond Flour", replace: "Gluten-Free Oat Flour" },
        { original: "Black Beans", replace: "Canned Lentils" }
      ]
    },
    keto: {
      breakfast: {
        title: "Keto Blueberry Almond Pancakes",
        time: "20m",
        desc: "Delicious keto pancakes made with almond flour, cream cheese, eggs, and blueberries.",
        cals: 490,
        ingredients: [
          { name: "Almond Flour", qty: "60g", price: 1.10, category: "Pantry" },
          { name: "Cream Cheese", qty: "50g", price: 0.70, category: "Dairy & Eggs" },
          { name: "Eggs", qty: "2 large", price: 0.60, category: "Dairy & Eggs" },
          { name: "Blueberries", qty: "30g", price: 0.60, category: "Produce" }
        ],
        prep: ["Whisk eggs, melted cream cheese, and almond flour in a bowl until smooth.", "Fold in blueberries."],
        cook: ["Heat buttered skillet over low-medium heat.", "Cook pancakes for 3 minutes on the first side (bubbles will form), flip and cook 2 minutes."],
        cleanup: ["Wash mixing bowl.", "Clean griddle pan."]
      },
      lunch: {
        title: "Keto Cob Salad",
        time: "15m",
        desc: "Traditional salad with bacon crumbs, chopped eggs, avocado, and blue cheese dressing over iceberg lettuce.",
        cals: 580,
        ingredients: [
          { name: "Iceberg Lettuce", qty: "150g", price: 0.80, category: "Produce" },
          { name: "Bacon Strips", qty: "2 cooked", price: 1.20, category: "Meat & Seafood" },
          { name: "Egg (Hard boiled)", qty: "1 large", price: 0.30, category: "Dairy & Eggs" },
          { name: "Avocado", qty: "1/2 whole", price: 0.75, category: "Produce" },
          { name: "Blue Cheese Dressing", qty: "2 tbsp", price: 0.50, category: "Pantry" }
        ],
        prep: ["Chop lettuce, hard-boiled egg, and avocado.", "Crumble bacon."],
        cook: ["Assemble lettuce in bowl.", "Layer rows of egg, bacon, and avocado on top.", "Drizzle dressing and serve."],
        cleanup: ["Clean salad bowl.", "Wipe egg peeler."]
      },
      dinner: {
        title: "Keto Butter Baked Salmon",
        time: "25m",
        desc: "Slow-baked salmon fillets coated in rich parsley garlic butter, served with steamed green beans.",
        cals: 670,
        ingredients: [
          { name: "Salmon Fillet", qty: "180g", price: 5.50, category: "Meat & Seafood" },
          { name: "Green Beans", qty: "120g", price: 1.00, category: "Produce" },
          { name: "Garlic Butter", qty: "2 tbsp", price: 0.50, category: "Dairy & Eggs" }
        ],
        prep: ["Preheat oven to 375°F (190°C).", "Trim green bean tips."],
        cook: ["Place salmon in baking dish, top with garlic butter.", "Bake salmon for 15 minutes.", "Steam green beans in microwave with water for 4 minutes. Toss beans in butter and serve with salmon."],
        cleanup: ["Wash baking dish.", "Clean steaming bowl."]
      },
      substitutions: [
        { original: "Salmon Fillet", replace: "Ribeye Steak" },
        { original: "Cream Cheese", replace: "Coconut Cream" },
        { original: "Green Beans", replace: "Zucchini Noodles" }
      ]
    }
  },
  hosting: {
    everything: {
      breakfast: {
        title: "Baked Egg & Prosciutto Skillets",
        time: "20m",
        desc: "Elegant individual ramekins lined with prosciutto, filled with fresh spinach, cream, and baked eggs.",
        cals: 360,
        ingredients: [
          { name: "Prosciutto", qty: "4 slices", price: 2.20, category: "Meat & Seafood" },
          { name: "Eggs", qty: "4 large", price: 1.20, category: "Dairy & Eggs" },
          { name: "Heavy Cream", qty: "4 tbsp", price: 0.40, category: "Dairy & Eggs" },
          { name: "Spinach", qty: "50g", price: 0.60, category: "Produce" }
        ],
        prep: ["Preheat oven to 375°F (190°C).", "Line 2 small ramekins with prosciutto slices.", "Wilt spinach slightly in microwave."],
        cook: ["Place spinach at bottom of ramekins. Pour cream in.", "Crack 2 eggs into each ramekin.", "Bake for 12-15 minutes until egg whites are set but yolks are runny."],
        cleanup: ["Wash the ramekins.", "Wipe the baking tray."]
      },
      lunch: {
        title: "Tuscan Flatbread Platters",
        time: "15m",
        desc: "Warm flatbreads spread with goat cheese, caramelized onions, fresh figs, and arugula slices.",
        cals: 530,
        ingredients: [
          { name: "Flatbread Crusts", qty: "2 crusts", price: 1.80, category: "Bakery" },
          { name: "Goat Cheese", qty: "80g", price: 2.20, category: "Dairy & Eggs" },
          { name: "Figs (Fresh)", qty: "4 slice", price: 1.50, category: "Produce" },
          { name: "Arugula", qty: "40g", price: 0.60, category: "Produce" }
        ],
        prep: ["Slice fresh figs.", "Preheat oven to 400°F (200°C)."],
        cook: ["Spread goat cheese on flatbread crusts, top with sliced figs.", "Bake flatbreads for 8 minutes until crust is crispy.", "Top with fresh baby arugula and slice into wedges for sharing."],
        cleanup: ["Wash baking flat tray.", "Wash herb knife."]
      },
      dinner: {
        title: "Roasted Lemon Herb Chicken Platter",
        time: "45m",
        desc: "Feast platter featuring whole roasted chicken legs with garlic cloves, rosemary sprigs, and lemon halves.",
        cals: 720,
        ingredients: [
          { name: "Chicken Drumsticks & Thighs", qty: "500g", price: 4.50, category: "Meat & Seafood" },
          { name: "Lemons", qty: "2 whole", price: 0.80, category: "Produce" },
          { name: "Rosemary & Garlic", qty: "1 pack", price: 1.20, category: "Produce" },
          { name: "Baby Potatoes", qty: "250g", price: 0.60, category: "Produce" }
        ],
        prep: ["Preheat oven to 425°F (220°C).", "Slice potatoes in half. Slice lemons in quarters.", "Toss chicken legs, potatoes, lemon quarters, garlic cloves in bowl with olive oil, salt, pepper, rosemary."],
        cook: ["Spread chicken and potato mixture onto baking sheet.", "Roast for 35-40 minutes until chicken is golden brown and skin is crispy.", "Garnish with rosemary leaves and roasted lemon juice squeeze."],
        cleanup: ["Clean the large roasting tray.", "Wash prep mixing bowl."]
      },
      substitutions: [
        { original: "Chicken Drumsticks & Thighs", replace: "Portobello Mushroom Caps" },
        { original: "Goat Cheese", replace: "Hummus Platter" },
        { original: "Prosciutto", replace: "Eggplant Strips" }
      ]
    },
    vegetarian: {
      breakfast: {
        title: "Shakshuka Sharing Pan",
        time: "20m",
        desc: "Eggs poached in a spiced tomato and bell pepper sauce, topped with feta cheese and parsley, served with crusty bread.",
        cals: 390,
        ingredients: [
          { name: "Canned Diced Tomatoes", qty: "400g", price: 1.20, category: "Pantry" },
          { name: "Bell Pepper & Onion", qty: "1 set", price: 1.00, category: "Produce" },
          { name: "Eggs", qty: "4 large", price: 1.20, category: "Dairy & Eggs" },
          { name: "Feta Cheese", qty: "50g", price: 1.00, category: "Dairy & Eggs" },
          { name: "Baguette Bread", qty: "1 loaf", price: 1.20, category: "Bakery" }
        ],
        prep: ["Dice onion and bell pepper.", "Slice baguette loaf."],
        cook: ["Sauté onion and pepper in skillet for 5 minutes.", "Add tomatoes and shakshuka spices, simmer for 8 minutes.", "Make 4 wells, crack eggs in, cover skillet, and cook for 6 minutes until whites set. Top with feta and parsley."],
        cleanup: ["Wash shakshuka skillet.", "Wipe grease spots."]
      },
      lunch: {
        title: "Mediterranean Grazing Board",
        time: "15m",
        desc: "Platter featuring hummus, kalamata olives, falafel balls, cucumber matchsticks, and warm pita wedges.",
        cals: 490,
        ingredients: [
          { name: "Hummus", qty: "1 tub", price: 1.80, category: "Pantry" },
          { name: "Kalamata Olives", qty: "80g", price: 1.20, category: "Pantry" },
          { name: "Falafel (Prepared)", qty: "6 balls", price: 2.50, category: "Meat & Seafood" },
          { name: "Pita Bread", qty: "3 wraps", price: 1.50, category: "Bakery" },
          { name: "Cucumber", qty: "1 whole", price: 0.80, category: "Produce" }
        ],
        prep: ["Slice cucumber.", "Cut pita bread into triangles.", "Warm falafel in toaster oven for 4 minutes."],
        cook: ["Warm pita wedges in skillet for 1 minute.", "Arrange hummus, olives, warm falafel, cucumbers, and pita beautifully on sharing board."],
        cleanup: ["Clean the sharing board.", "Wash hummus dip bowls."]
      },
      dinner: {
        title: "Wild Mushroom Risotto",
        time: "40m",
        desc: "Creamy arborio rice simmered with assorted wild mushrooms, shallots, white wine, and parmesan cheese.",
        cals: 650,
        ingredients: [
          { name: "Arborio Rice", qty: "150g", price: 1.20, category: "Pantry" },
          { name: "Assorted Mushrooms", qty: "200g", price: 2.80, category: "Produce" },
          { name: "Vegetable Broth", qty: "500ml", price: 1.00, category: "Pantry" },
          { name: "Parmesan Cheese", qty: "40g", price: 0.90, category: "Dairy & Eggs" },
          { name: "Shallots & White Wine", qty: "1 set", price: 1.50, category: "Produce" }
        ],
        prep: ["Heat vegetable broth in pot to simmer.", "Clean and chop mushrooms.", "Mince shallots."],
        cook: ["Sauté mushrooms in large pot (5m), remove. Sauté shallots (3m). Add rice, cook for 1 minute.", "Add wine, cook until absorbed.", "Add broth ladle by ladle, stirring constantly, until rice is tender and creamy (20m). Fold in mushrooms, parmesan, and butter."],
        cleanup: ["Wash large risotto pot.", "Clean broth heating pot.", "Wipe rice stir spoon."]
      },
      substitutions: [
        { original: "Parmesan Cheese", replace: "Nutritional Yeast (Vegan)" },
        { original: "Arborio Rice", replace: "Pearl Barley" },
        { original: "Falafel", replace: "Grilled Tofu Cubes" }
      ]
    },
    vegan: {
      breakfast: {
        title: "Vegan Berry Chia Pudding Pots",
        time: "15m",
        desc: "Individual dessert-style chia seed puddings layered with sweet berry compote and coconut flakes.",
        cals: 310,
        ingredients: [
          { name: "Chia Seeds", qty: "6 tbsp", price: 1.20, category: "Pantry" },
          { name: "Coconut Milk (Carton)", qty: "400ml", price: 1.50, category: "Pantry" },
          { name: "Maple Syrup", qty: "2 tbsp", price: 0.40, category: "Pantry" },
          { name: "Berries (Frozen)", qty: "150g", price: 1.80, category: "Produce" }
        ],
        prep: ["Whisk chia seeds, coconut milk, and maple syrup in bowl.", "Set in fridge for 1 hour to thicken (or do night before).", "Heat frozen berries in small pan with maple syrup until jammy (5m) to make compote."],
        cook: ["Layer chilled chia pudding and berry compote in glass ramekins.", "Garnish with shredded coconut flakes and serve."],
        cleanup: ["Clean compote heating pot.", "Wash chia mixing bowl."]
      },
      lunch: {
        title: "Vegan Mezze Board",
        time: "15m",
        desc: "Mezze board with hummus, baba ganoush, stuffed grape leaves, warm flatbread, and cherry tomatoes.",
        cals: 460,
        ingredients: [
          { name: "Hummus", qty: "1 tub", price: 1.80, category: "Pantry" },
          { name: "Baba Ganoush", qty: "1 tub", price: 2.20, category: "Pantry" },
          { name: "Stuffed Grape Leaves", qty: "1 can", price: 2.50, category: "Pantry" },
          { name: "Flatbread", qty: "2 wraps", price: 1.00, category: "Bakery" },
          { name: "Cherry Tomatoes", qty: "100g", price: 0.80, category: "Produce" }
        ],
        prep: ["Halve cherry tomatoes.", "Warm flatbread in oven for 3 minutes."],
        cook: ["Cut flatbread into triangles.", "Arrange flatbread, tomatoes, grape leaves, hummus, and baba ganoush on serving platter."],
        cleanup: ["Clean the mezze board.", "Wash hummus containers."]
      },
      dinner: {
        title: "Vegan Lentil Dahl Feast",
        time: "35m",
        desc: "Fragrant yellow lentil dahl simmered with ginger, cumin, mustard seeds, and tomatoes, served with naan and rice.",
        cals: 620,
        ingredients: [
          { name: "Red Lentils", qty: "150g", price: 0.80, category: "Pantry" },
          { name: "Canned Diced Tomatoes", qty: "200ml", price: 0.60, category: "Pantry" },
          { name: "Coconut Milk", qty: "200ml", price: 1.00, category: "Pantry" },
          { name: "Naan (Vegan)", qty: "2 pieces", price: 1.80, category: "Bakery" },
          { name: "Ginger & Garlic", qty: "1 set", price: 0.40, category: "Produce" },
          { name: "Basmati Rice", qty: "100g", price: 0.50, category: "Pantry" }
        ],
        prep: ["Mince ginger and garlic.", "Rinse basmati rice.", "Rinse red lentils."],
        cook: ["Boil basmati rice (12m).", "Sauté spices, ginger, and garlic in pot (3m). Add lentils, tomatoes, coconut milk, and 200ml water. Simmer for 20 minutes.", "Warm naan in oven for 3 minutes. Serve dahl over rice with naan on the side."],
        cleanup: ["Clean dahl pot.", "Wash rice boiling pot.", "Wipe stove top."]
      },
      substitutions: [
        { original: "Naan (Vegan)", replace: "Gluten-Free Tortilla" },
        { original: "Stuffed Grape Leaves", replace: "Marinated Artichokes" },
        { original: "Chia Seeds", replace: "Flax Seeds" }
      ]
    },
    glutenfree: {
      breakfast: {
        title: "Baked Crustless Frittata",
        time: "25m",
        desc: "Fluffy eggs baked with cherry tomatoes, fresh baby spinach, mushrooms, and goat cheese.",
        cals: 340,
        ingredients: [
          { name: "Eggs", qty: "6 large", price: 1.80, category: "Dairy & Eggs" },
          { name: "Spinach & Tomatoes", qty: "100g", price: 1.20, category: "Produce" },
          { name: "Mushrooms", qty: "80g", price: 0.80, category: "Produce" },
          { name: "Goat Cheese", qty: "40g", price: 1.20, category: "Dairy & Eggs" }
        ],
        prep: ["Preheat oven to 375°F (190°C).", "Chop mushrooms. Whisk eggs in bowl.", "Sauté mushrooms and spinach in skillet until spinach wilts (3m)."],
        cook: ["Grease pie baking pan.", "Layer sautéed veggies, cherry tomatoes in pan. Pour whisked eggs over.", "Crumble goat cheese on top and bake for 20 minutes until center is firm."],
        cleanup: ["Wash egg mixing bowl.", "Wash pie baking pan.", "Clean veggie sauté skillet."]
      },
      lunch: {
        title: "Gluten-Free Caprese Skewers",
        time: "15m",
        desc: "Cocktail skewers stacked with cherry tomatoes, baby mozzarella balls, fresh basil leaves, drizzled with pesto.",
        cals: 410,
        ingredients: [
          { name: "Cherry Tomatoes", qty: "150g", price: 1.20, category: "Produce" },
          { name: "Ciliegine Mozzarella Balls", qty: "150g", price: 2.50, category: "Dairy & Eggs" },
          { name: "Fresh Basil Leaves", qty: "1 bunch", price: 1.00, category: "Produce" },
          { name: "Pesto Dressing", qty: "2 tbsp", price: 0.60, category: "Pantry" }
        ],
        prep: ["Wash tomatoes and basil leaves.", "Drain mozzarella balls."],
        cook: ["Thread tomato, basil leaf, and mozzarella ball onto wooden skewers.", "Arrange on serving platter, drizzle with pesto sauce and balsamic glaze."],
        cleanup: ["Discard skewering trash.", "Wash serving platter."]
      },
      dinner: {
        title: "Slow-Roasted Lemon Cod",
        time: "35m",
        desc: "Tender baked cod fillets topped with lemon slices and capers, served with crispy baby potatoes.",
        cals: 610,
        ingredients: [
          { name: "Cod Fillets", qty: "350g", price: 7.00, category: "Meat & Seafood" },
          { name: "Lemons", qty: "2 whole", price: 0.80, category: "Produce" },
          { name: "Capers & Olive Oil", qty: "1 set", price: 1.00, category: "Pantry" },
          { name: "Baby Potatoes", qty: "300g", price: 0.80, category: "Produce" }
        ],
        prep: ["Preheat oven to 400°F (200°C).", "Slice potatoes in half. Slice lemon in rounds."],
        cook: ["Toss potatoes in olive oil, bake for 30 minutes.", "Place cod fillets in separate baking dish. Top with olive oil, lemon slices, and capers. Bake for 12 minutes.", "Serve baked cod alongside roasted baby potatoes."],
        cleanup: ["Wash fish baking dish.", "Clean potato roasting sheet."]
      },
      substitutions: [
        { original: "Cod Fillets", replace: "Salmon Fillets" },
        { original: "Mozzarella Balls", replace: "Marinated Tofu Cubes" },
        { original: "Goat Cheese", replace: "Feta Cheese" }
      ]
    },
    keto: {
      breakfast: {
        title: "Keto Hosting Frittata",
        time: "25m",
        desc: "Baked eggs loaded with heavy cream, crumbled sausage, cheddar, and spinach.",
        cals: 520,
        ingredients: [
          { name: "Eggs", qty: "6 large", price: 1.80, category: "Dairy & Eggs" },
          { name: "Heavy Cream", qty: "60ml", price: 0.70, category: "Dairy & Eggs" },
          { name: "Breakfast Sausage (Cooked)", qty: "120g", price: 1.80, category: "Meat & Seafood" },
          { name: "Cheddar Cheese", qty: "60g", price: 0.80, category: "Dairy & Eggs" },
          { name: "Spinach", qty: "50g", price: 0.60, category: "Produce" }
        ],
        prep: ["Preheat oven to 375°F (190°C).", "Crumble sausage.", "Whisk eggs and heavy cream with salt and pepper."],
        cook: ["Grease pie baking dish.", "Layer cooked sausage, spinach, and cheddar in dish. Pour eggs over.", "Bake for 20 minutes until center is golden and firm."],
        cleanup: ["Wash egg mixing bowl.", "Wash pie baking dish."]
      },
      lunch: {
        title: "Keto Charcuterie Board",
        time: "15m",
        desc: "Premium platter featuring salami slices, brie cheese wedges, almonds, olives, and celery sticks.",
        cals: 590,
        ingredients: [
          { name: "Salami Slices", qty: "100g", price: 2.20, category: "Meat & Seafood" },
          { name: "Brie Cheese", qty: "100g", price: 2.50, category: "Dairy & Eggs" },
          { name: "Almonds", qty: "50g", price: 0.90, category: "Pantry" },
          { name: "Kalamata Olives", qty: "60g", price: 0.80, category: "Pantry" },
          { name: "Celery Sticks", qty: "3 sticks", price: 0.40, category: "Produce" }
        ],
        prep: ["Slice celery sticks.", "Cut Brie cheese into triangles."],
        cook: ["Arrange salami, brie cheese, almonds, olives, and celery sticks beautifully on charcuterie board."],
        cleanup: ["Clean the charcuterie board.", "Wash knife."]
      },
      dinner: {
        title: "Keto Garlic Butter Ribeye Platter",
        time: "30m",
        desc: "Premium thick-cut ribeye steak seared with garlic herb butter, served with roasted brussels sprouts.",
        cals: 780,
        ingredients: [
          { name: "Ribeye Steak (Premium)", qty: "400g", price: 12.00, category: "Meat & Seafood" },
          { name: "Brussels Sprouts", qty: "200g", price: 1.50, category: "Produce" },
          { name: "Garlic Butter & Herbs", qty: "2 tbsp", price: 0.60, category: "Dairy & Eggs" }
        ],
        prep: ["Cut brussels sprouts in half.", "Preheat oven to 400°F (200°C).", "Toss sprouts in olive oil. Let steak sit at room temp."],
        cook: ["Roast sprouts in oven for 22 minutes.", "Sear steak in hot cast iron skillet for 3 minutes per side. Add garlic butter, baste steak with spoon for 2 minutes.", "Rest steak for 5 minutes, slice and arrange next to roasted sprouts."],
        cleanup: ["Wash heavy cast iron skillet.", "Clean baking tray.", "Wipe oil splatters."]
      },
      substitutions: [
        { original: "Ribeye Steak", replace: "Salmon Fillet" },
        { original: "Brie Cheese", replace: "Swiss Cheese" },
        { original: "Salami Slices", replace: "Prosciutto Slices" }
      ]
    }
  }
};

// 2. Global State
let appState = {
  dayProfile: 'busy',
  diet: 'everything',
  allergens: [],
  servings: 2,
  dailyBudget: 20,
  storeTier: 'standard',
  mealPlan: null,
  activeTab: 'prep',
  timerInterval: null,
  timerSecondsRemaining: 300,
  grocerySwaps: {} // Maps original name -> replacement name
};

// 3. Document Elements
const elWizardForm = document.getElementById('wizard-form');
const elWizardSection = document.getElementById('wizard-section');
const elLoadingSection = document.getElementById('loading-section');
const elDashboardSection = document.getElementById('dashboard-section');
const elBtnReset = document.getElementById('btn-reset');
const elBtnApiConfig = document.getElementById('btn-api-config');
const elWizardProgress = document.getElementById('wizard-progress');
const elStepIndicators = document.querySelectorAll('.step-indicator');
const elWizardSteps = document.querySelectorAll('.wizard-step');

// Servings elements
const elInputServings = document.getElementById('input-servings');
const elDecServings = document.getElementById('dec-servings');
const elIncServings = document.getElementById('inc-servings');

// Budget elements
const elInputBudget = document.getElementById('input-budget');
const elBudgetValue = document.getElementById('budget-value');

// Meal displays
const elBreakfastTitle = document.getElementById('breakfast-title');
const elBreakfastTime = document.getElementById('breakfast-time');
const elBreakfastDesc = document.getElementById('breakfast-desc');
const elBreakfastCals = document.getElementById('breakfast-cals');

const elLunchTitle = document.getElementById('lunch-title');
const elLunchTime = document.getElementById('lunch-time');
const elLunchDesc = document.getElementById('lunch-desc');
const elLunchCals = document.getElementById('lunch-cals');

const elDinnerTitle = document.getElementById('dinner-title');
const elDinnerTime = document.getElementById('dinner-time');
const elDinnerDesc = document.getElementById('dinner-desc');
const elDinnerCals = document.getElementById('dinner-cals');

const elLblServings = document.getElementById('lbl-servings');

// ToDo elements
const elTodoTabs = document.querySelectorAll('.todo-tab');
const elTabPanes = document.querySelectorAll('.tab-pane');
const elTodoListPrep = document.getElementById('todo-list-prep');
const elTodoListCook = document.getElementById('todo-list-cook');
const elTodoListCleanup = document.getElementById('todo-list-cleanup');
const elLblTodoProgress = document.getElementById('lbl-todo-progress');
const elTodoProgressBar = document.getElementById('todo-progress-bar');

// Timer elements
const elTimerDigits = document.getElementById('timer-digits');
const elBtnTimerStart = document.getElementById('btn-timer-start');
const elBtnTimerPause = document.getElementById('btn-timer-pause');
const elBtnTimerReset = document.getElementById('btn-timer-reset');

// Grocery & budget
const elGroceryCategories = document.getElementById('grocery-categories-wrapper');
const elInputNewItem = document.getElementById('input-new-item');
const elBtnAddItem = document.getElementById('btn-add-item');
const elBtnClearGroceries = document.getElementById('btn-clear-groceries');
const elSubstitutionItems = document.getElementById('substitution-items');

const elBudgetCard = document.getElementById('budget-status-card');
const elBudgetFeasibilityBadge = document.getElementById('budget-feasibility-badge');
const elLblTargetBudget = document.getElementById('lbl-target-budget');
const elLblEstCost = document.getElementById('lbl-est-cost');
const elBudgetCostBar = document.getElementById('budget-cost-bar');
const elLblPercentageSpent = document.getElementById('lbl-percentage-spent');
const elBudgetTipsList = document.getElementById('budget-tips-list');

// API Modal elements
const elApiModal = document.getElementById('api-modal');
const elBtnCloseModal = document.getElementById('btn-close-modal');
const elInputApiKey = document.getElementById('input-api-key');
const elSelectApiModel = document.getElementById('select-api-model');
const elBtnSaveApi = document.getElementById('btn-save-api');
const elBtnRemoveApi = document.getElementById('btn-remove-api');

// Audio elements
const elSoundComplete = document.getElementById('sound-complete');
const elSoundSuccess = document.getElementById('sound-success');

// 4. Initial Load & Event Setup
document.addEventListener('DOMContentLoaded', () => {
  setupWizardNavigation();
  setupEventListeners();
  loadApiConfig();
  updateTimerUI();
  
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Load API Keys from LocalStorage
function loadApiConfig() {
  const savedKey = localStorage.getItem('gemini_api_key');
  const savedModel = localStorage.getItem('gemini_model');
  if (savedKey) {
    elInputApiKey.value = savedKey;
    elBtnApiConfig.classList.add('pulse-glow');
  }
  if (savedModel) {
    elSelectApiModel.value = savedModel;
  }
}

// 5. Wizard Logic
let currentStep = 1;
function setupWizardNavigation() {
  const nextBtns = document.querySelectorAll('.next-step');
  const prevBtns = document.querySelectorAll('.prev-step');
  
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < 3) {
        goToStep(currentStep + 1);
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  });
}

function goToStep(step) {
  elWizardSteps.forEach(el => el.classList.remove('active'));
  elStepIndicators.forEach(el => el.classList.remove('active'));
  
  currentStep = step;
  document.getElementById(`step-${step}`).classList.add('active');
  
  // Progress calculations
  const progressPercent = step === 1 ? 25 : step === 2 ? 60 : 100;
  elWizardProgress.style.width = `${progressPercent}%`;
  
  // Enable correct step indicator
  for (let i = 0; i < step; i++) {
    elStepIndicators[i].classList.add('active');
  }
}

function setupEventListeners() {
  // Servings Counter
  elDecServings.addEventListener('click', () => {
    let val = parseInt(elInputServings.value);
    if (val > 1) {
      elInputServings.value = val - 1;
    }
  });
  elIncServings.addEventListener('click', () => {
    let val = parseInt(elInputServings.value);
    if (val < 10) {
      elInputServings.value = val + 1;
    }
  });

  // Budget slider
  elInputBudget.addEventListener('input', (e) => {
    elBudgetValue.textContent = `$${e.target.value}`;
  });

  // Generate Button Trigger
  document.getElementById('btn-generate').addEventListener('click', generatePlan);

  // Reset Button
  elBtnReset.addEventListener('click', resetApp);

  // API Modal Triggers
  elBtnApiConfig.addEventListener('click', () => elApiModal.classList.remove('hidden'));
  elBtnCloseModal.addEventListener('click', () => elApiModal.classList.add('hidden'));
  elBtnSaveApi.addEventListener('click', saveApiConfig);
  elBtnRemoveApi.addEventListener('click', clearApiConfig);

  // Close modal on click outside
  elApiModal.addEventListener('click', (e) => {
    if (e.target === elApiModal) elApiModal.classList.add('hidden');
  });

  // Todo Tabs
  elTodoTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const tabTarget = e.currentTarget.getAttribute('data-tab');
      switchTodoTab(tabTarget);
    });
  });

  // Timer controls
  elBtnTimerStart.addEventListener('click', startTimer);
  elBtnTimerPause.addEventListener('click', pauseTimer);
  elBtnTimerReset.addEventListener('click', resetTimer);

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sec = parseInt(e.currentTarget.getAttribute('data-sec'));
      setTimerDuration(sec);
    });
  });

  // Add custom grocery item
  elBtnAddItem.addEventListener('click', addCustomGroceryItem);
  elInputNewItem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addCustomGroceryItem();
  });

  // Clear checked groceries
  elBtnClearGroceries.addEventListener('click', clearCheckedGroceries);
}

function switchTodoTab(tabName) {
  elTodoTabs.forEach(t => t.classList.remove('active'));
  elTabPanes.forEach(pane => pane.classList.remove('active'));

  document.querySelector(`.todo-tab[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`tab-pane-${tabName}`).classList.add('active');
  appState.activeTab = tabName;
}

// 6. Generate Meal Plan Action
async function generatePlan() {
  // Capture values
  appState.dayProfile = document.querySelector('input[name="dayProfile"]:checked').value;
  appState.diet = document.querySelector('input[name="diet"]:checked').value;
  appState.servings = parseInt(elInputServings.value);
  appState.dailyBudget = parseFloat(elInputBudget.value);
  appState.storeTier = document.querySelector('input[name="storeTier"]:checked').value;

  // Capture allergens
  appState.allergens = [];
  document.querySelectorAll('input[name="allergens"]:checked').forEach(chk => {
    appState.allergens.push(chk.value);
  });

  appState.grocerySwaps = {}; // reset swaps

  // Toggle View: show loader
  elWizardSection.classList.add('hidden');
  elLoadingSection.classList.remove('hidden');

  try {
    const key = localStorage.getItem('gemini_api_key');
    const model = localStorage.getItem('gemini_model') || 'gemini-2.5-flash';
    
    if (key) {
      // AI Gen Mode
      appState.mealPlan = await fetchMealPlanFromGemini(key, model, appState);
    } else {
      // Local Mock Mode
      await new Promise(resolve => setTimeout(resolve, 1500)); // simulates thinking
      appState.mealPlan = generateLocalMealPlan(appState);
    }
    
    // Render
    renderDashboard();
    elBtnReset.classList.remove('hidden');
  } catch (error) {
    console.error("Plan generation failed, falling back to local dataset", error);
    appState.mealPlan = generateLocalMealPlan(appState);
    renderDashboard();
    elBtnReset.classList.remove('hidden');
  } finally {
    elLoadingSection.classList.add('hidden');
  }
}

// Local meal generator with dynamic adjustments
function generateLocalMealPlan(state) {
  const baseData = LOCAL_MEAL_DATABASE[state.dayProfile][state.diet];
  
  // Clone baseline so we don't modify the database
  const plan = JSON.parse(JSON.stringify(baseData));

  // Perform dynamic adjustments:
  // Apply Serving multiplier to ingredient quantities
  adjustQuantitiesAndPrices(plan, state.servings);

  // Apply allergen filter (if user selected allergies, highlight or modify ingredients)
  filterAllergens(plan, state.allergens);

  return plan;
}

function adjustQuantitiesAndPrices(plan, servings) {
  ['breakfast', 'lunch', 'dinner'].forEach(mealKey => {
    const meal = plan[mealKey];
    if (!meal) return;
    
    // Multiply calories slightly based on servings (if standard calories is per-serving, we leave standard text but update cost)
    meal.ingredients.forEach(ing => {
      // Attempt to parse out quantity and scale it
      ing.originalQty = ing.qty;
      ing.qty = scaleIngredientQty(ing.qty, servings);
      ing.totalPrice = ing.price * servings;
    });
  });
}

function scaleIngredientQty(qtyStr, servings) {
  // Regex parsing digits/fractions
  const match = qtyStr.match(/^([0-9\/\.\s\-]+)\s*(.*)$/);
  if (!match) return `${servings}x ${qtyStr}`;
  
  const numStr = match[1].trim();
  const unit = match[2].trim();
  
  // Convert fractions or decimals
  let numVal = parseFloat(numStr);
  if (numStr.includes('/')) {
    const parts = numStr.split('/');
    if (parts.length === 2) numVal = parseFloat(parts[0]) / parseFloat(parts[1]);
  }
  
  if (isNaN(numVal)) {
    return `${servings}x ${qtyStr}`;
  }
  
  const scaledNum = (numVal * servings / 2).toFixed(1); // Baseline recipes are standard for 2 servings
  // Strip .0 if whole number
  const finalNum = scaledNum.endsWith('.0') ? scaledNum.slice(0, -2) : scaledNum;
  return `${finalNum} ${unit}`;
}

function filterAllergens(plan, allergens) {
  if (allergens.length === 0) return;

  ['breakfast', 'lunch', 'dinner'].forEach(mealKey => {
    const meal = plan[mealKey];
    if (!meal) return;

    // Check ingredients for allergen keywords
    meal.ingredients.forEach(ing => {
      allergens.forEach(allergen => {
        if (hasAllergenKeyword(ing.name, allergen)) {
          ing.allergenWarning = true;
        }
      });
    });
  });
}

function hasAllergenKeyword(name, allergen) {
  const label = name.toLowerCase();
  if (allergen === 'nuts' && (label.includes('nut') || label.includes('almond') || label.includes('peanut'))) return true;
  if (allergen === 'dairy' && (label.includes('milk') || label.includes('butter') || label.includes('cheese') || label.includes('feta') || label.includes('yogurt') || label.includes('cream'))) return true;
  if (allergen === 'soy' && (label.includes('soy') || label.includes('tofu') || label.includes('tamari'))) return true;
  if (allergen === 'seafood' && (label.includes('salmon') || label.includes('tuna') || label.includes('cod') || label.includes('seafood') || label.includes('shrimp'))) return true;
  return false;
}

// 7. Render Dashboard
function renderDashboard() {
  const plan = appState.mealPlan;
  
  // Left: Render Meal Cards
  elBreakfastTitle.textContent = plan.breakfast.title;
  elBreakfastTime.textContent = plan.breakfast.time;
  elBreakfastDesc.textContent = plan.breakfast.desc;
  elBreakfastCals.textContent = plan.breakfast.cals;

  elLunchTitle.textContent = plan.lunch.title;
  elLunchTime.textContent = plan.lunch.time;
  elLunchDesc.textContent = plan.lunch.desc;
  elLunchCals.textContent = plan.lunch.cals;

  elDinnerTitle.textContent = plan.dinner.title;
  elDinnerTime.textContent = plan.dinner.time;
  elDinnerDesc.textContent = plan.dinner.desc;
  elDinnerCals.textContent = plan.dinner.cals;

  elLblServings.textContent = appState.servings;

  // Middle: Render Todo list
  renderTodoList();

  // Right: Render Groceries
  renderGroceryList();

  // Right: Render Substitutions
  renderSubstitutions();

  // Bottom-Right: Render Budget Calculation
  recalculateBudget();

  // Reveal Dashboard
  elDashboardSection.classList.remove('hidden');
  
  // Re-create icons loaded dynamically
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Todo tab lists
function renderTodoList() {
  const plan = appState.mealPlan;

  // Compile full steps lists from all meals
  let prepSteps = [];
  let cookSteps = [];
  let cleanupSteps = [];

  ['breakfast', 'lunch', 'dinner'].forEach(mealKey => {
    const meal = plan[mealKey];
    if (!meal) return;
    const prefix = mealKey.charAt(0).toUpperCase() + mealKey.slice(1);

    if (meal.prep) {
      meal.prep.forEach(step => prepSteps.push({ text: step, source: prefix }));
    }
    if (meal.cook) {
      meal.cook.forEach(step => cookSteps.push({ text: step, source: prefix }));
    }
    if (meal.cleanup) {
      meal.cleanup.forEach(step => cleanupSteps.push({ text: step, source: prefix }));
    }
  });

  // Populate Lists
  populateTodoContainer(elTodoListPrep, prepSteps, 'prep');
  populateTodoContainer(elTodoListCook, cookSteps, 'cook');
  populateTodoContainer(elTodoListCleanup, cleanupSteps, 'cleanup');

  updateTodoProgressBar();
}

function populateTodoContainer(container, steps, category) {
  container.innerHTML = '';
  if (steps.length === 0) {
    container.innerHTML = `<li class="text-muted text-sm text-center pad-lg">No steps needed.</li>`;
    return;
  }

  steps.forEach((step, idx) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.setAttribute('data-category', category);
    li.setAttribute('data-index', idx);
    
    // Check local storage / state if previously checked
    const stateKey = `todo_${appState.dayProfile}_${appState.diet}_${category}_${idx}`;
    const isChecked = localStorage.getItem(stateKey) === 'true';
    if (isChecked) li.classList.add('checked');

    li.innerHTML = `
      <span class="todo-chk"></span>
      <div class="todo-text-wrap">
        <span class="todo-text">${step.text}</span>
        <span class="todo-meta-lbl"><i data-lucide="tag"></i> ${step.source}</span>
      </div>
    `;

    li.addEventListener('click', toggleTodoItem);
    container.appendChild(li);
  });
}

function toggleTodoItem(e) {
  const li = e.currentTarget;
  li.classList.toggle('checked');
  
  const category = li.getAttribute('data-category');
  const idx = li.getAttribute('data-index');
  const isChecked = li.classList.contains('checked');

  // Save state
  const stateKey = `todo_${appState.dayProfile}_${appState.diet}_${category}_${idx}`;
  localStorage.setItem(stateKey, isChecked);

  // Play satisfying check sound
  if (isChecked && elSoundComplete) {
    elSoundComplete.currentTime = 0;
    elSoundComplete.play().catch(() => {});
  }

  updateTodoProgressBar();
}

function updateTodoProgressBar() {
  const allItems = elDashboardSection.querySelectorAll('.todo-item');
  const checkedItems = elDashboardSection.querySelectorAll('.todo-item.checked');
  
  if (allItems.length === 0) return;

  const percent = Math.round((checkedItems.length / allItems.length) * 100);
  elLblTodoProgress.textContent = `${percent}%`;
  elTodoProgressBar.style.width = `${percent}%`;

  // Trigger celebration on 100%
  if (percent === 100 && allItems.length > 0) {
    triggerCelebration();
  }
}

function triggerCelebration() {
  if (elSoundSuccess) {
    elSoundSuccess.currentTime = 0;
    elSoundSuccess.play().catch(() => {});
  }
  
  // Highlight complete checklist
  elTodoProgressBar.classList.add('pulse-glow');
  setTimeout(() => elTodoProgressBar.classList.remove('pulse-glow'), 3000);
}

// 8. Render Grocery List
function renderGroceryList() {
  const plan = appState.mealPlan;
  
  // Group ingredients by category
  let categories = {};

  ['breakfast', 'lunch', 'dinner'].forEach(mealKey => {
    const meal = plan[mealKey];
    if (!meal) return;

    meal.ingredients.forEach(ing => {
      let catName = ing.category || 'Other';
      if (!categories[catName]) categories[catName] = [];
      
      // Check if this ingredient has been swapped
      let displayName = ing.name;
      let displayQty = ing.qty;
      let isSwapped = false;

      if (appState.grocerySwaps[ing.name]) {
        displayName = appState.grocerySwaps[ing.name];
        displayQty = scaleIngredientQty("1 unit", appState.servings); // mock generic quantity
        isSwapped = true;
      }

      // Avoid double adding same ingredient name (aggregate quantity)
      const existing = categories[catName].find(x => x.name === displayName);
      if (existing) {
        existing.totalPrice += ing.totalPrice || ing.price;
      } else {
        categories[catName].push({
          name: displayName,
          qty: displayQty,
          originalName: ing.name,
          totalPrice: ing.totalPrice || ing.price,
          allergenWarning: ing.allergenWarning,
          isSwapped: isSwapped
        });
      }
    });
  });

  // Render categories
  elGroceryCategories.innerHTML = '';
  
  for (let catName in categories) {
    const catDiv = document.createElement('div');
    catDiv.className = 'grocery-category';
    
    let itemsHTML = '';
    categories[catName].forEach((item, idx) => {
      const stateKey = `grocery_${appState.dayProfile}_${appState.diet}_${item.name.replace(/\s+/g, '')}`;
      const isChecked = localStorage.getItem(stateKey) === 'true';
      const warningHTML = item.allergenWarning ? `<span class="text-red text-sm" style="margin-left: 5px;" title="Contains Allergen!"><i data-lucide="alert-triangle" style="width:12px; height:12px;"></i></span>` : '';
      const swappedClass = item.isSwapped ? 'text-green' : '';

      itemsHTML += `
        <li class="grocery-item ${isChecked ? 'checked' : ''}" data-state-key="${stateKey}" data-price="${item.totalPrice}">
          <span class="grocery-chk"></span>
          <span class="${swappedClass}">${item.name} (${item.qty})</span>
          ${warningHTML}
        </li>
      `;
    });

    catDiv.innerHTML = `
      <h4 class="grocery-category-title">${catName}</h4>
      <ul class="grocery-items-list">
        ${itemsHTML}
      </ul>
    `;

    // Hook listeners
    catDiv.querySelectorAll('.grocery-item').forEach(itemEl => {
      itemEl.addEventListener('click', toggleGroceryItem);
    });

    elGroceryCategories.appendChild(catDiv);
  }

  if (window.lucide) window.lucide.createIcons();
}

function toggleGroceryItem(e) {
  const li = e.currentTarget;
  li.classList.toggle('checked');
  const stateKey = li.getAttribute('data-state-key');
  const isChecked = li.classList.contains('checked');
  
  localStorage.setItem(stateKey, isChecked);
  recalculateBudget();
}

function addCustomGroceryItem() {
  const val = elInputNewItem.value.trim();
  if (!val) return;

  // Inject custom item into 'Other' category of appState.mealPlan so it renders & persists in recalculation
  if (!appState.mealPlan.breakfast.ingredients) return;
  
  appState.mealPlan.breakfast.ingredients.push({
    name: val,
    qty: "1 item",
    price: 1.00,
    totalPrice: 1.00,
    category: "Custom Items"
  });

  elInputNewItem.value = '';
  renderGroceryList();
  recalculateBudget();
}

function clearCheckedGroceries() {
  const checkedItems = elGroceryCategories.querySelectorAll('.grocery-item.checked');
  checkedItems.forEach(item => {
    const key = item.getAttribute('data-state-key');
    localStorage.removeItem(key);
    item.classList.remove('checked');
  });
  renderGroceryList();
  recalculateBudget();
}

// 9. Substitutions Logic
function renderSubstitutions() {
  const plan = appState.mealPlan;
  elSubstitutionItems.innerHTML = '';

  if (!plan.substitutions || plan.substitutions.length === 0) {
    elSubstitutionItems.innerHTML = `<p class="text-muted text-sm">No substitutions needed for this plan.</p>`;
    return;
  }

  plan.substitutions.forEach(sub => {
    const isSwapped = appState.grocerySwaps[sub.original] === sub.replace;
    const subCard = document.createElement('div');
    subCard.className = 'sub-item-card';
    subCard.innerHTML = `
      <div class="sub-info">
        <span class="sub-orig"><i data-lucide="x"></i> ${sub.original}</span>
        <span class="sub-replace"><i data-lucide="check"></i> ${sub.replace}</span>
      </div>
      <button class="btn-swap-sub ${isSwapped ? 'swapped' : ''}">
        ${isSwapped ? 'Undo Swap' : 'Swap Item'}
      </button>
    `;

    subCard.querySelector('.btn-swap-sub').addEventListener('click', () => {
      toggleSubstitutionSwap(sub.original, sub.replace);
    });

    elSubstitutionItems.appendChild(subCard);
  });

  if (window.lucide) window.lucide.createIcons();
}

function toggleSubstitutionSwap(original, replacement) {
  if (appState.grocerySwaps[original]) {
    delete appState.grocerySwaps[original];
  } else {
    appState.grocerySwaps[original] = replacement;
  }
  renderGroceryList();
  renderSubstitutions();
  recalculateBudget();
}

// 10. Budget & Feasibility Logic
function recalculateBudget() {
  const plan = appState.mealPlan;
  if (!plan) return;

  // Sum up prices of all ingredients (unswapped or swapped)
  let baseSum = 0;
  
  ['breakfast', 'lunch', 'dinner'].forEach(mealKey => {
    const meal = plan[mealKey];
    if (!meal) return;
    
    meal.ingredients.forEach(ing => {
      let itemPrice = ing.price;
      
      // If swapped, check if replacement has a different mock price (substitute might cost slightly less or more)
      if (appState.grocerySwaps[ing.name]) {
        itemPrice = ing.price * 0.9; // mock substitution discount factor
      }

      baseSum += itemPrice;
    });
  });

  // Apply Supermarket Tier Factor
  let tierMultiplier = 1.0;
  if (appState.storeTier === 'budget') tierMultiplier = 0.75;
  if (appState.storeTier === 'premium') tierMultiplier = 1.5;

  // Total estimated cart cost for the selected servings
  const estimatedCost = baseSum * appState.servings * tierMultiplier;
  const targetBudget = appState.dailyBudget;

  // Update UI text values
  elLblTargetBudget.textContent = `$${targetBudget.toFixed(2)}`;
  elLblEstCost.textContent = `$${estimatedCost.toFixed(2)}`;

  // Math spent percentage
  const spentPercent = Math.min((estimatedCost / targetBudget) * 100, 100);
  elLblPercentageSpent.textContent = `${Math.round((estimatedCost / targetBudget) * 100)}% of target spent`;
  elBudgetCostBar.style.width = `${spentPercent}%`;

  // Determine feasibility status
  let status = 'feasible';
  let badgeClass = 'badge-green';
  let barClass = 'bg-green';

  if (estimatedCost > targetBudget) {
    status = 'over-budget';
    badgeClass = 'badge-red';
    barClass = 'bg-red';
  } else if (estimatedCost > targetBudget * 0.85) {
    status = 'tight';
    badgeClass = 'badge-yellow';
    barClass = 'bg-yellow';
  }

  elBudgetFeasibilityBadge.textContent = status === 'feasible' ? 'Feasible' : status === 'tight' ? 'Budget Tight' : 'Over Budget';
  elBudgetFeasibilityBadge.className = `status-indicator ${badgeClass}`;
  
  elBudgetCostBar.className = `progress-bar ${barClass}`;
  
  if (status === 'over-budget') {
    elLblEstCost.className = 'stat-value text-red';
  } else {
    elLblEstCost.className = 'stat-value text-green';
  }

  // Populate dynamic recommendations
  populateBudgetTips(status, estimatedCost, targetBudget);
}

function populateBudgetTips(status, cost, target) {
  elBudgetTipsList.innerHTML = '';
  
  let tips = [];
  if (appState.storeTier !== 'budget') {
    tips.push(`Switch store tier to "Discount Store" to save up to 25% on this cart.`);
  }

  if (appState.servings > 2) {
    tips.push(`Buying ingredients in bulk packs saves approximately 12% at checkout.`);
  }

  if (status === 'over-budget' || status === 'tight') {
    tips.push(`Swap out high-cost items (e.g. fresh fish/beef) for chickpea or tofu substitutes.`);
    tips.push(`Buy frozen veggies instead of fresh to save $1.50 per serving.`);
  } else {
    tips.push(`Your meal plan is safely within target budget guidelines.`);
    tips.push(`Consider using leftover funds to add fresh garnishes or side salads.`);
  }

  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    elBudgetTipsList.appendChild(li);
  });
}

// 11. Kitchen Timer Widget
function startTimer() {
  if (appState.timerInterval) return;
  
  elBtnTimerStart.classList.add('hidden');
  elBtnTimerPause.classList.remove('hidden');

  appState.timerInterval = setInterval(() => {
    if (appState.timerSecondsRemaining > 0) {
      appState.timerSecondsRemaining--;
      updateTimerUI();
    } else {
      // Timer finished!
      clearInterval(appState.timerInterval);
      appState.timerInterval = null;
      elBtnTimerPause.classList.add('hidden');
      elBtnTimerStart.classList.remove('hidden');
      
      // Play completion alarm
      if (elSoundSuccess) elSoundSuccess.play().catch(() => {});
      alert("Kitchen Timer finished!");
    }
  }, 1000);
}

function pauseTimer() {
  if (!appState.timerInterval) return;
  clearInterval(appState.timerInterval);
  appState.timerInterval = null;
  
  elBtnTimerPause.classList.add('hidden');
  elBtnTimerStart.classList.remove('hidden');
}

function resetTimer() {
  pauseTimer();
  appState.timerSecondsRemaining = 300; // Reset to 5m
  updateTimerUI();
}

function setTimerDuration(seconds) {
  pauseTimer();
  appState.timerSecondsRemaining = seconds;
  updateTimerUI();
}

function updateTimerUI() {
  const mins = Math.floor(appState.timerSecondsRemaining / 60);
  const secs = appState.timerSecondsRemaining % 60;
  elTimerDigits.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 12. Reset Application State
function resetApp() {
  // Clear local storage items relating to todo states
  for (let key in localStorage) {
    if (key.startsWith('todo_') || key.startsWith('grocery_')) {
      localStorage.removeItem(key);
    }
  }

  appState.mealPlan = null;
  appState.grocerySwaps = {};
  
  elDashboardSection.classList.add('hidden');
  elBtnReset.classList.add('hidden');
  elWizardSection.classList.remove('hidden');
  
  goToStep(1);
}

// 13. API Modal Form Actions
function saveApiConfig() {
  const key = elInputApiKey.value.trim();
  const model = elSelectApiModel.value;

  if (key) {
    localStorage.setItem('gemini_api_key', key);
    localStorage.setItem('gemini_model', model);
    elBtnApiConfig.classList.add('pulse-glow');
    alert("Gemini AI API settings updated successfully!");
  } else {
    alert("Please enter a valid API key.");
  }
  elApiModal.classList.add('hidden');
}

function clearApiConfig() {
  localStorage.removeItem('gemini_api_key');
  localStorage.removeItem('gemini_model');
  elInputApiKey.value = '';
  elBtnApiConfig.classList.remove('pulse-glow');
  alert("Gemini AI Key cleared. ChefSync will use the local built-in engine.");
  elApiModal.classList.add('hidden');
}

// 14. Gemini AI Client Implementation
async function fetchMealPlanFromGemini(key, model, state) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  
  const systemPrompt = `You are a professional chef and budget-friendly meal planner. 
Generate a comprehensive 1-day meal plan (Breakfast, Lunch, Dinner) based on the user's criteria.
Return your output ONLY as a valid, stringified JSON object matching the exact structure below. Do not wrap in markdown or add comments.

JSON Schema structure:
{
  "breakfast": {
    "title": "Short Recipe Title",
    "time": "15m",
    "desc": "Short appetizing description",
    "cals": 450,
    "ingredients": [
      { "name": "Ingredient Name", "qty": "quantity", "price": 1.20, "category": "Produce/Pantry/Dairy/Meat/Bakery" }
    ],
    "prep": ["Prep step 1", "Prep step 2"],
    "cook": ["Cook step 1", "Cook step 2"],
    "cleanup": ["Clean up step 1"]
  },
  "lunch": { ... },
  "dinner": { ... },
  "substitutions": [
    { "original": "Ingredient Name to swap", "replace": "Healthy/cheaper swap" }
  ]
}

Ensure:
- Prices must be mock estimated unit prices (in USD, numbers, e.g. 1.20) for standard retail.
- Categories MUST be one of: "Produce", "Pantry", "Dairy & Eggs", "Meat & Seafood", "Bakery".
- Incorporate day profile (busy: very low prep times; gym: high protein/macronutrients; lazy: comfort cooking; hosting: sharing platters).
- Respect dietary preference: "${state.diet}" and avoid any listed allergens: "${state.allergens.join(', ')}".
- Return pure JSON. Do not include markdown code block characters (\`\`\`json).`;

  const requestBody = {
    contents: [
      {
        parts: [
          { text: systemPrompt },
          { text: `User Parameters: Day Schedule Type: ${state.dayProfile}, Diet Type: ${state.diet}, Excluded Allergens: ${state.allergens.join(', ')}, Target Daily Budget: $${state.dailyBudget}, Serving Count: ${state.servings}, Shop Tier: ${state.storeTier}.` }
        ]
      }
    ],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    throw new Error(`Gemini API Error: Status ${response.status}`);
  }

  const data = await response.json();
  const textResponse = data.candidates[0].content.parts[0].text;
  
  // Parse response defensively
  return JSON.parse(textResponse);
}
