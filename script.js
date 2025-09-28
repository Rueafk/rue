// Pixel Art Resume - Retro Gaming Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Pixel Loading screen functionality
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Show loading screen initially
    loadingScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    
    // Simulate loading time and show content
    setTimeout(() => {
        // Hide loading screen
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            // Hide loading screen completely
            loadingScreen.style.display = 'none';
            
            // Show main content with pixel effect
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
            
            // Add pixel scan effect
            addPixelScanEffect();
        }, 500);
    }, 3500); // Show loading for 3.5 seconds
    
    // Fallback: If loading takes too long, show content anyway
    setTimeout(() => {
        if (loadingScreen.style.display !== 'none') {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
        }
    }, 5000); // Fallback after 5 seconds
    
    // Pixel scan effect for main content
    function addPixelScanEffect() {
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #3b82f6, transparent);
            z-index: 10000;
            animation: pixelScan 2s ease-in-out;
            pointer-events: none;
        `;
        document.body.appendChild(scanLine);
        
        setTimeout(() => {
            document.body.removeChild(scanLine);
        }, 2000);
    }
    
    // Add pixel-style print button
    function addPixelPrintButton() {
        const printBtn = document.createElement('button');
        printBtn.innerHTML = '[PRINT]';
        printBtn.className = 'pixel-print-button';
        printBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #000000;
            color: #3b82f6;
            border: 2px solid #3b82f6;
            padding: 10px 20px;
            font-family: 'Press Start 2P', monospace;
            font-size: 10px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 0 10px rgba(74, 222, 128, 0.3);
            transition: all 0.3s ease;
            image-rendering: pixelated;
        `;
        
        printBtn.addEventListener('mouseenter', function() {
            this.style.background = '#3b82f6';
            this.style.color = '#000000';
            this.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.5)';
        });
        
        printBtn.addEventListener('mouseleave', function() {
            this.style.background = '#000000';
            this.style.color = '#3b82f6';
            this.style.boxShadow = '0 0 10px rgba(74, 222, 128, 0.3)';
        });
        
        printBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                window.print();
            }, 150);
        });
        
        document.body.appendChild(printBtn);
    }
    
    // Pixel-style skill tag hover effects
    function addPixelSkillEffects() {
        const skillTags = document.querySelectorAll('.pixel-skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 0 15px rgba(74, 222, 128, 0.5)';
                this.style.background = '#3b82f6';
                this.style.color = '#000000';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
                this.style.background = '#000000';
                this.style.color = '#06b6d4';
            });
        });
    }
    
    // Pixel-style section animations
    function addPixelSectionAnimations() {
        const sections = document.querySelectorAll('.pixel-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add pixel glow effect
                    entry.target.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.3)';
                    setTimeout(() => {
                        entry.target.style.boxShadow = 'inset 0 0 20px rgba(74, 222, 128, 0.05)';
                    }, 1000);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
            observer.observe(section);
        });
    }
    
    // Pixel-style experience item hover effects
    function addPixelExperienceEffects() {
        const experienceItems = document.querySelectorAll('.pixel-experience-item, .pixel-project-item, .pixel-certification-item, .pixel-community-item, .pixel-service-item');
        experienceItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 0 25px rgba(74, 222, 128, 0.3)';
                this.style.borderColor = '#06b6d4';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
                this.style.borderColor = '#3b82f6';
            });
        });
    }
    
    // Pixel-style typing effect for name
    function addPixelTypingEffect() {
        const nameElement = document.querySelector('.pixel-name');
        if (nameElement) {
            const originalText = nameElement.textContent;
            nameElement.textContent = '';
            nameElement.style.borderRight = '4px solid #3b82f6';
            nameElement.style.animation = 'pixelBlink 1s infinite';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    nameElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 150);
                } else {
                    nameElement.style.borderRight = 'none';
                    nameElement.style.animation = 'none';
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }
    
    // Pixel-style particle effect
    function addPixelParticleEffect() {
        const header = document.querySelector('.pixel-header');
        if (header) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                const size = Math.random() * 3 + 1;
                const speed = Math.random() * 3 + 2;
                const delay = Math.random() * speed;
                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: #3b82f6;
                    pointer-events: none;
                    animation: pixelFloat ${speed}s ease-in-out infinite;
                    animation-delay: ${delay}s;
                    z-index: 1;
                    image-rendering: pixelated;
                `;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                header.appendChild(particle);
            }
        }
    }
    
    // Add pixel-style CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pixelFloat {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
                opacity: 0; 
            }
            50% { 
                transform: translateY(-30px) rotate(180deg); 
                opacity: 1; 
            }
        }
        
        @keyframes pixelGlow {
            0%, 100% { 
                box-shadow: 0 0 5px #3b82f6; 
            }
            50% { 
                box-shadow: 0 0 20px #3b82f6, 0 0 30px #3b82f6; 
            }
        }
        
        @keyframes pixelFlicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        @keyframes pixelScan {
            0% { transform: translateY(-100vh); }
            100% { transform: translateY(100vh); }
        }
        
        @keyframes pixelBorder {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Pixel-style contact handlers
    function addPixelContactHandlers() {
        document.querySelectorAll('.pixel-contact-item').forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function(e) {
                const text = this.querySelector('span:last-child').textContent;
                const icon = this.querySelector('.pixel-icon');
                
                // Add pixel click animation
                this.style.transform = 'scale(0.95)';
                this.style.background = '#3b82f6';
                this.style.color = '#000000';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    this.style.background = 'rgba(74, 222, 128, 0.1)';
                    this.style.color = '#3b82f6';
                }, 150);
                
                // Email
                if (text.includes('@') && text.includes('.com')) {
                    window.location.href = `mailto:${text}`;
                }
                // GitHub
                else if (text.includes('github.com')) {
                    window.open(`https://${text}`, '_blank');
                }
                // Twitter/X
                else if (text.startsWith('@') || icon.textContent.includes('T')) {
                    const handle = text.startsWith('@') ? text : `@${text}`;
                    window.open(`https://twitter.com/${handle.substring(1)}`, '_blank');
                }
                // Discord
                else if (icon.textContent.includes('D')) {
                    navigator.clipboard.writeText(text).then(() => {
                        showPixelNotification(`DISCORD HANDLE "${text}" COPIED TO CLIPBOARD!`, 'success');
                    });
                }
                // Website
                else if (text.includes('.com') || text.includes('.io')) {
                    window.open(`https://${text}`, '_blank');
                }
            });
        });
    }
    
    // Pixel-style notification system
    function showPixelNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #000000;
            color: ${type === 'success' ? '#3b82f6' : '#06b6d4'};
            border: 2px solid ${type === 'success' ? '#3b82f6' : '#06b6d4'};
            padding: 15px 25px;
            font-family: 'Press Start 2P', monospace;
            font-size: 10px;
            box-shadow: 0 0 20px ${type === 'success' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(34, 211, 238, 0.3)'};
            z-index: 10000;
            animation: pixelSlideIn 0.3s ease;
            image-rendering: pixelated;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'pixelSlideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Pixel-style scroll progress indicator
    function addPixelScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%);
            z-index: 1001;
            transition: width 0.1s ease;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
            image-rendering: pixelated;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Pixel-style section title effects
    function addPixelSectionTitleEffects() {
        const sectionTitles = document.querySelectorAll('.pixel-section-title');
        sectionTitles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.color = '#06b6d4';
                this.style.textShadow = '0 0 10px #06b6d4';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.color = '#3b82f6';
                this.style.textShadow = '2px 2px 0px #000000';
            });
        });
    }
    
    // Initialize all pixel features
    addPixelPrintButton();
    addPixelSkillEffects();
    addPixelSectionAnimations();
    addPixelExperienceEffects();
    addPixelTypingEffect();
    addPixelParticleEffect();
    addPixelContactHandlers();
    addPixelScrollProgress();
    addPixelSectionTitleEffects();
    
    // Pixel-style keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            showPixelNotification('PRINTING RESUME...', 'info');
            setTimeout(() => window.print(), 500);
        }
        // Escape to close any open modals
        if (e.key === 'Escape') {
            // Close any open modals or notifications
        }
    });
    
    // Pixel-style loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            showPixelNotification('RESUME LOADED SUCCESSFULLY! [OK]', 'success');
        }, 300);
    });
    
    // Add pixel-style CSS for advanced animations
    const advancedStyle = document.createElement('style');
    advancedStyle.textContent = `
        @keyframes pixelSlideIn {
            from { 
                transform: translateX(-50%) translateY(-100px); 
                opacity: 0; 
            }
            to { 
                transform: translateX(-50%) translateY(0); 
                opacity: 1; 
            }
        }
        
        @keyframes pixelSlideOut {
            from { 
                transform: translateX(-50%) translateY(0); 
                opacity: 1; 
            }
            to { 
                transform: translateX(-50%) translateY(-100px); 
                opacity: 0; 
            }
        }
        
        .pixel-contact-item:hover .pixel-icon {
            animation: pixelGlow 0.5s ease;
        }
        
        .pixel-skill-tag:hover {
            animation: pixelFlicker 0.3s ease;
        }
        
        .pixel-section:hover .pixel-section-title {
            color: #06b6d4;
            transition: color 0.3s ease;
        }
        
        .pixel-experience-item:hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #3b82f6, transparent);
            animation: pixelScan 1s ease;
        }
    `;
    document.head.appendChild(advancedStyle);
    
    // Pixel-style intersection observer for skill tags
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.animation = 'pixelGlow 0.6s ease';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.pixel-skill-tag').forEach(tag => {
        skillObserver.observe(tag);
    });
    
    // Add pixel-style cursor
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'><rect width=\'16\' height=\'16\' fill=\'%234ade80\'/></svg>") 8 8, auto';
    
    // Static pixel-style background pattern
    const backgroundPattern = document.createElement('div');
    backgroundPattern.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 20% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(251, 191, 36, 0.02) 0%, transparent 50%);
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(backgroundPattern);
    
});