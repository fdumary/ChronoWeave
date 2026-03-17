Update ONLY the Dashboard screen (Today's Rhythm) to behave like a live interactive screen while keeping the entire visual design, layout, colors, typography, and spacing exactly the same.

Do not modify any other screens in the app.

1. Restore the settings icon
Add back the circular settings icon in the top-left corner exactly as it was originally.
It should remain fixed at the top-left and should not move when the forecast updates.

2. Make the "Time Stability Forecast" section dynamic
Currently the forecast cards are static and do not react to calibration results. Convert this section into a dynamic component that updates based on the user’s calibration outcomes.

Use calibration outputs from:
- Test 1 (10 second hold)
- Test 2 (30 second reproduction)
- Test 3 (rhythm detection)
- Final time profile screen

These results should determine the user's time perception profile.

3. Generate a dynamic forecast
Based on the calibration results, dynamically update the forecast cards:

Morning
Midday
Afternoon
Evening

Each card should update:
- status label
- status color
- drift level

Use the existing color system:
Stable = mint
Moderate = purple
Fast Drift = pink

4. Add simple prototype logic
Simulate three possible forecast patterns depending on calibration results.

Pattern A (stable user):
Morning = Stable
Midday = Stable
Afternoon = Moderate
Evening = Moderate

Pattern B (moderate drift):
Morning = Stable
Midday = Moderate
Afternoon = Fast Drift
Evening = Moderate

Pattern C (high drift):
Morning = Moderate
Midday = Fast Drift
Afternoon = Fast Drift
Evening = Fast Drift

The dashboard should automatically display the appropriate pattern after the calibration flow finishes.

5. Update summary cards
Also update the top summary cards:

Stable time
Moderate
Fast drift

These values should change depending on the forecast pattern.

Example:
Pattern A → 6h Stable / 2h Moderate / 1h Fast
Pattern B → 4h Stable / 3h Moderate / 2h Fast
Pattern C → 2h Stable / 3h Moderate / 4h Fast

6. Maintain the current UI
Do not change:
layout
spacing
colors
cards
buttons
bottom navigation
typography
icons

Only add dynamic behavior to the forecast section and restore the settings icon.

The Dashboard should now simulate live personalized data based on calibration results while keeping the design unchanged.