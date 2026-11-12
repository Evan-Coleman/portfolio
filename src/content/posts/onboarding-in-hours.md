---
title: Onboarding in hours, not months
description: How can you onboard new employees, and also standardize the whole team to use best practices and workflows?
date: 2026-11-11
tags: [ai, developer-experience, teams]
---

A huge problem I've ran into at every job is not only on-boarding, but also standardization and best practices.

Documentation is created usually halfway done at best and then abandoned long enough to be so out of date that pointing people to these docs is more harmful than helpful.

## One place for what the team knows

I needed to take inventory of my setup and others on the team in order to cover all workflows each member on the team has. I also had to scour all the regular sources of documentation and standards like sharepoint, network drives, onenote, and most importantly what's in everybody's head.

From this I started building a singular repository with all information of our team, how we work, business requirements, best practices, who we work with. Everything I could think of. With this singular source of truth it is now trivial to source all manners of information relevant to our team and it is all AI friendly too.

## A tool that sets everything up

The CLI is pivotal. You can spend a lot of time trying to create internal tooling to help your team, but if it is not dead simple to get installed and setup nobody will adopt it. Everybody is just too busy all the time. My CLI handles everything and can be driven mostly through the CLI/TUI but also AI can drive it for you with minimal intervention.

## Standards people follow

Custom reusable Claude skills for things like story refinement, implementing with best practices and automatic updating of docs, EOT gathering, etc have been a gamechanger as this takes out the guesswork if proper steps are followed. We have proof automatically uploaded to our docs repo that give proof on critical steps of our workflows.

Human readability is paramount. AI writes walls of text and that often has important information, but causes my eyes to skip it. I've made it a point that all steps are easy to follow for humans and AI.

## What changed

- New employees went from months-year+ until their workstation is set up with everything needed to hours.
- Business and technical questions are now easily answered very quickly with our new information database.
- Pipeline of refinement -> prod is now standardized and quick.
- Other teams have adopted my system because I've made it modular and extensible.
