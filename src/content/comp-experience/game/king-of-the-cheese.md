---
title: King of the Cheese
description: King of the Hat fan-game where you play as Dark Birthday and eat cheese in his dreams
coverImage: ./king-of-cheese/cover.png
coverImageAlt: Dark Birthday eating cheese in his dreams
summaryPoints:
  [
    "A fan-game for King of the Hat. Started as a meme within the community",
    "Created in Godot - all of it is created by me",
    "Find ways to keep it entertaining for a very simple game",
    "Found ways to engage with the fan community",
  ]
dateProjectPublished: Mar 29, 2023
dateUpdated: Dec 26, 2024
itchio: https://penrabbit.itch.io/king-of-the-cheese
github: https://github.com/MatthewUbalde/King-of-the-Cheese
---

# A Fan-game for King of the Hat

A fan-game created for _King of the Hat_ (owned by Hat Games) where you play as Dark Birthday and eat cheese in his dreams!

There's no win condition as you can only eat cheese in this game!

It's made in Godot, and I make all the design, art, sounds, and music.

It was inspired by a small joke within the community to make Dark Birthday canonically eat cheese. I liked the idea so much that I thought it would be cute to make a game out of it!

INSERT YOUTUBE CLIP

# How it was created?

By using the Godot engine, I was able to create a simple prototype and created the game within a couple of weeks. The game was incredibly simple, but everyone in the community seemed to love it!

INSERT OLD PICTURE

Each day there's a hard limit on how much cheese is present. It'll increment by one each day as we beg the developers to make Dark Birthday canonically eat cheese.

While the prototype is complete, there are things that I want to do if I were to improve it.

## Make playing the game more satisfying

One of the fun aspects of this game is **eating the cheese**! I wondered how it would be even more fun if we were able to eat thousands of cheese!

### Optimization

And so, optimization then became a bit part of the development. While I could have done more, this is what I've done.

- Remove unnecessary and simplify code
- Simplify the Cheese entity to its bare minimum - reducing associated objects
- Utilize VisibilityNotifier2D whenever it's not active
- And importantly fix the audio bottleneck

Apparently, one of the things that ruined the performance was the amount of audio objects created. Whenever we create a Cheese, it has an audio object attached to it so that we can hear its footsteps and other noises.

But if the goal is creating thousands of cheese, then we're also creating thousands of audio objects that are performant-heavy.

SHOW OLD PICTURE OF PERFORMANCE

So instead of creating the audio object for every time the Cheese is created, why not create the audio object when we're near it. We couldn't hear their footsteps far away, so this was the best time to do it.

Fixing this bottleneck and other performance issues, allows us to create 1000 cheeses to 10 000 cheeses with minimal lag (NOTE: THIS IS IMAGINARY).

SHOW DIFFERENCE

There could be more performance by utilizing an object server in exchange for memory, but I was satisfied with what I had.

### Graphic and Audio Improvements

Alongside the optimization, I improved the graphics and made it more alive. Animations were improved and there were little things that made it more alive, like this little idle animation.

INSERT IDLE ANIMATION

Or improving the running animation.

INSERT RUNNING ANIMATION

Back then, eating cheese would be something like this, but by adding some particle effects, and increasing the pitch of every bite, we're able to make this core gameplay even more satisfying.

INSERT NEW EATING

The difference between the new and the old is clear as night and day!

INSERT OLD EATING

## Add in charm and more ways to engage the player

However, one of the weaknesses that this game has is how repetitive the core gameplay is. I can't find ways to make it less boring in the long run without spending a costly amount of time changing the core gameplay.

And so I thought about adding fun easter eggs, and in turn, I was able to do something that's really fun for the community.

Make them part of the game!

There are easter eggs that can be found throughout the game. It can be found by playing around, or through the Hint System.

### Hint System

The Hint System was meant to solve the problem of players not knowing what to do and what features it has. However, I thought it would be fun to have jokes in it, and then an idea came about of having members of the community be a part of it.

And so I asked every member of the community, and even outside of it (just for fun), for what they wanted to say in the game.

I asked about 25 people, and even included the game developers themselves!

This external system doesn't directly solve the repetitive nature of the game, but it does help add charm to the game by adding to those who are a part of the _King of the Hat_ community.

### Other Easter Eggs

There were other easter eggs too!

If you launch the game, there's a chance that you'll become Birthday instead of Dark Birthday.

There were some visual and audio jokes throughout the area if you zoom out or interact with one of them.

And there's even a "Secret Ending" to the game if you know what it is! It's nothing special, but adds more to the experience.

# Conclusion

In addition to the optimization and changes to make the eating cheese action more addictive, the small additions like the easter eggs add up to this little fun experience of the game. It's really meant to be a small appreciation not only to the community but also to the developers as well!

(They worked really hard on the game, and this is my thank you to them!)

Seeing everyone happy with what I've created made it all worth it. The developers were thrilled when they saw it.

INSERT IMG
