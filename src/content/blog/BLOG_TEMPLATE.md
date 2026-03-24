---
# ============================================================================
# DRAFT STATUS
# ============================================================================
draft: true  # Set to true to hide from production

# ============================================================================
# SEO OPTIMIZATION (Traditional Search Engines: Google, Bing, etc.)
# ============================================================================
seoTitle: "Your SEO-Optimized Title (50-60 characters) | Nerando Johnson"
seoDescription: "Compelling meta description summarizing the article's value proposition and key takeaways. Include primary keywords naturally. (150-160 characters)"

# ============================================================================
# OPEN GRAPH / SOCIAL MEDIA (Optional but recommended)
# ============================================================================
openGraph:
  type: article
  publishedTime: YYYY-MM-DDTHH:MM:SS.000Z
  modifiedTime: YYYY-MM-DDTHH:MM:SS.000Z
  section: "Article Category"
  tags:
    - tag1
    - tag2
    - tag3

# ============================================================================
# TWITTER CARD (Optional but recommended)
# ============================================================================
twitter:
  card: summary_large_image
  site: '@nerajno'
  creator: '@nerajno'
  title: "Twitter-specific title (can be different from main title)"
  description: "Twitter-specific description"
  image: "https://path-to-twitter-card-image.jpg"

# ============================================================================
# STRUCTURED DATA (Schema.org) - Helps AI understand your content
# ============================================================================
structuredData:
  "@context": "https://schema.org"
  "@type": "BlogPosting"  # or "HowToArticle", "TechArticle", etc.
  headline: "Article Headline"
  description: "Brief description of what this article is about"
  author:
    "@type": "Person"
    name: "Nerando Johnson"
    url: "https://nerandojohnson.com"
    jobTitle: "Junior Front-End Developer"
    knowsAbout: ["JavaScript", "Vue.js", "React", "Web Development"]
  datePublished: "YYYY-MM-DD"
  dateModified: "YYYY-MM-DD"
  image: "https://path-to-main-image.jpg"
  publisher:
    "@type": "Organization"
    name: "Nerando Johnson"
    logo:
      "@type": "ImageObject"
      url: "https://nerandojohnson.com/logo.png"
  mainEntityOfPage:
    "@type": "WebPage"
    "@id": "https://developingdvlpr.com/blog/your-article-slug"

# ============================================================================
# BASIC CONTENT FIELDS
# ============================================================================
title: "Your Article Title"
snippet: "A concise 1-2 sentence summary that appears in article previews and search results. Focus on the value readers will get."
image: {
    src: "https://path-to-featured-image.jpg",
    alt: "Descriptive alt text for accessibility and SEO"
}

publishDate: "2025-01-01 00:00"
category: "Primary Category, Secondary Category"
author: "Nerando Johnson"
tags: [tag1, tag2, tag3, tag4, tag5]

# ============================================================================
# SERIES FIELDS (Optional - for multi-part blog series)
# ============================================================================
# Uncomment these fields if this post is part of a series
# series:
#   name: "Series Name"  # e.g., "Vue 3 Fundamentals"
#   order: 1  # Position in the series (1, 2, 3, etc.)
#
# Features when series is enabled:
# - Automatic prev/next navigation
# - Progress indicator
# - Series landing page
# - Filtering on blog listing page
# - Series badge on blog cards

# ============================================================================
# KEYWORDS (For SEO and internal search)
# ============================================================================
keywords: [
  "primary keyword phrase",
  "secondary keyword phrase",
  "related term 1",
  "related term 2",
  "long-tail keyword 1",
  "long-tail keyword 2",
  # Add 10-15 relevant keywords
]

# ============================================================================
# GEO OPTIMIZATION (Combined: Geographic + AI Optimization)
# ============================================================================
geo:
  # Geographic Targeting (if relevant)
  location:
    region: "US-GA"
    placename: "Atlanta"
    position: "33.7490° N, 84.3880° W"

  # AI/Generative Engine Optimization (ChatGPT, Claude, Gemini, Perplexity)
  content:
    type: "Tutorial | Guide | Opinion | Case Study | Conference Review | Personal Experience"
    format: "How-to guide | Long-form article | Step-by-step tutorial | Personal narrative"
    topic: "Clear description of what this article covers"

    # User Intent Mapping (what questions this answers)
    intent:
      - "Question 1 this article answers?"
      - "Question 2 this article answers?"
      - "Question 3 this article answers?"
      # Add 5-10 questions

    # Target Audience
    audience:
      primary: "Who is this for? (e.g., Junior developers, Conference speakers)"
      secondary: "Secondary audience"
      painPoints:
        - "Problem 1 this article solves"
        - "Problem 2 this article solves"
        - "Problem 3 this article solves"
      goals:
        - "Goal 1 readers want to achieve"
        - "Goal 2 readers want to achieve"
        - "Goal 3 readers want to achieve"

    # Key Takeaways (for AI summarization)
    keyTakeaways:
      - "Main takeaway 1"
      - "Main takeaway 2"
      - "Main takeaway 3"
      - "Main takeaway 4"
      - "Main takeaway 5"

    # Structured Q&A (helps AI extract answers)
    faq:
      - question: "Common question 1?"
        answer: "Clear, concise answer"
      - question: "Common question 2?"
        answer: "Clear, concise answer"
      - question: "Common question 3?"
        answer: "Clear, concise answer"

    # Related Context (helps AI understand connections)
    relatedTopics:
      - "Related topic 1"
      - "Related topic 2"
      - "Related topic 3"
      - "Related technology/concept"
      - "Related community/conference"

    # Content Signals for AI
    expertise: "Your credibility statement (e.g., 'Written by active developer with X years experience')"
    evidenceBased: true  # Does this include research/data?
    actionable: true  # Does this include actionable steps?
    includesExamples: true  # Does this include code/real examples?
    includesTemplates: false  # Does this include downloadable templates?
    includesChallenges: false  # Does this include challenges/exercises?
    depth: "Brief overview | Comprehensive guide | Deep dive"
    personalExperience: "Brief description of your relevant experience"
    credibility: "Additional credibility markers (speaking, contributions, etc.)"

