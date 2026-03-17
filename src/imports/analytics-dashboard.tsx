Section 1 — Drift Map Cards

Each existing time-of-day card (Morning, Afternoon, Evening) should include an analytics indicator at the top of the card.

Add a circular progress indicator that displays a percentage value representing time estimation accuracy.

Example values:

Morning — 92%
Afternoon — 74%
Evening — 61%

Inside the circle display the percentage value as text.

Below the circle keep the existing card information such as the time period and time drift description.

Circular Percentage Animation

When the screen loads:

• The percentage begins at 0%
• The circular indicator fills gradually
• The number inside the circle counts upward until reaching the final value

Example animation progression:

0% → 20% → 45% → 73% → 92%

Animation duration should be approximately 1–1.5 seconds.

Each card should animate with a slight delay so the percentages appear sequentially.

Card Interaction

When a user taps a card:

• The card slightly lifts upward
• The card expands vertically
• Additional analytics information appears below

Example expanded information:

Accuracy score
Average focus duration
Drift tendency during this time period

The expansion should appear with a smooth slide-down animation.

Section 2 — Time Distribution Pie Chart

Below the Drift Map cards, add a pie chart visualization representing the distribution of time perception states across the day.

Segments should represent categories such as:

Stable time
Moderate drift
Fast drift

The chart should show how much of the day falls into each category.

Example distribution:

Stable time — 45%
Moderate drift — 30%
Fast drift — 25%

Pie Chart Animation

When the screen loads:

• The pie chart should build itself gradually
• Segments animate from the center outward
• Each segment appears sequentially

Animation duration should be about 1 second.

Pie Chart Interaction

When the user taps a segment:

• The segment slightly expands outward
• A label appears showing the category name and percentage

Example:

Stable Time — 45%

The segment should return to its normal position when the user taps elsewhere.

Section 3 — Weekly Insight Analytics

Below the pie chart add a Weekly Insight analytics card.

Title:

Weekly Insight

Inside the card include a line chart showing how the user’s time estimation accuracy has changed during the last seven days.

Line Chart Structure

Horizontal axis:

Mon → Tue → Wed → Thu → Fri → Sat → Sun

Vertical axis:

Accuracy percentage.

Plot points connected by a smooth line.

Example data:

Mon — 62%
Tue — 68%
Wed — 71%
Thu — 73%
Fri — 78%
Sat — 81%
Sun — 85%

Line Chart Animation

When the screen loads:

• The line should draw itself from left to right
• Data points appear sequentially along the line
• Each point gently scales in as it appears

Total animation time should be 1–1.5 seconds.

Chart Interaction

When a user taps a data point:

• The point enlarges slightly
• A small label appears above it displaying the value

Example label:

78% accuracy

The label should disappear when the user taps elsewhere.

Insight Message

Below the chart include a short generated insight message such as:

“Your time estimation accuracy has steadily improved this week.”

or

“Your time perception is most accurate toward the end of the week.”

This message should appear with a subtle fade-in animation after the line chart animation completes.

Motion Guidelines

All animations should feel:

• smooth
• subtle
• responsive

Avoid fast or distracting motion. The goal is to make the analytics feel dynamic and informative while remaining calm and supportive.