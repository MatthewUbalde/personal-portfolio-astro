---
title: King of the Cheese
description: King of the Hat fan-game where you play as Dark Birthday and eat cheese in his dreams
coverImage: ../../../assets/cover/king-of-cheese-01.png
coverImageAlt: Dark Birthday eating cheese in his dreams
---

King of the Hat fan-game where you play as Dark Birthday and eat cheese in his dreams! There's no win condition, and simply a fun game where you eat cheese!

The engine is made in Godot. And all of the design, art, sounds, and music are made by me.

King of the Hat is rightfully owned by Hat Games

# How it was created

It was inspired from a small joke within the community to make Dark
Birthday canonically eats cheese.

Since I liked the idea so much, I thought it would be cute to make a game out of it!

INSERT YOUTUBE CLIP

# Problems

While the game's core gameplay is complete, there are a few things I've noticed

- It's not very satisfying.
- There's no sense of direction.
- Lacking in charm and character.
- Not worth playing it in longer duration.

To make the game more fun, I tried solving them by adding better feedback, animations, and polish, with some easter eggs and quality-of-life changes.

# Feedback and Graphics

In general, I polish the animations, added running particles, and among other things.

   <!-- <ComparisonContainer>
     <Fragment slot="before"> </Fragment>
     <Fragment slot="after"> </Fragment>
   </ComparisonContainer> -->

Whenever you press Z/X/Spacebar near cheese, you eat them instantly!

Running through thousands of them would be more satisfying if there was more feedback with better sounds and visuals.

   <!-- <ComparisonContainer>
     <Fragment slot="before"> </Fragment>
     <Fragment slot="after"> </Fragment>
   </ComparisonContainer> -->

And then, I thought about having hundreds and thousands of cheese and eating them would be really fun! But for that to happen, I needed to the cheeses themselves

# Optimizations

One of the most notable optimization is the audio.

In Godot, there's a separate audio thread which became a bottleneck when there's thousands of cheeses in the scene. This is because creating thousands of them also creates the audio object

Since the audio can only be heard when the player is near by, I thought it would be better to only create the audio object and attaching it to the cheese when it's only needed. Freeing up the audio thread which in turn more performance.

   <!-- <ComparisonContainer>
     <Fragment slot="before"> </Fragment>
     <Fragment slot="after"> </Fragment>
   </ComparisonContainer> -->

Among other optimizations such as using the VisibleNotifier2D and reducing unneeded code, it's possible to have more cheeses all in the screen! More
so 10 000 cheeses compare to the 1 000 that would cause some lag.

   <!-- <ComparisonContainer>
     <Fragment slot="before"> </Fragment>
     <Fragment slot="after"> </Fragment>
   </ComparisonContainer> -->

# Easter Eggs

To help engage the player a bit, I added easter eggs! Some were from the community and some friends. Just small additions for the player to explore and such.

There's a few instances of easter eggs appearing randomly like Dark Birthday becoming Birthday, or the Hint Provider!

## Hint Provider

INSERT IMG

The Hint Provider not only helps the player to remind and inform the
controls and other quality-of-life features, but also have random and
funny hints.

While small, it does help provide rettention while playing as it gives the
player something rewarding while playing a bit further.

## Secret Ending

INSERT IMG

The Secret Ending activated with the 24 (the day they canonically made
Dark Birthday love cheese) cheese maximum, and has "No Limits" enabled.
Just something for the player can go for if they have nothing else to do.

INSERT IMG

Due to the violently shaking camera, and gradual zooming, it's became a
challenge for the player to find the cheeses to continue and complete the
ending.

INSERT VID

And if the player accidentally found this out and doesn't want to, they
can just wait for a bit and will quickly revert back to the original
state.

# Conclusion

All of these things adds up together in this small and short experience.
None of them detach from the core experience, and it's there for the
player to discover and enjoy!

While I could add more things to the project, I have to stop and consider
if it's worth working even further.

Since the last update, only a few people ever played on it, but got the
developers thrilled when they saw this.

In the end, it was worth it.
INSERT IMG