# ============================================================================
# ALTERNATIVE GEO FORMAT (Simpler, for non-technical articles)
# ============================================================================
# Use this format for conference reviews, personal narratives, or simpler articles
schema: {
  type: "BlogPosting",
  about: "Brief description of article focus",
  genre: "Article genre/style",
  educationalLevel: "All Levels | Beginner | Intermediate | Advanced",
  teaches: ["Concept 1", "Concept 2", "Concept 3"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Target audience description"
  }
}

entities: {
  primary: ["Main Entity 1", "Main Entity 2", "Main Entity 3"],
  secondary: ["Supporting Entity 1", "Supporting Entity 2"],
  people: ["Person 1", "Person 2"],  # Names mentioned
  organizations: ["Company 1", "Conference 1"],
  concepts: ["Concept 1", "Concept 2"]
}

contentStructure: {
  type: "Tutorial | Personal Narrative | Conference Review | Technical Deep Dive",
  difficulty: "Accessible | Beginner | Intermediate | Advanced",
  timeToComplete: "X-Y minutes read",
  prerequisites: ["Prerequisite 1", "Prerequisite 2"],
  outcomes: ["Outcome 1", "Outcome 2", "Outcome 3"]
}

semanticContext: {
  topic: "Main topic description",
  subtopics: ["Subtopic 1", "Subtopic 2", "Subtopic 3"],
  relatedConcepts: ["Related Concept 1", "Related Concept 2"],
  practicalApplication: true  # Is this practically applicable?
}

citationMetadata: {
  citableAs: "Johnson, N. (YYYY). Article Title",
  lastReviewed: "YYYY-MM-DD",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "One-sentence summary that helps AI understand the article's core value",
  keyTakeaways: [
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3",
    "Key takeaway 4"
  ],
  technicalDepth: "low | medium | high",
  codeExamples: true  # Does this include code?
}

# ============================================================================
# OPTIONAL FIELDS
# ============================================================================
# ogImage: { src: "/path/to/custom-og-image.jpg", alt: "Custom OG image" }
# canonical: "https://original-source.com/article"  # If republishing
# noindex: false  # Set to true to prevent search engine indexing
---

## Introduction / Hook

Start with a compelling hook that captures attention. This could be:
- A relatable problem statement
- A surprising statistic or fact
- A personal anecdote
- A provocative question
- A bold statement

**Example structures:**
```markdown
Welcome, if you have found yourself here, you or a loved one is most likely...

[Article Topic] is [description]. Think of it as...

## What is [Main Topic]?

Provide context and definitions for readers unfamiliar with the topic.
```

## Main Content Section 1

### Subsection with Clear Headers

Use descriptive headers that help readers scan the content. Each major section should:

1. **Have a clear purpose** - What will readers learn?
2. **Include visual breaks** - Images, code blocks, lists
3. **Use formatting** - Bold for emphasis, italics for terms
4. **Add examples** - Real-world applications

**For technical content:**
```javascript
// Include code examples with comments
const example = "formatted code";
```

**For concepts:**
- Use analogies (like the Lego analogy)
- Break down complex ideas
- Provide definitions
- Include visuals/GIFs

**For narratives:**
- Tell the story chronologically
- Include photos/screenshots
- Highlight key moments
- Share lessons learned

## Main Content Section 2

