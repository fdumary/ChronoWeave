Refine the ChronoWeave authentication and onboarding screens so the login, signup, and avatar selection screens share the same layout structure and visual rhythm.

Ensure all screens use the same dark gradient background:

#0B132B → #121E3A → #1C2A4A

Standardize the layout structure across these screens.

Use the following vertical structure on every screen:

Top safe area spacing

Title

Subtitle

Content card

Primary button

Secondary link text

Bottom spacing

Spacing rules:
12px between title and subtitle
32px between subtitle and content card
32px between card and primary button
16px between button and secondary text

Create a reusable card component for all onboarding content.

Card style:
background #1E2747
border #2A3458
border width 1px
corner radius 24px
padding 24px

Use this same card style for:

login form
signup form
avatar selection grid

Standardize the primary button style across all screens.

Primary button:
height 56px
corner radius 28px
gradient fill #58C7BD → #3DAFA6
text color white
subtle glow blur 28 opacity 18%

Secondary button style:
transparent background
border color #2A3458
corner radius 28px

Improve the avatar grid layout.

Use a consistent grid:

4 columns
3 rows
circle size 64px
gap 16px
center the grid inside the card container

Ensure all titles are aligned at the same vertical position across the login, signup, and avatar screens.

Use auto layout so the design adapts properly to different iPhone screen sizes including iPhone SE and iPhone 16.

Maintain a calm minimal ChronoWeave visual style that prioritizes clarity and consistency across the onboarding flow.