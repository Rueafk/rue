// Advanced Web3 Resume Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading screen functionality
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
            
            // Show main content
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 500);
    }, 2000); // Show loading for 2 seconds
    
    // Fallback: If loading takes too long, show content anyway
    setTimeout(() => {
        if (loadingScreen.style.display !== 'none') {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
        }
    }, 5000); // Fallback after 5 seconds
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ultra-enhanced print functionality with advanced styling
    function addPrintButton() {
        const printBtn = document.createElement('button');
        printBtn.innerHTML = '<i class="fas fa-print"></i> Print Resume';
        printBtn.className = 'print-button';
        printBtn.style.cssText = `
            position: fixed;
            top: 25px;
            right: 25px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 16px 28px;
            border-radius: 35px;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            border: 2px solid rgba(255, 255, 255, 0.2);
            transform: translateZ(0);
        `;
        
        printBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05) translateZ(0)';
            this.style.boxShadow = '0 16px 40px rgba(102, 126, 234, 0.5)';
            this.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
        });
        
        printBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) translateZ(0)';
            this.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.4)';
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
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

    // Simple skill tag hover effects
    function addSkillHoverEffects() {
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
            });
        });
    }

    // Simple section animations
    function addSectionAnimations() {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(40px) translateZ(0)';
            section.style.transition = `opacity 1s ease ${index * 0.2}s, transform 1s ease ${index * 0.2}s`;
            observer.observe(section);
        });
    }

    // Advanced experience item hover effects with 3D transforms
    function addExperienceHoverEffects() {
        const experienceItems = document.querySelectorAll('.experience-item, .project-item, .certification-item, .community-item');
        experienceItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) translateZ(0) rotateX(2deg)';
                this.style.boxShadow = '0 20px 48px rgba(0, 0, 0, 0.15)';
                this.style.borderColor = 'rgba(102, 126, 234, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) translateZ(0) rotateX(0deg)';
                this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                this.style.borderColor = 'rgba(0, 0, 0, 0.05)';
            });
        });
    }

    // Advanced typing effect with cursor animation
    function addTypingEffect() {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            const originalText = nameElement.textContent;
            nameElement.textContent = '';
            nameElement.style.borderRight = '4px solid #667eea';
            nameElement.style.animation = 'blink 1s infinite';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    nameElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 120);
                } else {
                    nameElement.style.borderRight = 'none';
                    nameElement.style.animation = 'none';
                }
            };
            
            setTimeout(typeWriter, 800);
        }
    }

    // Advanced particle effect with multiple layers
    function addParticleEffect() {
        const header = document.querySelector('.header');
        if (header) {
            // Create multiple particle layers
            for (let layer = 0; layer < 3; layer++) {
                for (let i = 0; i < 15; i++) {
                    const particle = document.createElement('div');
                    const size = 2 + layer * 1;
                    const speed = 8 + layer * 2;
                    const delay = Math.random() * speed;
                    
                    particle.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        background: rgba(255, 255, 255, ${0.2 + layer * 0.1});
                        border-radius: 50%;
                        pointer-events: none;
                        animation: float${layer + 1} ${speed}s ease-in-out infinite;
                        animation-delay: ${delay}s;
                        z-index: ${layer};
                    `;
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    header.appendChild(particle);
                }
            }
        }
    }

    // Add advanced CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { border-color: #667eea; }
            51%, 100% { border-color: transparent; }
        }
        
        @keyframes float1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            50% { transform: translateY(-25px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes float2 {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0; }
            50% { transform: translateY(-30px) rotate(360deg) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes float3 {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0; }
            50% { transform: translateY(-20px) rotate(-180deg) scale(0.8); opacity: 0.6; }
        }
        
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.5); }
            50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.8); }
        }
        
        @keyframes slideInFromLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(style);

    // Enhanced contact info click handlers with advanced feedback
    function addContactHandlers() {
        document.querySelectorAll('.contact-item').forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function(e) {
                const text = this.querySelector('span').textContent;
                const icon = this.querySelector('i');
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
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
                else if (text.startsWith('@') || icon.classList.contains('fa-twitter')) {
                    const handle = text.startsWith('@') ? text : `@${text}`;
                    window.open(`https://twitter.com/${handle.substring(1)}`, '_blank');
                }
                // Discord
                else if (icon.classList.contains('fa-discord')) {
                    navigator.clipboard.writeText(text).then(() => {
                        showNotification(`Discord handle "${text}" copied to clipboard!`, 'success');
                    });
                }
                // Phone
                else if (text.includes('+') || text.includes('(')) {
                    window.location.href = `tel:${text.replace(/\s/g, '')}`;
                }
                // Website
                else if (text.includes('.com') || text.includes('.io')) {
                    window.open(`https://${text}`, '_blank');
                }
            });
        });
    }

    // Advanced notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInFromTop 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutToTop 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Advanced skill tag counter animation with staggered effects
    function addSkillCounter() {
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`;
            tag.style.animationDuration = '0.8s';
        });
    }

    // Advanced scroll progress indicator with gradient
    function addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            z-index: 1001;
            transition: width 0.1s ease;
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Simple hover effects for section titles
    function addSectionTitleEffects() {
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.color = '#667eea';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.color = '#1a1a1a';
            });
        });
    }



    // Initialize all features
    addPrintButton();
    addSkillHoverEffects();
    addSectionAnimations();
    addExperienceHoverEffects();
    addTypingEffect();
    addParticleEffect();
    addContactHandlers();
    addSkillCounter();
    addScrollProgress();
    addSectionTitleEffects();

    // Advanced keyboard shortcuts with visual feedback
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            showNotification('Printing resume...', 'info');
            setTimeout(() => window.print(), 500);
        }
        // Escape to close any open modals
        if (e.key === 'Escape') {
            // Close any open modals or notifications
        }
    });

    // Simple loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            showNotification('Resume loaded successfully! 🎉', 'success');
        }, 300);
    });

    // Advanced intersection observer for skill tags with enhanced animations
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.animation = 'bounce 0.6s ease';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-tag').forEach(tag => {
        skillObserver.observe(tag);
    });

    // Add CSS for advanced animations
    const advancedStyle = document.createElement('style');
    advancedStyle.textContent = `
        @keyframes slideInFromTop {
            from { transform: translateX(-50%) translateY(-100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        
        @keyframes slideOutToTop {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100px); opacity: 0; }
        }
        
        .section:hover .section-title::before {
            width: 100px;
            transition: width 0.3s ease;
        }
        
        .contact-item:hover i {
            animation: bounce 0.6s ease;
        }
        
        .skill-category:hover h4 {
            color: #667eea;
            transition: color 0.3s ease;
        }
    `;
    document.head.appendChild(advancedStyle);

}); 