![Alt text for image](https://image-url.jpg)
***Optional image caption in italics***

Continue building on your main points. Use:
- **Bullet points** for lists
- **Numbered lists** for steps
- **Block quotes** for emphasis
- **Tables** for comparisons

> **Note:** Use callout boxes for important information

## Main Content Section 3

### Practical Application / How-To

If applicable, provide:
- Step-by-step instructions
- Best practices
- Common pitfalls to avoid
- Troubleshooting tips
- Templates or frameworks

**Example structure for tutorials:**
```markdown
### Step 1: [Action]
Description of what to do and why.

### Step 2: [Action]
Description with code/example.

### Step 3: [Action]
Final step with results.
```

## Main Content Section 4 (Optional)

### Case Study / Real-World Example

Share specific examples that illustrate your points:
- Personal experiences
- Project outcomes
- Conference insights
- Community interactions

**List people/projects mentioned:**
- **[Name/Project]** - Brief description of relevance
- **[Name/Project]** - Brief description of relevance

## Key Takeaways / Summary

Synthesize the main points into digestible bullets:

1. **Key Point 1**: Brief explanation
2. **Key Point 2**: Brief explanation
3. **Key Point 3**: Brief explanation
4. **Key Point 4**: Brief explanation
5. **Key Point 5**: Brief explanation

Alternatively, write a narrative summary that reinforces the article's value.

## Conclusion

End with:
- A call to action
- Reflection on the journey/learning
- Encouragement for readers
- Connection to broader themes
- Future implications

**Common closing patterns:**
```markdown
The difference between [X] and [Y] isn't [common belief]—it's [actual insight].

What I've learned through [experience] is that the world doesn't need your perfect [thing].
It needs your [solution/perspective/contribution].

[Final inspiring thought that connects to introduction]
```

---

## Optional: Action Plan / Next Steps

**If your article is actionable, provide concrete next steps:**

### Right Now (Next 5 Minutes):
- [ ] Checkbox action item 1
- [ ] Checkbox action item 2
- [ ] Checkbox action item 3

### Today (Within 24 Hours):
- [ ] Checkbox action item 1
- [ ] Checkbox action item 2

### This Week (Days 1-7):
- [ ] Day-specific actions
- [ ] Day-specific actions

---

## Optional: Resources / References

**For technical articles:**
- [Link Text](URL) - Brief description
- [Link Text](URL) - Brief description

**For conference reviews:**
- [Event Website](URL)
- [Speaker Twitter](URL)
- [Related Resources](URL)

**For tutorials:**
- [Documentation](URL)
- [Related Articles](URL)
- [Tools Mentioned](URL)

---

## Optional: Further Engagement

**Invite reader interaction:**
```markdown
**Want accountability?** Reply to this article or tweet at me...

**P.S.** - Additional thought or call to action

**Connect with me:**
- Twitter: @nerajno
- Website: developingdvlpr.com
- GitHub: github.com/nerajno
```

---

## Writing Tips & Best Practices

### Content Structure:
- **Use short paragraphs** (2-4 sentences max)
- **Break up text** with images, code blocks, lists
- **Add GIFs** for engagement and illustration
- **Use analogies** to explain complex concepts
- **Tell stories** to make content memorable

### Voice & Tone:
- **Be conversational** but professional
- **Use "you"** to address readers directly
- **Share personal experiences** to build connection
- **Be honest** about challenges and failures
- **Show personality** through examples and asides

### Technical Writing:
- **Define jargon** when first introduced
- **Provide code examples** with comments
- **Show before/after** comparisons
- **Include error examples** and solutions
- **Link to documentation** for deeper dives

### SEO & Discoverability:
- **Front-load keywords** in titles and headers
- **Use descriptive image alt text**
- **Include internal links** to related articles
- **Add external links** to authoritative sources
- **Write compelling meta descriptions**

### Accessibility:
- **Use semantic headers** (H2, H3, etc.)
- **Write descriptive alt text** for all images
- **Use sufficient color contrast**
- **Structure content logically**
- **Test with screen readers** if possible

---

## Article Length Guidelines

- **Quick Tips/Updates:** 500-1,000 words
- **Standard Tutorial:** 1,500-2,500 words
- **Deep Dive/Guide:** 3,000-5,000 words
- **Comprehensive Resource:** 5,000+ words

---

## Image Guidelines

### Featured Image:
- **Recommended size:** 1200x630px (Open Graph)
- **Format:** JPG or PNG
- **Source:** Unsplash, custom graphics, conference photos
- **Alt text:** Always include descriptive alt text

### In-Article Images:
- **Use generously** to break up text
- **Optimize file size** for web performance
- **Credit sources** when applicable
- **Include captions** when helpful

### GIFs:
- **Use for engagement** and illustrating concepts
- **Keep file size reasonable** (<5MB preferred)
- **Ensure they add value** and aren't just decoration

---

## Publishing Checklist

Before publishing, verify:

- [ ] All frontmatter fields completed
- [ ] SEO title is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] Featured image has proper alt text
- [ ] All internal/external links work
- [ ] Code examples are tested and formatted
- [ ] Grammar and spelling checked
- [ ] Keywords naturally incorporated
- [ ] Mobile-friendly formatting
- [ ] Draft status set to `false`
- [ ] Publish date is correct
- [ ] Categories and tags are relevant

---

## Post-Publishing Tasks

After publishing:

- [ ] Share on Twitter with relevant hashtags
- [ ] Post to LinkedIn with context
- [ ] Share in relevant Discord/Slack communities
- [ ] Cross-post to Dev.to (if appropriate)
- [ ] Add to portfolio if relevant
- [ ] Monitor comments/feedback
- [ ] Update article if needed based on feedback
- [ ] Link from related articles
- [ ] Add to email newsletter
- [ ] Track analytics

---

*Template Version: 1.0*
*Last Updated: 2025-01-17*
*Maintained by: Nerando Johnson*
