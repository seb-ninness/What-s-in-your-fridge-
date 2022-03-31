/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex('recipes').insert([
    {
      id: 1001,
      author_name: 'Alison Roman',
      cooking_time: '~30mins',
      instructions:
        'Get a large pot of water on to boil, season it heavily with salt. Finely chop one garlic clove and place in a small bowl; set aside. Thinly slice remaining garlic cloves; set aside. Finely chop half of the lemon (making sure to remove any seeds), add to the bowl with the finely chopped garlic and season with salt and pepper; set aside, this is for topping the pasta later. Set the rest of the lemon aside for squeezing over. Heat olive oil and butter (if using) in a large skillet over medium heat. Add shallots and thinly sliced garlic and season with salt and pepper. Cook, stirring occasionally until they’re lightly browned at the edges, but mostly starting to melt into each other into a sort of translucent paste, 8–10 minutes. Add anchovies, capers, and crushed red pepper flakes, stirring to encourage the anchovies to melt into the oil. Cook, stirring occasionally, until you’ve got a thick, concentrated paste, just a few minutes. Taste it—it should be almost too intense, too salty, and definitely not “saucy” (you dilute the paste with pasta water). Set this aside (you can make this a few hours ahead of time—a few days, if you wanted. If I were smart, I’d figure out how to bottle this stuff so you can use it any time). Cook pasta until just before al dente. Pre-al dente, even. Using tongs, transfer the pasta to the skillet along with about a cup of pasta water (alternatively, drain the pasta, just don’t forget to save at least 1 ½ cups pasta water—we are using it, I promise). Cook the pasta, stirring often (I like tongs for this, too), until the pasta is al dente and the sauce has thickened, 3–5 minutes. Add herbs and toss to coat, adding a splash or two of pasta water if you feel like it needs it. Despite the original mixture not being “saucy,” your end result should most definitely be saucy. To serve, divide among bowls (or eat out of skillet), squeezing lemon juice over and scattering over some of that lemon-garlic mixture.',
      title: 'Pantry Pasta',
      description:
        'Pantry pasta. Would strongly recommend anyone follow this recipe, but equally recommended you going rogue and adding your own pantry flair.',
      difficulty: 'Easy',
      img: 'IMG_0001.jpeg',
    },
    {
      id: 1002,
      author_name: 'Alison Roman',
      cooking_time: '~2hrs',
      instructions:
        'Make the sauce. Heat the olive oil in a large, heavy-bottomed pot over medium heat. Add the onion, garlic and anchovies and season with salt and pepper. Cook, stirring occasionally, until the onion is totally softened and translucent (without letting it brown), 8-10 minutes. Add the tomato paste if using and continue to cook, stirring, until the tomato paste has turned a deeper brick red color, about 2 minutes. Using your hands, crush the whole tomatoes into smaller, bite-sized pieces and add them and the crushed tomatoes to the pot, stirring to scrape up any bits from the bottom. Fill one of the tomato cans halfway with water, swirl it around to get all the bits in the can and add it to the pot. Season with salt and pepper. Bring to a simmer and cook, stirring occasionally, until the tomato sauce has thickened and flavors have come together, 35-45 minutes. You want it to be as thick as tomato sauce from a jar — any looser and the lasagna will be too wet to cut into nice pieces. Preheat the oven to 425°F and set a large pot of salted water to boil. Assemble the lasagna. Set aside 1 cup mozzarella. In a medium bowl, combine the remaining mozzarella, the ricotta, Parmesan, cream, and grated garlic clove; season with salt and pepper. Cook the lasagna noodles in the boiling water until just softened (before al dente), 4 to 5 minutes. Drain and separate any noodles that are trying to stick together, drizzling them with a bit of olive oil to prevent them from sticking further. Spoon a bit of sauce on the bottom of a 3-quart baking dish and top with a layer of noodles, avoiding any heavy overlap (some overlap is fine and inevitable). Top with about 1¼ cups of sauce and dollop one-fourth of the cheese mixture over. Top with another layer of noodles and repeat three more times, ending with the last of the noodles (depending on size of the noodle/shape of the baking dish, you may have a few extra noodles) and the last of the sauce. Top with the reserved 1 cup mozzarella and more Parmesan, if you like. Cover loosely with aluminum foil and place the baking dish on a foil-lined rimmed baking sheet (to prevent any overflow from burning on the bottom of your oven). Bake until the pasta is completely tender and cooked through and the sauce is bubbling up around the edges, 25-30 minutes. Remove the foil and continue to bake until the lasagna is golden brown on top with frilly, crispy edges and corners, another 35-45 minutes. Let cool slightly before eating.',
      title: 'A Very Good Lasagna',
      description:
        'For me, a very good lasagna isn’t overly cheesy or too saucy or insanely indulgent—there should be a proper ratio of pasta:sauce:cheese so that each slice feels satisfying but also balanced. While I do love a creamy lasagna, I find bechamels a bit unnecessary and instead use heavy cream in conjunction with the ricotta and mozzarella to keep things nice and saucy. So, here it is, a recipe for a Very Good Lasagna. Nothing insane, no sneaky anchovies (just kidding—there are anchovies if you want) or expensive, hard-to-find cheeses. Just some good ol’ basic stuff layered in a baking dish and baked until melty, bubbly, and satisfying as well.',
      difficulty: 'Medium',
      img: 'IMG_0002.jpeg',
    },
    {
      id: 1003,
      name: 'Brownies',
      creator: 'Kelly',
      instructions: 'mix it up!',
    },
  ])
}
