---
draft: false
seoTitle: "How Blind Software Engineers Succeed: Sight Beyond Sight"
seoDescription: "Explore how blind developers use screen readers and adaptive technology to excel in software engineering, with real-world examples and tools."
author: "Nerando Johnson"
title: "Sight beyond Sight... How Blind Software Engineers Make It Work"
snippet: "Blind developers, who make up 1.7% of the programming community, use screen readers and refreshable braille displays to write code and develop software just like sighted developers. Screen readers, which began at IBM in the 1980s, have evolved to allow blind developers to use mainstream development tools like Visual Studio and Eclipse effectively. As demonstrated by developers like Florian Beijers, blind programmers can work with standard computers and regular software tools, only requiring screen reading software like NVDA to make technology accessible."
image: {
    src: "https://thepracticaldev.s3.amazonaws.com/i/qbpchpd8rlmal7lx8a79.jpeg",
    alt: "devloper with ar glasses"
}
publishDate: "2019-10-01 12:00"
category: "Blog, Flatiron, FreeCodeCamp"
tags: [Flatiron, FreeCodeCamp, developer, blogs]
keywords: [blind software engineers, screen readers for developers, accessible programming, NVDA screen reader, blind programmers, assistive technology for coding, refreshable braille display, visually impaired developers, accessibility in tech, adaptive technology for developers, Jim Thatcher screen reader, Florian Beijers developer, inclusive software development, web accessibility, programming without sight]

# GEO-Enhanced Fields
schema: {
  type: "Article",
  about: "How blind software engineers use assistive technology to code and develop software",
  genre: "Technology and Accessibility",
  educationalLevel: "Beginner to Intermediate",
  teaches: ["Assistive Technology", "Screen Readers", "Accessible Development", "Inclusive Tech Practices"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Developers and Tech Professionals"
  }
}

entities: {
  primary: ["Blind Software Engineers", "Screen Readers", "Accessibility Technology"],
  secondary: ["NVDA", "Refreshable Braille Display", "Assistive Technology", "Visual Impairment"],
  people: ["Jim Thatcher", "Florian Beijers"],
  organizations: ["IBM", "FreeCodeCamp", "StackOverflow"],
  tools: ["NVDA", "Screen Reader/2", "Visual Studio", "Eclipse", "NotePad++", "Firefox"],
  concepts: ["Web Accessibility", "Adaptive Technology", "Inclusive Design", "Digital Accessibility"]
}

contentStructure: {
  type: "Educational Article with Case Study",
  difficulty: "Beginner",
  timeToComplete: "8-10 minutes read",
  prerequisites: ["Basic understanding of software development"],
  outcomes: ["Understand how blind developers work", "Learn about assistive technology", "Appreciate accessibility in tech", "Recognize inclusive development practices"]
}

semanticContext: {
  topic: "Accessibility in software engineering and assistive technology for blind developers",
  subtopics: ["Screen Reader History", "Adaptive Technology", "Developer Tools", "Web Accessibility"],
  relatedConcepts: ["Digital Inclusion", "Universal Design", "WCAG Standards", "Assistive Computing"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2019). Sight beyond Sight... How Blind Software Engineers Make It Work",
  lastReviewed: "2025-10-30",
  version: "1.1",
  originalPublisher: "Nerando Johnson's Blog",
  originallyPublished: "dev.to - October 2019"
}

