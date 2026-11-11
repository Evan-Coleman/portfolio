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
cover:
  src: ../../assets/projects/orthorep/header.webp
  alt: "OrthoRep on an iPhone and an Apple Watch, with the logging dock enlarged between them: 225 lb, 8 reps, RiR 2, a rest timer and a Log set button."
gallery:
  - src: ../../assets/projects/orthorep/log-the-set.webp
    alt: "App Store panel: Log the set in one tap. The iPhone workout screen for Back Squat with the logging dock under the thumb."
  - src: ../../assets/projects/orthorep/watch.webp
    alt: "App Store panel: The Watch logs on its own. An Apple Watch showing the current Back Squat set at 225 lb for 8 reps."
  - src: ../../assets/projects/orthorep/pr.webp
    alt: "App Store panel: Every PR, caught. The workout summary showing a new weight PR for Back Squat."
  - src: ../../assets/projects/orthorep/progress.webp
    alt: "App Store panel: Eight weeks on one screen. A bar chart of weekly sets with best lifts and estimated one-rep max."
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
