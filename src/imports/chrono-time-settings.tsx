Fix the ChronoWeave time format settings screen so it follows the same dark theme design system used across the rest of the app.

Remove the white background section that appears in the lower half of the screen.

Ensure the entire screen uses the ChronoWeave dark gradient background:

#0B132B → #121E3A → #1C2A4A

Convert the white container card into a dark card component.

Card styling:
background #1E2747
border #2A3458
border width 1px
corner radius 24px
padding 24px

Ensure the card matches the same design used in the login and signup screens.

Update the selected option tile styling.

Use a softer teal gradient:

#58C7BD → #3DAFA6

Add a subtle glow effect behind the selected tile to show selection state.

Update the unselected option style so it uses a dark background rather than white.

Unselected option style:
background #151E3A
border #2A3458
text color #94A3B8

Ensure the Save Changes button uses the ChronoWeave primary button style.

Primary button style:
height 56px
corner radius 28px
gradient #58C7BD → #3DAFA6
text color white
subtle glow blur 28 opacity 18%

Ensure consistent spacing across the screen.

Spacing rules:
12px between title and subtitle
24px between subtitle and card
32px between card and primary button

Ensure auto layout is used so the screen adapts properly to different iPhone screen sizes while maintaining the ChronoWeave dark theme visual language.