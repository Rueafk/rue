# Professional Resume Template

A modern, responsive resume template built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and print-friendly styling.

## Features

- ✨ Modern, professional design
- 📱 Fully responsive (mobile-friendly)
- 🖨️ Print-optimized styling
- 🎨 Beautiful gradient header
- ⚡ Interactive elements and animations
- 📧 Clickable contact information
- ⌨️ Keyboard shortcuts (Ctrl/Cmd + P to print)
- 🎯 Clean typography with Inter font

## How to Use

1. **Open the resume**: Open `index.html` in your web browser
2. **Customize your information**: Edit the HTML file with your personal details
3. **Print or save**: Use the print button or Ctrl/Cmd + P to print/save as PDF

## Customization Guide

### Personal Information
Replace the placeholder text in the header section:

```html
<h1 class="name">Your Name</h1>
<h2 class="title">Your Professional Title</h2>
```

Update contact information:
```html
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>City, State</span>
<span>linkedin.com/in/yourprofile</span>
```

### Professional Summary
Edit the summary section to reflect your experience and career goals:

```html
<p class="summary">
    Experienced professional with X years of expertise in [your field]. 
    Proven track record of [key achievements]. 
    Skilled in [key skills] with a passion for [what drives you]. 
    Seeking opportunities to [your career goals].
</p>
```

### Work Experience
Add or modify experience items:

```html
<div class="experience-item">
    <div class="experience-header">
        <h4 class="job-title">Job Title</h4>
        <span class="company">Company Name</span>
        <span class="date">Month Year - Present</span>
    </div>
    <ul class="achievements">
        <li>Key achievement or responsibility 1</li>
        <li>Key achievement or responsibility 2</li>
        <li>Key achievement or responsibility 3</li>
    </ul>
</div>
```

### Skills
Update the skills section with your technical and soft skills:

```html
<div class="skill-category">
    <h4>Technical Skills</h4>
    <div class="skill-tags">
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">React</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">SQL</span>
    </div>
</div>
```

### Education
Update your education details:

```html
<div class="education-item">
    <div class="education-header">
        <h4 class="degree">Bachelor of Science in Computer Science</h4>
        <span class="institution">University Name</span>
        <span class="date">2020</span>
    </div>
    <p class="education-details">GPA: 3.8/4.0, Dean's List, Relevant coursework: Data Structures, Algorithms</p>
</div>
```

### Projects (Optional)
Add your projects:

```html
<div class="project-item">
    <div class="project-header">
        <h4 class="project-title">Project Name</h4>
        <span class="project-tech">React, Node.js, MongoDB</span>
    </div>
    <p class="project-description">Built a full-stack web application that [description]. Implemented [features] and achieved [results].</p>
</div>
```

### Certifications (Optional)
Add your certifications:

```html
<div class="certification-item">
    <h4 class="certification-name">AWS Certified Solutions Architect</h4>
    <span class="certification-issuer">Amazon Web Services</span>
    <span class="certification-date">2023</span>
</div>
```

## Tips for a Great Resume

1. **Keep it concise**: Aim for 1-2 pages maximum
2. **Use action verbs**: Start bullet points with strong action verbs
3. **Quantify achievements**: Include numbers and metrics when possible
4. **Tailor to the job**: Customize skills and experience for each application
5. **Proofread carefully**: Check for typos and grammar errors
6. **Use consistent formatting**: Keep dates, job titles, and company names consistent

## File Structure

```
resume/
├── index.html      # Main resume file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Print Settings

For best results when printing:
- Use Chrome or Edge browser
- Set margins to "Minimum" or "None"
- Enable "Background graphics" in print settings
- Save as PDF for digital sharing

## Customization Tips

### Changing Colors
To change the color scheme, modify the CSS variables in `styles.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors */
color: #667eea;
```

### Adding Sections
You can easily add new sections by following the existing pattern:

```html
<section class="section">
    <h3 class="section-title">New Section</h3>
    <!-- Your content here -->
</section>
```

### Responsive Design
The template is fully responsive and will look great on:
- Desktop computers
- Tablets
- Mobile phones

## License

This template is free to use for personal and commercial purposes.

---

**Happy job hunting!** 🚀 