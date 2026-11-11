---
title: Steady
summary: My opinionated workflow for building software with AI coding agents. It keeps durable plans and carries bounded tasks through automated checks and a human review.
role: Solo project · Private prerelease
year: '2026'
stack: [Python, pytest, ruff, mypy]
order: 2
published: true
---

## Why I built it

I do most of my work alongside AI coding agents now, and I wanted a way to keep that work in order and still shift things around as I see fit. Steady is the workflow I settled on, turned into a tool.

## What it does

Steady is a command-line tool that sits between a plan and a pull request. It is provider-neutral: one shared skill works across Codex, Claude Code, opencode and Antigravity CLI.

- Keeps a durable project plan, and turns each item into a bounded task an agent can finish.
- Links a task to a branch and isolates the work in its own worktree.
- Runs the checks you configure for the repository, and reuses earlier results when they are still valid.
- Gives every task one independent, read-only AI review before a person looks at it.
- Ties the outcome to the receipts from those checks, so "done" means something specific.
- Prepares the pull or merge request through `gh` or `glab`. With no forge, it leaves a verified branch and a Markdown summary.
- Resumes sessions, cleans up after itself, and exports an archive as JSON or Markdown.

## How it works

It is a Python CLI. Each repository gets a `steady.toml` written by `steady init`, with local overrides layered on top, and `steady doctor` lists the gates a change has to pass. Optional modules are off until you turn them on. The test suite is pytest, with ruff and mypy as part of the checks.

I use it on my own projects. [Milaki](/projects/milaki) is planned and built with it.

## Where it stands

Steady is in private prerelease under the MIT license. A dashboard is in the works, and once the whole thing is in a good state I plan to look at open-sourcing it. I am not sure anyone else will want to use it, but I like it so far.
