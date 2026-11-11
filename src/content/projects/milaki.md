---
title: Milaki
summary: A story-centered app for learning Modern Greek on iOS, Android and web. I want to learn Greek, no method has worked for me, so I am building my own.
role: Solo project · In development
year: '2026'
stack: [TypeScript, Expo, React Native, SQLite, Supabase, Vitest, Playwright]
order: 3
published: true
---

## Why I am building it

I want to learn Greek, and I have had no luck with any language-learning approach I have tried. So I am building one around how I actually learn, to help me first.

## What it does so far

Milaki is built around reading. You read a story in Modern Greek, tap any word for help with it, and listen to the narration. Practice comes from the story you just read, by arranging tiles or typing. Progress is saved on the device.

## How it works

It is one Expo and React Native codebase that targets iOS, Android and the web, written in TypeScript. The repository is a pnpm monorepo: the client app sits alongside separate packages for content, grading and review, and lessons ship as versioned content bundles.

A Supabase backend handles syncing, storing and serving content. Tests run in Vitest, with Playwright for the web build.

The project plan and its tasks are run with [Steady](/projects/steady), my own workflow tool.

## Where it stands

In development and not yet released.
