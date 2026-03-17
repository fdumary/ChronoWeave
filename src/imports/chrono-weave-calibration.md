text
Redesign the entire ChronoWeave calibration flow as **5 distinct, numbered steps** with a **persistent progress bar** at top. Make it crystal clear where users are and what's next. Dark UI, professional design, zero confusion.

**5-Step Flow Structure**:
PROGRESS BAR (always visible): [●] [○] [○] [○] [○] → [○] [●] [○] [○] [○] → etc.
Step 1/5 | Step 2/5 | Step 3/5 | Step 4/5 | Step 5/5

text

---

**STEP 1: Welcome & Instructions**
Title: "Calibrate Your Time Sense" (1/5)
Subtitle: "5 quick tests help us understand your internal clock"
Visual: Animated timeline showing 5 dots lighting up sequentially
Primary button: "Begin Calibration →"
Secondary: "What is this?" (info modal)

text

**STEP 2: 10-Second Hold Test** 
Title: "Test 1: Hold for 10 seconds" (2/5)
Visual: Large central circle button "Press & Hold"
Instruction: "Release when you feel 10 seconds pass"
Progress: Thick teal progress ring fills during hold
Result screen: "You held for 7.2s" vs "Target: 10s" + Difference bar
Button: "Next Test →"

text

**STEP 3: 30-Second Reproduction Test**
Title: "Test 2: Reproduce 30 seconds" (3/5)
Visual: Large "Start" → "Stop" button sequence
Instruction: "Tap Start, then Stop after exactly 30 seconds"
Progress: Subtle expanding ring (not visible numbers)
Result: "You felt: 26.8s" vs "Target: 30s" + visual difference
Button: "Next Test →"

text

**STEP 4: Pattern Recognition Test**
Title: "Test 3: Spot the rhythm" (4/5)
Visual: 3 sequences of pulsing dots (fast/slow/steady)
Task: "Tap the one that feels fastest"
Result: "Correct! Fast rhythm detected" + visual feedback
Button: "Final Test →"

text

**STEP 5: Summary & Personalization**
Title: "Your Time Profile Created" (5/5)
Visual: Personalized drift pattern (morning stable, evening fast)
Stats: "92% morning accuracy | 61% evening accuracy"
Message: "We'll use this to give you perfect nudges"
Buttons: "View My Patterns" + "Start Using ChronoWeave"

text

---

**Design System**:
Progress Bar: 5 large dots (teal filled when complete, gray outline)
Step Numbers: Bold "1/5" → "5/5" with perfect left alignment
Cards: Consistent glassmorphism (dark blur background)
Primary Buttons: Teal (#3CD4C2), rounded, medium weight text
Results: Always show "Your estimate" | "Target" | "Difference" in 3 rows
Typography: Inter Bold headers, Regular body, perfect 8pt grid
Transitions: Slide up/down between steps (0.3s smooth)
Back button: Top-left arrow on all screens except Step 1

text

**Visual Consistency**:
Same header height across all 5 screens

Progress bar pinned to top safe area

Identical button styles/sizes

Same color system (teal primary, purple secondary)

Phone frame mockups showing full flow

text

**Onboarding Clarity**:
Every screen answers:
✅ "What step am I on?" (progress bar + "2/5")
✅ "What do I tap?" (single obvious button)
✅ "What's next?" (progress indicator)
✅ "How did I do?" (clear result metrics)

text

**Style Reference**: Duolingo lesson flow, Calm breathing exercises, Apple Fitness+ setup. Crystal clear, never confusing 