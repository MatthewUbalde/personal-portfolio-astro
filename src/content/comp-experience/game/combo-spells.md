---
title: Combo Spells
description: Made with Java and JavaFX during high school. One of the first programming projects I've made.
coverImage: ../../../assets/combo-spell-01.png
coverImageAlt: Screenshot of the project "Combo Spells"
---

Play as a magician and use a combination of keys to construct bolders, lightning, and other elements to synergize and get the highest score possible!

Originally a highschool Java final project, but was updated overtime.

# School Project

Java is actually my first programming language I learned back in Montcalm, and I realized how fun and really easy it was.

Combo Spells was meant to be small project, but I slowly refined because of how fun the concept it was to me.

INSERT CLIP

# Game Design

INSERT ORIGINAL DESIGN

Originally, I wanted to create a platform fighter, however, I don't know a lot of physics or know if it's even possible in my skill level. To simplify it, I made the game it is now: you hit the dummy with spells and get a high score!

My inspiration for the game was Tekken, and King of the Hat. A game with mechanical depth, and keeping it simple.

## Controls

Motion Inputs is something I don't know how to create. And I don't want to clutter the controls with a dedicated button for each spell.

I created a workaround by letting the user press a combination of keys in their own pace, and release the spell when they want to. It made the game simplier to play and to develop.

INSERT SOMETHING

However... Looking back, I'm not happy with how the controls were. Requiring two hands for movement and doing the inputs.

INSERT CONTROL SCHEME

It's unnecessarily complicated.

## Spell Synergy with Statuses

To make the game more interesting, I decided to have spells inflict status effects and synergize with others for greater damage.

- Water increases the Lightning damage, but decreases Fireball damage.
- Burn and Poison does damage overtime.
- Burn also increases Overgrowth damage.
- Stun increases the Fireball and Water Blast damage.

It creates a puzzle element for the player to solve to get a higher damage amount for those interested for a challenge.

# General Improvements

The graphics used in this game is hard-coded with the JFrame graphic package provided by my high-school teacher. Each character, projectiles, and some of the environment are made by hand.

INSERT OF CHAR
INSERT CODE FOR CHAR

And from the oldest version and to the latest, I say I did a pretty good job!

<!-- <ComparisonContainer>
      <Fragment slot="before"></Fragment>
      <Fragment slot="after"></Fragment>
    </ComparisonContainer> -->

The other parts, such as the grass...

INSERT IMG

And clouds as well!

INSERT IMG

# Struggles

I didn't know how classes and objects were in programming. Or even how the ArrayList works in Java. Majority of the data and variables were laid out in one single GUI class.

All of the graphics, logic, controls, are held into one file with the other two as main and keyboard listeners.

Due to the unnecessary complications, I made a debugger menu on the side if you press "I" and extend the window to the left.

INSERT DEBUG MENU

You can see each individual variables, and even the arrays for each object's property.

While a mess, I tried my best to keep things neatly organized and comment out everything. (I lost the source code, so no examples of it)

# Conclusion

From a 3 week highschool project with 3 months worth of updates, I was able to create something that I'm proud of even to this day.

I want to remake the project with better backend, better controls,graphics, and more friendlier game design. Turning this high-score game into the fighting game I envisioned when I was young.
