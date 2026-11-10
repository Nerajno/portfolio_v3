---
draft: true
seoTitle: "How I Actually Run My Learning Garden: Stages, Front Matter, Tending"
seoDescription: "The implementation behind a two-track learning garden: six stages, the front matter that drives them, tending verbs, and how notes split across two sites."
author: "Nerando Johnson"
title: "How I Actually Run My Learning Garden"
snippet: "The implementation behind a two-track digital garden: the stages, the four front-matter fields that carry it, tending as a verb, how the tracks split across two sites, and what I'd still change."
image: {
    src: "/images/blog_covers/growth_garden.jpg",
    alt: "Soil-covered hands holding a small terracotta pot with young cacti, surrounded by empty pots"
}
publishDate: "2026-12-01 12:00"
category: "Career Growth, Learning in Public"
tags: [learning-garden, digital-garden, front-matter, knowledge-management, jekyll]
keywords: [digital garden front matter, digital garden stages, learning garden implementation, note taking system for developers, personal knowledge management, dormant notes, digital garden data model, tending a digital garden]
series:
  name: "Learning Garden"
  order: 3
---

## From an idea to a data model

In [part 2](/blog/flowers-or-food-what-your-digital-garden-is-growing) I argued that most digital gardens run an ornamental model — seedling, budding, evergreen — while developers are mostly growing food. Flowers bloom; crops bear fruit. Two different payoffs, one taxonomy trying to cover both.

This post is the implementation. The stages, the front matter, how the two tracks split across my two sites, and the parts I'd still change.

Fair warning: this is my system, not a standard. The useful thing to steal is probably the shape, not the vocabulary.

## The stages

\[TODO: stages diagram image (two tracks, two resting states). Export it from the draft doc and add it under public/images/.\]

Seeds and transplants start at Sprout; a graft can start at Budding, because the rootstock is doing the work. Then `type` decides the ending. Dormant and Composted sit outside the path entirely, which is the point — stepping away is a state, not a failure.

## The front matter

Four fields carry the whole thing. Here's a real note:

```yaml
---
title: "Concept: Vue 3 Composables"
type: concept        # the shelf it sits on; the track follows from it
stage: bloom         # sprout | budding | bloom | fruit | composted
origin: transplant   # seed | transplant | graft
planted: 2025-02-11
tended: 2026-10-23   # dormant is computed from this, never typed
log:
  - 2025-02-11: planted after a code review comment I didn't understand
  - 2025-06-03: rewrote once I'd used one in anger
  - 2026-10-23: trimmed the Vue 2 comparison, nobody needs it now
---
```

`type` is the important one, and it's the field the standard model never had. It picks the track, which means a project can never "bloom" and a concept can never bear "fruit." The vocabulary stops lying.

`origin` records how the note got in: grown from scratch, taken as a cutting from someone else, or grafted onto something I already knew. It's a fact, not a stage, so it lives in its own field rather than on a chip.

`tended` is the one doing quiet work. Dormant is computed from it, not typed. Six months without a touch and a note marks itself as resting — no manual tagging, no decision to make, no guilt. That's the whole fix for the thing that cost me six months.

The `log` is optional and I don't backfill it, but on notes that have it, it's the part I reread most. It's the only place that records my understanding changing rather than just its current state.

## Tending is a verb

Stages describe where a note *is*. Tending is what I actually do to it. These aren't chips and they never will be — they're the work.

| Tending | In the garden | In my learning garden |
| --- | --- | --- |
| **Watering** | Small, regular, boring | Revisiting a note and bumping its `tended` date |
| **Weeding** | Pulling out what crept in and is choking the good stuff | Removing wrong information, dead APIs and broken links. Hello, Vue 2 habits in a Vue 3 note. |
| **Suckering** | Cutting off the plant's own growth that drains it | Killing my own rabbit holes, duplicate notes and unfinished tangents. Not someone else's mess, mine. |
| **Pruning** | Cutting back so the plant grows stronger | Splitting a sprawling note into smaller ones that each say one thing |
| **Companion planting** | Plants that help each other grow | Linking two related notes so they strengthen each other |
| **Graphing** | Standing back to look at the whole bed | Reading the link graph to find orphans, clusters and gaps |
| **Decorating** | Making the garden somewhere you want to be | Covers, callouts, typography. The part that makes it mine rather than a database. |
| **Giving away** | Sharing cuttings and surplus with neighbours | Turning notes into blog posts, talks and study sheets |

Giving away is my favourite, and it's the one that closes the loop from part 2.

I stopped tending because I couldn't justify writing a note someone smarter had already written. But gardeners don't hand cuttings over the fence because they're the best gardener on the block. They do it because they have extra and someone nearby can use it. A note that became a blog post or a talk is just a cutting that took root in somebody else's garden.

On the site, tending shows up in that small log at the bottom of each note — date plus what I did — not on the chip. It keeps the legend short, and it makes the tending visible, which is the accountability from [part 1](/blog/why-i-keep-a-learning-garden) coming back in a form that doesn't punish me.

## Two tracks, two sites

The split also cleaned up something that had been bugging me for a year: I had two sites and no principled reason for which thing went where.

Now the track decides.

- **[garden.developingdvlpr.com](https://garden.developingdvlpr.com)** runs the flower track. The Rolodex of terms and the concept notes. Things that bloom, stay on display, and get reread.
- **[learnt.developingdvlpr.com](https://learnt.developingdvlpr.com)** runs the food track. Past projects. Think "Killed by Google," except instead of a graveyard of dead products, it's what each one actually taught me.

Composted fits Learnt perfectly, which I didn't plan and should have. A retired project with a line on why I stopped and what it taught me isn't a failure on display. It's a receipt.

That's also the honest answer to a question I get about Learnt: isn't a public list of things you abandoned a bad look? Only if you believe a garden's job is to look finished. A food garden in November is supposed to be mostly empty. The empty beds are the evidence that you ate.

## Migrating without a weekend of tagging

The nice part about this refactor is that almost none of it is manual.

| Old stage | New stage |
| --- | --- |
| seedling | Sprout |
| budding | Budding |
| evergreen, on a concept | Bloom |
| evergreen, on a project | Fruit |

The only judgement call is `type`, and for my notes it was obvious from the folder they were already in. Everything else is a rename.

Two things get computed rather than typed:

- **Dormant** comes from the `tended` date. No tagging, no guilt.
- **Composted** is the one state I set by hand, because it's a decision, and a decision deserves a sentence explaining itself.

`origin` defaults to `seed` on every existing note until I go back and correct it, which is a decent excuse to water a few on the way through. I'm not backfilling it in one sitting. Progress over perfection applies to migrations too.

## What I'd still change

**Six stages might be two too many.** I started with a fuller set — Seed, Rooted, Gone to seed — and cut back to this. The rule I've given myself: if I ever can't tell two stages apart in a few seconds, they get merged. A taxonomy I have to think about is a taxonomy I'll stop using, and I have six months of evidence for what happens then.

**Dormant might be too forgiving.** Six months is a long window. It's possible I've just built a system that tells me everything is fine, which is a different failure from the one I started with but still a failure.

**I don't know what happens when a concept becomes a project.** A note that blooms and then gets built into something has arguably changed track. Right now I'd write a second note and link them, but that's a guess, not a rule.

The chip design — the colours, the icons, why Dormant is a dashed outline and Composted is inverted — is its own thing and it's written up in the [design decisions note](https://garden.developingdvlpr.com/note/Garden-Design-Decisions) on the garden.

If you keep a garden, I'd like to know what you do with the notes you've stepped away from. Hide them, or let them rest in public?