aiOptimization: {
  summaryPrompt: "This article explores how blind software engineers use assistive technology like screen readers and refreshable braille displays to code effectively, featuring the history of screen readers at IBM and a case study of developer Florian Beijers",
  keyTakeaways: [
    "1.7% of software developers are blind, using assistive technology to code effectively",
    "Screen readers originated at IBM in the 1980s, developed by mathematician Jim Thatcher",
    "Blind developers use mainstream tools like Visual Studio, Eclipse, and Firefox with screen readers like NVDA",
    "Refreshable braille displays and text-to-speech technology enable full programming capability",
    "Accessibility should be a core consideration in software development, not an afterthought"
  ],
  technicalDepth: "medium",
  codeExamples: false
}
---


   Access to information has become a fundamental human right and the internet being what it is, has become a bastion of information. The creation of web pages and web apps has been the creative domain of programmers and software engineers of which 1.7% are blind ([StackOverFlow Survey 2018](https://insights.stackoverflow.com/survey/2018#demographics)). This blog aims to look into that part of the developer community.

#### [Side Note](https://www.theguardian.com/music/2019/jan/04/beyonce-parkwood-entertainment-sued-over-website-accessibility)

## A Little History
![](https://thepracticaldev.s3.amazonaws.com/i/kn31etzyy3gxuyj3f2hs.JPEG)
                            Jim Thatcher

  In the 1980s screen reader has become a prevalent tool for developers with limited or no sight as it was introduced as a tested and proven tool at IBM by Jim Thatcher, a mathematician at said company. Like all great problems, this problem had a personal connection to him.
Thus, He set out to solve this problem and came up with a solution([read about that process here](https://www.afb.org/aw/5/2/14760)). Over time at IBM, screen readers or "talkies" as they were known evolved (with help from staff who are blind as beta testers). At that time its ability to improve accessibility was not seen as marketable (remember this was the 80s), its ability was well proven by the beta testers and then early adopters inside the company to improve accessibility to information and computers. Gradually screen readers became a primary tool for visually impaired developers and found itself released as Screen Reader/2 in the mid 1990s as it was then deemed commercially viable.

[Sound of a screen reader](https://boingboing.net/2017/08/28/this-blind-software-developer.html)



# Meet — Florian Beijers

![](https://thepracticaldev.s3.amazonaws.com/i/7kv4u8jviezwj0zp2d9h.jpg)

He is a 26 year old developer and music lover. He is also completely blind and an avid contributor to FreeCodeCamp.

### How does He work ?


![](https://thepracticaldev.s3.amazonaws.com/i/9v9v7mp5dlkeb53pvbye.jpg)
                     Refreshable Braille Display

He used regular equipment that has special attachments, in his own words:
I like this question, because it allows me to immediately explain how blind people actually use computers.

A lot of people are under the impression that blind people require specially adapted computers in order to get anything done. Even some of my fellow Visually Impaired Persons (VIPs) tend to think this.

Well let me debunk this myth right here and now. I am currently typing this on a normal Dell Inspiron 15r SE notebook, which can be bought in any laptop store that sells (somewhat less recent) laptops. The machine runs windows 8 (not my personal choice, but UEFI is too much of a pain to downgrade). All I did to adapt it was install an open-source screen reader called NVDA.

A screen reader basically, at its most basic level — wait for it — reads the screen. It tells you the textual content of the screen with a synthesized text-to-speech Siri-like voice. Screen readers also allow for the use of a braille display, a device that consists of a line of refreshable braille cells that can form letters according to what content is highlighted on the screen.

This is really all the adaptation a blind computer user needs. Using this program, I can do many things you probably wouldn’t imagine being able to do with your eyes closed, such as:

   - Browsing the web using Firefox
   - Writing up reports in Microsoft Word.
   - Writing up snazzy blog posts.
   - Recording, editing, mixing and publishing audio (My hobbies include singing and making music).
   - Using audio production apps like Reaper, Goldwave, Audacity and Sonar
   - Coding websites and applications using Eclipse, (the ironically named) Visual Studio, and good old NotePad++.

The reason I’m naming all these mainstream technologies is to show you that I can use them just like people who aren’t ocularly challenged.

If you’re writing the next big application, with a stunning UI and a great workflow, I humbly ask you to consider accessibility as part of the equation. In this day and age, there’s really no reason not to use the UI toolkits available. It’s a lot easier than you may think. Yes, these include the Android Activities, iOS NsViews and HTML5 widgets you may be thinking of.


[Another Developer's Workflow](https://www.parhamdoustdar.com/2016/04/03/tools-of-blind-programmer/)

### Disclaimer
This was originally published on [dev.to](https://dev.to/nerajno/sight-beyond-sight-how-blind-software-engineers-make-it-work-4lo0) in October 2019. I am currently migrating my main source of publication to a personal self-hosted blog (developer growth).


