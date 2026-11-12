---
title: Onboarding in hours, not months
description: How one repository and a small command-line tool turned my team's scattered knowledge into something both people and AI agents can use.
date: 2026-11-11
tags: [ai, developer-experience, teams]
---

Getting a new engineer fully set up on my team used to take months. Nobody was slow. The knowledge they needed was scattered: a document in one place, a board in OneNote in another, and the rest in the heads of a few senior people.

That had two costs. New people waited. And the people they waited on, usually our architect, spent their days explaining what already existed when they should have been working out what came next. "I'm blocked, waiting on an answer" was a normal thing to hear.

## One place for what the team knows

The first fix was to put everything about the team into a single repository, written and organized so that an AI coding agent can index it and find things in it. How the systems fit together, why they are built the way they are, how we do things.

Once it is all in one place, the question changes. You no longer ask a person where the document is. You ask your agent, and it reads the repository.

## A tool that sets everything up

The second piece is a command-line tool. A new hire runs it and has a working setup in a few hours. An existing developer runs the same tool and it brings their machine into line: it configures them for AI-assisted work, with skills and workflows we researched and agreed on, pointed at that same body of knowledge.

It is modular, so the parts that are specific to my team can be swapped out. Other teams have adopted it with their own content.

## Standards people follow

There was a third problem I did not expect it to solve: conformance. People were not ignoring our standards on purpose. The standards were hard to find and easy to forget.

The senior engineers on the team worked together to write our practices down as shared skills. Now the guidance is in the tools everyone already uses, so following it is the easy path.

## What changed

- Setup went from months to a few hours.
- Questions about how existing systems work get answered from the repository, without waiting on a person.
- Our architect and the business side of the team spend that time refining new requirements.
- Other teams picked the tool up.

The tooling was the small part. What made the difference was getting the knowledge into one place, in a form that both a person and an agent can use.
