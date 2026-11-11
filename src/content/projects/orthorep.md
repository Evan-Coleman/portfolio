---
title: OrthoRep
summary: A strength-training logger for iPhone with a standalone Apple Watch app. I lift, nothing on the market logged the way I wanted, so I built it.
role: Solo project · On the App Store
year: '2026'
stack: [Swift, SwiftUI, SwiftData, WatchConnectivity, StoreKit 2, XCTest]
links:
  - label: orthorep.app
    href: https://orthorep.app
  - label: App Store
    href: https://apps.apple.com/us/app/orthorep-gym-tracker/id6760978830
order: 1
published: true
---

## Why I built it

I like to lift, and nothing on the market did what I wanted. I make things because I want or need them myself, so I built the logger I wanted to use and put a lot of research into getting the details right.

## What it does

- Logs a set in one tap from a dock holding weight, reps and reps in reserve. Each exercise opens on the numbers from your last session.
- Runs a whole workout from the Apple Watch on its own, with Digital Crown adjustment and heart rate recorded as you train.
- Suggests when to step the weight up or take a deload, and leaves the decision to you.
- Detects personal records with an estimated one-rep max, and works out warm-up sets and plate loading in pounds or kilograms.
- Shows an eight-week progress view and a weekly body map.
- Includes a routine builder with a starter routine, and an exercise library with animated form guides.
- Imports from CSV, exports and restores your data, and can write to Apple Health if you want it to.

## How it works

OrthoRep is a native app written in Swift and SwiftUI, with SwiftData for storage. It is local-first: there are no accounts and no cloud sync, so your training history stays on your devices.

The part I spent the most time on is the watch. The Watch app is standalone, so it can run a full workout with the phone out of reach, and the two stay in sync in both directions over WatchConnectivity. Changes on the phone are pushed to the watch. Sets completed on the watch wait in an outbox until the phone confirms it has them, and each update is deduplicated by session and timestamp so nothing is counted twice. When the phone cannot be reached, the watch falls back to what it has cached.

Around that sit home-screen widgets and a Live Activity, in-app purchases through StoreKit 2, and XCTest suites for both the phone and watch targets. The code runs under Swift's strict concurrency checking.

## Where it stands

Version 2 is on the App Store. The changelog has more than a hundred entries since February 2026.
